"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import ThemeToggle from "@/components/ui/theme-toggle"
import bullLogo from "@/public/bull-logo.png"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  href: string
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "team", href: "/team" },
    { name: "events", href: "/events" },
  ]

  const secondaryNavItems: NavItem[] = [
    { name: "bazaar", href: "/bazaar" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left Section - Logo/Avatar */}
          <div className="flex-shrink-0">
            <Link href="/" className="group relative block">
              <motion.div
                className="relative mt-2 h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full border-2 border-primary/20 bg-background/80 shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(245, 158, 11, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-primary">
                  {/* <span className="text-lg font-bold">B&B</span> */}
                  <Image
                    src={bullLogo}
                    height={900}
                    width={900}
                    alt="Bulls & Bears Logo"
                    className="object-cover"
                    priority
                  />
                </div>
                <motion.div className="absolute inset-0 bg-primary/10 opacity-0" whileHover={{ opacity: 1 }} />
              </motion.div>
            </Link>
          </div>

          {/* Center Section - Animated Navigation Blocks */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={`relative px-6 py-3 rounded-lg ${isActive(item.href)
                    ? "bg-background/80 text-foreground shadow-md"
                    : "bg-background/40 text-foreground/70"
                    } backdrop-blur-sm transition-colors hover:bg-background/60 hover:text-foreground`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, 3, 0],
                    boxShadow: isActive(item.href)
                      ? [
                        "0 4px 12px rgba(245, 158, 11, 0.1)",
                        "0 6px 16px rgba(245, 158, 11, 0.2)",
                        "0 4px 12px rgba(245, 158, 11, 0.1)",
                      ]
                      : ["none", "none", "none"],
                  }}
                  transition={{
                    y: { repeat: Number.POSITIVE_INFINITY, duration: 2 + index * 0.5, ease: "easeInOut" },
                    boxShadow: { repeat: Number.POSITIVE_INFINITY, duration: 2 + index * 0.5, ease: "easeInOut" },
                  }}
                >
                  <span className="font-medium capitalize">{item.name}</span>
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border border-primary/20"
                      animate={{
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Section - Secondary Nav, Theme Toggle & Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md transition-colors hover:bg-background focus:outline-none md:hidden backdrop-blur-sm"
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
            className="md:hidden overflow-hidden bg-card/90 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[...navItems, ...secondaryNavItems].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-2 transition-colors ${isActive(item.href) ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
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

