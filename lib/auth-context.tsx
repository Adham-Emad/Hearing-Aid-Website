"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  isAdmin: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)

  const login = (username: string, password: string): boolean => {
    // Mock authentication - in production, this would call an API
    if (username === "admin" && password === "admin") {
      setIsAdmin(true)
      // Store in sessionStorage for persistence during session
      if (typeof window !== "undefined") {
        sessionStorage.setItem("isAdmin", "true")
      }
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("isAdmin")
    }
  }

  return <AuthContext.Provider value={{ isAdmin, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
