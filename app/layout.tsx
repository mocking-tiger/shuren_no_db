import type { Metadata } from "next";
import { Geist, Geist_Mono, Gowun_Batang, Shippori_Mincho, Yuji_Syuku } from "next/font/google";
import "./globals.css";

// next.js 기본
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// next.js 기본
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shuren - 修錬(形容詞)",
  description: "일본어 단어 학습 서비스",
};

// ハングル用 - メインコンテンツ
const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  variable: "--font-gowun-batang",
  subsets: ["latin"],
});

// 日本語 - メインコンテンツ
const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
});

// 制題/ロゴ用 - 強い筆文字 (日本語漢字サポート)
const yujiSyuku = Yuji_Syuku({
  weight: "400",
  variable: "--font-yuji-syuku",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${yujiSyuku.variable} h-full antialiased`}
    >
      <body>
        <div className="bg-[url('/images/bg/shoji.jpg')] bg-cover bg-center flex items-center justify-center">
          <main className="w-[90%] md:w-[70%] h-screen bg-[url('/images/bg/hanji.jpg')] overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
