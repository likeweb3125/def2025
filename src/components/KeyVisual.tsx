"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KeyVisual() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: t.nav.eventOverview },
    { id: "past", label: t.nav.pastEvents },
    { id: "directions", label: t.nav.directions },
  ];

  return (
    <section className="relative h-[810px] flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/keyvisial_background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 메인 제목 */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          {t.nav.eventIntro}
        </h1>

        {/* 서브 네비게이션 탭 */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-300/50">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-cyan-200 text-blue-700"
                      : "text-white hover:text-cyan-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="max-w-4xl mx-auto">
          {/* DEF 2025 로고 */}
          <div className="flex justify-center mb-20 mt-20">
            <Image
              src="/images/logos/logo.png"
              alt="DEF 2025 Logo"
              width="124"
              height="60"
              className="w-[124px] h-[60px]"
            />
          </div>

          {/* 콘텐츠 준비중 메시지 */}
          <div>
            <h2
              className="text-white mb-6 text-center"
              style={{
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              콘텐츠 준비중입니다.
            </h2>
            <div
              className="text-white text-center space-y-2"
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              <p>보다 나은 서비스를 제공하기 위해 콘텐츠 준비중에 있습니다.</p>
              <p>빠른 시일 내에 준비하여 찾아뵙겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
