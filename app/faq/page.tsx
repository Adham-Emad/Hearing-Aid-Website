import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MessageCircle, HelpCircle, Volume2, Battery, Settings, Shield } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Barakat Hearing Care",
  description: "Find answers to common questions about hearing aids, hearing loss, and our services.",
}

const faqCategories = [
  {
    icon: HelpCircle,
    title: "General Questions",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    questions: [
      {
        q: "What is a hearing aid?",
        a: "A hearing aid is a small electronic device worn in or behind your ear that amplifies sound. It consists of a microphone, amplifier, and speaker that work together to make sounds louder and clearer for people with hearing loss.",
      },
      {
        q: "How do I know if I need a hearing aid?",
        a: "Common signs include difficulty understanding conversations, asking people to repeat themselves, turning up the TV volume, and struggling to hear in noisy environments. We recommend taking our free online hearing test or scheduling a professional evaluation.",
      },
      {
        q: "Are hearing aids covered by insurance?",
        a: "Coverage varies by insurance provider and plan. Some plans cover part or all of the cost. We recommend checking with your insurance provider and our team can help you understand your benefits.",
      },
      {
        q: "How long do hearing aids last?",
        a: "With proper care and maintenance, hearing aids typically last 3-7 years. Regular cleaning, battery replacement, and professional servicing can extend their lifespan.",
      },
    ],
  },
  {
    icon: Volume2,
    title: "Hearing Aid Features",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    questions: [
      {
        q: "What are the different types of hearing aids?",
        a: "Main types include Behind-The-Ear (BTE), In-The-Ear (ITE), In-The-Canal (ITC), Completely-In-Canal (CIC), and Receiver-In-Canal (RIC). Each type has unique benefits depending on your hearing loss level and lifestyle.",
      },
      {
        q: "Do hearing aids have Bluetooth connectivity?",
        a: "Yes, many modern hearing aids feature Bluetooth connectivity, allowing you to stream phone calls, music, and TV audio directly to your hearing aids from compatible devices.",
      },
      {
        q: "Can hearing aids reduce background noise?",
        a: "Advanced hearing aids feature noise reduction technology that automatically adjusts to different environments, reducing background noise while enhancing speech clarity.",
      },
      {
        q: "Are hearing aids waterproof?",
        a: "Most modern hearing aids are water-resistant, meaning they can handle moisture from sweat or light rain. However, they should not be submerged in water. Always check your specific model's rating.",
      },
    ],
  },
  {
    icon: Battery,
    title: "Maintenance & Care",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    questions: [
      {
        q: "How often should I replace hearing aid batteries?",
        a: "Disposable batteries typically last 3-14 days depending on usage and hearing aid type. Rechargeable hearing aids need charging daily and batteries last 3-5 years before replacement.",
      },
      {
        q: "How do I clean my hearing aids?",
        a: "Clean daily with a soft, dry cloth. Use a wax pick or brush to remove debris from openings. Never use water, cleaning fluids, or alcohol. Store in a dry case when not in use.",
      },
      {
        q: "What should I do if my hearing aid stops working?",
        a: "First, check the battery, clean any wax buildup, and ensure it's not on mute. If issues persist, contact us for professional troubleshooting and repair services.",
      },
      {
        q: "How often should I have my hearing aids serviced?",
        a: "We recommend professional cleaning and check-ups every 3-6 months to ensure optimal performance and longevity of your devices.",
      },
    ],
  },
  {
    icon: Settings,
    title: "Fitting & Adjustment",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    questions: [
      {
        q: "How long does it take to adjust to new hearing aids?",
        a: "Most people adjust within 2-4 weeks. Your brain needs time to relearn processing sounds. Start by wearing them a few hours daily and gradually increase usage.",
      },
      {
        q: "Can hearing aids be adjusted after purchase?",
        a: "Yes, hearing aids can and should be adjusted as needed. We offer follow-up appointments to fine-tune settings based on your feedback and changing needs.",
      },
      {
        q: "Will hearing aids restore my hearing to normal?",
        a: 'Hearing aids significantly improve hearing but don\'t restore it to "normal." They amplify sounds to help you hear better in various situations, improving quality of life.',
      },
      {
        q: "Can I try hearing aids before buying?",
        a: "Yes, we offer trial periods so you can experience hearing aids in your daily life before making a commitment. Contact us to learn about our trial program.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 animate-float">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Find answers to common questions about hearing aids, hearing loss, and our services. Can't find what
              you're looking for? Contact our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIndex}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div className={`rounded-xl ${category.bgColor} p-3 transition-transform hover:scale-110`}>
                      <Icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${categoryIndex}-${index}`}
                        className="rounded-lg border bg-card px-6 shadow-sm transition-all hover:shadow-md"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden border-2 bg-gradient-to-br from-primary/5 to-teal-500/5 animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Still Have Questions?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Our hearing care specialists are here to help. Contact us for personalized answers and expert guidance
                  on your hearing health journey.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group bg-transparent">
                    <a href="https://wa.me/201021454545">
                      <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group bg-transparent">
                    <a href="tel:+201021454545">
                      <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">Helpful Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-all hover:shadow-lg animate-fade-in-up">
              <CardContent className="p-6">
                <Shield className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Hearing Test</h3>
                <p className="mb-4 text-muted-foreground">
                  Take our free online hearing test to assess your hearing health.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/hearing-test">Take Test →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className="group transition-all hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6">
                <Volume2 className="mb-4 h-10 w-10 text-teal-600 transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Our Products</h3>
                <p className="mb-4 text-muted-foreground">Explore our range of advanced hearing aid solutions.</p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/products">View Products →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className="group transition-all hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <HelpCircle className="mb-4 h-10 w-10 text-amber-600 transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Blog & Articles</h3>
                <p className="mb-4 text-muted-foreground">Read expert insights on hearing health and care tips.</p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/blog">Read Blog →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
