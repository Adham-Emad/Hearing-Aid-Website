"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Shield, LayoutDashboard } from "lucide-react"
import { useState } from "react"

interface NavigationProps {
  onLoginClick: () => void
  isAdmin: boolean
  onLogout?: () => void
  onDashboardClick?: () => void
}

export function Navigation({ onLoginClick, isAdmin, onLogout, onDashboardClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg lg:text-xl">H</span>
            </div>
            <span className="font-bold text-lg lg:text-xl text-foreground">HearClear</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {isAdmin ? (
              <div className="hidden md:flex items-center gap-3">
                <Badge variant="default" className="gap-1">
                  <Shield className="w-3 h-3" />
                  Admin Mode
                </Badge>
                <Button onClick={onDashboardClick} variant="outline" size="sm" className="gap-2 bg-transparent">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
                <Button onClick={onLogout} variant="outline" size="sm" className="bg-transparent">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={onLoginClick} size="sm" className="hidden md:flex">
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {isAdmin ? (
                <>
                  <Badge variant="default" className="gap-1 w-fit">
                    <Shield className="w-3 h-3" />
                    Admin Mode
                  </Badge>
                  <Button
                    onClick={onDashboardClick}
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 bg-transparent"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Button>
                  <Button onClick={onLogout} variant="outline" size="sm" className="w-full bg-transparent">
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={onLoginClick} size="sm" className="w-full">
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
