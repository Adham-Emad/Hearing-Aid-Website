"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  Calendar,
  LogIn,
  Ear,
  Stethoscope,
  Activity,
  TestTube,
  Package,
  Grid3x3,
  Tag,
  Battery,
  Mail,
  MessageCircle,
  BookOpen,
  HelpCircle,
  Building,
  ChevronRight,
  Home,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { checkAdminAuth } from "@/lib/admin-auth"
import { LanguageSwitcher } from "@/components/language-switcher"
import { EditableText } from "@/components/editable-text"
import { getEditableContent } from "@/lib/inline-content-store"

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [whatsappNumber, setWhatsappNumber] = useState("201021454545")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  useEffect(() => {
    setIsAdmin(checkAdminAuth())
    setWhatsappNumber(getEditableContent("contact.whatsappNumber", "201021454545"))

    // Listen for content updates
    const handleContentUpdate = () => {
      setWhatsappNumber(getEditableContent("contact.whatsappNumber", "201021454545"))
    }
    window.addEventListener("contentUpdated", handleContentUpdate)
    return () => window.removeEventListener("contentUpdated", handleContentUpdate)
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center gap-2 px-4">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
            <span className="text-xl font-bold">AB</span>
          </div>
          <span className="text-xs font-semibold sm:text-sm md:text-base whitespace-nowrap">
            <EditableText contentKey="nav.brandName" defaultValue="Al-Barakat Hearing Care" as="span" />
          </span>
        </Link>

        <NavigationMenu className="hidden xl:flex flex-1 justify-center">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.hearingHealthMenu" defaultValue="Your Hearing Health" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-6 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none transition-all duration-300 hover:from-primary/30 hover:to-primary/10 hover:shadow-lg focus:shadow-md"
                        href="/hearing-test"
                      >
                        <TestTube className="h-8 w-8 text-primary animate-pulse-subtle" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <EditableText
                            contentKey="nav.freeHearingTestTitle"
                            defaultValue="Free Hearing Test"
                            as="span"
                          />
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          <EditableText
                            contentKey="nav.freeHearingTestDesc"
                            defaultValue="Take our comprehensive online hearing assessment in just 3 minutes"
                            as="span"
                          />
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/hearing-health/how-we-hear"
                    title={<EditableText contentKey="nav.howWeHearTitle" defaultValue="How We Hear" as="span" />}
                    icon={
                      <Ear className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.howWeHearDesc"
                      defaultValue="Understanding the hearing process"
                      as="span"
                    />
                  </ListItem>
                  <ListItem
                    href="/hearing-health/hearing-loss"
                    title={<EditableText contentKey="nav.hearingLossTitle" defaultValue="Hearing Loss" as="span" />}
                    icon={
                      <Stethoscope className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText contentKey="nav.hearingLossDesc" defaultValue="Types, causes, and signs" as="span" />
                  </ListItem>
                  <ListItem
                    href="/hearing-health/tinnitus"
                    title={<EditableText contentKey="nav.tinnitusTitle" defaultValue="Tinnitus" as="span" />}
                    icon={
                      <Activity className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText contentKey="nav.tinnitusDesc" defaultValue="Managing ringing in the ears" as="span" />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.productsMenu" defaultValue="Products" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] p-6 lg:w-[800px]">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Featured Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-base">
                          <EditableText contentKey="nav.browseProductsTitle" defaultValue="Browse Products" as="span" />
                        </h3>
                      </div>
                      <Link
                        href="/products"
                        className="group block rounded-lg border bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-md bg-primary/20 p-2 transition-colors duration-300 group-hover:bg-primary/30">
                            <Grid3x3 className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              <EditableText contentKey="nav.allProductsTitle" defaultValue="All Products" as="span" />
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              <EditableText
                                contentKey="nav.allProductsDesc"
                                defaultValue="Explore our complete catalog of hearing solutions"
                                as="span"
                              />
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/products#brands"
                        className="group block rounded-lg border bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-md bg-secondary/20 p-2 transition-colors duration-300 group-hover:bg-secondary/30">
                            <Tag className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 group-hover:text-secondary transition-colors">
                              <EditableText
                                contentKey="nav.premiumBrandsTitle"
                                defaultValue="Premium Brands"
                                as="span"
                              />
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              <EditableText
                                contentKey="nav.premiumBrandsDesc"
                                defaultValue="Signia, Rexton, and world-leading manufacturers"
                                as="span"
                              />
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Categories & Accessories */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Grid3x3 className="h-5 w-5 text-secondary" />
                        <h3 className="font-semibold text-base">
                          <EditableText contentKey="nav.categoriesTitle" defaultValue="Categories" as="span" />
                        </h3>
                      </div>
                      <div className="grid gap-2">
                        <Link
                          href="/products/category/pure-ric"
                          className="group flex items-center gap-3 rounded-md p-3 transition-all duration-300 hover:bg-accent/10 hover:translate-x-1"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-150" />
                          <span className="text-sm font-medium">
                            <EditableText contentKey="nav.ricHearingAids" defaultValue="RIC Hearing Aids" as="span" />
                          </span>
                        </Link>
                        <Link
                          href="/products/category/styletto"
                          className="group flex items-center gap-3 rounded-md p-3 transition-all duration-300 hover:bg-accent/10 hover:translate-x-1"
                        >
                          <div className="h-2 w-2 rounded-full bg-secondary transition-all duration-300 group-hover:scale-150" />
                          <span className="text-sm font-medium">
                            <EditableText contentKey="nav.stylishDesigns" defaultValue="Stylish Designs" as="span" />
                          </span>
                        </Link>
                        <Link
                          href="/products/category/insio"
                          className="group flex items-center gap-3 rounded-md p-3 transition-all duration-300 hover:bg-accent/10 hover:translate-x-1"
                        >
                          <div className="h-2 w-2 rounded-full bg-accent transition-all duration-300 group-hover:scale-150" />
                          <span className="text-sm font-medium">
                            <EditableText contentKey="nav.customMolded" defaultValue="Custom Molded" as="span" />
                          </span>
                        </Link>
                        <Link
                          href="/products#accessories"
                          className="group flex items-center gap-3 rounded-md p-3 transition-all duration-300 hover:bg-accent/10 hover:translate-x-1"
                        >
                          <Battery className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                          <span className="text-sm font-medium">
                            <EditableText
                              contentKey="nav.batteriesAccessories"
                              defaultValue="Batteries & Accessories"
                              as="span"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.companyMenu" defaultValue="Company" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/about"
                    title={<EditableText contentKey="nav.aboutUsTitle" defaultValue="About Us" as="span" />}
                    icon={
                      <Building className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.aboutUsDesc"
                      defaultValue="Learn about our mission, values, and commitment to hearing care"
                      as="span"
                    />
                  </ListItem>
                  <ListItem
                    href="/services"
                    title={<EditableText contentKey="nav.servicesTitle" defaultValue="Services" as="span" />}
                    icon={
                      <Stethoscope className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.servicesDesc"
                      defaultValue="Comprehensive hearing care services by certified audiologists"
                      as="span"
                    />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.contactMenu" defaultValue="Contact" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/contact"
                    title={<EditableText contentKey="nav.contactUsTitle" defaultValue="Contact Us" as="span" />}
                    icon={
                      <Mail className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.contactUsDesc"
                      defaultValue="Visit our contact page for all locations and details"
                      as="span"
                    />
                  </ListItem>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:scale-[1.02] focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                          <div className="text-sm font-medium leading-none">
                            <EditableText contentKey="nav.whatsappTitle" defaultValue="Call Us on WhatsApp" as="span" />
                          </div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          <EditableText
                            contentKey="nav.whatsappDesc"
                            defaultValue="Chat with us directly: "
                            as="span"
                          />
                          <EditableText contentKey="contact.whatsappNumber" defaultValue="+20 1021454545" as="span" />
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-300">
                <EditableText contentKey="nav.resourcesMenu" defaultValue="Resources" as="span" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/blog"
                    title={<EditableText contentKey="nav.blogTitle" defaultValue="Blog" as="span" />}
                    icon={
                      <BookOpen className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.blogDesc"
                      defaultValue="Latest news, tips, and insights about hearing health"
                      as="span"
                    />
                  </ListItem>
                  <ListItem
                    href="/faq"
                    title={<EditableText contentKey="nav.faqTitle" defaultValue="FAQ" as="span" />}
                    icon={
                      <HelpCircle className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
                    }
                  >
                    <EditableText
                      contentKey="nav.faqDesc"
                      defaultValue="Frequently asked questions about hearing aids and care"
                      as="span"
                    />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <LanguageSwitcher />

          {isAdmin ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden lg:flex transition-all duration-300 hover:scale-105"
            >
              <Link href="/admin">
                <LogIn className="mr-1 h-4 w-4" />
                <span className="hidden xl:inline">Admin</span>
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden lg:flex transition-all duration-300 hover:scale-105"
            >
              <Link href="/admin">
                <LogIn className="mr-1 h-4 w-4" />
                <span className="hidden xl:inline">Login</span>
              </Link>
            </Button>
          )}
          <Button asChild size="sm" className="transition-all duration-300 hover:scale-105 whitespace-nowrap">
            <Link href="/booking">
              <Calendar className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              <span className="hidden md:inline">
                <EditableText contentKey="nav.bookAppointmentFull" defaultValue="Book Appointment" as="span" />
              </span>
              <span className="md:hidden text-xs sm:text-sm">
                <EditableText contentKey="nav.bookAppointmentShort" defaultValue="Book" as="span" />
              </span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110 flex-shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] p-0 bg-gradient-to-br from-background via-background to-primary/5"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                      <span className="text-2xl font-bold text-white">AB</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Al-Barakat</h2>
                      <p className="text-xs text-white/80">Hearing Care Centers</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Navigation Content */}
              <nav className="flex flex-col h-[calc(100vh-120px)] overflow-y-auto">
                <div className="p-6 space-y-2">
                  {/* Home Link */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-lg">Home</span>
                  </Link>

                  {/* Hearing Test CTA */}
                  <Link
                    href="/hearing-test"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group animate-pulse-subtle"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/30 group-hover:bg-white/40 transition-colors">
                      <TestTube className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-white block">Free Hearing Test</span>
                      <span className="text-xs text-white/80">Take it now - 3 minutes</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Expandable Sections */}
                  <div className="space-y-2 mt-4">
                    {/* Hearing Health Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection("hearing")}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Ear className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Your Hearing Health</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "hearing" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "hearing" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/hearing-health/how-we-hear"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">How We Hear</span>
                          </Link>
                          <Link
                            href="/hearing-health/hearing-loss"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">Hearing Loss</span>
                          </Link>
                          <Link
                            href="/hearing-health/tinnitus"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                            <span className="text-sm">Tinnitus</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Products Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection("products")}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Package className="h-5 w-5 text-secondary" />
                          <span className="font-semibold">Products</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "products" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "products" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/products"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <Grid3x3 className="h-4 w-4 text-primary" />
                            <span className="text-sm">All Products</span>
                          </Link>
                          <Link
                            href="/products#brands"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <Tag className="h-4 w-4 text-secondary" />
                            <span className="text-sm">Premium Brands</span>
                          </Link>
                          <Link
                            href="/products#accessories"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <Battery className="h-4 w-4 text-accent" />
                            <span className="text-sm">Accessories</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Company Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection("company")}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Building className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Company</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "company" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "company" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">About Us</span>
                          </Link>
                          <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <div className="h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                            <span className="text-sm">Services</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection("contact")}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Contact</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "contact" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "contact" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm">Contact Page</span>
                          </Link>
                          <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <MessageCircle className="h-4 w-4 text-secondary" />
                            <div className="flex-1">
                              <span className="text-sm block">WhatsApp</span>
                              <span className="text-xs text-muted-foreground">+20 1021454545</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="rounded-xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection("resources")}
                        className="w-full flex items-center justify-between p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-secondary" />
                          <span className="font-semibold">Resources</span>
                        </div>
                        <ChevronRight
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-300",
                            expandedSection === "resources" && "rotate-90",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSection === "resources" ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="p-2 space-y-1 bg-accent/5">
                          <Link
                            href="/blog"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span className="text-sm">Blog</span>
                          </Link>
                          <Link
                            href="/faq"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                          >
                            <HelpCircle className="h-4 w-4 text-secondary" />
                            <span className="text-sm">FAQ</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto p-6 border-t bg-gradient-to-r from-primary/5 to-secondary/5">
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:bg-accent/10 transition-all duration-200"
                  >
                    <LogIn className="h-4 w-4" />
                    <span className="text-sm font-medium">{isAdmin ? "Admin Dashboard" : "Admin Login"}</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// ListItem component remains unchanged
const ListItem = ({
  className,
  title,
  children,
  href,
  icon,
  ...props
}: {
  className?: string
  title: React.ReactNode
  children: React.ReactNode
  href: string
  icon?: React.ReactNode
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:scale-[1.02] focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
