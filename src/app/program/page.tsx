"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import ComingSoon from "@/components/common/ComingSoon";

export default function ProgramPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      {/* 프로그램 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/heroes/hero-program.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/40 z-[1]"></div>

          {/* 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white mb-10 text-center">
              {t.program.title}
            </h2>

            {/* 프로그램 설명 텍스트 */}
            <div className="text-white text-center">
              <p className="font-normal text-xl leading-[150%] tracking-[0%]">
                {t.program.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 컨텐츠 준비중 섹션 */}
      <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        <div className="max-w-[1360px] mx-auto min-h-[480px] [&>div]:py-[100px] max-[500px]:[&>div]:py-[70px]">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}
