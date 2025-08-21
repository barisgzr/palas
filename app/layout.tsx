import type React from "react";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { LayoutWrapper } from "@/components/layout-wrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "GearsofDown - Amazon E-ticaret Uzmanları",
  description:
    "8+ yıllık e-ticaret ve 5 yıllık Amazon deneyimimizle işinizi büyütün. GearsofDown ile Amazon'da başarıya ulaşın.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen bg-gray-50">
        <LanguageProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
