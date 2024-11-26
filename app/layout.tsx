import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animations.css"
import Navbar from "./components/navbar/Navbar";
import DustCloud from "./components/dustcloud/DustCloud";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code2Steps",
  description: "Apps and Web Develpment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Navbar/>
        <DustCloud />
        {children}
      </body>
    </html>
  );
}
