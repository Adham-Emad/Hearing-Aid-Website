import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Stethoscope, Settings, Wrench, GraduationCap, HeadphonesIcon, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Comprehensive Hearing Assessments",
    description:
      "Professional hearing evaluations using state-of-the-art equipment to accurately diagnose your hearing health.",
    features: ["Pure tone audiometry", "Speech audiometry", "Tympanometry", "Otoacoustic emissions testing"],
  },
  {
    icon: HeadphonesIcon,
    title: "Hearing Aid Fitting & Programming",
    description:
      "Expert fitting and programming of hearing aids customized to your unique hearing profile and lifestyle needs.",
    features: [
      "Custom ear impressions",
      "Real ear measurements",
      "Fine-tuning and adjustments",
      "Lifestyle-based programming",
    ],
  },
  {
    icon: Settings,
    title: "Device Adjustments & Optimization",
    description: "Regular adjustments to ensure your hearing aids continue to perform optimally as your needs change.",
    features: [
      "Volume and program adjustments",
      "Feedback management",
      "Sound quality optimization",
      "Comfort improvements",
    ],
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance Services",
    description:
      "Professional repair services and preventive maintenance to keep your hearing aids in perfect working condition.",
    features: [
      "In-house repairs",
      "Manufacturer warranty service",
      "Cleaning and maintenance",
      "Loaner devices available",
    ],
  },
  {
    icon: GraduationCap,
    title: "Hearing Aid Training & Support",
    description:
      "Comprehensive training on how to use and care for your hearing aids, plus ongoing support whenever you need it.",
    features: [
      "One-on-one training sessions",
      "Care and maintenance guidance",
      "Troubleshooting assistance",
      "Follow-up appointments",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Tinnitus Management",
    description: "Specialized programs to help manage tinnitus symptoms and improve your quality of life.",
    features: ["Tinnitus assessment", "Sound therapy options", "Counseling and support", "Custom treatment plans"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive hearing care services delivered by certified audiologists using the latest technology and
              best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center text-primary-foreground">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Improve Your Hearing?</h2>
                <p className="mb-6 text-lg opacity-90">
                  Schedule a consultation with our hearing care experts today. We're here to help you hear better and
                  live better.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/booking">Book Appointment</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Link href="/hearing-test">Take Free Hearing Test</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
