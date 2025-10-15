"use client"

import { useAdminMode } from "@/lib/admin-mode-context"
import { Button } from "@/components/ui/button"
import { Edit, Eye } from "lucide-react"
import { usePathname } from "next/navigation"

export function AdminModeToggle() {
  const { isAdminMode, toggleAdminMode } = useAdminMode()
  const pathname = usePathname()

  const isAdminRoute = pathname?.startsWith("/admin")
  const isLoginPage = pathname === "/admin/login"

  if (!isAdminRoute || isLoginPage) {
    return null
  }
  // </CHANGE>

  return (
    <Button
      onClick={toggleAdminMode}
      variant={isAdminMode ? "default" : "outline"}
      size="sm"
      className="fixed bottom-4 right-4 z-50 shadow-lg"
    >
      {isAdminMode ? (
        <>
          <Eye className="w-4 h-4 mr-2" />
          Exit Edit Mode
        </>
      ) : (
        <>
          <Edit className="w-4 h-4 mr-2" />
          Enter Edit Mode
        </>
      )}
    </Button>
  )
}
