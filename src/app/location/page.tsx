"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function LocationPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      {/* 오시는 길 헤더 섹션 */}
      <section className="relative h-[360px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/past-events_kv.jpg"
            alt="Location Background"
            fill
            className="object-cover"
            priority
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t.location.title}
          </h2>

          {/* 네비게이션 버튼 */}
          <div className="flex rounded-lg overflow-hidden border border-blue-500/50 bg-black/30 backdrop-blur-sm">
            <Link href="/event-overview">
              <button className="px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors border-r border-blue-500/30">
                행사 개요
              </button>
            </Link>
            <Link href="/past-events">
              <button className="px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors border-r border-blue-500/30">
                지난 행사
              </button>
            </Link>
            <Link href="/location">
              <button className="px-8 py-4 text-blue-400 font-medium hover:bg-blue-500/20 transition-colors bg-blue-500/10">
                오시는 길
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 위치 정보 섹션 */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* 위치 정보 - 우측 컨텐츠가 잘 보이도록 z-index 높게 설정 */}
            <div className="relative z-20">
              {/* 인스파이어 */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 leading-tight">
                인스파이어
              </h3>

              {/* 엔터테인먼트 리조트 */}
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 leading-tight">
                엔터테인먼트 리조트
              </h4>

              {/* 주소 */}
              <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
                인천광역시 중구 공항문화로 127
              </p>
            </div>

            {/* DEF 로고 - 우측 하단에 오버레이, 낮은 z-index로 뒤쪽 배치 */}
            <div className="absolute bottom-0 right-0 z-10 opacity-80">
              <Image
                src="/images/logos/logo_gray.png"
                alt="DEF 2025 Logo"
                width={200}
                height={100}
                className="w-32 md:w-40 lg:w-48 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 컨텐츠 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 구글맵 임베드 */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12667.161191811444!2d126.38656581232868!3d37.46567287194822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.1!3m3!1m2!1s0x357c9f976f60b0e1%3A0x35b3cd3163505ca2!2z7J247Iqk7YyM7J207Ja0IOyXlO2EsO2FjOyduOuovO2KuCDrpqzsobDtirg!5e0!3m2!1sko!2skr!4v1757310669876!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="인스파이어 엔터테인먼트 리조트 위치"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* 지도 하단 안내 */}
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>
                  지도를 클릭하거나 드래그하여 더 자세한 위치를 확인하실 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 교통편 안내 */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* 대중교통 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2h-1z" />
                </svg>
                대중교통
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">지하철</p>
                  <p className="text-sm">
                    인천국제공항철도 → 영종역 하차 → 셔틀버스 이용
                  </p>
                </div>
                <div>
                  <p className="font-semibold">버스</p>
                  <p className="text-sm">인천공항 → 리조트 셔틀버스 운행</p>
                </div>
              </div>
            </div>

            {/* 자가용 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-1a1 1 0 00-1-1H9a1 1 0 00-1 1v1a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
                자가용
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">주차</p>
                  <p className="text-sm">리조트 내 주차장 이용 가능</p>
                </div>
                <div>
                  <p className="font-semibold">내비게이션</p>
                  <p className="text-sm">
                    &quot;인스파이어 엔터테인먼트 리조트&quot; 검색
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
