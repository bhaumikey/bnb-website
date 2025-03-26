"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"

interface NavItem {
  name: string
  href: string
  active?: boolean
}

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home")

  const navItems: NavItem[] = [
    { name: "home", href: "#", active: activeTab === "home" },
    { name: "about", href: "#about", active: activeTab === "about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left Section - Logo/Avatar */}
          <div className="flex-shrink-0">
            <Link href="#" className="group relative block">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/10 bg-background shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-card text-primary">
                  <span className="text-lg font-bold">B&B</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Section - Pill Navigation */}
          <div className="hidden md:block">
            <div className="relative rounded-full bg-muted/30 p-1 shadow-md">
              <div className="flex relative z-10">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleTabChange(item.name)}
                    className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                      item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                {/* Animated background pill */}
                <motion.div
                  className="absolute inset-0 z-0 rounded-full bg-background shadow-sm"
                  initial={false}
                  animate={{
                    x: activeTab === "home" ? 0 : "100%",
                    width: "50%",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Theme Toggle & Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-md transition-colors hover:bg-muted focus:outline-none"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-2 transition-colors ${
                      item.active ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => {
                      handleTabChange(item.name)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

