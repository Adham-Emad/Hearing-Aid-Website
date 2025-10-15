import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Heart, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Al-Barakat Hearing Care</h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to improving lives through better hearing since 2010. We're your trusted partner in hearing
              health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2010, Al-Barakat Hearing Care Centers has been at the forefront of hearing healthcare in
                Saudi Arabia. What started as a single clinic in Riyadh has grown into a network of four
                state-of-the-art centers across the Kingdom.
              </p>
              <p>
                Our journey began with a simple mission: to provide world-class hearing care that combines cutting-edge
                technology with compassionate, personalized service. Today, we've helped thousands of individuals
                rediscover the joy of clear hearing and improved quality of life.
              </p>
              <p>
                We partner with leading international hearing aid manufacturers like Signia and Rexton to bring you the
                latest innovations in hearing technology. Our team of certified audiologists undergoes continuous
                training to stay at the forefront of hearing care practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Al-Barakat Hearing Care.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  We treat every patient with empathy, respect, and genuine care.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for the highest standards in everything we do.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  We work together with our patients to achieve the best outcomes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We embrace the latest technology to deliver superior care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Locations</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Expert Audiologists</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Experience the Al-Barakat Difference</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Join thousands of satisfied patients who have improved their hearing and quality of life with our expert
              care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
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
