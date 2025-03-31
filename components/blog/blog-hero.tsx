"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import fin_in2 from "@/public/Fin_insights.jpg"

export default function BlogHero() {
  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Financial Insights
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">
              Expert analysis, market trends, and educational content from Bulls & Bears Finance Club
            </p>
            <p className="mb-8 text-muted-foreground">
              Stay informed with the latest developments in finance, economics, and investment strategies through our
              regularly updated blog.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-amber-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-amber-700 hover:shadow-lg"
              >
                Latest Articles
              </motion.button> */}
              
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
                src={fin_in2}
                alt="Financial analysis and stock market charts"
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
              className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg dark:bg-card/90 dark:backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Market Trend</p>
                  <p className="font-medium text-green-600">+2.4%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-6 top-10 rounded-xl bg-card p-4 shadow-lg dark:bg-card/90 dark:backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">New Articles</p>
                  <p className="font-medium text-blue-600">BiWeekly</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

