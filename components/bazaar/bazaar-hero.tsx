"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BazaarHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* <Image src="/images/bazaar-hero.jpg" alt="Bazaar Event" fill className="object-cover" priority /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center pt-20">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Bazaar
              </span>
            </h1>
            
            <p className="mb-8 text-xl font-medium text-foreground/90 md:text-2xl">
              The Premier Financial Trading Simulation Event
            </p>
            <p className="mb-10 text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience the thrill of real-world trading in a simulated environment. Learn, compete, and win exciting
              prizes at PDEU's biggest finance event.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#register"
                className="inline-block rounded-full bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/20"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm text-foreground/70">Scroll to explore</span>
          <div className="h-10 w-1.5 rounded-full bg-primary/30">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="h-4 w-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

