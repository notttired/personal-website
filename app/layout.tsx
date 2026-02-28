import type { Metadata } from "next";
import { Lora, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Max Li",
  description: "Personal website of Max Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${dmSans.variable} ${geistMono.variable} antialiased bg-warm-bg text-warm-ink`}
      >
        <NavBar />
        <main className="mx-auto max-w-2xl px-6 pt-28 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
