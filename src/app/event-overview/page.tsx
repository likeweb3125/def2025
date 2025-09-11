"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SubNavigationButton from "@/components/common/SubNavigationButton";

export default function EventOverviewPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      {/* 행사개요 섹션 */}
      <section className="relative pt-[100px] px-5 flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('/images/event-overview_kv.jpg')]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            행사 소개
          </h2>

          {/* 버튼 3개 */}
          <SubNavigationButton
            tabs={[
              {
                id: "event-overview",
                href: "/event-overview",
                label: "행사 개요",
              },
              {
                id: "past-events",
                href: "/past-events",
                label: "지난 행사",
              },
              {
                id: "location",
                href: "/location",
                label: "오시는 길",
              },
            ]}
          />

          {/* 버튼 아래 영역 */}
          <div className="w-full flex flex-col items-center justify-center min-h-[480px] max-[500px]:min-h-[360px]">
            {/* 로고 */}
            <div className="mb-8">
              <Image
                src="/images/logos/logo_white.png"
                alt="DEF 2025"
                width={123}
                height={60}
                className="w-[123px] h-[60px] object-contain"
              />
            </div>

            {/* 첫 번째 텍스트 */}
            <div
              className="text-white text-center mb-6"
              style={{
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              콘텐츠 <span className="text-[#4AC8F4]">준비중</span>입니다.
            </div>

            {/* 두 번째 텍스트 */}
            <div
              className="text-white text-center break-keep"
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              보다 나은 서비스를 제공하기 위해 콘텐츠 준비중에 있습니다.
              <br className="max-[500px]:hidden" />
              빠른 시일 내에 준비하여 찾아뵙겠습니다.
            </div>
          </div>
        </div>
      </section>

      {/* 추가 영역 - 추후 사용 예정 */}
      <section className="px-10 min-h-full pt-[160px] pb-[147px] relative min-h-full h-auto flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('/images/event-overview_back.jpg')] max-[768px]:bg-[url('/images/event-overview_back-768.jpg')] max-[460px]:bg-[url('/images/event-overview_back-360.jpg')] max-[500px]:p-[100px_20px_120px]">
        <div className="absolute inset-0 bg-black/20"></div>

        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          행사개요
        </h2>

        {/* 콘텐츠 */}
        <div className="relative gap-5 border border-[rgba(255,255,255,0.2)] p-10 flex flex-col justify-center z-10 mx-auto max-w-[900px] w-full bg-black/20 rounded-[20px_0px_20px_0px] backdrop-blur-sm max-[500px]:backdrop-blur-none max-[500px]:bg-transparent max-[500px]:border-none max-[500px]:p-0">
          {/* 행사 정보 */}
          <ul className="space-y-5">
            {[
              {
                title: "행사명",
                content: "제8회 디지털 이코노미 포럼",
              },
              {
                title: "주제",
                content: "미정",
              },
              {
                title: "일시",
                content: "2025년 10월 20일 월요일",
              },
              {
                title: "장소",
                content: "인스파이어 엔터테인먼트 리조트",
              },
            ].map((item, index) => {
              return (
                <li className="flex items-center" key={index}>
                  <div
                    className="text-center mr-8 w-[120px] h-[46px] max-[500px]:w-[80px] max-[500px]:h-[36px]"
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      gap: "8px",
                      opacity: 1,
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF33",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span className="text-white text-[18px] font-medium max-[500px]:text-[16px]">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-white text-lg font-medium text-center flex-1 break-keep">
                    {item.content}
                  </div>
                </li>
              );
            })}

            <ul className="grid grid-cols-2 max-[680px]:grid-cols-1 gap-y-5">
              {[
                {
                  title: "주최",
                  content: "기획재정부",
                  img: "/images/moef_go_kr_transparent.png",
                  iconWidth: 159,
                  iconHeight: 40,
                },
                {
                  title: "주관",
                  content: "kiet 산업연구원",
                  img: "/images/kiet_re_kr_transparent.png",
                  iconWidth: 186,
                  iconHeight: 29,
                },
              ].map((item, i) => {
                return (
                  <li className="flex items-center" key={i}>
                    <div
                      className="text-center w-[120px] h-[46px] max-[500px]:w-[80px] max-[500px]:h-[36px]"
                      style={{
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        gap: "8px",
                        opacity: 1,
                        borderRadius: "8px",
                        backgroundColor: "#FFFFFF33",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <span className="text-white text-[18px] font-medium max-[500px]:text-[16px]">
                        {item.title}
                      </span>
                    </div>
                    <div className="px-2 flex-1">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={item.iconWidth}
                        height={item.iconHeight}
                        className="object-contain mx-auto"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
}
