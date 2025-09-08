"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SpeakersPage() {
  const { t } = useLanguage();
  
  return (
    <div className="font-sans">
      {/* 연사 헤더 섹션 */}
      <section className="relative h-[360px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/speakers_kv.jpg"
            alt="Speakers Background"
            fill
            className="object-cover"
            priority
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t.speakers.title}
          </h2>

          {/* 연사 설명 텍스트 */}
          <div className="text-white text-center">
            <p className="font-normal text-xl leading-[150%] tracking-[0%]">
              {t.speakers.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 연사 목록 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 연사 그리드 - 4열 10행 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* 연사 카드 1 - 하정우 */}
            <div className="relative bg-gray-50 rounded-lg p-6 h-96 overflow-hidden group cursor-pointer transition-all duration-300">
              {/* 그라디언트 배경 - 기본 상태 */}
              <div
                className="absolute inset-0 rounded-lg group-hover:opacity-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(244, 247, 249, 0) 0%, #E2EAF0 100%)",
                }}
              ></div>
              
              {/* 그라디언트 배경 - 호버 상태 */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(180deg, #333333 0%, #000000 100%)",
                }}
              ></div>

              {/* 배경 로고 - 우측 하단 */}
              <div className="absolute bottom-0 right-0 opacity-5 z-5">
                <Image
                  src="/images/logos/logo_white.png"
                  alt="DEF Logo Background"
                  width={200}
                  height={100}
                  className="w-32 h-auto object-contain"
                />
              </div>

              {/* 좌측 하단 로고 */}
              <div className="absolute bottom-4 left-4 z-50">
                <Image
                  src="/images/logos/logo_white.png"
                  alt="DEF Logo Left"
                  width={200}
                  height={100}
                  className="w-24 h-auto object-contain"
                />
              </div>

              {/* 컨텐츠 */}
              <div className="relative z-10 h-full flex flex-col">
                {/* 이름 */}
                <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-[#00F8FA]">{t.speakers.haJeongWoo}</h3>

                {/* 직책 */}
                <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-[#DDDDDD]">
                  {t.speakers.position}
                </p>

                {/* 구분선 */}
                <div
                  className="mb-4 transition-colors duration-300"
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#D9D9D9",
                    opacity: 1,
                  }}
                ></div>

                {/* 세션명 */}
                <h4 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                  {t.speakers.session3}
                </h4>

                {/* 설명 */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 group-hover:text-white">
                  {t.speakers.sessionDesc.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.speakers.sessionDesc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* 프로필 이미지 - 제일 위 레이어 */}
              <div className="absolute bottom-0 right-0 w-[160px] h-[160px] z-20">
                <Image
                  src="/images/people_01.png"
                  alt="하정우"
                  fill
                  className="object-cover rounded-tl-3xl"
                />
              </div>
            </div>

            {/* 나머지 39개 연사 카드 - 임시 플레이스홀더 */}
            {Array.from({ length: 39 }, (_, index) => (
              <div
                key={index + 2}
                className="relative bg-gray-50 rounded-lg p-6 h-96 overflow-hidden group cursor-pointer transition-all duration-300"
              >
                {/* 그라디언트 배경 - 기본 상태 */}
                <div
                  className="absolute inset-0 rounded-lg group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(244, 247, 249, 0) 0%, #E2EAF0 100%)",
                  }}
                ></div>
                
                {/* 그라디언트 배경 - 호버 상태 */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(180deg, #333333 0%, #000000 100%)",
                  }}
                ></div>
                {/* 배경 로고 - 우측 하단 */}
                <div className="absolute bottom-0 right-0 opacity-5 z-5">
                  <Image
                    src="/images/logos/logo_white.png"
                    alt="DEF Logo Background"
                    width={200}
                    height={100}
                    className="w-32 h-auto object-contain"
                  />
                </div>

                {/* 좌측 하단 로고 */}
                <div className="absolute bottom-4 left-4 z-50">
                  <Image
                    src="/images/logos/logo_white.png"
                    alt="DEF Logo Left"
                    width={200}
                    height={100}
                    className="w-24 h-auto object-contain"
                  />
                </div>

                {/* 준비중 컨텐츠 */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 text-sm text-center">
                    {t.speakers.comingSoon.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t.speakers.comingSoon.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
