"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function HearingLossPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("understandingHearingLoss")}</h1>
            <p className="text-lg text-muted-foreground">{t("hearingLossSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("typesOfHearingLoss")}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("sensorineuralHearingLoss")}</h3>
                    <p className="text-muted-foreground">{t("sensorineuralDesc")}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("conductiveHearingLoss")}</h3>
                    <p className="text-muted-foreground">{t("conductiveDesc")}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("mixedHearingLoss")}</h3>
                    <p className="text-muted-foreground">{t("mixedDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("commonCauses")}</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("ageRelatedCause")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("noiseExposureCause")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("earInfectionsCause")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("geneticsCause")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("medicationsCause")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("headTraumaCause")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">{t("warningSigns")}</h2>
                    <p className="mb-4 text-muted-foreground">{t("warningSignsDesc")}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign1")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign2")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign3")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign4")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign5")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{t("warningSign6")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("treatmentOptions")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("treatmentDesc")}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("feature3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("feature4")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("takeActionToday")}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{t("takeActionDesc")}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/hearing-test">{t("takeFreeHearingTest")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/booking">{t("bookConsultation")}</Link>
              </Button>
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
