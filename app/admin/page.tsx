"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { checkAdminAuth, setAdminAuth, validateAdminPassword } from "@/lib/admin-auth"
import { LogOut, Settings, FileText, Package, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { useAdminMode } from "@/lib/admin-mode-context"

export default function AdminPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const { setAdminMode } = useAdminMode()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setIsAuthenticated(checkAdminAuth())
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateAdminPassword(password)) {
      setAdminAuth(true)
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password. Try: admin123")
    }
  }

  const handleLogout = () => {
    setAdminAuth(false)
    setIsAuthenticated(false)
    router.push("/")
  }

  const handleEditContent = () => {
    setAdminMode(true)
    router.push("/")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/50">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>{t("adminLogin")}</CardTitle>
            <CardDescription>{t("adminLoginDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("enterPassword")}
                  autoFocus
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground">{t("defaultPassword")}</p>
              </div>
              <Button type="submit" className="w-full">
                {t("login")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="mb-2 text-4xl font-bold">{t("adminDashboard")}</h1>
              <p className="text-lg text-muted-foreground">{t("dashboardDesc")}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              {t("logout")}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("editContent")}</CardTitle>
                <CardDescription>{t("editContentDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleEditContent} className="w-full">
                  {t("editContent")}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Package className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>{t("manageProducts")}</CardTitle>
                <CardDescription>{t("manageProductsDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin/products">{t("manageProducts")}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Manage Brands</CardTitle>
                <CardDescription>Add, edit, or remove trusted brands</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin/brands">Manage Brands</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{t("settings")}</CardTitle>
                <CardDescription>{t("settingsDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/admin/settings">{t("viewSettings")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold">How to Edit Website Content</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Click "Edit Content" to enter inline editing mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">2.</span>
                  <span>
                    Navigate through your website normally - you'll see edit icons (pencil) next to every text element
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Hover over any text to reveal the edit icon, then click it to edit that specific content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">4.</span>
                  <span>
                    Edit any text across all pages including navigation, footer, WhatsApp numbers, buttons, and all
                    content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">5.</span>
                  <span>
                    All changes are saved automatically and will be immediately visible to users on the live website
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary">6.</span>
                  <span>Click "Exit Edit Mode" button (bottom-right) when you're done editing</span>
                </li>
              </ol>
            </CardContent>
          </Card>
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
