"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductDetailModalProps {
  product: Product | null
  open: boolean
  onClose: () => void
  onContactForPurchase?: (product: Product) => void
}

export function ProductDetailModal({ product, open, onClose, onContactForPurchase }: ProductDetailModalProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg bg-secondary/30">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-80 object-cover" />
            <Badge className="absolute top-4 left-4">{product.category}</Badge>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">{product.price}</span>
            <Button size="lg" onClick={() => onContactForPurchase?.(product)}>
              Contact for Purchase
            </Button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">What's Included</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Hearing aid device
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Charging case and accessories
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                User manual and warranty card
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Free professional fitting session
              </li>
            </ul>
          </div>
        </div>

        <Button variant="outline" onClick={onClose} className="w-full mt-4 bg-transparent">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
