"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import SubNavigationButton from "@/components/common/SubNavigationButton";

export default function LocationPage() {
  const { t, language } = useLanguage();

  return (
    <div className="font-sans">
      {/* 오시는 길 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/past-events_kv.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/40 z-[1]"></div>

          {/* 콘텐츠 */}
          <div
            className={`relative z-10 flex flex-col items-center justify-center h-full w-full px-5 ${
              language === "ko" ? "max-w-[410px]" : "max-w-[515px]"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
              {language === "ko" ? t.location.title : "Conference"}
            </h2>

            {/* 네비게이션 버튼 */}
            <SubNavigationButton
              className={`${
                language === "ko"
                  ? "max-[410px]:[&>a]:!px-[15px]"
                  : "max-[515px]:[&>a]:!px-[15px]"
              }`}
              tabs={[
                {
                  id: "event-overview",
                  label: t.nav.eventOverview,
                  href: "/event-overview",
                },
                {
                  id: "past-events",
                  label: t.nav.pastEvents,
                  href: "/past-events",
                },
                {
                  id: "location",
                  label: t.nav.directions,
                  href: "/location",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 위치 정보 섹션 */}
      <section className="relative max-w-[1360px] mx-auto mt-[120px] pb-[160px] bg-white relative overflow-hidden max-[768px]:mt-[60px] max-[768px]:pb-5">
        {/* 위치 정보 - 우측 컨텐츠가 잘 보이도록 z-index 높게 설정 */}
        <div className="absolute right-[100px] top-0 bg-[canvas] z-20 w-[500px] min-h-[380px] px-10 py-12 rounded-[40px_0px_40px_0px] overflow-hidden shadow-[0px_0px_24px_0px_#00000014] max-[950px]:right-[40px] max-[950px]:w-[430px] max-[950px]:p-8 max-[768px]:relative max-[768px]:right-0 max-[768px]:top-0 max-[768px]:w-full max-[768px]:min-h-auto max-[768px]:p-10 max-[768px]:shadow-none max-[500px]:px-5">
          <h3 className="text-[40px] text-[#055DA5] mb-2 flex flex-col [&>span]:leading-[60px] font-bold max-[360px]:text-[36px] max-[360px]:[&>span]:leading-[54px] z-[2] [&>span]:break-keep">
            <span>{language === "ko" ? "인스파이어" : "INSPIRE"} </span>
            <span>
              {language === "ko"
                ? "엔터테인먼트 리조트"
                : "Entertainment Resort"}
            </span>
          </h3>

          {/* 주소 */}
          <p
            className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed z-[2] relative"
            dangerouslySetInnerHTML={{
              __html: t.location.eventAddress.replace(/\n/g, "<br />"),
            }}
          />

          {/* DEF 로고 - 우측 하단에 오버레이, 낮은 z-index로 뒤쪽 배치 */}
          <figure className="absolute bottom-0 right-0 z-10 opacity-80 max-[768px]:right-10 max-[500px]:right-5 z-[1]">
            <Image
              src="/images/logos/logo_gray.png"
              alt="DEF 2025 Logo"
              width={200}
              height={100}
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </figure>
        </div>

        {/* 오시는 길 컨텐츠 섹션 */}
        <div className="pt-[100px] max-[768px]:pt-0">
          {/* 구글맵 임베드 */}
          <div className="flex flex-col justify-center">
            <div className="relative w-full h-[440px] overflow-hidden shadow-lg">
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

          {/* 교통편 안내 */}
          <div className="hidden mt-12 grid md:grid-cols-2 gap-8">
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
