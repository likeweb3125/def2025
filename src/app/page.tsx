'use client';

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="font-sans">
      {/* 메인 컨텐츠 영역 */}
      <section className="relative h-[880px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/hero-main.jpg"
            alt="Main Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* 컨텐츠 영역 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 1번째 텍스트 - 제8회 디지털 이코노미 포럼 */}
          <div 
            className="text-white mb-8 font-bold"
            style={{
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            {t.language === 'ko' ? '제8회 디지털 이코노미 포럼' : '8th Digital Economy Forum'}
          </div>
          
          {/* 2번째 텍스트 - 2025 DIGITAL ECONOMY FORUM */}
          <div className="text-white font-bold mb-8 text-4xl md:text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight">
            2025 DIGITAL<br />
            ECONOMY FORUM
          </div>
          
          {/* 3번째 텍스트 - October 20 2025 INSPIRE Mountain Room */}
          <div className="text-white flex items-center justify-center mx-auto mb-8 px-4 py-4 md:px-8 md:py-4 lg:px-12 lg:py-4 max-w-xs md:max-w-md lg:max-w-2xl border border-white rounded-full text-sm md:text-base lg:text-lg">
            {t.home.date}  {t.home.location}
          </div>
          
          {/* 4번째 - Host/Organized by 이미지 */}
          <div className="flex justify-center mb-8 px-4">
            <Image
              src="/images/host_org.png"
              alt="Hosted by Ministry of Economy and Finance, Organized by KIET"
              width={800}
              height={120}
              className="w-full max-w-xs md:max-w-md lg:max-w-2xl h-auto object-contain"
            />
          </div>
          
          {/* 5번째 - 버튼 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
            {/* DEF 2025 소개 버튼 */}
            <button className="text-white flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-52 lg:h-56 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-lg bg-black/10"></div>
              <div className="flex items-center justify-center relative z-10 mb-4">
                <Image
                  src="/images/icons/icon_introduce.png"
                  alt="DEF 2025 소개"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                {t.home.introduce}
              </div>
            </button>

            {/* 프로그램 소개 버튼 */}
            <button className="text-white flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-52 lg:h-56 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-lg bg-black/10"></div>
              <div className="flex items-center justify-center relative z-10 mb-4">
                <Image
                  src="/images/icons/icon_program.png"
                  alt="프로그램 소개"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                {t.home.program}
              </div>
            </button>

            {/* 연사 소개 버튼 */}
            <button className="text-white flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-52 lg:h-56 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-lg bg-black/10"></div>
              <div className="flex items-center justify-center relative z-10 mb-4">
                <Image
                  src="/images/icons/icon_speaker.png"
                  alt="연사 소개"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                {t.home.speakers}
              </div>
            </button>

            {/* 등록 버튼 */}
            <button className="text-white flex flex-col items-center justify-center relative overflow-hidden h-48 md:h-52 lg:h-56 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-lg bg-black/10"></div>
              <div className="flex items-center justify-center relative z-10 mb-4">
                <Image
                  src="/images/icons/icon_registration.png"
                  alt="등록"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="text-white relative z-10 font-medium text-base md:text-lg lg:text-xl text-center px-2">
                {t.home.registration}
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 다음 섹션 */}
      <section className="h-[767px] flex flex-col items-center justify-center">
        {/* 아이콘 */}
        <div 
          className="flex items-center justify-center mb-5"
          style={{
            width: '28px',
            height: '28px',
            gap: '20px',
            opacity: 1
          }}
        >
          <Image
            src="/images/icons/icon_talk.png"
            alt="주최 및 주관"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </div>
        
        {/* 텍스트 */}
        <div 
          className="text-black text-center"
          style={{
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'capitalize'
          }}
        >
          주최 및 주관
        </div>
        
        {/* 하단 영역 */}
        <div 
          className="mt-8 flex items-center justify-center mx-auto"
          style={{
            width: '1360px',
            height: '320px',
            opacity: 1,
            borderTopLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            background: '#FFFFFF',
            boxShadow: '0px 0px 20px 0px #00000014'
          }}
        >
          <Image
            src="/images/moef_go_kr.png"
            alt="기획재정부"
            width={320}
            height={115}
            className="object-contain mr-24"
          />
          <Image
            src="/images/kiet_re_kr.png"
            alt="산업연구원"
            width={360}
            height={56}
            className="object-contain"
          />
        </div>
      </section>

      {/* 미디어룸 영역 */}
      <section className="relative h-[580px]">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/media_room.jpg"
            alt="Media Room Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* 컨텐츠 영역 */}
        <div className="relative z-10 h-full flex items-center justify-between px-16">
          {/* 제목 영역 */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              width: '166px',
              height: '105px',
              gap: '20px',
              opacity: 1
            }}
          >
            {/* 아이콘 */}
            <Image
              src="/images/icons/icon_talk.png"
              alt="미디어룸"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            
            {/* 텍스트 */}
            <div 
              className="text-white text-center"
              style={{
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              미디어룸
            </div>
          </div>

          {/* 썸네일 4개 */}
          <div className="flex gap-4">
            {/* 썸네일 1 */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                width: '260px',
                height: '260px'
              }}
            >
              <Image
                src="/images/mediaroom_img01.jpg"
                alt="미디어룸 이미지 1"
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 썸네일 2 */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                width: '260px',
                height: '260px'
              }}
            >
              <Image
                src="/images/mediaroom_img01.jpg"
                alt="미디어룸 이미지 2"
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 썸네일 3 */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                width: '260px',
                height: '260px'
              }}
            >
              <Image
                src="/images/mediaroom_img01.jpg"
                alt="미디어룸 이미지 3"
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 썸네일 4 */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                width: '260px',
                height: '260px'
              }}
            >
              <Image
                src="/images/mediaroom_img01.jpg"
                alt="미디어룸 이미지 4"
                width={260}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
