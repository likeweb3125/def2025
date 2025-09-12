import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageLoader from "@/components/LanguageLoader";
import DynamicHtmlLang from "@/components/DynamicHtmlLang";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import AOSInitializer from "@/components/common/AOSInitializer";

export const metadata: Metadata = {
  title: "DEF2025",
  description: "Digital Economy Forum",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      url: "/favicon/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      url: "/favicon/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      url: "/favicon/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      url: "/favicon/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      url: "/favicon/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "/favicon/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/manifest.json",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${montserrat.variable} antialiased bg-white`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <DynamicHtmlLang />
            <LanguageLoader>
              <AOSInitializer>
                <Header />
                <main className="min-h-screen bg-white">{children}</main>
                <Footer />
              </AOSInitializer>
            </LanguageLoader>
            <LoadingSpinner />
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
