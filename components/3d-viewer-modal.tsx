"use client"

import { Button } from "@/components/ui/button"
import { X, RotateCw, ZoomIn, Info } from "lucide-react"
import type { Product } from "@/lib/types"
import { ThreeDViewer } from "./3d-viewer"
import { useState } from "react"

interface ThreeDViewerModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onContactForPurchase?: () => void
}

export function ThreeDViewerModal({ product, isOpen, onClose, onContactForPurchase }: ThreeDViewerModalProps) {
  const [showInfo, setShowInfo] = useState(true)

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">Interactive 3D View - Drag to rotate, scroll to zoom</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <ThreeDViewer />

          {/* Info Overlay */}
          {showInfo && (
            <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs animate-in slide-in-from-left duration-300">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm">Controls</h3>
                <button onClick={() => setShowInfo(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <RotateCw className="w-3 h-3" />
                  Drag to rotate
                </li>
                <li className="flex items-center gap-2">
                  <ZoomIn className="w-3 h-3" />
                  Scroll to zoom
                </li>
                <li className="flex items-center gap-2">
                  <RotateCw className="w-3 h-3" />
                  Auto-rotation enabled
                </li>
              </ul>
            </div>
          )}

          {!showInfo && (
            <Button onClick={() => setShowInfo(true)} size="icon" variant="secondary" className="absolute top-4 left-4">
              <Info className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Product Info Footer */}
        <div className="border-t border-border p-6 bg-secondary/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Product Details</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
              <p className="text-xl font-bold text-primary mb-4">{product.price}</p>
              {onContactForPurchase && (
                <Button onClick={onContactForPurchase} className="w-full">
                  Contact for Purchase
                </Button>
              )}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
