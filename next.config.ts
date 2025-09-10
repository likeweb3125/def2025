import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Docker 환경에서 파일 변경 감지 개선
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    const fileLoaderRule = config.module.rules.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rule: any) =>
        typeof rule === "object" &&
        !!rule &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    // 기본 URL 방식
    config.module.rules.push({
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: { not: [/component/] },
    });

    // 컴포넌트 import: *.svg?component
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /component/, // *.svg?component
      use: ["@svgr/webpack"],
    });

    // 이미지 파일 처리 추가
    // config.module.rules.push({
    //   test: /\.(png|jpe?g|gif|webp)$/i,
    //   type: "asset/resource",
    // });

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
