'use client';
 
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProgramPage() {
  const { t } = useLanguage();
  
  return (
    <div className="font-sans">
      {/* 프로그램 헤더 섹션 */}
      <section className="relative h-[360px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/hero-program.jpg"
            alt="Program Background"
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
            {t.program.title}
          </h2>

          {/* 프로그램 설명 텍스트 */}
          <div className="text-white text-center">
            <p className="font-normal text-xl leading-[150%] tracking-[0%]">
              {t.program.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 프로그램 컨텐츠 준비중 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="bg-white rounded-lg p-8 shadow-lg border h-full">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
              <div className="text-center">
                <div className="text-gray-800 font-bold mb-4 text-xl">
                  {t.program.comingSoon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}