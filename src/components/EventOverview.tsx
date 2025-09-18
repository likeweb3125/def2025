"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EventOverview() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[800px] flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/back02.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 콘텐츠 */}
      <div
        className="relative z-10 mx-auto"
        style={{
          width: "900px",
          height: "390px",
          gap: "20px",
          opacity: 1,
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderStyle: "solid",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          행사개요
        </h2>

        {/* 행사 정보 */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <div
              className="text-center mr-8"
              style={{
                width: "120px",
                height: "46px",
                paddingTop: "8px",
                paddingBottom: "8px",
                gap: "8px",
                opacity: 1,
                borderRadius: "8px",
                backgroundColor: "#FFFFFF33",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-white text-lg font-medium">행사명</span>
            </div>
            <div className="text-white text-lg font-medium text-center flex-1">
              제8회 디지털 이코노미 포럼
            </div>
          </li>

          <li className="flex items-center">
            <div
              className="text-center mr-8"
              style={{
                width: "120px",
                height: "46px",
                paddingTop: "8px",
                paddingBottom: "8px",
                gap: "8px",
                opacity: 1,
                borderRadius: "8px",
                backgroundColor: "#FFFFFF33",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-white text-lg font-medium">주제</span>
            </div>
            <div className="text-white text-lg font-medium text-center flex-1">
              {t.eventOverview.table.topicContent}
            </div>
          </li>

          <li className="flex items-center">
            <div
              className="text-center mr-8"
              style={{
                width: "120px",
                height: "46px",
                paddingTop: "8px",
                paddingBottom: "8px",
                gap: "8px",
                opacity: 1,
                borderRadius: "8px",
                backgroundColor: "#FFFFFF33",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-white text-lg font-medium">일시</span>
            </div>
            <div className="text-white text-lg font-medium text-center flex-1">
              2025년 10월 20일 월요일
            </div>
          </li>

          <li className="flex items-center">
            <div
              className="text-center mr-8"
              style={{
                width: "120px",
                height: "46px",
                paddingTop: "8px",
                paddingBottom: "8px",
                gap: "8px",
                opacity: 1,
                borderRadius: "8px",
                backgroundColor: "#FFFFFF33",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-white text-lg font-medium">장소</span>
            </div>
            <div className="text-white text-lg font-medium text-center flex-1">
              인스파이어 엔터테인먼트 리조트
            </div>
          </li>

          <li className="flex items-center">
            <div
              className="text-center mr-8"
              style={{
                width: "120px",
                height: "46px",
                paddingTop: "8px",
                paddingBottom: "8px",
                gap: "8px",
                opacity: 1,
                borderRadius: "8px",
                backgroundColor: "#FFFFFF33",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span className="text-white text-lg font-medium">주최</span>
            </div>
            <div className="text-white text-lg font-medium text-center flex-1">
              <Image
                src="/images/icon_gov_department.png"
                alt="기획재정부"
                width={80}
                height={80}
                className="w-20 h-20 object-contain mx-auto"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
