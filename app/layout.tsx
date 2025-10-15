import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { AdminModeProvider } from "@/lib/admin-mode-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Al-Barakat Hearing Care Centers - Advanced Hearing Solutions",
  description:
    "Experience life in perfect sound with our advanced hearing solutions. Expert audiologists, premium technology, and personalized care.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <AdminModeProvider>
            <Suspense fallback={<div>Loading...</div>}>
              {children}
              <Analytics />
            </Suspense>
          </AdminModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
