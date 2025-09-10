pipeline {
    agent { label 'build-agent' }

    environment {
        REPO_URL            = 'https://github.com/likeweb3125/def2025.git'
        APP_DIR             = '/home/def2025'
        DOCKER_COMPOSE_FILE = "${APP_DIR}/docker-compose.yml"
        RECIPIENTS          = 'crazin@likeweb.co.kr'

        // 🔧 Docker/서비스 설정
        COMPOSE_PROJECT_NAME = 'def2025'
        SERVICE_NAME         = 'nextjs'
        HEALTHCHECK_URL      = 'http://127.0.0.1:3040/' // 호스트 3040 → 컨테이너 3000
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    if (!fileExists("${APP_DIR}")) {
                        sh "git clone ${REPO_URL} ${APP_DIR}"
                    }
                    dir(APP_DIR) {
                        sh """
                          set -euxo pipefail
                          git fetch --all
                          git reset --hard origin/main
                          git pull origin main
                        """

                        // 📌 이메일 템플릿에 쓰일 git 정보 주입 (null 방지)
                        env.GIT_COMMIT_AUTHOR = sh(
                          script: "git --no-pager log -1 --pretty=format:'%an <%ae>'",
                          returnStdout: true
                        ).trim()
                        env.GIT_COMMIT_MESSAGE = sh(
                          script: "git --no-pager log -1 --pretty=%s",
                          returnStdout: true
                        ).trim()
                        env.GIT_COMMIT_TIME = sh(
                          script: "git --no-pager log -1 --date=iso-local --pretty=%cd",
                          returnStdout: true
                        ).trim()
                    }
                }
            }
        }

        stage('Docker Env (optional)') {
            when { expression { return true } } // 필요 없으면 false로 변경
            steps {
                sh '''
                  echo "== Docker context =="
                  docker context ls || true
                  docker context show || true
                  echo "== Docker info (head) =="
                  docker info 2>/dev/null | sed -n '1,50p' || true
                '''
            }
        }

        stage('Build & Restart Services') {
            steps {
                script {
                    dir(APP_DIR) {
                        echo "🚀 컨테이너 재시작"

                        // 1) 기존 프로젝트 내려주기
                        sh '''
                        set -e
                        docker compose down --remove-orphans || true
                        '''

                        // 2) 🔧 프리워밍: node_modules 볼륨을 채워둠 (빈 볼륨 덮어쓰기로 인한 즉시 종료 방지)
                        //    compose 서비스명이 nextjs인 것을 전제로 합니다.
                        sh '''
                        set -euxo pipefail
                        echo "[prewarm] npm ci in ephemeral container"
                        docker compose run --rm nextjs npm ci
                        '''

                        // 3) 재빌드 & 재생성
                        sh '''
                        set -e
                        docker compose up -d --build --force-recreate
                        '''

                    }
                }
            }
        }

    }

    post {
        success {
            sendMailOnSuccess()
        }
        failure {
            sendMailOnFailure("Pipeline Execution Failed")
        }
        always {
            echo "🧹 사용하지 않는 Docker 볼륨 정리 중..."
            sh 'docker volume prune -f || true'
        }
    }
}

// 📌 빌드 실패 시 이메일 전송
def sendMailOnFailure(errorMessage) {
    emailext (
        subject: "🔴 빌드 실패: ${env.JOB_NAME} #${env.BUILD_NUMBER} ${env.GIT_COMMIT_MESSAGE} by. ${env.GIT_COMMIT_AUTHOR}",
        body: """
        <h2>❌ Jenkins 빌드 실패 ❌</h2>
        <p>🔹 프로젝트: ${env.JOB_NAME}</p>
        <p>🔹 빌드 번호: ${env.BUILD_NUMBER}</p>
        <p>🔹 실패 단계: ${errorMessage}</p>
        <p>🔹 커밋 유저: ${env.GIT_COMMIT_AUTHOR}</p>
        <p>🔹 커밋 메시지: ${env.GIT_COMMIT_MESSAGE}</p>
        <p>🔹 커밋 시간: ${env.GIT_COMMIT_TIME}</p>
        <p>📜 <a href='${env.BUILD_URL}console'>콘솔 로그 확인</a></p>
        """,
        to: "${env.RECIPIENTS}",
        from: "no-reply@likeweb.co.kr"
    )
}

// 📌 빌드 성공 시 이메일 전송
def sendMailOnSuccess() {
    emailext(
        subject: "✅ 빌드 성공: ${env.JOB_NAME} #${env.BUILD_NUMBER} ${env.GIT_COMMIT_MESSAGE} by. ${env.GIT_COMMIT_AUTHOR}",
        body: """
        <h2>🎉 Jenkins 빌드 성공 🎉</h2>
        <p>🔹 프로젝트: ${env.JOB_NAME}</p>
        <p>🔹 빌드 번호: ${env.BUILD_NUMBER}</p>
        <p>🔹 커밋 유저: ${env.GIT_COMMIT_AUTHOR}</p>
        <p>🔹 커밋 메시지: ${env.GIT_COMMIT_MESSAGE}</p>
        <p>🔹 커밋 시간: ${env.GIT_COMMIT_TIME}</p>
        <p>📜 <a href='${env.BUILD_URL}console'>콘솔 로그 확인</a></p>
        """,
        to: "${env.RECIPIENTS}",
        from: "no-reply@likeweb.co.kr"
    )
}
