"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, SendIcon } from "lucide-react"

export default function BazaarRegistration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="register" className="bg-muted/30 py-24 dark:bg-muted/10" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Register for Bazaar</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Secure your spot at the most anticipated finance event of the year
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl bg-card p-8 shadow-lg dark:bg-card/80 dark:backdrop-blur-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-6 rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Registration Successful!</h3>
                  <p className="mb-6 text-muted-foreground">
                    Thank you for registering for Bazaar 2024. We've sent a confirmation email with all the details.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Register Another Person
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="college" className="text-sm font-medium">
                        College/University
                      </label>
                      <Input
                        id="college"
                        name="college"
                        value={formState.college}
                        onChange={handleChange}
                        placeholder="Your institution"
                        required
                        className="transition-all duration-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="year" className="text-sm font-medium">
                      Year of Study
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formState.year}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="" disabled>
                        Select your year
                      </option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                      <option value="5">Fifth Year</option>
                      <option value="pg">Postgraduate</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Why do you want to participate? (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in Bazaar"
                      className="min-h-[100px] transition-all duration-300 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <SendIcon className="mr-2 h-4 w-4" />
                        Register Now
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By registering, you agree to our terms and conditions. Registration fee: ₹300 per person.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

