"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // We don't need to manually set the theme from localStorage here
    // next-themes already handles this through its provider
  }, [])

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-muted/20"></div>
  }

  const toggleTheme = () => {
    // Simply toggle between light and dark
    setTheme(theme === "dark" ? "light" : "dark")
    // No need to manually store in localStorage as next-themes handles this
  }

  return (
    <motion.button
      className="relative h-10 w-10 overflow-hidden rounded-full bg-background/80 shadow-md transition-colors hover:bg-background/90 focus:outline-none backdrop-blur-sm"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(245, 158, 11, 0.3)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.5 }}
        >
          <Moon className="h-5 w-5 text-amber-400" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: theme === "light" ? 0 : -180,
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.5 }}
        >
          <Sun className="h-5 w-5 text-amber-500" />
        </motion.div>
      </div>

      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px rgba(245, 158, 11, 0)",
            "0 0 10px rgba(245, 158, 11, 0.3)",
            "0 0 0px rgba(245, 158, 11, 0)",
          ],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
      />
    </motion.button>
  )
}

