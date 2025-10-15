import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { products, productCategories, brands } from "@/lib/hearing-data"
import { notFound } from "next/navigation"

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = productCategories.find((c) => c.id === params.id)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.category === params.id)

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-muted/50 py-12 md:py-16">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{category.name}</h1>
            <p className="text-lg text-muted-foreground">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {categoryProducts.length > 0 ? (
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{brands.find((b) => b.id === product.brand)?.name}</Badge>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{product.price}</span>
                      <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                        <Link href={`/products/${product.id}`}>
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
              <Button asChild className="mt-4 bg-transparent" variant="outline">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Need Help Choosing?</h2>
              <p className="mb-6 text-lg opacity-90">
                Our expert audiologists are here to help you find the perfect hearing solution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/booking">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Al-Barakat Hearing Care</h3>
              <p className="text-sm text-muted-foreground">Your trusted partner in hearing health and wellness.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/hearing-test" className="text-muted-foreground hover:text-foreground">
                    Hearing Test
                  </Link>
                </li>
                <li>
                  <Link href="/hearing-health" className="text-muted-foreground hover:text-foreground">
                    Hearing Health
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+966 12 345 6789</li>
                <li>info@albarakat-hearing.com</li>
                <li>Sun-Thu: 9AM-8PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Al-Barakat Hearing Care Centers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
