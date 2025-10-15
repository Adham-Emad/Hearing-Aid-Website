"use client"

import type React from "react"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { branches } from "@/lib/branches-data"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function BookingPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a server
    console.log("[v0] Booking form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <MainNavigation />
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <Card className="mx-auto max-w-2xl text-center">
            <CardContent className="pt-12 pb-12">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="mb-4 text-3xl font-bold">{t("thankYou")}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{t("thankYouDesc")}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>{t("selectedBranch")}:</strong> {branches.find((b) => b.id === formData.branch)?.name}
                </p>
                <p>
                  <strong>{t("contactNumber")}:</strong> {branches.find((b) => b.id === formData.branch)?.phone}
                </p>
              </div>
              <div className="mt-8">
                <Button onClick={() => setSubmitted(false)}>{t("bookAnother")}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("bookAnAppointment")}</h1>
            <p className="text-lg text-muted-foreground">{t("bookingSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Booking Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{t("requestAnAppointment")}</CardTitle>
                  <CardDescription>{t("requestDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("fullName")} *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={t("fullName")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t("emailAddress")} *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={t("emailAddress")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder={t("phoneNumber")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="branch">{t("preferredBranch")} *</Label>
                      <Select required value={formData.branch} onValueChange={(value) => handleChange("branch", value)}>
                        <SelectTrigger id="branch">
                          <SelectValue placeholder={t("selectBranch")} />
                        </SelectTrigger>
                        <SelectContent>
                          {branches.map((branch) => (
                            <SelectItem key={branch.id} value={branch.id}>
                              {branch.city} - {branch.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t("serviceNeeded")} *</Label>
                      <Select
                        required
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder={t("selectService")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hearing-test">{t("hearingTestService")}</SelectItem>
                          <SelectItem value="consultation">{t("consultationService")}</SelectItem>
                          <SelectItem value="fitting">{t("fittingService")}</SelectItem>
                          <SelectItem value="adjustment">{t("adjustmentService")}</SelectItem>
                          <SelectItem value="repair">{t("repairService")}</SelectItem>
                          <SelectItem value="purchase">{t("purchaseService")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("additionalInfo")}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder={t("additionalInfoPlaceholder")}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      {t("submitRequest")}
                    </Button>

                    <p className="text-xs text-muted-foreground">{t("requiredFields")}</p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Branch Locations */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold">{t("ourLocations")}</h2>
                <p className="text-muted-foreground">{t("locationsDesc")}</p>
              </div>

              <div className="space-y-4">
                {branches.map((branch) => (
                  <Card key={branch.id}>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-lg font-semibold">{branch.city}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${branch.email}`} className="text-primary hover:underline">
                            {branch.email}
                          </a>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
