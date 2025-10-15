"use client"

// Simple admin authentication (in production, use proper auth like NextAuth.js)
export function checkAdminAuth(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_authenticated") === "true"
}

export function setAdminAuth(authenticated: boolean) {
  if (typeof window === "undefined") return
  if (authenticated) {
    localStorage.setItem("admin_authenticated", "true")
  } else {
    localStorage.removeItem("admin_authenticated")
  }
}

// Simple password check (in production, use proper backend authentication)
export function validateAdminPassword(password: string): boolean {
  // Default password: admin123 (change this in production!)
  return password === "admin123"
}
