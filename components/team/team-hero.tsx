"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TeamHero() {
  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">
              The passionate individuals driving Bulls & Bears Finance Club forward
            </p>
            <p className="mb-8 text-muted-foreground">
              Our team consists of dedicated students with a shared passion for finance and economics, working together
              to create valuable learning experiences and opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/team-hero.jpg" alt="Bulls & Bears Team" fill className="object-cover" priority />
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Team Members</p>
                  <p className="font-medium text-amber-600">20+ Members</p>
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Departments</p>
                  <p className="font-medium text-teal-600">6 Specialized Teams</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

