"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { checkAdminAuth } from "@/lib/admin-auth"
import { getStoredProducts, addProduct, updateProduct, deleteProduct, type StoredProduct } from "@/lib/content-store"
import { Plus, Pencil, Trash2, ArrowLeft, Package } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AdminProductsPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [products, setProducts] = useState<StoredProduct[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<StoredProduct | null>(null)

  useEffect(() => {
    const auth = checkAdminAuth()
    setIsAuthenticated(auth)
    if (!auth) {
      router.push("/admin")
    } else {
      setProducts(getStoredProducts())
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (editingProduct) {
      // Update existing product
      const updatedProduct: StoredProduct = {
        id: editingProduct.id,
        name: formData.get("name") as string,
        brand: formData.get("brand") as string,
        category: formData.get("category") as string,
        description: formData.get("description") as string,
        price: formData.get("price") as string,
        features: (formData.get("features") as string).split("\n").filter((f) => f.trim()),
        image: formData.get("image") as string,
      }
      updateProduct(editingProduct.id, updatedProduct)
    } else {
      // Add new product
      const newProduct: StoredProduct = {
        id: Date.now().toString(),
        name: formData.get("name") as string,
        brand: formData.get("brand") as string,
        category: formData.get("category") as string,
        description: formData.get("description") as string,
        price: formData.get("price") as string,
        features: (formData.get("features") as string).split("\n").filter((f) => f.trim()),
        image: formData.get("image") as string,
      }
      addProduct(newProduct)
    }

    setProducts(getStoredProducts())
    setIsDialogOpen(false)
    setEditingProduct(null)
    e.currentTarget.reset()
  }

  const handleEdit = (product: StoredProduct) => {
    setEditingProduct(product)
    setIsDialogOpen(true)
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id)
      setProducts(getStoredProducts())
    }
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      setEditingProduct(null)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <Button asChild variant="ghost" className="mb-4">
                <Link href="/admin">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("backToDashboard")}
                </Link>
              </Button>
              <h1 className="mb-2 text-4xl font-bold">{t("manageProducts")}</h1>
              <p className="text-lg text-muted-foreground">{t("manageProductsDesc")}</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  {t("addProduct")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingProduct ? t("editProduct") : t("addNewProduct")}</DialogTitle>
                  <DialogDescription>{t("fillProductDetails")}</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("productName")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Pure 312 7Nx"
                      defaultValue={editingProduct?.name || ""}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="brand">{t("brand")} *</Label>
                      <Input
                        id="brand"
                        name="brand"
                        required
                        placeholder="e.g., Signia"
                        defaultValue={editingProduct?.brand || ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">{t("category")} *</Label>
                      <Input
                        id="category"
                        name="category"
                        required
                        placeholder="e.g., RIC"
                        defaultValue={editingProduct?.category || ""}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">{t("price")}</Label>
                    <Input
                      id="price"
                      name="price"
                      placeholder="e.g., Contact for pricing"
                      defaultValue={editingProduct?.price || ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">{t("description")} *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      placeholder={t("productDescription")}
                      rows={3}
                      defaultValue={editingProduct?.description || ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="features">{t("features")} *</Label>
                    <Textarea
                      id="features"
                      name="features"
                      required
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                      rows={5}
                      defaultValue={editingProduct?.features.join("\n") || ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">{t("imageUrl")}</Label>
                    <Input
                      id="image"
                      name="image"
                      placeholder="/placeholder.svg"
                      defaultValue={editingProduct?.image || ""}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {editingProduct ? t("saveChanges") : t("addProduct")}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          {products.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Package className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">{t("noProducts")}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{t("noProductsDesc")}</p>
                <Button onClick={() => setIsDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  {t("addProduct")}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription>
                      {product.brand} - {product.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => handleEdit(product)}
                      >
                        <Pencil className="mr-2 h-3 w-3" />
                        {t("edit")}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="mr-2 h-3 w-3" />
                        {t("delete")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>{t("copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
