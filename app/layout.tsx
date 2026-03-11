import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "每日科技趋势 · GitHub Trending & Product Hunt",
  description: "每天自动同步 GitHub Trending 和 Product Hunt 热榜",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-white text-[#37352f]`}>
        {children}
      </body>
    </html>
  );
}
