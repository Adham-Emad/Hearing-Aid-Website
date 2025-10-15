import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Volume2, Headphones, Activity } from "lucide-react"

export default function PreventionPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hearing Prevention & Care</h1>
            <p className="text-lg text-muted-foreground">
              Protect your hearing and maintain good hearing health with these essential tips and practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Protect from Loud Noise</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Noise-induced hearing loss is preventable. Follow these guidelines:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Wear ear protection in noisy environments (concerts, construction sites, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Follow the 60/60 rule: Listen at no more than 60% volume for no more than 60 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Take breaks from loud environments to give your ears time to recover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Keep a safe distance from loud speakers and sound sources</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Headphones className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Safe Headphone Use</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Headphones and earbuds can damage hearing if used improperly:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Choose over-ear headphones instead of in-ear earbuds when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Use noise-canceling headphones to avoid turning up volume in noisy environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>If others can hear your music, it's too loud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Take regular listening breaks</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Maintain Overall Health</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your general health affects your hearing health:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Exercise regularly to improve blood flow to the ears</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Manage chronic conditions like diabetes and high blood pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Avoid smoking, which can damage blood vessels in the ear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Eat a balanced diet rich in vitamins and minerals</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Regular Hearing Checks</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Early detection is key to preventing further hearing loss:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Get your hearing tested annually, especially if you're over 50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Schedule immediate testing if you notice any changes in your hearing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Keep track of your hearing health over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>Address hearing problems early for better outcomes</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">Ear Care Tips</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      Never insert cotton swabs or other objects into your ear canal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Keep ears dry to prevent infections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Have earwax removed professionally if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Treat ear infections promptly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Check Your Hearing Today</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Take our free online hearing test to establish a baseline for your hearing health.
            </p>
            <Button asChild size="lg">
              <Link href="/hearing-test">Take Free Hearing Test</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Al-Barakat Hearing Care Centers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
