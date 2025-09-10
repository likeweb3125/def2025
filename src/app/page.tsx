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
      <section className="px-10 max-[768px]:px-0">
        <div className="relative max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/heroes/hero-main.jpg')] max-[768px]:bg-[url('/images/heroes/hero-main-768.png')] max-[460px]:bg-[url('/images/heroes/hero-main-360.png')]"></div>

          <Image
            src={"/images/icons/apec.png"}
            alt=""
            className="absolute top-[60px] right-[60px] max-[1280px]:right-10 max-[768px]:relative max-[768px]:top-0 max-[768px]:right-0 max-[768px]:w-[75px] max-[768px]:h-auto max-[460px]:w-[37px]"
            width={95}
            height={101}
          />

          {/* 컨텐츠 영역 */}
          <div className="relative z-10 max-w-[1360px] w-full m-[120px_auto_40px] py-10 px-10 max-[500px]:px-5 text-center max-[768px]:mt-0">
            {/* 1번째 텍스트 - 제8회 디지털 이코노미 포럼 */}
            <div className="text-white text-[32px] mb-6 font-bold max-[460px]:text-[20px] max-[460px]:leading-[23px] max-[460px]:mb-4">
              {language === "ko"
                ? "제8회 디지털 이코노미 포럼"
                : "8th Digital Economy Forum"}
            </div>

            {/* 2번째 텍스트 - 2025 DIGITAL ECONOMY FORUM */}
            <h2 className="text-white text-[100px] leading-[100px] flex flex-col gap-y-4 font-[500] max-[1280px]:text-[80px] font-bold mb-8 leading-none tracking-tight max-[460px]:gap-y-2 max-[460px]:text-[48px] max-[460px]:leading-[48px]">
              <span>2025 DIGITAL</span>
              <p className="flex gap-4 justify-center max-[850px]:flex-col max-[460px]:gap-y-2">
                <span>ECONOMY</span>
                <span>FORUM</span>
              </p>
            </h2>

            {/* 3번째 텍스트 - October 20 2025 INSPIRE Mountain Room */}
            <div className="text-white text-[22px] max-w-[670px] w-full flex items-center justify-center mx-auto mb-8 px-4 h-[57px] border border-white rounded-full text-sm md:text-base lg:text-lg max-[768px]:flex-col max-[768px]:h-auto max-[768px]:gap-y-2 max-[768px]:py-4 max-[768px]:rounded-[16px] max-[360px]:text-[14px]">
              {/* {t.home.date} {t.home.location} */}
              <span>October 20 2025</span>
              <span className="w-1 h-1 rounded-full bg-white mx-7 max-[768px]:hidden"></span>
              <span>INSPIRE Mountain Room</span>
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
            <div className="w-full grid max-[768px]:grid-cols-2 grid-cols-4 gap-4 mx-auto max-[1280px]:gap-2">
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
                    className="relative group border border-transparent before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(110.74deg,#000000_0%,#333333_50%,#000000_100%)] before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_0,1px_1px,1px_calc(100%-1px),calc(100%-1px)_calc(100%-1px),calc(100%-1px)_1px,1px_1px)] bg-transparent hover:before:bg-transparent  hover:before:bg-none hover:border-[#00E2F7] hover:rounded-[20px_0px_20px_0px]  hover:shadow-[0px_0px_40px_0px_#00E2F766]  hover:overflow-hidden transition-all duration-300 max- aspect-[1.5/1] max-[1000px]:aspect-square"
                  >
                    <div className="text-white flex flex-col items-center justify-center relative overflow-hidden bg-transparent h-full group-hover:bg-[#00000066] transition-all duration-300 ">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="flex items-center justify-center relative z-10 mb-4">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={80}
                          height={80}
                          className="object-contain"
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
        </div>
      </section>

      {/* 다음 섹션 */}
      <section className="px-10 pt-[120px] pb-[160px] max-[768px]:py-[120px] max-[500px]:py-40 max-[500px]:px-5">
        <div className="max-w-[1360px] w-full mx-auto  flex flex-col items-center justify-center">
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
          <h3
            className="font-bold text-[48px] text-black text-center max-[360px]:text-[24px] max-[360px]:leading-[29px]"
            style={{
              textTransform: "capitalize",
            }}
          >
            {language === "ko" ? "주최 및 주관" : "Host & Organizer"}
          </h3>

          {/* 하단 영역 */}
          <div
            className="mt-[62px] px-10 flex gap-24 max-[935px]:gap-6  max-[768px]:py-21  max-[500px]:py-[30px] flex-wrap items-center justify-center py-[100px] w-full max-[500px]:mt-7"
            style={{
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
              className="object-cover max-[500px]:!w-full max-[768px]:!w-[300px] max-[500px]:!w-[240px] max-w-[320px]"
            />
            <Image
              src="/images/kiet_re_kr.png"
              alt="산업연구원"
              width={360}
              height={56}
              className="object-cover max-[500px]:!w-full max-[768px]:!w-[300px] max-[500px]:!w-[240px] max-w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* 미디어룸 영역 */}
      <section className="relative py-[160px] max-[768px]:py-[120px] max-[500px]:py-40">
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
        <div className="relative px-10 max-w-[1390px] w-full z-10 h-full flex items-center justify-between mx-auto max-[1390px]:flex-col max-[1390px]:gap-[57px] max-[1390px]:justify-center max-[500px]:px-5 max-[500px]:gap-7">
          {/* 제목 영역 */}
          <div
            className="flex flex-col items-start justify-center max-[1390px]:items-center"
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
            <h3 className="font-bold text-[48px] text-white text-left leading-[57px] whitespace-nowrap max-[360px]:text-[24px] max-[360px]:leading-[29px]">
              {language === "ko" ? "미디어룸" : "Media Room"}
            </h3>
          </div>

          {/* 썸네일 4개 */}
          <div className="grid grid-cols-4 gap-4 max-[1390px]:w-full max-[768px]:gap-2 max-[768px]:grid max-[768px]:grid-cols-2">
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
                  <figure className="rounded-[20px] overflow-hidden w-full max-w-[260px] aspect-square max-[1390px]:max-w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={260}
                      height={260}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </DialogTrigger>
                <DialogContent className="rounded-[20px] pt-14 w-full !max-w-[720px] bg-white text-black border-none max-[768px]:!max-w-[90%]">
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
