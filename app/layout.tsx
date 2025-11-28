import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";


import localFont from "next/font/local";



const montserrat = localFont({
  src: [
    {
      // path is relative to app/layout.tsx
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "100 900", // variable font range
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "LEO LUXE INC",
  description: "Deals on Luxury items",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable} 
          font-sans antialiased text-base sm:text-xs md:text-lg lg:text-2xl
          `}

      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
