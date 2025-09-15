"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ComingSoon from "@/components/common/ComingSoon";

export default function SpeakersPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      {/* 연사 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/speakers_kv.jpg')]"></div>

          {/* 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
              {t.speakers.title}
            </h2>

            {/* 연사 설명 텍스트 */}
            <div className="text-white text-center">
              <p className="font-normal text-xl leading-[150%] tracking-[0%]">
                {t.speakers.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 컨텐츠 준비중 섹션 */}
      <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        <div className="max-w-[1360px] mx-auto min-h-[480px] [&>div]:py-[100px] max-[500px]:[&>div]:py-[70px]">
          <ComingSoon />
        </div>
      </div>

      {/* 연사 목록 섹션 */}
      {/* <div className="hidden py-16">
        <div className="max-w-7xl mx-auto px-10 max-[500px]:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                name: t.speakers.haJeongWoo,
                position: t.speakers.positionHaJeongWoo,
                session: t.speakers.session3,
                sessionDesc: t.speakers.sessionDescHaJeongWoo,
                image: "/images/people_01.png",
              },
              {
                name: t.speakers.yunKyounga,
                position: t.speakers.positionYunKyounga,
                session: t.speakers.session1,
                sessionDesc: t.speakers.sessionDescYunKyounga,
                image: "/images/people_02.png",
              },
              {
                name: t.speakers.leeKyoungil,
                position: t.speakers.positionLeeKyoungil,
                session: t.speakers.session3,
                sessionDesc: t.speakers.sessionDescLeeKyoungil,
                image: "/images/people_03.png",
              },
              {
                name: t.speakers.choiJaeSik,
                position: t.speakers.positionChoiJaeSik,
                session: t.speakers.session3,
                sessionDesc: t.speakers.sessionDescChoiJaeSik,
                image: "/images/people_04.png",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-gray-50 p-6 h-96 overflow-hidden group cursor-pointer transition-all duration-300 hover:rounded-[20px_0px_20px_0px]"
                >
                  그라디언트 배경 - 기본 상태
                  <div
                    className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(244, 247, 249, 0) 0%, #E2EAF0 100%)",
                    }}
                  ></div>

                  그라디언트 배경 - 호버 상태
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, #333333 0%, #000000 100%)",
                    }}
                  ></div>

                  배경 로고 - 우측 하단
                  <div className="absolute bottom-0 right-0 opacity-5 z-5">
                    <Image
                      src="/images/logos/logo_white.png"
                      alt="DEF Logo Background"
                      width={200}
                      height={100}
                      className="w-32 h-auto object-contain"
                    />
                  </div>

                  좌측 하단 로고
                  <div className="absolute bottom-4 left-4 z-50">
                    <Image
                      src="/images/logos/logo_white.png"
                      alt="DEF Logo Left"
                      width={200}
                      height={100}
                      className="w-24 h-auto object-contain"
                    />
                  </div>

                  컨텐츠
                  <div className="relative z-10 h-full flex flex-col">
                    이름
                    <h3 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-[#00F8FA]">
                      {item.name}
                    </h3>

                    직책
                    <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-[#DDDDDD]">
                      {item.position}
                    </p>

                    구분선
                    <div
                      className="mb-4 transition-colors duration-300"
                      style={{
                        width: "40px",
                        height: "1px",
                        background: "#D9D9D9",
                        opacity: 1,
                      }}
                    ></div>

                    세션명
                    <h4 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                      {item.session}
                    </h4>

                    설명
                    <div
                      className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 group-hover:text-white"
                      dangerouslySetInnerHTML={{
                        __html: item.sessionDesc.replace(/\n/g, "<br />"),
               
                      }}
                    />
                  </div>

                  프로필 이미지 - 제일 위 레이어
                  <div className="absolute bottom-0 right-0 w-[160px] h-[160px] z-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-tl-3xl"
                    />
                  </div>
                </div>
              );
            })}

            나머지 39개 연사 카드 - 임시 플레이스홀더
            {Array.from({ length: 39 }, (_, index) => (
              <div
                key={index + 2}
                className="relative bg-gray-50 rounded-lg p-6 h-96 overflow-hidden group cursor-pointer transition-all duration-300"
              >
                그라디언트 배경 - 기본 상태
                <div
                  className="absolute inset-0 rounded-lg group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(244, 247, 249, 0) 0%, #E2EAF0 100%)",
                  }}
                ></div>

                그라디언트 배경 - 호버 상태
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, #333333 0%, #000000 100%)",
                  }}
                ></div>
                배경 로고 - 우측 하단
                <div className="absolute bottom-0 right-0 opacity-5 z-5">
                  <Image
                    src="/images/logos/logo_white.png"
                    alt="DEF Logo Background"
                    width={200}
                    height={100}
                    className="w-32 h-auto object-contain"
                  />
                </div>

                좌측 하단 로고
                <div className="absolute bottom-4 left-4 z-50">
                  <Image
                    src="/images/logos/logo_white.png"
                    alt="DEF Logo Left"
                    width={200}
                    height={100}
                    className="w-24 h-auto object-contain"
                  />
                </div>

                준비중 컨텐츠
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 text-sm text-center">
                    {t.speakers.comingSoon.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          t.speakers.comingSoon.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
