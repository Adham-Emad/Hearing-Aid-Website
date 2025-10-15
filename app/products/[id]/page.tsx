import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Check, Phone, Calendar } from "lucide-react"
import { products, brands } from "@/lib/hearing-data"
import { getStoredProducts } from "@/lib/content-store"
import { notFound } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const storedProducts = getStoredProducts()
  const allProducts = [...products, ...storedProducts]
  const product = allProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const brand = brands.find((b) => b.id === product.brand)

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="secondary" className="text-base">
                {brand?.name || "Unknown Brand"}
              </Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">{product.description}</p>

            <div className="mb-6">
              <p className="text-2xl font-semibold text-primary">{product.price}</p>
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="flex-1">
                <Link href="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {product.features && product.features.length > 0 && (
              <>
                <Separator className="my-6" />
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {product.specifications && (
              <>
                <Separator className="my-6" />
                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Specifications</h2>
                  <dl className="space-y-3">
                    {product.specifications.batteryLife && (
                      <div className="flex justify-between">
                        <dt className="font-medium">Battery Life:</dt>
                        <dd className="text-muted-foreground">{product.specifications.batteryLife}</dd>
                      </div>
                    )}
                    {product.specifications.connectivity && (
                      <div className="flex justify-between">
                        <dt className="font-medium">Connectivity:</dt>
                        <dd className="text-muted-foreground">{product.specifications.connectivity}</dd>
                      </div>
                    )}
                    {product.specifications.waterResistance && (
                      <div className="flex justify-between">
                        <dt className="font-medium">Water Resistance:</dt>
                        <dd className="text-muted-foreground">{product.specifications.waterResistance}</dd>
                      </div>
                    )}
                    {product.specifications.colors && product.specifications.colors.length > 0 && (
                      <div className="flex justify-between">
                        <dt className="font-medium">Available Colors:</dt>
                        <dd className="text-muted-foreground">{product.specifications.colors.join(", ")}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Book a free consultation with our expert audiologists to try this device.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">Warranty & Support</h3>
              <p className="text-sm text-muted-foreground">
                All devices come with manufacturer warranty and lifetime support from our team.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-semibold">Flexible Payment</h3>
              <p className="text-sm text-muted-foreground">
                We work with insurance providers and offer flexible payment options.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
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
