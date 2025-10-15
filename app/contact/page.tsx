"use client"

import type React from "react"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { branches } from "@/lib/branches-data"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+966 XX XXX XXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" required placeholder="How can we help you?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required placeholder="Tell us more about your inquiry..." rows={5} />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={submitted}>
                      {submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're committed to providing exceptional hearing care. Contact us through any of our branches or use
                  the form to send us a message.
                </p>
              </div>

              {/* Branch Locations */}
              <div className="space-y-4">
                {branches.map((branch) => (
                  <Card key={branch.id}>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-lg font-semibold">{branch.city} Branch</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <a href={`mailto:${branch.email}`} className="text-primary hover:underline">
                            {branch.email}
                          </a>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Contact Methods */}
              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold">Emergency Support</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    For urgent hearing aid repairs or technical support:
                  </p>
                  <p className="text-lg font-semibold text-primary">+966 800 123 4567</p>
                  <p className="mt-2 text-xs text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Al-Barakat Hearing Care Centers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
