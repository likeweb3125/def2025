"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PastEventsPage() {
  const { t } = useLanguage();
  
  const EventSection = ({ year, bgColor = "bg-gray-50" }: { year: string, bgColor?: string }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          {/* 왼쪽: DEF 연도 텍스트 */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-none bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent text-center lg:text-right">
              DEF {year}
            </div>
          </div>

          {/* 중앙: 썸네일 이미지 */}
          <div className="w-full max-w-sm lg:w-80">
            <div className="relative">
              <Image
                src={`/images/past-events-thumb-${year}.png`}
                alt={`DEF ${year} Digital Economy Forum`}
                width={320}
                height={460}
                className="w-full lg:w-80 h-auto lg:h-[460px] object-contain rounded-lg shadow-lg"
              />
              <div className="mt-4">
                <button className="w-full lg:w-80 h-[62px] px-6 py-4 bg-gray-50 border border-blue-600 text-blue-600 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center">
                  {t.pastEvents.watchVideo}
                </button>
              </div>
            </div>
          </div>

          {/* 오른쪽: 콘텐츠 준비중 영역 */}
          <div className="w-full lg:flex-1">
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg border h-full">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
              <div className="text-center">
                <div className="text-gray-800 font-bold mb-4 text-lg lg:text-xl">
                  {t.pastEvents.contentPreparation}
                </div>
                <div className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {t.pastEvents.contentPreparationDesc.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.pastEvents.contentPreparationDesc.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  return (
    <div className="font-sans">
      {/* 지난 행사 헤더 섹션 */}
      <section className="relative h-[360px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/past-events_kv.jpg"
            alt="Past Events Background"
            fill
            className="object-cover"
            priority
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
            {t.pastEvents.title}
          </h2>

          {/* 네비게이션 버튼 */}
          <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-blue-500/50 bg-black/30 backdrop-blur-sm">
            <Link href="/event-overview">
              <button className="px-6 md:px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors border-b sm:border-b-0 sm:border-r border-blue-500/30 w-full sm:w-auto">
                {t.nav.eventOverview}
              </button>
            </Link>
            <Link href="/past-events">
              <button className="px-6 md:px-8 py-4 text-blue-400 font-medium hover:bg-blue-500/20 transition-colors bg-blue-500/10 border-b sm:border-b-0 sm:border-r border-blue-500/30 w-full sm:w-auto">
                {t.nav.pastEvents}
              </button>
            </Link>
            <Link href="/location">
              <button className="px-6 md:px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                {t.nav.directions}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 각 연도별 섹션 */}
      <EventSection year="2024" bgColor="bg-gray-50" />
      <EventSection year="2023" bgColor="bg-white" />
      <EventSection year="2022" bgColor="bg-gray-50" />
      <EventSection year="2021" bgColor="bg-white" />
      <EventSection year="2020" bgColor="bg-gray-50" />
      <EventSection year="2019" bgColor="bg-white" />
      <EventSection year="2018" bgColor="bg-gray-50" />
    </div>
  );
}