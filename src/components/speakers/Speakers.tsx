"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

type SpeakerCardProps = {
  item: {
    name: string;
    position: string;
    session: string;
    sessionDesc: string;
    image: string | null;
  };
};
const SpeakerCard = ({ item }: SpeakerCardProps) => {
  return (
    <div className="speaker-card p-6 aspect-[325/400] overflow-hidden group cursor-pointer transition-all duration-300">
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

      <div className="relative z-10 h-full flex flex-col">
        {/* 이름 */}
        <h3
          className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-[#00F8FA]"
          dangerouslySetInnerHTML={{
            __html: item.name.replace(/\n/g, "<br />"),
          }}
        />

        {/* 직책 */}
        <p
          className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-[#DDDDDD]"
          dangerouslySetInnerHTML={{
            __html: item.position.replace(/\n/g, "<br />"),
          }}
        />

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
        <h4
          className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white"
          dangerouslySetInnerHTML={{
            __html: item.session.replace(/\n/g, "<br />"),
          }}
        />

        {/* 설명 */}
        <div
          className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 group-hover:text-white"
          dangerouslySetInnerHTML={{
            __html: item.sessionDesc.replace(/\n/g, "<br />"),
          }}
        />
      </div>

      <div className="absolute bottom-[1px] right-[1px] overflow-hidden w-[50%] aspect-square z-[20] group-hover:rounded-[0px_0px_20px_0px] transition-all duration-300">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover rounded-tl-3xl w-full h-full"
            width={160}
            height={213}
            unoptimized={true}
          />
        )}
      </div>
    </div>
  );
};

export default function SpeakersPage() {
  const { t, language } = useLanguage();

  const moderators = [
    {
      name: language === "ko" ? "준비중..." : "Kwan Ho-Shin",
      position: "",
      session: language === "ko" ? "기조연설 1" : "Keynote Speech 1",
      sessionDesc: language === "ko" ? "좌장" : "Moderator",
      image: null,
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
      name: t.speakers.panelists1.leeHyunJin.name,
      position: t.speakers.panelists1.leeHyunJin.position,
      session: t.speakers.panelists1.leeHyunJin.session,
      sessionDesc: t.speakers.panelists1.leeHyunJin.sessionDesc,
      image: "/images/profile-leehyunjin.png",
    },
  ];

  const panelists2 = [
    {
      name: language === "ko" ? "준비중..." : "In progress...",
      position: "",
      session:
        language === "ko" ? "패널토의 세션2" : "Panel Discussion Session 2",
      sessionDesc: language === "ko" ? "좌장" : "Moderator",
      image: null,
    },
    {
      name: language === "ko" ? "준비중..." : "In progress...",
      position: "",
      session:
        language === "ko" ? "패널토의 세션2" : "Panel Discussion Session 2",
      sessionDesc: language === "ko" ? "발제" : "Presentation",
      image: null,
    },
    {
      name: language === "ko" ? "준비중..." : "In progress...",
      position: "",
      session:
        language === "ko" ? "패널토의 세션2" : "Panel Discussion Session 2",
      sessionDesc: language === "ko" ? "패널" : "Panelist",
      image: null,
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
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold">
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
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold">
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
                <span className="border-b-[2px] border-[#055DA5] text-[#055DA5] text-[28px] font-bold">
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
