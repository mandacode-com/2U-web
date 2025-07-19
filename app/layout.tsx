import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookieRun } from "@/lib/fonts/fonts";
import ClientFontLoader from "@/components/client-font-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2U",
  description: "기쁨을 나누는 공간 2U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cookieRun.className} antialiased`}
      >
        <ClientFontLoader />
        {children}
      </body>
    </html>
  );
}
