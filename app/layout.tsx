import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo Lux ",
  description: "Deals on Luxury items",
    icons: {
    icon: "public/images/brand assets/Leo Luxe Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {" "}
          <Link href={"/."}> Home </Link>
          <Link href={"/Product"}> Product </Link>
          <Link href={"/Contact"}> Contact </Link>
          <Link href={"/About"}> About Us </Link>
        
        </div>
        
        {children}
      </body>
    </html>
  );
}
