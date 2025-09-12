"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SubNavigationButton from "@/components/common/SubNavigationButton";

export default function EventOverviewPage() {
  const { t, language } = useLanguage();

  return (
    <div className="font-sans">
      {/* 행사개요 섹션 */}
      <section className="relative pt-[100px] px-5 flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('/images/event-overview_kv.jpg')]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]"></div>

        {/* 콘텐츠 */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full w-full max-w-[1360px] mx-auto`}
        >
          <div
            className={`${
              language === "ko" ? "max-w-[410px]" : "max-w-[520px]"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
              {language === "ko" ? "행사소개" : "Conference"}
            </h2>

            {/* 네비게이션 버튼 */}
            <SubNavigationButton
              className={`mb-20 max-[500px]:mb-12 ${
                language === "ko"
                  ? "max-[410px]:[&>a]:!px-[15px]"
                  : "max-[520px]:[&>a]:!px-[15px]"
              }`}
              tabs={[
                {
                  id: "event-overview",
                  label: t.nav.eventOverview,
                  href: "/event-overview",
                },
                {
                  id: "past-events",
                  label: t.nav.pastEvents,
                  href: "/past-events",
                },
                {
                  id: "location",
                  label: t.nav.directions,
                  href: "/location",
                },
              ]}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative pt-6"
          >
            <Image
              src="/images/icons/double_quotes_blue.png"
              alt=""
              width={18}
              height={16}
              className="absolute top-0 left-1/2 -translate-x-1/2 max-[500px]:left-0 max-[500px]:translate-x-0"
            />
            <div
              className="flex flex-col items-center justify-center text-white text-[18px] text-center max-[500px]:text-left"
              dangerouslySetInnerHTML={{
                __html: t.eventOverview.aboutDesc.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>
      </section>

      {/* 추가 영역 - 추후 사용 예정 */}
      <section className="px-10 min-h-full pt-[160px] pb-[147px] relative min-h-full h-auto  bg-no-repeat bg-cover bg-center bg-[url('/images/event-overview_back.jpg')] max-[768px]:bg-[url('/images/event-overview_back-768.jpg')] max-[460px]:bg-[url('/images/event-overview_back-360.jpg')] max-[500px]:p-[100px_20px_120px]">
        <div className="absolute inset-0 bg-black/20"></div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl font-bold text-white mb-10 text-center max-[500px]:text-[24px]">
            {t.eventOverview.title}
          </h2>

          {/* 콘텐츠 */}
          {/* <div className="relative gap-5 border border-[rgba(255,255,255,0.2)] p-10 flex flex-col justify-center z-10 mx-auto max-w-[900px] w-full bg-black/20 rounded-[20px_0px_20px_0px] backdrop-blur-sm max-[500px]:backdrop-blur-none max-[500px]:bg-transparent max-[500px]:border-none max-[500px]:p-0"> */}
          <div className="asymmetry-rounded-box relative gap-5 p-10 flex flex-col justify-center z-10 mx-auto max-w-[900px] w-full max-[500px]:!backdrop-blur-none max-[500px]:!bg-transparent max-[500px]:before:!content-[none] max-[500px]:p-0">
            {/* 행사 정보 */}
            <ul className="space-y-5">
              {[
                {
                  title: t.eventOverview.table.title,
                  content: t.eventOverview.table.titleContent,
                },
                {
                  title: t.eventOverview.table.topic,
                  content: t.eventOverview.table.topicContent,
                },
                {
                  title: t.eventOverview.table.period,
                  content: t.eventOverview.table.periodContent,
                },
                {
                  title: t.eventOverview.table.venue,
                  content: t.eventOverview.table.venueContent,
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
                    title: t.eventOverview.table.hostedBy,
                    content: t.eventOverview.table.hostedByContent,
                    img: t.eventOverview.table.hostedByImage,
                    iconWidth: language === "ko" ? 159 : 168,
                    iconHeight: 40,
                  },
                  {
                    title: t.eventOverview.table.organizedBy,
                    content: t.eventOverview.table.organizedByContent,
                    img: t.eventOverview.table.organizedByImage,
                    iconWidth: language === "ko" ? 186 : 204,
                    iconHeight: language === "ko" ? 29 : 24,
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
                          alt={item.content}
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
        </div>
      </section>
    </div>
  );
}
