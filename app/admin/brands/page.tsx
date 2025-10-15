"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Plus, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getStoredBrands, addBrand, updateBrand, deleteBrand, type StoredBrand } from "@/lib/content-store"
import { useLanguage } from "@/lib/language-context"

export default function ManageBrandsPage() {
  const { t } = useLanguage()
  const [brands, setBrands] = useState<StoredBrand[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBrand, setEditingBrand] = useState<StoredBrand | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
  })

  useEffect(() => {
    loadBrands()
  }, [])

  const loadBrands = () => {
    const storedBrands = getStoredBrands()
    setBrands(storedBrands)
  }

  const handleOpenDialog = (brand?: StoredBrand) => {
    if (brand) {
      setEditingBrand(brand)
      setFormData({
        name: brand.name,
        description: brand.description,
        logo: brand.logo,
      })
    } else {
      setEditingBrand(null)
      setFormData({
        name: "",
        description: "",
        logo: "",
      })
    }
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setEditingBrand(null)
    setFormData({
      name: "",
      description: "",
      logo: "",
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingBrand) {
      updateBrand(editingBrand.id, formData)
    } else {
      const newBrand: StoredBrand = {
        id: Date.now().toString(),
        ...formData,
      }
      addBrand(newBrand)
    }

    loadBrands()
    handleCloseDialog()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      deleteBrand(id)
      loadBrands()
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Manage Brands</h1>
              <p className="text-muted-foreground mt-2">Add, edit, or remove brands from your catalog.</p>
            </div>
            <Button onClick={() => handleOpenDialog()} size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Add Brand
            </Button>
          </div>
        </div>

        {brands.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground mb-4">No custom brands added yet.</p>
              <Button onClick={() => handleOpenDialog()}>
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Brand
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Card key={brand.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={brand.logo || "/placeholder.svg?height=80&width=200"}
                      alt={brand.name}
                      className="h-16 object-contain"
                    />
                  </div>
                  <CardTitle>{brand.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{brand.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => handleOpenDialog(brand)}
                    >
                      <Pencil className="mr-2 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(brand.id)}>
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>{editingBrand ? "Edit Brand" : "Add New Brand"}</DialogTitle>
                <DialogDescription>
                  {editingBrand ? "Update the brand information below." : "Fill in the details for the new brand."}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Brand Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="logo">Logo URL *</Label>
                  <Input
                    id="logo"
                    type="url"
                    value={formData.logo}
                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                    placeholder="https://example.com/logo.png"
                    required
                  />
                  {formData.logo && (
                    <div className="mt-2 flex justify-center p-4 border rounded-lg bg-muted">
                      <img
                        src={formData.logo || "/placeholder.svg"}
                        alt="Logo preview"
                        className="h-16 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
                <Button type="submit">{editingBrand ? "Update Brand" : "Add Brand"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
