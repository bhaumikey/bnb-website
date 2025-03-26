"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import CoreMembersSection from "@/components/sections/core-members-section"
import HeadsSection from "@/components/sections/heads-section"
import EventsSection from "@/components/sections/events-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion, AnimatePresence } from "framer-motion"

export default function MainContent() {
  const [introCompleted, setIntroCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (hasSeenIntro === "true") {
      setIntroCompleted(true)
    }

    // Listen for custom event from pre-landing component
    const handleIntroComplete = () => {
      setIntroCompleted(true)
    }

    window.addEventListener("introComplete", handleIntroComplete)

    return () => {
      window.removeEventListener("introComplete", handleIntroComplete)
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {introCompleted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Header />
          <HeroSection />
          <AboutSection />
          <CoreMembersSection />
          <HeadsSection />
          <EventsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

