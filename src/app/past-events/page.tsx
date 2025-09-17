"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useLanguage } from "@/contexts/LanguageContext";
import SubNavigationButton from "@/components/common/SubNavigationButton";
import { useEffect, useRef, useState } from "react";

import { useDraggable } from "react-use-draggable-scroll";
import { ForumListType } from "@/types/forum";
import ForumYearList from "@/components/past-events/ForumYear";
import ForumSection from "@/components/past-events/ForumSection";

export default function PastEventsPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const { events } = useDraggable(ref);
  const { t, language } = useLanguage();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [activeSectionIndex]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const sections = gsap.utils.toArray(".section") as HTMLElement[];

      sections.forEach((section, index) => {
        gsap.to(section as Element, {
          ease: "none",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
            // markers: true,
            onToggle: () => {
              setActiveSectionIndex(index);
            },
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  const FORUM_LIST: ForumListType[] = [
    {
      year: "2024",
      thumb: "/images/past-events-thumb-2024.png",
      link: "http://www.youtube.com/@DigitalEconomyForum-p5s",
      title: t.pastEvents.def2024ForumTitle,
      date: t.pastEvents.def2024ForumDate,
      content: t.pastEvents.def2024ForumDesc,
      isContent: true,
    },
    {
      year: "2023",
      thumb: "/images/past-events-thumb-2023.png",
      link: "https://www.youtube.com/@officialdef1336/videos",
      title: t.pastEvents.def2023ForumTitle,
      date: t.pastEvents.def2023ForumDate,
      content: t.pastEvents.def2023ForumDesc,
      isContent: true,
    },
    {
      year: "2022",
      thumb: "/images/past-events-thumb-2022.png",
      link: "https://youtu.be/lpcaIFaGEm8",
      title: t.pastEvents.def2022ForumTitle,
      date: t.pastEvents.def2022ForumDate,
      content: t.pastEvents.def2022ForumDesc,
      isContent: true,
    },

    {
      year: "2021",
      thumb: "/images/past-events-thumb-2021.png",
      link: "https://youtu.be/tsoI_iUSsX0",
      title: t.pastEvents.def2021ForumTitle,
      date: t.pastEvents.def2021ForumDate,
      content: t.pastEvents.def2021ForumDesc,
      isContent: true,
    },
    {
      year: "2020",
      thumb: "/images/past-events-thumb-2020.png",
      link: "https://youtu.be/PYSAShUawbU",
      title: t.pastEvents.def2020ForumTitle,
      date: t.pastEvents.def2020ForumDate,
      content: t.pastEvents.def2020ForumDesc,
      isContent: true,
    },
    {
      year: "2019",
      thumb: "/images/past-events-thumb-2019.png",
      link: "https://youtu.be/5AqsVutuYic",
      title: t.pastEvents.def2019ForumTitle,
      date: t.pastEvents.def2019ForumDate,
      content: t.pastEvents.def2019ForumDesc,
      isContent: true,
    },
    {
      year: "2018",
      thumb: "/images/past-events-thumb-2018.png",
      link: "https://youtu.be/71s_hJKNoyk",
      title: t.pastEvents.def2018ForumTitle,
      date: t.pastEvents.def2018ForumDate,
      content: t.pastEvents.def2018ForumDesc,
      isContent: true,
    },
  ];

  return (
    <div ref={container}>
      {/* 지난 행사 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpg')]"></div>

          {/* 콘텐츠 */}
          <div
            className={`w-full mx-auto relative z-10 flex flex-col items-center justify-center h-full px-5 ${
              language === "ko" ? "max-w-[450px]" : "max-w-[515px]"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
              {language === "ko" ? t.pastEvents.title : "Conference"}
            </h2>

            {/* 네비게이션 버튼 */}
            <SubNavigationButton
              className={`${
                language === "ko"
                  ? "max-[410px]:[&>a]:!px-[15px]"
                  : "max-[530px]:[&>a]:!px-[15px]"
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
        </div>
      </section>

      {/* 각 연도별 섹션 */}
      <div className="px-10 grid grid-cols-[310px_1fr] gap-[90px] w-full max-w-[1360px] mx-auto py-[120px] max-[1280px]:gap-[50px] max-[1280px]:grid-cols-[260px_1fr] max-[950px]:grid-cols-[220px_1fr] max-[768px]:px-0 max-[768px]:pt-0 max-[768px]:grid-cols-1">
        <div className="flex flex-col max-[768px]:sticky max-[768px]:top-[78px] max-[768px]:bg-[#F4F7F9] max-[768px]:z-[2] max-[500px]:top-[61px]">
          <div className="max-[768px]:hidden sticky top-[160px] max-[1280px]:top-[170px] max-[768px]:relative max-[768px]:!top-0">
            <div className="flex flex-col gap-y-2 max-[768px]:flex-row max-[768px]:gap-x-6 max-[768px]:px-10 max-[768px]:py-10 max-[768px]:overflow-x-auto max-[500px]:py-6 max-[500px]:px-5">
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
                const isActive = index === activeSectionIndex;
                return (
                  <ForumYearList key={index} item={item} isActive={isActive} />
                );
              })}
            </div>
          </div>
          <div className="hidden max-[768px]:block">
            <div
              className="flex max-w-full space-x-3 overflow-x-scroll scrollbar-hide py-10 px-5 max-[500px]:px-5 max-[500px]:py-6"
              {...events}
              ref={ref}
            >
              {FORUM_LIST.map((item, index) => {
                const isActive = index === activeSectionIndex;
                return (
                  <ForumYearList key={index} item={item} isActive={isActive} />
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-[1080px]:px-10 max-[500px]:px-5 max-[950px]:px-5">
          {FORUM_LIST.map((item, index) => {
            return (
              <ForumSection
                id={item.year}
                key={index}
                item={item}
                year={item.year}
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
