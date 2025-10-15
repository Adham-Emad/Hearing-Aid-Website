"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { products as staticProducts, productCategories, brands, accessories } from "@/lib/hearing-data"
import { getStoredProducts } from "@/lib/content-store"
import { useEffect, useState } from "react"

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState<any[]>(staticProducts)

  useEffect(() => {
    const storedProducts = getStoredProducts()
    setAllProducts([...staticProducts, ...storedProducts])
  }, [])

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up">Our Products</h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Discover our comprehensive range of hearing solutions from world-leading brands. Find the perfect hearing
              aid for your lifestyle and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <TabsList>
                <TabsTrigger value="all" className="transition-all duration-300">
                  All Products
                </TabsTrigger>
                <TabsTrigger value="signia" className="transition-all duration-300">
                  Signia
                </TabsTrigger>
                <TabsTrigger value="rexton" className="transition-all duration-300">
                  Rexton
                </TabsTrigger>
                <TabsTrigger value="accessories" className="transition-all duration-300">
                  Accessories
                </TabsTrigger>
              </TabsList>
              <Button
                variant="outline"
                size="sm"
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="secondary" className="transition-all duration-300 group-hover:scale-105">
                          {brands.find((b) => b.id === product.brand)?.name || product.brand}
                        </Badge>
                        <Badge variant="outline" className="transition-all duration-300 group-hover:scale-105">
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                        {product.name}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{product.price}</span>
                        <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                          <Link href={`/products/${product.id}`}>
                            Learn More{" "}
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="signia" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allProducts
                  .filter((p) => p.brand === "signia")
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <Badge variant="secondary" className="transition-all duration-300 group-hover:scale-105">
                            Signia
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                          {product.name}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">{product.price}</span>
                          <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                            <Link href={`/products/${product.id}`}>
                              Learn More{" "}
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="rexton" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allProducts
                  .filter((p) => p.brand === "rexton")
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <Badge variant="secondary" className="transition-all duration-300 group-hover:scale-105">
                            Rexton
                          </Badge>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                          {product.name}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">{product.price}</span>
                          <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                            <Link href={`/products/${product.id}`}>
                              Learn More{" "}
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="accessories" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {accessories.map((accessory, index) => (
                  <Card
                    key={accessory.id}
                    className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                        <img
                          src={accessory.image || "/placeholder.svg"}
                          alt={accessory.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-primary">
                        {accessory.name}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">{accessory.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent transition-all duration-300 hover:scale-105"
                      >
                        <Link href="/booking">Contact to Order</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold">Browse by Category</h2>
            <p className="text-muted-foreground">Find the perfect hearing aid style for your needs</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                    <Link href={`/products/category/${category.id}`}>
                      View Products{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:shadow-2xl">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Need Help Choosing?</h2>
              <p className="mb-6 text-lg opacity-90">
                Our expert audiologists are here to help you find the perfect hearing solution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/booking">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 hover:scale-105"
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
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/hearing-test"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Hearing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hearing-health"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Hearing Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+20 1021454545</li>
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
