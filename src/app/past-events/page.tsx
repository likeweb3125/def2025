"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import SubNavigationButton from "@/components/common/SubNavigationButton";
import ComingSoon from "@/components/common/ComingSoon";

export default function PastEventsPage() {
  const { t, language } = useLanguage();

  const FORUM_LIST = [
    {
      year: "2024",
      thumb: "/images/past-events-thumb-2024.png",
      link: "/",
      isContent: false,
    },
    {
      year: "2023",
      thumb: "/images/past-events-thumb-2023.png",
      link: "/",
      isContent: false,
    },
    {
      year: "2022",
      thumb: "/images/past-events-thumb-2022.png",
      link: "/",
      title: t.pastEvents.def2022ForumTitle,
      date: t.pastEvents.def2022ForumDate,
      content: t.pastEvents.def2022ForumDesc,
      isContent: true,
    },

    {
      year: "2021",
      thumb: "/images/past-events-thumb-2021.png",
      link: "/",
      title: t.pastEvents.def2021ForumTitle,
      date: t.pastEvents.def2021ForumDate,
      content: t.pastEvents.def2021ForumDesc,
      isContent: true,
    },
    {
      year: "2020",
      thumb: "/images/past-events-thumb-2020.png",
      link: "/",
      title: t.pastEvents.def2020ForumTitle,
      date: t.pastEvents.def2020ForumDate,
      content: t.pastEvents.def2020ForumDesc,
      isContent: true,
    },
    {
      year: "2019",
      thumb: "/images/past-events-thumb-2019.png",
      link: "/",
      title: t.pastEvents.def2019ForumTitle,
      date: t.pastEvents.def2019ForumDate,
      content: t.pastEvents.def2019ForumDesc,
      isContent: true,
    },
    {
      year: "2018",
      thumb: "/images/past-events-thumb-2018.png",
      link: "/",
      title: t.pastEvents.def2018ForumTitle,
      date: t.pastEvents.def2018ForumDate,
      content: t.pastEvents.def2018ForumDesc,
      isContent: true,
    },
  ];

  const EventSection = ({
    id,
    year,
    bgColor = "bg-gray-50",
    thumb,
    link,
    item,
  }: {
    id: string;
    year: string;
    bgColor?: string;
    thumb: string;
    link: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any;
  }) => (
    // <div className={` ${bgColor}`}>
    <div
      className="flex gap-[60px] max-[1280px]:gap-[30px] max-[1200px]:flex-col max-[1200px]:items-center max-[360px]:gap-6"
      id={id}
      style={{ scrollMarginTop: "160px" }}
    >
      {/* 중앙: 썸네일 이미지 */}
      <div className="relative w-full max-w-[320px]">
        <figure className="w-full h-auto lg:h-[460px] rounded-[20px_0px_20px_0px] overflow-hidden shadow-[12px_12px_24px_0px_#00000029]">
          <Image
            src={thumb}
            alt={`DEF ${year} Digital Economy Forum`}
            width={320}
            height={460}
            className="w-full lg:w-80 h-auto lg:h-[460px] object-cover"
          />
        </figure>
        <div className="mt-4">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-80 h-[62px] px-6 py-4 bg-[#F4F7F9] border border-[#055DA5] text-[#055DA5] rounded-lg font-semibold text-[20px] hover:opacity-90 transition-opacity flex items-center justify-center flex items-center gap-2"
          >
            <Image
              src="/images/icons/icon-play.png"
              alt="Play"
              width={20}
              height={20}
            />
            <span>{t.pastEvents.watchVideo}</span>
          </Link>
        </div>
      </div>

      {/* 오른쪽: 콘텐츠/준비중 영역 */}
      <div className="w-full flex-1">
        {item.isContent ? (
          <div className="bg-[canvas] h-full flex flex-col">
            <p className="text-transparent bg-clip-text py-4 bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] max-[360px]:pt-0">
              <span className="font-bold text-[28px] break-keep max-[360px]:text-[20px]">
                {item.title}
              </span>
            </p>

            <p className="text-black mb-2 text-[20px] font-[500] break-keep max-[360px]:text-[18px]">
              {item.date}
            </p>

            <div
              className="text-[18px] text-[#666666] break-keep max-[360px]:text-[16px]"
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ) : (
          <ComingSoon />
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {/* 지난 행사 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/past-events_kv.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/40 z-[1]"></div>

          {/* 콘텐츠 */}
          <div
            className={`w-full  mx-auto relative z-10 flex flex-col items-center justify-center h-full px-4 ${
              language === "ko" ? "max-w-[410px]" : "max-w-[600px]"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
              {t.pastEvents.title}
            </h2>

            {/* 네비게이션 버튼 */}
            <SubNavigationButton
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
        </div>
      </section>

      {/* 각 연도별 섹션 */}
      <div className="px-10 grid grid-cols-[310px_1fr] gap-[90px] w-full max-w-[1360px] mx-auto py-[120px] max-[1280px]:gap-[50px] max-[1280px]:grid-cols-[260px_1fr] max-[950px]:grid-cols-[220px_1fr] max-[768px]:px-0 max-[768px]:pt-0 max-[768px]:grid-cols-1">
        <div className="flex flex-col max-[768px]:sticky max-[768px]:top-[100px] max-[768px]:bg-[#F4F7F9] max-[768px]:z-[2]">
          <div className="sticky top-[160px] max-[1280px]:top-[170px] max-[768px]:relative max-[768px]:!top-0">
            <div className="flex flex-col gap-y-2 max-[768px]:flex-row max-[768px]:gap-x-6 max-[768px]:overflow-x-auto max-[768px]:px-10 max-[768px]:py-6">
              <style>
                {`
                  .outline-text {
                    background-color: #ddd;
                    background-clip: text;
                    -webkit-text-stroke-color: transparent;
                    -webkit-text-stroke-width: calc(1em / 16) ;
                    -webkit-background-clip: text;
                    color: canvas;
                  }
                `}
              </style>
              {FORUM_LIST.map((item, index) => {
                const isActive = index === 0;
                return (
                  <Link
                    href={`#${item.year}`}
                    key={index}
                    className={`grid grid-cols-[130px_1fr] gap-4 max-[1280px]:grid-cols-[100px_1fr] max-[950px]:grid-cols-[80px_1fr] items-center ${
                      isActive
                        ? "text-[#055DA5] leading-[76px] text-[62px] max-[1280px]:text-[50px] max-[1280px]:leading-[40px] max-[950px]:text-[40px] max-[950px]:leading-[40px]"
                        : "text-[#000000] leading-[49px] text-[40px] max-[1280px]:text-[30px] max-[1280px]:leading-[30px] max-[950px]:text-[28px] max-[950px]:leading-[28px] max-[768px]:grid-cols-1 max-[768px]:inline-flex"
                    }`}
                  >
                    <p
                      className={`text-transparent bg-clip-text bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] ${
                        isActive ? "" : "max-[768px]:hidden"
                      }`}
                    >
                      <span className="font-bold">{isActive ? "DEF" : ""}</span>
                    </p>
                    <p className="text-right bg-[canvas] max-[768px]:bg-transparent">
                      <span
                        className={`font-bold ${
                          isActive
                            ? "text-[#333333]"
                            : "outline-text  max-[768px]:!text-[#F4F7F9]"
                        }`}
                      >
                        {item.year}
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-[1080px]:px-10 max-[500px]:px-5 space-y-[100px] max-[500px]:space-y-12 max-[950px]:px-5">
          {FORUM_LIST.map((item, index) => {
            const isActive = index === 0;
            return (
              <EventSection
                id={item.year}
                key={index}
                item={item}
                year={item.year}
                bgColor={isActive ? "bg-gray-50" : "bg-[canvas]"}
                thumb={item.thumb}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
