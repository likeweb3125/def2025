import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageLoader from "@/components/LanguageLoader";
import DynamicHtmlLang from "@/components/DynamicHtmlLang";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js 프로젝트",
  description: "Next.js로 만든 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <DynamicHtmlLang />
            <LanguageLoader>
              <Header />
              <main className="min-h-screen bg-white">{children}</main>
              <Footer />
            </LanguageLoader>
            <LoadingSpinner />
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
