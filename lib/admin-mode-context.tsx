"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AdminModeContextType {
  isAdminMode: boolean
  toggleAdminMode: () => void
  setAdminMode: (enabled: boolean) => void
}

const AdminModeContext = createContext<AdminModeContextType | undefined>(undefined)

export function AdminModeProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminModeState] = useState(false)

  useEffect(() => {
    // Check if admin mode is enabled in localStorage
    const adminMode = localStorage.getItem("adminModeEnabled") === "true"
    setIsAdminModeState(adminMode)
  }, [])

  const toggleAdminMode = () => {
    const newMode = !isAdminMode
    setIsAdminModeState(newMode)
    localStorage.setItem("adminModeEnabled", String(newMode))
  }

  const setAdminMode = (enabled: boolean) => {
    setIsAdminModeState(enabled)
    localStorage.setItem("adminModeEnabled", String(enabled))
  }

  return (
    <AdminModeContext.Provider value={{ isAdminMode, toggleAdminMode, setAdminMode }}>
      {children}
    </AdminModeContext.Provider>
  )
}

export function useAdminMode() {
  const context = useContext(AdminModeContext)
  if (context === undefined) {
    throw new Error("useAdminMode must be used within AdminModeProvider")
  }
  return context
}
