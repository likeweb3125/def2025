"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LoadingLink from "./LoadingLink";

import LanguageIcon from "/public/images/icons/language.svg?component";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hamburgerDropdown, setHamburgerDropdown] = useState<number | null>(
    null
  );
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleSheetLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hasSubMenu: boolean,
    index: number
  ) => {
    if (hasSubMenu) {
      e.preventDefault();
      setHamburgerDropdown((prev) =>
        prev !== null && prev === index ? null : index
      );
      return;
    }
    setIsSheetOpen(false);
  };

  const menuList = [
    {
      title: t.nav.eventIntro,
      href: "/event-overview",
      subList: [
        {
          title: t.nav.eventOverview,
          href: "/event-overview",
        },
        {
          title: t.nav.pastEvents,
          href: "/past-events",
        },
        {
          title: t.nav.directions,
          href: "/location",
        },
      ],
    },
    {
      title: t.nav.program,
      href: "/program",
    },
    {
      title: t.nav.speakers,
      href: "/speakers",
    },
    {
      title: t.nav.registration,
      href: "https://event-us.kr/disitaleconomyforum/event/111541",
      // subList: [
      //   {
      //     title: t.nav.register,
      //     href: "https://event-us.kr/disitaleconomyforum/event/111541",
      //   },
      //   {
      //     title: t.nav.registrationConfirmation,
      //     href: "https://event-us.kr/disitaleconomyforum/event/111541",
      //   },
      // ],
    },
  ];

  return (
    <header className="relative z-50 bg-white sticky top-0">
      <div className="flex max-w-[1920px] mx-auto px-[100px] max-[1280px]:pl-0 max-[1280px]:pr-9 max-[428px]:pr-4">
        {/* 왼쪽 로고 블록 */}
        <div className="relative min-w-[280px] max-[1000px]:min-w-[160px] max-[768px]:translate-x-10 max-[500px]:translate-x-5 max-[500px]:min-w-[120px]">
          <div className="flex items-center absolute top-0 left-0 inset-0 min-h-[160px] max-[1000px]:min-h-[100px] bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] overflow-hidden rounded-br-2xl rounded-bl-2xl flex justify-center items-center shadow-[8px_8px_24px_0px_#00000040] max-[500px]:min-h-[72px]">
            <h1>
              <LoadingLink
                href="/"
                style={{ backgroundImage: `url(/images/logos/logo.png)` }}
                className="w-[132px] h-[64px] bg-cover bg-center block max-[1000px]:w-[100px] max-[1000px]:h-12 max-[500px]:w-[74px] max-[500px]:h-9"
              >
                <span className="sr-only">
                  DEF - Digital Economy Forum 2025
                </span>
              </LoadingLink>
            </h1>
          </div>
        </div>

        {/* 오른쪽 네비게이션 바 */}
        <div className="flex-1 flex items-center justify-between max-[768px]:py-4 max-[500px]:py-2">
          {/* 메인 네비게이션 */}
          <nav className="max-[768px]:hidden flex items-center w-full max-w-[800px] mx-auto py-2 max-[1280px]:max-w-[640px] max-[1280px]:ml-10 max-[1280px]:mr-auto max-[1140px]:mx-10 max-[1140px]:max-w-full max-[1000px]:mx-5">
            {/* 행사소개 */}
            <div className="relative flex-1 text-center">
              <LoadingLink
                href="/event-overview"
                onMouseEnter={() => handleMouseEnter("eventIntro")}
                onMouseLeave={handleMouseLeave}
                className={`py-4 block text-[20px] rounded-[8px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px] ${
                  pathname.startsWith("/event-overview") || pathname === "/"
                    ? "text-[#055DA5] font-semibold"
                    : "text-[#333333]"
                }`}
              >
                {t.nav.eventIntro}
              </LoadingLink>
              {activeDropdown === "eventIntro" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] pt-[30px] z-50"
                  onMouseEnter={() => handleMouseEnter("eventIntro")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-[18px] bg-[#055DA5] rounded-md shadow-lg">
                    {[
                      {
                        href: "/event-overview",
                        text: t.nav.eventOverview,
                      },
                      {
                        href: "/past-events",
                        text: t.nav.pastEvents,
                      },
                      {
                        href: "/location",
                        text: t.nav.directions,
                      },
                    ].map((item, index) => {
                      return (
                        <LoadingLink
                          key={index}
                          href={item.href}
                          className={`block px-4 py-[10px] text-[20px] break-keep ${
                            pathname.startsWith(item.href)
                              ? "text-white font-bold"
                              : "hover:text-white/80 text-white/80"
                          }`}
                        >
                          {item.text}
                        </LoadingLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 프로그램 */}
            <LoadingLink
              href="/program"
              className={`flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px] ${
                pathname.startsWith("/program")
                  ? "text-[#055DA5] font-semibold"
                  : "text-[#333333]"
              }`}
            >
              {t.nav.program}
            </LoadingLink>

            {/* 연사 */}
            <LoadingLink
              href="/speakers"
              className={`flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px] ${
                pathname.startsWith("/speakers")
                  ? "text-[#055DA5] font-semibold"
                  : "text-[#333333]"
              }`}
            >
              {t.nav.speakers}
            </LoadingLink>

            {/* 참가등록 */}
            {/* <Link
              href="https://event-us.kr/disitaleconomyforum/event/111541"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px]"
            >
              {t.nav.registration}
            </Link> */}

            <div className="relative flex-1 text-center">
              <LoadingLink
                href="https://event-us.kr/disitaleconomyforum/event/111541"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMouseEnter("registration")}
                onMouseLeave={handleMouseLeave}
                className={`py-4 block text-[20px] rounded-[8px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px]`}
              >
                {t.nav.registration}
              </LoadingLink>
              {/* {activeDropdown === "registration" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] pt-[30px] z-50"
                  onMouseEnter={() => handleMouseEnter("registration")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-[18px] bg-[#055DA5] rounded-md shadow-lg">
                    {[
                      {
                        href: "https://event-us.kr/disitaleconomyforum/event/111541",
                        text: t.nav.register,
                      },
                      {
                        href: "https://event-us.kr/disitaleconomyforum/event/111541",
                        text: t.nav.registrationConfirmation,
                      },
                    ].map((item, index) => {
                      return (
                        <LoadingLink
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block px-4 py-[10px] text-white/80 text-[20px] break-keep flex items-center gap-x-2 justify-center hover:text-white`}
                        >
                          <span>{item.text}</span>
                          <Image
                            src="/images/icons/open_in_new.png"
                            alt="open in new"
                            width={20}
                            height={20}
                          />
                        </LoadingLink>
                      );
                    })}
                  </div>
                </div>
              )} */}
            </div>
          </nav>

          <div className="max-[768px]:ml-auto flex items-center gap-4">
            {/* 언어 선택 */}
            <div
              className={`relative border rounded-[30px] max-[428px]:opacity-0 max-[428px]:pointer-events-none ${
                isLanguageDropdownOpen
                  ? "border-[#055DA5] "
                  : "border-transparent"
              }`}
            >
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center w-[96px] justify-between text-gray-900 hover:text-[#055DA5] px-3 py-2 font-medium transition-colors"
              >
                <LanguageIcon
                  className={`${
                    isLanguageDropdownOpen && "[&_path]:fill-[#055DA5]"
                  }`}
                />

                <span
                  className={`text-[18px] ${
                    isLanguageDropdownOpen ? "text-[#055DA5]" : "text-gray-900"
                  }`}
                >
                  {language === "ko" ? t.common.kor : t.common.eng}
                </span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute w-[96px] top-full left-1/2 -translate-x-1/2 mt-1 w-32 bg-white rounded-[20px] overflow-hidden shadow-lg z-50">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setLanguage("ko");
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-center px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
                        language === "ko"
                          ? "bg-blue-100 text-[#055DA5]"
                          : "text-gray-700"
                      }`}
                    >
                      {t.common.kor}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-center px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
                        language === "en"
                          ? "bg-blue-100 text-[#055DA5]"
                          : "text-gray-700"
                      }`}
                    >
                      {t.common.eng}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Sheet
              open={isSheetOpen}
              onOpenChange={(open) => {
                setIsSheetOpen(open);
                if (open) {
                  menuList.forEach((menu) => {
                    if (menu.subList) {
                      menu.subList.forEach((sub) => {
                        if (pathname.startsWith(sub.href)) {
                          setHamburgerDropdown(menuList.indexOf(menu));
                        }
                      });
                    }
                  });
                } else {
                  setHamburgerDropdown(null);
                }
              }}
            >
              <SheetTrigger asChild className="max-[768px]:block hidden">
                <button className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer max-[500px]:w-10 max-[500px]:h-10">
                  <span className="sr-only">메뉴</span>
                  <Image
                    src="/images/icons/menu.png"
                    alt="메뉴"
                    width={40}
                    height={40}
                  />
                </button>
              </SheetTrigger>
              <SheetContent
                className="font-montserrat gap-0 w-full !max-w-full border-none bg-cover bg-center bg-no-repeat bg-[url('/images/heroes/hero-main-768.png')] max-[460px]:bg-[url('/images/heroes/hero-main-360.png')]"
                showCloseButton={false}
              >
                <SheetHeader className="p-0">
                  <SheetTitle hidden />
                  <SheetDescription hidden />

                  <div className="px-10 py-[18px] flex items-center justify-between max-[360px]:px-5 max-[360px]:py-2">
                    <h2>
                      <LoadingLink
                        href="/"
                        className="bg-cover bg-center bg-no-repeat bg-[url('/images/logos/logo_white.png')] w-[74px] h-[36px] block"
                      >
                        <span className="sr-only">
                          DEF - Digital Economy Forum 2025
                        </span>
                      </LoadingLink>
                    </h2>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setLanguage("ko")}
                        className={`text-[18px] cursor-pointer ${
                          language === "ko"
                            ? "text-white underline"
                            : "text-white/40"
                        }`}
                      >
                        KOR
                      </button>
                      <button
                        onClick={() => setLanguage("en")}
                        className={`text-[18px] cursor-pointer ${
                          language === "en"
                            ? "text-white underline"
                            : "text-white/40"
                        }`}
                      >
                        ENG
                      </button>
                      <SheetClose asChild>
                        <button className="ml-2 w-10 h-10 cursor-pointer">
                          <Image
                            src="/images/icons/close_white.png"
                            alt="Close"
                            width={40}
                            height={40}
                          />
                        </button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetHeader>

                <ul className="px-5 flex-1 pt-8 flex flex-col items-center gap-[40px] overflow-y-auto">
                  {menuList.map((menu, menuIndex) => {
                    return (
                      <li key={menu.title}>
                        {menu.subList ? (
                          <>
                            <Link
                              href={menu.href}
                              onClick={(e) =>
                                handleSheetLinkClick(e, true, menuIndex)
                              }
                              className={`text-[48px] font-bold max-[360px]:text-[32px] max-[360px]:leading-[37px] text-center block transition-colors ${
                                menu.subList.some((sub) =>
                                  pathname.startsWith(sub.href)
                                )
                                  ? "text-[#4AC8F4]"
                                  : "text-white"
                              }`}
                            >
                              {menu.title}
                            </Link>

                            <motion.ul
                              initial={{
                                height:
                                  hamburgerDropdown === menuIndex ? "auto" : 0,
                                marginTop:
                                  hamburgerDropdown === menuIndex ? "28px" : 0,
                              }}
                              animate={{
                                height:
                                  hamburgerDropdown === menuIndex ? "auto" : 0,
                                marginTop:
                                  hamburgerDropdown === menuIndex ? "28px" : 0,
                              }}
                              // exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden flex flex-col items-center justify-center"
                            >
                              {menu.subList.map((sub, subIndex) => {
                                const last = menuIndex === menuList.length - 1;
                                return (
                                  <li key={sub.title}>
                                    <LoadingLink
                                      href={sub.href}
                                      target={last ? "_blank" : "_self"}
                                      rel={last ? "noopener noreferrer" : ""}
                                      onClick={(e) =>
                                        handleSheetLinkClick(e, false, subIndex)
                                      }
                                      className={`text-[28px] font-[500] py-3 block max-[360px]:text-[20px] max-[360px]:leading-[23px] max-[360px]:py-[10px] transition-colors flex items-center justify-center gap-x-2 ${
                                        pathname.startsWith(sub.href)
                                          ? "text-[#4AC8F4]"
                                          : "text-white"
                                      }`}
                                    >
                                      <span>{sub.title}</span>
                                      {last && (
                                        <Image
                                          src="/images/icons/open_in_new.png"
                                          alt="open in new"
                                          width={20}
                                          height={20}
                                        />
                                      )}
                                    </LoadingLink>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          </>
                        ) : (
                          <>
                            <LoadingLink
                              href={menu.href}
                              onClick={(e) =>
                                handleSheetLinkClick(
                                  e,
                                  menu.subList ? true : false,
                                  menuIndex
                                )
                              }
                              className={`text-[48px] font-bold max-[360px]:text-[32px] max-[360px]:leading-[37px] text-center block transition-colors ${
                                pathname.startsWith(menu.href)
                                  ? "text-[#4AC8F4]"
                                  : "text-white"
                              }`}
                            >
                              {menu.title}
                            </LoadingLink>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex justify-center px-4 py-10">
                  <Image
                    src="/images/host_org.png"
                    alt="Hosted by Ministry of Economy and Finance, Organized by KIET"
                    width={800}
                    height={120}
                    className="w-full max-w-xs md:max-w-md lg:max-w-2xl h-auto object-contain"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
