"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

import LanguageIcon from "/public/images/icons/language.svg?component";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className="relative z-50 bg-white sticky top-0">
      <div className="flex max-w-[1920px] mx-auto px-[100px]">
        {/* 왼쪽 로고 블록 */}
        <div className="relative min-w-[280px]">
          <div className="flex items-center absolute top-0 left-0 inset-0 min-h-[160px] bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] overflow-hidden rounded-br-2xl rounded-bl-2xl flex justify-center items-center shadow-[8px_8px_24px_0px_#00000040]">
            <h1>
              <Link
                href="/"
                style={{ backgroundImage: `url(/images/logos/logo.png)` }}
                className="w-[132px] h-[64px] bg-cover bg-center block"
              >
                <span className="sr-only">
                  DEF - Digital Economy Forum 2025
                </span>
              </Link>
            </h1>
          </div>
        </div>

        {/* 오른쪽 네비게이션 바 */}
        <div className="flex-1 flex items-center justify-between">
          {/* 메인 네비게이션 */}
          <nav className="flex items-center w-full max-w-[800px] mx-auto py-2">
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
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold"
                    >
                      {t.nav.eventOverview}
                    </Link>
                    <Link
                      href="/past-events"
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold"
                    >
                      {t.nav.pastEvents}
                    </Link>
                    <Link
                      href="/location"
                      className="block px-4 py-[10px] text-white hover:bg-[#055DA5] text-[20px] hover:font-bold"
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

          {/* 언어 선택 */}
          <div
            className={`relative border rounded-[30px] ${
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
        </div>
      </div>
    </header>
  );
}
