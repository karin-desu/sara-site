"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function Header() {
  const [language, setLanguage] = useState("EN")

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "JP" : "EN")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EDE9F6]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#5E4B8B]">
          Japan Hair Salon Finder
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="bg-white text-[#5E4B8B] border-[#C8BFE7] hover:bg-[#EDE9F6]"
          >
            <Globe className="w-4 h-4 mr-1" />
            {language}
          </Button>

          <Link href="/for-salon/contact" className="text-sm text-[#5E4B8B] hover:text-[#C8BFE7] transition-colors">
            掲載依頼・お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  )
}
