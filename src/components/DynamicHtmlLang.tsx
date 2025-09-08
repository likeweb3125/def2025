'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export default function DynamicHtmlLang() {
  const { language, isInitialized } = useLanguage();

  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  return null;
}