'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className="relative z-50">
      <div className="flex">
        {/* 왼쪽 로고 블록 */}
        <div className="bg-blue-800 px-8 py-6 rounded-br-2xl relative">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logos/logo.png" 
              alt="DEF 2025 Logo" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* 오른쪽 네비게이션 바 */}
        <div className="bg-white flex-1 flex items-center justify-between px-8 py-6">
          {/* 메인 네비게이션 */}
          <nav className="flex space-x-8 items-center">
            {/* 행사소개 */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('eventIntro')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/event-overview" 
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith('/event-overview') || pathname === '/'
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                {t.nav.eventIntro}
              </Link>
              {activeDropdown === 'eventIntro' && (
                <div 
                  className="absolute top-full left-0 w-48 bg-blue-600 rounded-md shadow-lg z-50"
                  onMouseEnter={() => handleMouseEnter('eventIntro')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    <Link 
                      href="/event-overview" 
                      className="block px-4 py-2 text-white hover:bg-blue-700 text-sm"
                    >
                      {t.nav.eventOverview}
                    </Link>
                    <Link 
                      href="/past-events" 
                      className="block px-4 py-2 text-white hover:bg-blue-700 text-sm"
                    >
                      {t.nav.pastEvents}
                    </Link>
                    <Link 
                      href="/location" 
                      className="block px-4 py-2 text-white hover:bg-blue-700 text-sm"
                    >
                      {t.nav.directions}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 프로그램 */}
            <Link 
              href="/program" 
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/program')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              {t.nav.program}
            </Link>



            {/* 연사 */}
            <Link 
              href="/speakers" 
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith('/speakers')
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              {t.nav.speakers}
            </Link>

            {/* 참가등록 */}
            <a 
              href="https://naver.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              {t.nav.registration}
            </a>
          </nav>

          {/* 언어 선택 */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span>{language === 'ko' ? t.common.kor : t.common.eng}</span>
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg border z-50">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setLanguage('ko');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${
                      language === 'ko' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                    }`}
                  >
                    {t.common.kor}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${
                      language === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                    }`}
                  >
                    {t.common.eng}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
