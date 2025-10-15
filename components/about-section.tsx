"use client"

import { EditableText } from "@/components/editable-text"
import type { SiteContent } from "@/lib/types"
import { Heart, Shield, Sparkles, Users } from "lucide-react"

interface AboutSectionProps {
  content: SiteContent["about"]
  isAdmin: boolean
  onEdit?: (field: keyof SiteContent["about"] | string, value: string) => void
}

export function AboutSection({ content, isAdmin, onEdit }: AboutSectionProps) {
  const icons = [Heart, Sparkles, Shield, Users]

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <EditableText
            value={content.title}
            onChange={(value) => onEdit?.("title", value)}
            isAdmin={isAdmin}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
            placeholder="Section title"
          />

          <EditableText
            value={content.description}
            onChange={(value) => onEdit?.("description", value)}
            isAdmin={isAdmin}
            className="text-lg text-muted-foreground text-balance"
            multiline
            placeholder="Section description"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <EditableText
                  value={feature.title}
                  onChange={(value) => onEdit?.(`features.${index}.title`, value)}
                  isAdmin={isAdmin}
                  className="text-xl font-semibold mb-2"
                  placeholder="Feature title"
                />
                <EditableText
                  value={feature.description}
                  onChange={(value) => onEdit?.(`features.${index}.description`, value)}
                  isAdmin={isAdmin}
                  className="text-sm text-muted-foreground"
                  multiline
                  placeholder="Feature description"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
