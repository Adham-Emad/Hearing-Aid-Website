"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { EditableText } from "@/components/editable-text"
import type { SiteContent } from "@/lib/types"

interface HeroSectionProps {
  content: SiteContent["hero"]
  isAdmin: boolean
  onEdit?: (field: keyof SiteContent["hero"], value: string) => void
}

export function HeroSection({ content, isAdmin, onEdit }: HeroSectionProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products")
    productsSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-medical-technology-background-soft-blue-gra.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <EditableText
            value={content.title}
            onChange={(value) => onEdit?.("title", value)}
            isAdmin={isAdmin}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground text-balance"
            placeholder="Enter hero title"
          />

          <EditableText
            value={content.subtitle}
            onChange={(value) => onEdit?.("subtitle", value)}
            isAdmin={isAdmin}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance"
            multiline
            placeholder="Enter hero subtitle"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-base lg:text-lg px-8 group" onClick={scrollToProducts}>
              <EditableText
                value={content.cta}
                onChange={(value) => onEdit?.("cta", value)}
                isAdmin={isAdmin}
                className="text-primary-foreground"
                placeholder="CTA text"
              />
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base lg:text-lg px-8 bg-transparent"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
