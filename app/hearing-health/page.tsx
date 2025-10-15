import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Ear, Brain, Volume2, AlertCircle } from "lucide-react"

const topics = [
  {
    id: "how-we-hear",
    icon: Ear,
    title: "How We Hear",
    description: "Understanding the complex process of hearing and how sound travels through your ear.",
    href: "/hearing-health/how-we-hear",
  },
  {
    id: "hearing-loss",
    icon: Volume2,
    title: "Hearing Loss",
    description: "Learn about types, causes, and signs of hearing loss and when to seek help.",
    href: "/hearing-health/hearing-loss",
  },
  {
    id: "tinnitus",
    icon: AlertCircle,
    title: "Tinnitus",
    description: "Understanding ringing in the ears and effective management strategies.",
    href: "/hearing-health/tinnitus",
  },
  {
    id: "prevention",
    icon: Brain,
    title: "Prevention & Care",
    description: "Tips for protecting your hearing and maintaining good hearing health.",
    href: "/hearing-health/prevention",
  },
]

export default function HearingHealthPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Your Hearing Health</h1>
            <p className="text-lg text-muted-foreground">
              Learn about hearing, hearing loss, and how to protect and improve your hearing health.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon
              return (
                <Card key={topic.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href={topic.href}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Concerned About Your Hearing?</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Take our free online hearing test or schedule a consultation with our experts.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/hearing-test">Take Free Hearing Test</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>
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
