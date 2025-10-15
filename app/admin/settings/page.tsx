"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { checkAdminAuth } from "@/lib/admin-auth"
import { ArrowLeft, Trash2, Download } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AdminSettingsPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = checkAdminAuth()
    setIsAuthenticated(auth)
    if (!auth) {
      router.push("/admin")
    }
  }, [router])

  const handleClearContent = () => {
    if (confirm("Are you sure you want to clear all custom content? This cannot be undone.")) {
      localStorage.removeItem("website_content")
      alert("Content cleared successfully")
      window.location.reload()
    }
  }

  const handleClearProducts = () => {
    if (confirm("Are you sure you want to delete all products? This cannot be undone.")) {
      localStorage.removeItem("website_products")
      alert("Products cleared successfully")
      window.location.reload()
    }
  }

  const handleExportData = () => {
    const content = localStorage.getItem("website_content") || "{}"
    const products = localStorage.getItem("website_products") || "[]"
    const data = {
      content: JSON.parse(content),
      products: JSON.parse(products),
      exportDate: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `website-backup-${Date.now()}.json`
    a.click()
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("backToDashboard")}
            </Link>
          </Button>
          <h1 className="mb-2 text-4xl font-bold">{t("settings")}</h1>
          <p className="text-lg text-muted-foreground">{t("settingsDesc")}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("dataManagement")}</CardTitle>
                <CardDescription>{t("dataManagementDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{t("exportData")}</h4>
                    <p className="text-sm text-muted-foreground">{t("exportDataDesc")}</p>
                  </div>
                  <Button onClick={handleExportData}>
                    <Download className="mr-2 h-4 w-4" />
                    {t("export")}
                  </Button>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <h4 className="font-semibold">{t("clearContent")}</h4>
                    <p className="text-sm text-muted-foreground">{t("clearContentDesc")}</p>
                  </div>
                  <Button variant="destructive" onClick={handleClearContent}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    {t("clearContent")}
                  </Button>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <h4 className="font-semibold">{t("clearProducts")}</h4>
                    <p className="text-sm text-muted-foreground">{t("clearProductsDesc")}</p>
                  </div>
                  <Button variant="destructive" onClick={handleClearProducts}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    {t("clearProducts")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{t("importantNotes")}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("note1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("note2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("note3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("note4")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
