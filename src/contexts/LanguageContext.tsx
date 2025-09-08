'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, defaultLanguage } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ko;
  isInitialized: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // 저장된 언어 설정이 있는지 먼저 확인
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && translations[savedLanguage]) {
          setLanguage(savedLanguage);
          setIsInitialized(true);
          return;
        }

        // 브라우저 언어 설정 자동 감지
        const detectBrowserLanguage = (): Language => {
          const supportedLanguages = Object.keys(translations) as Language[];
          
          // 사용자의 언어 선호도 순서대로 확인
          const userLanguages = navigator.languages || [navigator.language];
          
          // 디버깅을 위한 로그 (개발 환경에서만)
          if (process.env.NODE_ENV === 'development') {
            console.log('🌐 Browser languages detected:', userLanguages);
            console.log('📋 Supported languages:', supportedLanguages);
          }
          
          for (const userLang of userLanguages) {
            // 정확한 언어 코드 매칭 (예: 'ko-KR' -> 'ko', 'en-US' -> 'en')
            const langCode = userLang.toLowerCase().split('-')[0] as Language;
            
            if (supportedLanguages.includes(langCode)) {
              if (process.env.NODE_ENV === 'development') {
                console.log(`✅ Language matched: ${userLang} -> ${langCode}`);
              }
              return langCode;
            }
          }
          
          // 특별한 경우들 처리
          for (const userLang of userLanguages) {
            const lowerLang = userLang.toLowerCase();
            
            // 한국어 변형들 처리
            if (lowerLang.includes('ko') || lowerLang.includes('korean')) {
              return 'ko';
            }
            
            // 영어 변형들 처리
            if (lowerLang.includes('en') || lowerLang.includes('english')) {
              return 'en';
            }
          }
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`⚠️ No matching language found, using default: ${defaultLanguage}`);
          }
          
          // 지원하지 않는 언어인 경우 기본 언어 반환
          return defaultLanguage;
        };

        const detectedLanguage = detectBrowserLanguage();
        setLanguage(detectedLanguage);
        
        // 감지된 언어를 localStorage에 저장
        localStorage.setItem('language', detectedLanguage);
        
      } catch (error) {
        console.error('Language detection failed:', error);
        setLanguage(defaultLanguage);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeLanguage();
  }, []);

  useEffect(() => {
    // 언어 변경 시 localStorage에 저장
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
