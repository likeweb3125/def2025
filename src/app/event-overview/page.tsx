'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EventOverviewPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans">
      {/* 행사개요 섹션 */}
      <section className="relative h-[800px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/event-overview_kv.jpg"
            alt="Event Overview Background"
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
            행사 소개
          </h2>

          {/* 버튼 3개 */}
          <div className="flex justify-center mb-8">
            <div 
              className="flex rounded-lg overflow-hidden"
              style={{
                border: '1px solid rgba(59, 130, 246, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
                  {/* 행사 개요 버튼 (활성화) */}
                  <Link href="/event-overview">
                    <button
                      className="px-8 py-4 text-blue-400 font-medium hover:bg-blue-500/20 transition-colors"
                      style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderRight: '1px solid rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      행사 개요
                    </button>
                  </Link>
                  
                  {/* 지난 행사 버튼 */}
                  <Link href="/past-events">
                    <button
                      className="px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors"
                      style={{
                        borderRight: '1px solid rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      지난 행사
                    </button>
                  </Link>
                  
                  {/* 오시는 길 버튼 */}
                  <Link href="/location">
                    <button
                      className="px-8 py-4 text-white font-medium hover:bg-white/10 transition-colors"
                    >
                      오시는 길
                    </button>
                  </Link>
            </div>
          </div>

          {/* 버튼 아래 영역 */}
          <div 
            className="w-full flex flex-col items-center justify-center"
            style={{
              height: '480px'
            }}
          >
            {/* 로고 */}
            <div className="mb-8">
              <Image
                src="/images/logos/logo_white.png"
                alt="DEF 2025"
                width={123}
                height={60}
                className="w-[123px] h-[60px] object-contain"
              />
            </div>

            {/* 첫 번째 텍스트 */}
            <div 
              className="text-white text-center mb-6"
              style={{
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
              콘텐츠 준비중입니다.
            </div>

            {/* 두 번째 텍스트 */}
            <div 
              className="text-white text-center"
              style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: '0%'
              }}
            >
              보다 나은 서비스를 제공하기 위해 콘텐츠 준비중에 있습니다.<br />
              빠른 시일 내에 준비하여 찾아뵙겠습니다.
            </div>
          </div>
        </div>
      </section>

      {/* 추가 영역 - 추후 사용 예정 */}
      <section className="relative h-[800px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/event-overview_back.jpg"
            alt="Event Overview Background"
            fill
            className="object-cover"
            priority
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 콘텐츠 */}
        <div
          className="relative z-10 mx-auto blur-20"
          style={{
            width: '900px',
            height: '390px',
            gap: '20px',
            opacity: 1,
            borderTopLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            borderWidth: '1px',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderStyle: 'solid',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            행사개요
          </h2>

          {/* 행사 정보 */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <div 
                className="text-center mr-8"
                style={{
                  width: '120px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  gap: '8px',
                  opacity: 1,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF33',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <span className="text-white text-lg font-medium">행사명</span>
              </div>
              <div className="text-white text-lg font-medium text-center flex-1">제8회 디지털 이코노미 포럼</div>
            </li>
            
            <li className="flex items-center">
              <div 
                className="text-center mr-8"
                style={{
                  width: '120px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  gap: '8px',
                  opacity: 1,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF33',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <span className="text-white text-lg font-medium">주제</span>
              </div>
              <div className="text-white text-lg font-medium text-center flex-1">미정</div>
            </li>
            
            <li className="flex items-center">
              <div 
                className="text-center mr-8"
                style={{
                  width: '120px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  gap: '8px',
                  opacity: 1,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF33',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <span className="text-white text-lg font-medium">일시</span>
              </div>
              <div className="text-white text-lg font-medium text-center flex-1">2025년 10월 20일 월요일</div>
            </li>
            
            <li className="flex items-center">
              <div 
                className="text-center mr-8"
                style={{
                  width: '120px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  gap: '8px',
                  opacity: 1,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF33',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <span className="text-white text-lg font-medium">장소</span>
              </div>
              <div className="text-white text-lg font-medium text-center flex-1">인스파이어 엔터테인먼트 리조트</div>
            </li>
            
            <li className="flex items-center">
              <div 
                className="text-center mr-8"
                style={{
                  width: '120px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  gap: '8px',
                  opacity: 1,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF33',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
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
    </div>
  );
}
