"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Newsletter signup:", email)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section className="bg-gradient-to-r from-amber-600/10 to-teal-700/10 py-16" ref={ref}>
      <div className="container px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-card p-8 shadow-lg dark:bg-card/80 dark:backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Stay Updated with Financial Insights</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter to receive the latest articles, market analysis, and event updates directly in
              your inbox.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="mb-4 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-lg font-medium">Thank you for subscribing!</p>
                <p className="text-muted-foreground">You'll receive our next newsletter soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent"></div>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}

            <p className="mt-4 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

