'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import MinistryLogo from './MinistryLogo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 섹션 */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* 기획재정부 로고 */}
            <div className="mb-6 lg:mb-0">
              <MinistryLogo />
            </div>
            
            {/* 개인정보처리방침 */}
            <div className="lg:ml-auto">
              <a 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors"
                style={{
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                {t.footer.privacyPolicy}
              </a>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-600"></div>

        {/* 중간 섹션 - 연락처 정보 */}
        <div className="py-8">
          <div className="flex items-start justify-between">
            {/* 좌측 연락처 정보 */}
            <div className="flex space-x-8">
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
                <div className="text-gray-300 text-sm">
                  {t.footer.phone}
                </div>
              </div>

              {/* Mail */}
              <div>
                <div className="text-white font-semibold text-sm mb-2">
                  {t.footer.mail}
                </div>
                <div className="text-gray-300 text-sm">
                  {t.footer.email}
                </div>
              </div>
            </div>
            
            {/* 우측 YouTube 아이콘 */}
            <a 
              href="#" 
              className="bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              aria-label="YouTube"
              style={{
                width: '40px',
                height: '40px',
                opacity: 1
              }}
            >
              <svg className="text-white" fill="currentColor" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 하단 섹션 - 저작권 */}
        <div className="py-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="text-gray-400 text-xs mb-4 sm:mb-0">
              {t.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
