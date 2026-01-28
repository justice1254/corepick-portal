import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "코어픽(CorePick) - 일상의 핵심 정보를 연결하는 포털",
  description: "쇼핑, 실시간 뉴스, MBTI, 게임 등 당신에게 꼭 필요한 도구와 정보를 한곳에서 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6786174407898560" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
