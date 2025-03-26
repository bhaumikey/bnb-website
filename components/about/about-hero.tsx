"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">
              Empowering students with financial knowledge and market insights
            </p>
            <p className="mb-8 text-muted-foreground">
              Bulls & Bears is the premier finance club at Pandit Deendayal Energy University (PDEU), dedicated to
              fostering financial literacy and market understanding among students through workshops, competitions, and
              real-world market simulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/about-hero.jpg" alt="Bulls & Bears Team" fill className="object-cover" priority />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Founded</p>
                  <p className="font-medium text-amber-600">2015</p>
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
                  <p className="text-xs text-muted-foreground">Members</p>
                  <p className="font-medium text-teal-600">100+ Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

