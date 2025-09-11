"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MinistryLogo from "./MinistryLogo";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white px-10 py-[60px] max-[500px]:px-5 max-[500px]:py-10">
      <div className="max-w-[1360px] mx-auto ">
        {/* 상단 섹션 */}
        <div className="mb-8 flex justify-between items-center max-[500px]:flex-col max-[500px]:items-start gap-y-5 max-[500px]:mb-5">
          {/* 기획재정부 로고 */}
          <MinistryLogo className="[&_img]:max-[500px]:w-[160px] [&_img]:max-[500px]:h-auto" />

          {/* 개인정보처리방침 */}
          <div className="lg:ml-auto">
            <Link
              href="#"
              className="text-white hover:underline hover:text-gray-300 transition-colors text-[18px] max-[500px]:text-[16px]"
              style={{
                fontWeight: 700,
                fontStyle: "normal",
                lineHeight: "100%",
              }}
            >
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-600"></div>

        {/* 중간 섹션 - 연락처 정보 */}
        <div className="py-6 max-[500px]:pt-4 max-[500px]:pb-5 flex items-start justify-between max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-y-5">
          <div>
            {/* 좌측 연락처 정보 */}
            <div className="flex space-x-8 max-[500px]:flex-col gap-y-4">
              {/* Office */}
              <div>
                <div className="text-white font-semibold text-sm mb-2">
                  {t.footer.office}
                </div>
                <div className="text-gray-300 text-sm">
                  {t.footer.secretariat}
                </div>
              </div>

              {/* Tel */}
              <div>
                <div className="text-white font-semibold text-sm mb-2">
                  {t.footer.tel}
                </div>
                <div className="text-gray-300 text-sm">{t.footer.phone}</div>
              </div>

              {/* Mail */}
              <div>
                <div className="text-white font-semibold text-sm mb-2">
                  {t.footer.mail}
                </div>
                <div className="text-gray-300 text-sm">{t.footer.email}</div>
              </div>
            </div>
            {/* 하단 섹션 - 저작권 */}
            <div className="mt-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="text-gray-400 text-xs mb-4 max-[500px]:mb-0">
                  {t.footer.copyright}
                </div>
              </div>
            </div>
          </div>

          {/* 우측 YouTube 아이콘 */}
          <Link
            href="https://www.youtube.com/@DigitalEconomyForum-p5s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#292929] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
            aria-label="YouTube"
            style={{
              width: "40px",
              height: "40px",
              opacity: 1,
            }}
          >
            <svg
              className="text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "20px", height: "20px" }}
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
