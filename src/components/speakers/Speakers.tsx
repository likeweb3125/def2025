"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SpeakerCard } from "./-components/SpeakerCard";

export default function SpeakersPage() {
  const { t, language } = useLanguage();

  const moderators = [
    {
      name: t.speakers.moderators.kwanHoShin.name,
      position: t.speakers.moderators.kwanHoShin.position,
      session: t.speakers.moderators.kwanHoShin.session,
      sessionDesc: t.speakers.moderators.kwanHoShin.sessionDesc,
      image: "/images/profile-shinkwanho.png",
    },
    {
      name: t.speakers.moderators.antonKorinek.name,
      position: t.speakers.moderators.antonKorinek.position,
      session: t.speakers.moderators.antonKorinek.session,
      sessionDesc: t.speakers.moderators.antonKorinek.sessionDesc,
      image: "/images/profile-anton-korinek.png",
    },
    {
      name: t.speakers.moderators.sungNakHo.name,
      position: t.speakers.moderators.sungNakHo.position,
      session: t.speakers.moderators.sungNakHo.session,
      sessionDesc: t.speakers.moderators.sungNakHo.sessionDesc,
      image: "/images/profile-sungnakho.png",
    },
    {
      name: t.speakers.moderators.yooYongHa.name,
      position: t.speakers.moderators.yooYongHa.position,
      session: t.speakers.moderators.yooYongHa.session,
      sessionDesc: t.speakers.moderators.yooYongHa.sessionDesc,
      image: "/images/profile-yooyongha.png",
    },
  ];

  const panelists1 = [
    {
      name: t.speakers.panelists1.songKyungHo.name,
      position: t.speakers.panelists1.songKyungHo.position,
      session: t.speakers.panelists1.songKyungHo.session,
      sessionDesc: t.speakers.panelists1.songKyungHo.sessionDesc,
      image: "/images/profile-songkyungho.png",
    },
    {
      name: t.speakers.panelists1.jerrySheehan.name,
      position: t.speakers.panelists1.jerrySheehan.position,
      session: t.speakers.panelists1.jerrySheehan.session,
      sessionDesc: t.speakers.panelists1.jerrySheehan.sessionDesc,
      image: "/images/profile-jerry-sheehan.png",
    },
    {
      name: t.speakers.panelists1.mingxinZheng.name,
      position: t.speakers.panelists1.mingxinZheng.position,
      session: t.speakers.panelists1.mingxinZheng.session,
      sessionDesc: t.speakers.panelists1.mingxinZheng.sessionDesc,
      image: "/images/profile-mingxin-zheng.png",
    },
    {
      name: t.speakers.panelists1.leeHyunJin.name,
      position: t.speakers.panelists1.leeHyunJin.position,
      session: t.speakers.panelists1.leeHyunJin.session,
      sessionDesc: t.speakers.panelists1.leeHyunJin.sessionDesc,
      image: "/images/profile-leehyunjin.png",
    },
    {
      name: t.speakers.panelists1.kimyonggi.name,
      position: t.speakers.panelists1.kimyonggi.position,
      session: t.speakers.panelists1.kimyonggi.session,
      sessionDesc: t.speakers.panelists1.kimyonggi.sessionDesc,
      image: "/images/profile-kimyonggi.png",
    },
  ];

  const panelists2 = [
    {
      name: t.speakers.panelists2.goojinkyung.name,
      position: t.speakers.panelists2.goojinkyung.position,
      session: t.speakers.panelists2.goojinkyung.session,
      sessionDesc: t.speakers.panelists2.goojinkyung.sessionDesc,
      image: "/images/profile-goojinkyung.png",
    },
    {
      name: t.speakers.panelists2.shinseungyong.name,
      position: t.speakers.panelists2.shinseungyong.position,
      session: t.speakers.panelists2.shinseungyong.session,
      sessionDesc: t.speakers.panelists2.shinseungyong.sessionDesc,
      image: "/images/profile-shinseungyong.png",
    },
    {
      name: t.speakers.panelists2.leewooyoung.name,
      position: t.speakers.panelists2.leewooyoung.position,
      session: t.speakers.panelists2.leewooyoung.session,
      sessionDesc: t.speakers.panelists2.leewooyoung.sessionDesc,
      image: "/images/profile-leewooyoung.png",
    },
    {
      name: t.speakers.panelists2.yoonyeokyung.name,
      position: t.speakers.panelists2.yoonyeokyung.position,
      session: t.speakers.panelists2.yoonyeokyung.session,
      sessionDesc: t.speakers.panelists2.yoonyeokyung.sessionDesc,
      image: "/images/profile-yoonyeokyung.png",
    },
  ];

  return (
    <div>
      {/* 연사 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative max-w-[1920px] pt-[100px] pb-[110px] max-[768px]:pt-[50px] max-[768px]:pb-[60px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpg')]"></div>

          {/* 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white text-center">
              {t.speakers.title}
            </h2>

            {/* 연사 설명 텍스트 */}
            {/* <div className="text-white text-center">
              <p className="font-normal text-xl leading-[150%] tracking-[0%]">
                {t.speakers.subtitle}
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* 프로그램 컨텐츠 준비중 섹션 */}
      {/* <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        <div className="max-w-[1360px] mx-auto min-h-[480px] [&>div]:py-[100px] max-[500px]:[&>div]:py-[70px]">
          <ComingSoon />
        </div>
      </div> */}

      {/* 연사 목록 섹션 */}
      <section className="py-16">
        <div className="max-w-[1440px] px-10 mx-auto max-[500px]:px-5">
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-6">
              <h3 className="border-b botder-[#dddddd] w-full flex">
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold max-[768px]:text-[24px]">
                  {language === "ko" ? "기조연설" : "KEYNOTE"}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                {moderators.map((item, index) => {
                  return <SpeakerCard key={index} item={item} />;
                })}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="border-b botder-[#dddddd] w-full flex">
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold max-[768px]:text-[24px]">
                  {language === "ko"
                    ? "패널 토의 세션 1"
                    : "PANEL DISCUSSION SESSION 1"}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                {panelists1.map((item, index) => (
                  <SpeakerCard key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="border-b botder-[#dddddd] w-full flex">
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold max-[768px]:text-[24px]">
                  {language === "ko"
                    ? "패널 토의 세션 2"
                    : "PANEL DISCUSSION SESSION 2"}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
                {panelists2.map((item, index) => (
                  <SpeakerCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
