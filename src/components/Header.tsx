"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

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

  const handleSheetLinkClick = (href: string) => {
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
      href: "https://naver.com",
    },
  ];

  return (
    <header className="relative z-50 bg-white sticky top-0">
      <div className="flex max-w-[1920px] mx-auto px-[100px] max-[1280px]:pl-0 max-[1280px]:pr-9 max-[428px]:pr-4">
        {/* 왼쪽 로고 블록 */}
        <div className="relative min-w-[280px] max-[1000px]:min-w-[160px] max-[768px]:translate-x-10 max-[428px]:translate-x-5">
          <div className="flex items-center absolute top-0 left-0 inset-0 min-h-[160px] max-[1000px]:min-h-[100px] bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] overflow-hidden rounded-br-2xl rounded-bl-2xl flex justify-center items-center shadow-[8px_8px_24px_0px_#00000040]">
            <h1>
              <Link
                href="/"
                style={{ backgroundImage: `url(/images/logos/logo.png)` }}
                className="w-[132px] h-[64px] bg-cover bg-center block max-[1000px]:w-[100px] max-[1000px]:h-12"
              >
                <span className="sr-only">
                  DEF - Digital Economy Forum 2025
                </span>
              </Link>
            </h1>
          </div>
        </div>

        {/* 오른쪽 네비게이션 바 */}
        <div className="flex-1 flex items-center justify-between max-[768px]:py-4">
          {/* 메인 네비게이션 */}
          <nav className="max-[768px]:hidden flex items-center w-full max-w-[800px] mx-auto py-2 max-[1280px]:max-w-[640px] max-[1280px]:ml-10 max-[1280px]:mr-auto max-[1140px]:mx-10 max-[1140px]:max-w-full max-[1000px]:mx-5">
            {/* 행사소개 */}
            <div className="relative flex-1 text-center">
              <Link
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
              </Link>
              {activeDropdown === "eventIntro" && (
                <div
                  className="absolute top-full left-0 right-0 pt-[30px] z-50"
                  onMouseEnter={() => handleMouseEnter("eventIntro")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-[18px] bg-[#055DA5] rounded-md shadow-lg">
                    <Link
                      href="/event-overview"
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold whitespace-nowrap"
                    >
                      {t.nav.eventOverview}
                    </Link>
                    <Link
                      href="/past-events"
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold whitespace-nowrap"
                    >
                      {t.nav.pastEvents}
                    </Link>
                    <Link
                      href="/location"
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold whitespace-nowrap"
                    >
                      {t.nav.directions}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 프로그램 */}
            <Link
              href="/program"
              className={`flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px] ${
                pathname.startsWith("/program")
                  ? "text-[#055DA5] font-semibold"
                  : "text-[#333333]"
              }`}
            >
              {t.nav.program}
            </Link>

            {/* 연사 */}
            <Link
              href="/speakers"
              className={`flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px] ${
                pathname.startsWith("/speakers")
                  ? "text-[#055DA5] font-semibold"
                  : "text-[#333333]"
              }`}
            >
              {t.nav.speakers}
            </Link>

            {/* 참가등록 */}
            <Link
              href="https://naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 text-center text-[20px] font-medium text-[#333333] hover:text-[#055DA5] hover:bg-[#F4F7F9] transition-all rounded-[8px]"
            >
              {t.nav.registration}
            </Link>
          </nav>

          <div className="max-[768px]:ml-auto flex items-center gap-4">
            {/* 언어 선택 */}
            <div
              className={`relative border rounded-[30px] max-[428px]:hidden ${
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

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="max-[768px]:block hidden">
                <button className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer">
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
                className="gap-0 w-full !max-w-full border-none bg-cover bg-center bg-no-repeat bg-[url('/images/heroes/hero-main-768.png')] max-[460px]:bg-[url('/images/heroes/hero-main-360.png')]"
                showCloseButton={false}
              >
                <SheetHeader className="p-0">
                  <SheetTitle hidden />
                  <SheetDescription hidden />

                  <div className="px-10 py-[18px] flex items-center justify-between max-[360px]:px-5 max-[360px]:py-2">
                    <h2>
                      <Link
                        href="/"
                        className="bg-cover bg-center bg-no-repeat bg-[url('/images/logos/logo_white.png')] w-[74px] h-[36px] block"
                      >
                        <span className="sr-only">
                          DEF - Digital Economy Forum 2025
                        </span>
                      </Link>
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

                <ul className="px-5 flex-1 pt-12 flex flex-col items-center gap-[60px] overflow-y-auto max-[360px]:gap-y-12">
                  {menuList.map((menu) => {
                    return (
                      <li key={menu.title}>
                        <Link
                          href={menu.href}
                          onClick={() => handleSheetLinkClick(menu.href)}
                          className="text-[48px] text-white font-bold max-[360px]:text-[32px] max-[360px]:leading-[37px] text-center block hover:text-white/80 transition-colors"
                        >
                          {menu.title}
                        </Link>
                        {menu.subList && (
                          <ul className="mt-7 flex flex-col items-center justify-center max-[360px]:mt-5">
                            {menu.subList.map((sub) => {
                              return (
                                <li key={sub.title}>
                                  <Link
                                    href={sub.href}
                                    onClick={() =>
                                      handleSheetLinkClick(sub.href)
                                    }
                                    className="text-[28px] text-white font-[500] py-3 block max-[360px]:text-[20px] max-[360px]:leading-[23px] max-[360px]:py-[10px] hover:text-white/80 transition-colors"
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
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
