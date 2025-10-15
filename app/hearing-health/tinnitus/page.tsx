"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function TinnitusPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("understandingTinnitus")}</h1>
            <p className="text-lg text-muted-foreground">{t("tinnitusSubtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("whatIsTinnitus")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("tinnitusDesc1")}</p>
                  <p>{t("tinnitusDesc2")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("commonCauses")}</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause4")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause5")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("tinnitusCause6")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("managementStrategies")}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("soundTherapy")}</h3>
                    <p className="text-muted-foreground">{t("soundTherapyDesc")}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("hearingAids")}</h3>
                    <p className="text-muted-foreground">{t("hearingAidsDesc")}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("counseling")}</h3>
                    <p className="text-muted-foreground">{t("counselingDesc")}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("lifestyleChanges")}</h3>
                    <p className="text-muted-foreground">{t("lifestyleDesc")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">{t("whenToSeekHelp")}</h2>
                <p className="mb-4 text-muted-foreground">{t("seekHelpDesc")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("seekHelp1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("seekHelp2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("seekHelp3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("seekHelp4")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t("seekHelp5")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("getProfessionalHelp")}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{t("professionalHelpDesc")}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/booking">{t("bookConsultation")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/hearing-test">{t("takeFreeHearingTest")}</Link>
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
