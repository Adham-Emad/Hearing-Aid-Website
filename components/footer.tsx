"use client"

import { EditableText } from "@/components/editable-text"
import type { SiteContent } from "@/lib/types"

interface FooterProps {
  content: SiteContent["footer"]
  isAdmin: boolean
  onEdit?: (field: keyof SiteContent["footer"], value: string) => void
}

export function Footer({ content, isAdmin, onEdit }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <EditableText
                value={content.brandName}
                onChange={(value) => onEdit?.("brandName", value)}
                isAdmin={isAdmin}
                className="font-bold text-lg"
                placeholder="Brand name"
              />
            </div>
            <EditableText
              value={content.tagline}
              onChange={(value) => onEdit?.("tagline", value)}
              isAdmin={isAdmin}
              className="text-sm text-muted-foreground"
              multiline
              placeholder="Tagline"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Premium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Compact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Active
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Essential
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <EditableText
            value={content.copyright}
            onChange={(value) => onEdit?.("copyright", value)}
            isAdmin={isAdmin}
            className="text-sm text-muted-foreground"
            placeholder="Copyright text"
          />
        </div>
      </div>
    </footer>
  )
}
