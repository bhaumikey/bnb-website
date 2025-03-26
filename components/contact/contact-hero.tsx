"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">We'd love to hear from you</p>
            <p className="mb-8 text-muted-foreground">
              Whether you have questions about our events, want to join the club, or are interested in collaborating,
              our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <span className="text-foreground/80">bullsandbears@pdeu.ac.in</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <span className="text-foreground/80">+91 9876543210</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Contact Bulls & Bears"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 rounded-xl bg-card/90 p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium text-amber-600">PDEU Campus, Gandhinagar</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-6 top-10 rounded-xl bg-card/90 p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900/30">
                  <svg className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                  <p className="font-medium text-teal-600">Within 24 Hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

