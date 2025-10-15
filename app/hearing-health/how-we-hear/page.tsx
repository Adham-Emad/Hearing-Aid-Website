"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function HowWeHearPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("howWeHear")}</h1>
            <p className="text-lg text-muted-foreground">{t("howWeHearSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("theHearingProcess")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("hearingProcessDesc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("theOuterEar")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("outerEarDesc1")}</p>
                  <p>{t("outerEarDesc2")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("theMiddleEar")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("middleEarDesc1")}</p>
                  <p>{t("middleEarDesc2")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("theInnerEar")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("innerEarDesc1")}</p>
                  <p>{t("innerEarDesc2")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("theBrain")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("brainDesc1")}</p>
                  <p>{t("brainDesc2")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("testYourHearing")}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{t("testYourHearingDesc")}</p>
            <Button asChild size="lg">
              <Link href="/hearing-test">{t("takeFreeHearingTest")}</Link>
            </Button>
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
