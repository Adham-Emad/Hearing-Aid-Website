"use client"

// Content management store using localStorage
// In production, this should be a proper database

export interface EditableContent {
  id: string
  type: "text" | "title" | "subtitle" | "description"
  content: string
  page: string
  section: string
}

const CONTENT_STORAGE_KEY = "website_content"
const ADMIN_AUTH_KEY = "admin_authenticated"

export function checkAdminAuth(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true"
}

export function setAdminAuth(isAuthenticated: boolean) {
  if (typeof window === "undefined") return
  if (isAuthenticated) {
    localStorage.setItem(ADMIN_AUTH_KEY, "true")
  } else {
    localStorage.removeItem(ADMIN_AUTH_KEY)
  }
}

export function getStoredContent(): Record<string, string> {
  if (typeof window === "undefined") return {}
  const stored = localStorage.getItem(CONTENT_STORAGE_KEY)
  return stored ? JSON.parse(stored) : {}
}

export function updateContent(id: string, content: string) {
  if (typeof window === "undefined") return
  const stored = getStoredContent()
  stored[id] = content
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(stored))
}

export function getContent(id: string, defaultContent: string): string {
  const stored = getStoredContent()
  return stored[id] || defaultContent
}

// Site Content Management
import { defaultSiteContent, type SiteContent } from "./site-content"

const SITE_CONTENT_KEY = "site_content"

export function getSiteContent(): SiteContent {
  if (typeof window === "undefined") return defaultSiteContent
  const stored = localStorage.getItem(SITE_CONTENT_KEY)
  if (!stored) return defaultSiteContent
  try {
    return JSON.parse(stored)
  } catch {
    return defaultSiteContent
  }
}

export function updateSiteContent(content: SiteContent) {
  if (typeof window === "undefined") return
  localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(content))
}

export function resetSiteContent() {
  if (typeof window === "undefined") return
  localStorage.setItem(SITE_CONTENT_KEY, JSON.stringify(defaultSiteContent))
}

// Product management
export interface StoredProduct {
  id: string
  name: string
  brand: string
  category: string
  description: string
  price: string
  features: string[]
  image: string
}

const PRODUCTS_STORAGE_KEY = "website_products"

export function getStoredProducts(): StoredProduct[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveProducts(products: StoredProduct[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products))
}

export function addProduct(product: StoredProduct) {
  const products = getStoredProducts()
  products.push(product)
  saveProducts(products)
}

export function updateProduct(id: string, updatedProduct: Partial<StoredProduct>) {
  const products = getStoredProducts()
  const index = products.findIndex((p) => p.id === id)
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct }
    saveProducts(products)
  }
}

export function deleteProduct(id: string) {
  const products = getStoredProducts()
  const filtered = products.filter((p) => p.id !== id)
  saveProducts(filtered)
}

// Brand management
export interface StoredBrand {
  id: string
  name: string
  description: string
  logo: string
}

const BRANDS_STORAGE_KEY = "website_brands"

export function getStoredBrands(): StoredBrand[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(BRANDS_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveBrands(brands: StoredBrand[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(BRANDS_STORAGE_KEY, JSON.stringify(brands))
}

export function addBrand(brand: StoredBrand) {
  const brands = getStoredBrands()
  brands.push(brand)
  saveBrands(brands)
}

export function updateBrand(id: string, updatedBrand: Partial<StoredBrand>) {
  const brands = getStoredBrands()
  const index = brands.findIndex((b) => b.id === id)
  if (index !== -1) {
    brands[index] = { ...brands[index], ...updatedBrand }
    saveBrands(brands)
  }
}

export function deleteBrand(id: string) {
  const brands = getStoredBrands()
  const filtered = brands.filter((b) => b.id !== id)
  saveBrands(filtered)
}
