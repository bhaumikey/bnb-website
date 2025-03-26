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
  }, [])

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-muted/20"></div>
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      className="relative h-10 w-10 overflow-hidden rounded-full bg-background shadow-md transition-colors hover:bg-muted focus:outline-none"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            opacity: theme === "dark" ? 1 : 0,
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
          }}
          transition={{ duration: 0.5 }}
        >
          <Sun className="h-5 w-5 text-amber-500" />
        </motion.div>
      </div>
    </motion.button>
  )
}

