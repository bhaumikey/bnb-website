"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarClock } from "lucide-react"

export default function EventsHero() {
  // Calculate days until next event
  const nextEventDate = new Date("2024-05-15")
  const today = new Date()
  const diffTime = Math.abs(nextEventDate.getTime() - today.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Our Events
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">
              Engaging financial workshops, competitions, and networking opportunities
            </p>
            <p className="mb-8 text-muted-foreground">
              From market simulations to expert-led seminars, our events provide hands-on experience and valuable
              insights into the world of finance.
            </p>

            {/* Countdown timer */}
            <motion.div
              className="mb-8 p-6 rounded-xl bg-card/80 backdrop-blur-sm shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <CalendarClock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Next Event Countdown</h3>
              </div>
              <p className="text-muted-foreground mb-4">Financial Literacy Workshop - May 15, 2024</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">{diffDays}</span>
                  <span className="text-xs text-muted-foreground">Days</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">12</span>
                  <span className="text-xs text-muted-foreground">Hours</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">45</span>
                  <span className="text-xs text-muted-foreground">Minutes</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">30</span>
                  <span className="text-xs text-muted-foreground">Seconds</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/events-hero.jpg" alt="Bulls & Bears Events" fill className="object-cover" priority />
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
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Annual Events</p>
                  <p className="font-medium text-amber-600">10+ Events</p>
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Participants</p>
                  <p className="font-medium text-teal-600">500+ Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

