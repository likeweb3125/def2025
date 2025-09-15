# Node.js 20 LTS 버전 사용
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 환경변수 설정
ENV NODE_ENV=production

# Next.js 앱 빌드
RUN npm run build

RUN cp -r .next/static .next/standalone/.next/static
RUN cp .next/required-server-files.json .next/standalone/.next/required-server-files.json
RUN if [ -d public ]; then cp -r public .next/standalone/public; fi

# 포트 3000 노출
EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
