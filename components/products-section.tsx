"use client"

import type { Product, SiteContent } from "@/lib/types"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { EditableText } from "@/components/editable-text"

interface ProductsSectionProps {
  products: Product[]
  content: SiteContent["products"]
  isAdmin: boolean
  onEditProduct?: (product: Product) => void
  onDeleteProduct?: (id: string) => void
  onAddProduct?: () => void
  onView3D?: (product: Product) => void
  onOpenEditModal?: (product: Product | null) => void
  onLearnMore?: (product: Product) => void
  onEditContent?: (field: keyof SiteContent["products"], value: string) => void
}

export function ProductsSection({
  products,
  content,
  isAdmin,
  onEditProduct,
  onDeleteProduct,
  onAddProduct,
  onView3D,
  onOpenEditModal,
  onLearnMore,
  onEditContent,
}: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))]
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="products" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <EditableText
            value={content.title}
            onChange={(value) => onEditContent?.("title", value)}
            isAdmin={isAdmin}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
            placeholder="Products section title"
          />
          <EditableText
            value={content.subtitle}
            onChange={(value) => onEditContent?.("subtitle", value)}
            isAdmin={isAdmin}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
            multiline
            placeholder="Products section subtitle"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 lg:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
          {isAdmin && (
            <Button onClick={() => onOpenEditModal?.(null)} variant="outline" className="rounded-full bg-transparent">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onEdit={() => onOpenEditModal?.(product)}
              onDelete={onDeleteProduct}
              onView3D={onView3D}
              onLearnMore={onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
