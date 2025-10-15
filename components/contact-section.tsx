"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EditableText } from "@/components/editable-text"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { SiteContent } from "@/lib/types"

interface ContactSectionProps {
  content: SiteContent["contact"]
  isAdmin: boolean
  onEdit?: (field: keyof SiteContent["contact"], value: string) => void
}

export function ContactSection({ content, isAdmin, onEdit }: ContactSectionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully! We'll get back to you soon.",
        })
        // Clear form
        setName("")
        setEmail("")
        setMessage("")
      } else {
        if (data.setupRequired) {
          toast({
            title: "Email Setup Required",
            description: "Please add RESEND_API_KEY to environment variables. Get your free API key at resend.com",
            variant: "destructive",
          })
        } else {
          toast({
            title: "Error",
            description: data.error || "Failed to send message. Please try again.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <EditableText
              value={content.title}
              onChange={(value) => onEdit?.("title", value)}
              isAdmin={isAdmin}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
              placeholder="Contact section title"
            />
            <EditableText
              value={content.subtitle}
              onChange={(value) => onEdit?.("subtitle", value)}
              isAdmin={isAdmin}
              className="text-lg text-muted-foreground text-balance"
              multiline
              placeholder="Contact section subtitle"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <EditableText
                    value={content.phone}
                    onChange={(value) => onEdit?.("phone", value)}
                    isAdmin={isAdmin}
                    className="text-muted-foreground"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <EditableText
                    value={content.email}
                    onChange={(value) => onEdit?.("email", value)}
                    isAdmin={isAdmin}
                    className="text-muted-foreground"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Address</h3>
                  <EditableText
                    value={content.address}
                    onChange={(value) => onEdit?.("address", value)}
                    isAdmin={isAdmin}
                    className="text-muted-foreground whitespace-pre-line"
                    multiline
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
