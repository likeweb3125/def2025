"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoadingLink from "@/components/LoadingLink";
import { motion } from "framer-motion";
import { useEffect } from "react";

const AOSInitializer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      // Optional: Configure AOS settings here
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
};

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <AOSInitializer>
      <div className="">
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
            <div className="w-full max-w-[1360px] m-[120px_auto_40px] py-10 px-10  max-[768px]:mt-0 max-[500px]:px-5 ">
              <motion.div
                transition={{ duration: 1.8 }}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-montserrat relative z-10 w-full text-center"
                style={{
                  transformOrigin: "bottom",
                }}
              >
                {/* 1번째 텍스트 - 제8회 디지털 이코노미 포럼 */}
                <div
                  className={`text-white text-[32px] mb-6 font-bold max-[500px]:text-[20px] max-[500px]:leading-[23px] max-[500px]:mb-4 tracking-[-2px] ${
                    language === "ko" ? "tracking-[2px]" : ""
                  }`}
                >
                  {language === "ko" ? (
                    "제8회 디지털 이코노미 포럼"
                  ) : (
                    <span>
                      8<sup>th</sup> Digital Economy Forum
                    </span>
                  )}
                </div>

                {/* 2번째 텍스트 - 2025 DIGITAL ECONOMY FORUM */}
                <h2 className="text-white text-[100px] leading-[100px] flex flex-col gap-y-4 font-[500] max-[1280px]:text-[80px] font-bold mb-8 leading-none tracking-tight max-[500px]:gap-y-2 max-[500px]:text-[60px] max-[500px]:leading-[60px] max-[360px]:text-[48px] max-[360px]:leading-[48px]">
                  <p className="flex gap-4 justify-center max-[600px]:flex-col max-[460px]:gap-y-2">
                    <span>2025</span>
                    <span>DIGITAL</span>
                  </p>
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
                    width={443}
                    height={40}
                    className="w-full max-w-[433px] max-[768px]:max-w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* 버튼 영역 */}
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
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: isEven ? -50 : 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.8, ease: "linear" }}
                      style={{ willChange: "transform, opacity" }}
                      className="rounded-shadow-box aspect-[1.5/1] aspect-[1.5/1] max-[1280px]:aspect-square"
                    >
                      <LoadingLink
                        href={item.href}
                        target={last ? "_blank" : "_self"}
                        className="h-full"
                      >
                        <div className="h-full text-white flex flex-col items-center justify-center">
                          {/* <div className="absolute inset-0 bg-black/20"></div> */}
                          <div className="flex items-center justify-center relative z-10 mb-4">
                            <Image
                              src={item.icon}
                              alt={item.alt}
                              width={80}
                              height={80}
                              className="object-contain max-[1080px]:w-[60px] max-[1080px]:h-[60px] max-[768px]:w-[80px] max-[768px]:h-[80px]"
                            />
                          </div>
                          <p className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                            {item.text}
                          </p>
                        </div>
                      </LoadingLink>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 다음 섹션 */}
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="px-10 pt-[120px] pb-[160px] max-[768px]:py-[120px] max-[500px]:py-[80px] max-[500px]:px-5"
        >
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
              className="mt-[62px] px-10 flex gap-24 max-[935px]:gap-6 max-[768px]:py-21  max-[500px]:py-[30px] flex-wrap items-center justify-center py-[100px] w-full max-[500px]:mt-7"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 20px 0px #00000014",
              }}
            >
              {language === "ko" ? (
                <>
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
                </>
              ) : (
                <>
                  <Image
                    src="/images/moef_go_kr-en.png"
                    alt="Ministry of Economy and Finance"
                    width={480}
                    height={120}
                    className="object-cover max-[500px]:!w-full max-[768px]:!w-[300px] max-[500px]:!w-[240px]"
                  />
                  <Image
                    src="/images/kiet_re_kr-en.png"
                    alt="KIET - Kore Institute for Industrial Economics & Trade"
                    width={480}
                    height={120}
                    className="object-cover max-[500px]:!w-full max-[768px]:!w-[300px] max-[500px]:!w-[240px]"
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* 미디어룸 영역 */}
        <section className="relative py-[160px] max-[768px]:py-[120px] max-[500px]:py-[80px]">
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative px-10 max-w-[1390px] w-full z-10 h-full flex items-center justify-between mx-auto max-[1390px]:flex-col max-[1390px]:gap-[57px] max-[1390px]:justify-center max-[500px]:px-5 max-[500px]:gap-7"
          >
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
                  bigSrc: "/images/mediaroom_img01_big.jpeg",
                  alt: "미디어룸 이미지 1",
                },
                {
                  src: "/images/mediaroom_img02.png",
                  bigSrc: "/images/mediaroom_img02_big.jpeg",
                  alt: "미디어룸 이미지 2",
                },
                {
                  src: "/images/mediaroom_img03.png",
                  bigSrc: "/images/mediaroom_img03_big.jpeg",
                  alt: "미디어룸 이미지 3",
                },
                {
                  src: "/images/mediaroom_img04.png",
                  bigSrc: "/images/mediaroom_img04_big.jpeg",
                  alt: "미디어룸 이미지 4",
                },
              ].map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <figure className="cursor-pointer rounded-[20px] overflow-hidden w-full max-w-[260px] aspect-square max-[1390px]:max-w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={260}
                        height={260}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </DialogTrigger>
                  <DialogContent className="rounded-[20px] pt-14 w-full !max-w-[900px] bg-white text-black border-none max-[768px]:!max-w-[90%]">
                    <DialogTitle hidden>{item.alt}</DialogTitle>
                    <DialogDescription hidden>{item.alt}</DialogDescription>
                    <div className="w-full h-auto">
                      <Image
                        src={item.bigSrc}
                        alt={item.alt}
                        width={900}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AOSInitializer>
  );
}
