"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const switchLanguage = (lang: "en" | "ar") => {
    setLanguage(lang)
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="transition-all duration-300 hover:scale-105">
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{language === "en" ? "English" : "العربية"}</span>
          <span className="sm:hidden">{language === "en" ? "EN" : "AR"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className="cursor-pointer">
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ar")} className="cursor-pointer">
          <span className="mr-2">🇸🇦</span>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
