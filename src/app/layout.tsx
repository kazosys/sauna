import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "古民家サウナ 和蒸 | 築100年の古民家で過ごす極上のサウナ体験",
  description: "築100年の古民家を改装した本格サウナ施設。薪サウナ、天然水風呂、外気浴スペースで心身ともにととのう贅沢な時間をお過ごしください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
