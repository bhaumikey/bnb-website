"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function VisionMissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-background/80 backdrop-blur-sm py-24" ref={ref}>
      <div className="container px-4">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="rounded-xl bg-gradient-to-br from-amber-600/10 to-amber-600/5 p-8 shadow-xl border border-primary/10"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Vision</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              To be the premier student-led finance organization that empowers the next generation of financial leaders
              with the knowledge, skills, and network they need to excel in the ever-evolving financial landscape.
            </p>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/80">Creating a community of financially literate students</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/80">
                  Bridging the gap between theoretical knowledge and practical application
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/80">Fostering innovation and ethical practices in finance</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl bg-gradient-to-br from-teal-700/10 to-teal-700/5 p-8 shadow-xl border border-primary/10"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              To provide students with opportunities to develop their understanding of financial markets, investment
              strategies, and economic principles through hands-on experiences, educational programs, and networking
              events.
            </p>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                <span className="text-foreground/80">Organizing workshops, seminars, and competitions</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                <span className="text-foreground/80">Facilitating connections with industry professionals</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                <span className="text-foreground/80">
                  Providing resources for personal and professional development
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

