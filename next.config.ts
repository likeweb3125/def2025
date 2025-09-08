import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 환경에서 파일 변경 감지 개선
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
