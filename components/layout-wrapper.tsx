"use client"

import type React from "react"

import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { useLanguage } from "@/contexts/language-context"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentLang={language} onLanguageChange={setLanguage} />
      <main className="flex-1">{children}</main>
      <Footer currentLang={language} />
    </div>
  )
}
