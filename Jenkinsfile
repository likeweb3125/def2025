pipeline {
    agent { label 'build-agent' } 

    environment {
        REPO_URL = 'https://github.com/likeweb3125/def2025.git'
        APP_DIR = '/home/def2025'
        DOCKER_COMPOSE_FILE = "${APP_DIR}/docker-compose.yml"
        // RECIPIENTS = 'ohsjwe@likeweb.co.kr,crazin@likeweb.co.kr,syeon@likeweb.co.kr'
        RECIPIENTS = 'crazin@likeweb.co.kr'
    }

    stages {
        stage('Checkout Code') {
                steps {
                    script {
                        if (!fileExists("${APP_DIR}")) {
                            sh "git clone ${REPO_URL} ${APP_DIR}"
                        }
                        dir(APP_DIR) {
                            // 🛠 안전한 디렉토리로 등록
                            sh "git fetch --all"
                            sh "git reset --hard origin/main"
                            sh "git pull origin main"
                        }
                    }
                }
        }

        stage('Build & Restart Changed Services') {
            steps {
                script {
                    dir(APP_DIR) {
                            echo "🚀 컨테이너 재시작"
                            // 혹시 남아있을 수 있는 충돌 컨테이너 제거 (존재하지 않아도 true 처리)
                            sh 'docker rm -f def2025_src def2025_node_modules def2025_next || true'

                            // 컨테이너, 네트워크, orphan 컨테이너 제거
                            sh 'docker compose down --remove-orphans'

                            // 재빌드 및 이름 중복 방지를 위해 --force-recreate 사용
                            sh 'docker compose up -d --build --force-recreate'
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
            sh 'docker volume prune -f'
        }
    }
}


// 📌 빌드 실패 시 이메일 전송 함수
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