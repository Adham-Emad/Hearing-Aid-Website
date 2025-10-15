"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus, Trash2 } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductEditModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onSave: (product: Product) => void
}

export function ProductEditModal({ product, isOpen, onClose, onSave }: ProductEditModalProps) {
  const [formData, setFormData] = useState<Product>({
    id: Date.now().toString(),
    name: "",
    category: "Premium",
    description: "",
    price: "$0",
    image: "/hearing-aid-device.jpg",
    features: [""],
    is3D: false,
  })

  useEffect(() => {
    if (isOpen) {
      if (product) {
        setFormData(product)
      } else {
        setFormData({
          id: `product-${Date.now()}`,
          name: "",
          category: "Premium",
          description: "",
          price: "$0",
          image: "/hearing-aid-device.jpg",
          features: [""],
          is3D: false,
        })
      }
    }
  }, [product, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validFeatures = formData.features.filter((f) => f.trim() !== "")
    if (validFeatures.length === 0) {
      alert("Please add at least one feature")
      return
    }
    onSave({ ...formData, features: validFeatures })
    onClose()
  }

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }))
  }

  const updateFeature = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((f, i) => (i === index ? value : f)),
    }))
  }

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-card border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card z-10">
          <h2 className="text-2xl font-bold">{product ? "Edit Product" : "Add New Product"}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., ClearSound Pro"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background"
              >
                <option value="Premium">Premium</option>
                <option value="Compact">Compact</option>
                <option value="Active">Active</option>
                <option value="Essential">Essential</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Price</label>
              <Input
                value={formData.price}
                onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                placeholder="e.g., $2,999"
                required
              />
            </div>

            {/* 3D Toggle */}
            <div className="space-y-2">
              <label className="text-sm font-medium">3D View Available</label>
              <div className="flex items-center gap-2 h-10">
                <input
                  type="checkbox"
                  checked={formData.is3D}
                  onChange={(e) => setFormData((prev) => ({ ...prev, is3D: e.target.checked }))}
                  className="w-4 h-4"
                />
                <span className="text-sm text-muted-foreground">Enable 3D viewer for this product</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the product..."
              rows={3}
              required
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <Input
              value={formData.image}
              onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
              placeholder="/path-to-image.jpg or use placeholder.svg with query"
            />
            {formData.image && (
              <div className="mt-2 rounded-lg overflow-hidden border border-border">
                <img src={formData.image || "/placeholder.svg"} alt="Preview" className="w-full h-48 object-cover" />
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Features</label>
              <Button type="button" onClick={addFeature} size="sm" variant="outline" className="bg-transparent">
                <Plus className="w-4 h-4 mr-1" />
                Add Feature
              </Button>
            </div>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    placeholder="Feature description"
                  />
                  <Button
                    type="button"
                    onClick={() => removeFeature(index)}
                    size="icon"
                    variant="ghost"
                    className="flex-shrink-0"
                    disabled={formData.features.length === 1}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button type="submit" className="flex-1">
              {product ? "Save Changes" : "Add Product"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
