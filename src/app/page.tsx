"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="font-sans">
      {/* 메인 컨텐츠 영역 */}
      <section className="px-10">
        <div className="relative max-w-[1920px] rounded-[40px_0_40px_0] overflow-hidden mx-auto min-h-[880px] flex items-center justify-center">
          {/* 배경 이미지 */}
          <div className="absolute inset-0">
            <Image
              src="/images/heroes/hero-main.jpg"
              alt="Main Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 컨텐츠 영역 */}
          <div className="relative z-10 max-w-[1360px] w-full m-[120px_auto_40px] px-4 sm:px-6 lg:px-8 text-center">
            {/* 1번째 텍스트 - 제8회 디지털 이코노미 포럼 */}
            <div
              className="text-white mb-6 font-bold"
              style={{
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {language === "ko"
                ? "제8회 디지털 이코노미 포럼"
                : "8th Digital Economy Forum"}
            </div>

            {/* 2번째 텍스트 - 2025 DIGITAL ECONOMY FORUM */}
            <h2 className="text-white text-[100px] leading-[100px] flex flex-col gap-y-4 font-[500] md:text-[40px] lg:text-[60px] xl:text-[72px] font-bold mb-8 leading-none tracking-tight">
              <span>2025 DIGITAL</span>
              <span>ECONOMY FORUM</span>
            </h2>

            {/* 3번째 텍스트 - October 20 2025 INSPIRE Mountain Room */}
            <div className="text-white text-[22px]  max-w-[670px] w-full flex items-center justify-center mx-auto mb-8 px-4 h-[57px] md:px-8 lg:px-12 border border-white rounded-full text-sm md:text-base lg:text-lg">
              {/* {t.home.date} {t.home.location} */}
              October 20 2025
              <span className="w-1 h-1 rounded-full bg-white mx-7"></span>
              INSPIRE Mountain Room
            </div>

            {/* 4번째 - Host/Organized by 이미지 */}
            <div className="flex justify-center mb-[66px] px-4">
              <Image
                src="/images/host_org.png"
                alt="Hosted by Ministry of Economy and Finance, Organized by KIET"
                width={800}
                height={120}
                className="w-full max-w-xs md:max-w-md lg:max-w-2xl h-auto object-contain"
              />
            </div>

            {/* 5번째 - 버튼 영역 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mx-auto">
              {[
                {
                  icon: "/images/icons/icon_introduce.png",
                  alt: "DEF 2025 소개",
                  href: "/event-overview",
                  text: t.home.introduce,
                },
                {
                  icon: "/images/icons/icon_program.png",
                  alt: "프로그램 소개",
                  href: "/program",
                  text: t.home.program,
                },
                {
                  icon: "/images/icons/icon_speaker.png",
                  alt: "연사 소개",
                  href: "/speakers",
                  text: t.home.speakers,
                },
                {
                  icon: "/images/icons/icon_registration.png",
                  alt: "등록",
                  href: "https://naver.com",
                  text: t.home.registration,
                },
              ].map((item, index) => {
                const last = index === 3;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target={last ? "_blank" : "_self"}
                    rel={last ? "noopener noreferrer" : ""}
                    // className="relative group before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(110.74deg,#000000_0%,#333333_50%,#000000_100%)] hover:before:bg-[#00E2F7] hover:before:bg-none before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_0,1px_1px,1px_calc(100%-1px),calc(100%-1px)_calc(100%-1px),calc(100%-1px)_1px,1px_1px)] hover:shadow-[0px_0px_40px_0px_#00E2F766] hover:rounded-[20px_0px_20px_0px] hover:overflow-hidden transition-all duration-300"
                    className="relative group border border-transparent before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(110.74deg,#000000_0%,#333333_50%,#000000_100%)] before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_0,1px_1px,1px_calc(100%-1px),calc(100%-1px)_calc(100%-1px),calc(100%-1px)_1px,1px_1px)] bg-transparent hover:before:bg-transparent  hover:before:bg-none hover:border-[#00E2F7] hover:rounded-[20px_0px_20px_0px]  hover:shadow-[0px_0px_40px_0px_#00E2F766]  hover:overflow-hidden transition-all duration-300"
                  >
                    <div className="text-white flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-52 lg:h-[200px] bg-transparent group-hover:bg-[#00000066] transition-all duration-300 ">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="flex items-center justify-center relative z-10 mb-4">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={80}
                          height={80}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                      </div>
                      <div className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                        {item.text}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Image
            src={"/images/icons/apec.png"}
            alt=""
            className="absolute top-[60px] right-[60px]"
            width={95}
            height={101}
          />
        </div>
      </section>

      {/* 다음 섹션 */}
      <section className="h-[767px] flex flex-col items-center justify-center">
        {/* 아이콘 */}
        <div
          className="flex items-center justify-center mb-5"
          style={{
            width: "28px",
            height: "28px",
            gap: "20px",
            opacity: 1,
          }}
        >
          <Image
            src="/images/icons/icon_talk.png"
            alt="주최 및 주관"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* 텍스트 */}
        <div
          className="text-black text-center"
          style={{
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
          }}
        >
          {language === "ko" ? "주최 및 주관" : "Host & Organizer"}
        </div>

        {/* 하단 영역 */}
        <div
          className="mt-[62px] flex items-center justify-center mx-auto"
          style={{
            width: "1360px",
            height: "320px",
            opacity: 1,
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            background: "#FFFFFF",
            boxShadow: "0px 0px 20px 0px #00000014",
          }}
        >
          <Image
            src="/images/moef_go_kr.png"
            alt="기획재정부"
            width={320}
            height={115}
            className="object-contain mr-24"
          />
          <Image
            src="/images/kiet_re_kr.png"
            alt="산업연구원"
            width={360}
            height={56}
            className="object-contain"
          />
        </div>
      </section>

      {/* 미디어룸 영역 */}
      <section className="relative h-[580px]">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/media_room.jpg"
            alt="Media Room Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 컨텐츠 영역 */}
        <div className="relative max-w-[1310px] w-full z-10 h-full flex items-center justify-between mx-auto">
          {/* 제목 영역 */}
          <div
            className="flex flex-col items-start justify-center"
            style={{
              gap: "20px",
              opacity: 1,
            }}
          >
            {/* 아이콘 */}
            <Image
              src="/images/icons/icon_talk.png"
              alt="미디어룸"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />

            {/* 텍스트 */}
            <h3
              className="text-white text-left leading-[57px]"
              style={{
                fontWeight: 700,
                fontSize: "48px",
                letterSpacing: "0%",
              }}
            >
              {language === "ko" ? "미디어룸" : "Media Room"}
            </h3>
          </div>

          {/* 썸네일 4개 */}
          <div className="flex gap-4">
            {[
              {
                src: "/images/mediaroom_img01.jpg",
                bigSrc: "/images/mediaroom_img01_big.jpg",
                alt: "미디어룸 이미지 1",
              },
              {
                src: "/images/mediaroom_img02.png",
                bigSrc: "/images/mediaroom_img01_big.jpg",
                alt: "미디어룸 이미지 2",
              },
              {
                src: "/images/mediaroom_img03.png",
                bigSrc: "/images/mediaroom_img01_big.jpg",
                alt: "미디어룸 이미지 3",
              },
              {
                src: "/images/mediaroom_img04.png",
                bigSrc: "/images/mediaroom_img01_big.jpg",
                alt: "미디어룸 이미지 4",
              },
            ].map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <figure
                    className="rounded-[20px] overflow-hidden"
                    style={{
                      width: "260px",
                      height: "260px",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={260}
                      height={260}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </DialogTrigger>
                <DialogContent className="rounded-[20px] pt-14 w-full !max-w-[720px] bg-white text-black border-none">
                  <DialogTitle hidden>{item.alt}</DialogTitle>
                  <DialogDescription hidden>{item.alt}</DialogDescription>
                  <Image
                    src={item.bigSrc}
                    alt={item.alt}
                    width={260}
                    height={260}
                    className="w-full h-full object-cover"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
