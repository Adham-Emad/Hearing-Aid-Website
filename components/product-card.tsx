"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import { Check, Trash2, Box, Edit } from "lucide-react"

interface ProductCardProps {
  product: Product
  isAdmin: boolean
  onEdit?: () => void
  onDelete?: (id: string) => void
  onView3D?: (product: Product) => void
  onLearnMore?: (product: Product) => void // Added onLearnMore prop
}

export function ProductCard({ product, isAdmin, onEdit, onDelete, onView3D, onLearnMore }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden bg-secondary/30">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.is3D && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            <Box className="w-3 h-3 mr-1" />
            3D View
          </Badge>
        )}
        <Badge className="absolute top-4 left-4">{product.category}</Badge>
        {isAdmin && (
          <Button
            onClick={onEdit}
            size="icon"
            variant="secondary"
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit className="w-4 h-4" />
          </Button>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">{product.price}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>

        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {product.is3D && (
          <Button onClick={() => onView3D?.(product)} className="flex-1">
            View in 3D
          </Button>
        )}
        {!product.is3D && (
          <Button className="flex-1" onClick={() => onLearnMore?.(product)}>
            Learn More
          </Button>
        )}
        {isAdmin && (
          <Button variant="destructive" size="icon" onClick={() => onDelete?.(product.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
