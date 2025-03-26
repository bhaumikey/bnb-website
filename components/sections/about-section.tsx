"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="relative overflow-hidden bg-muted/30 py-24 dark:bg-muted/10" ref={ref}>
      {/* Background pattern with enhanced opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main.png"
          alt="Financial chart background"
          fill
          className="object-cover opacity-10 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0"></div>
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">About Us</h2>

          {/* Framed content with enhanced 3D effect */}
          <div className="relative mx-auto rounded-xl p-1 shadow-2xl hover:shadow-amber-600/10 transition-all duration-300">
            {/* Border frame with gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-teal-700 opacity-80"></div>

            {/* Content with background image and blur */}
            <div className="relative rounded-lg overflow-hidden">
              {/* Background image with blur */}
              <div className="absolute inset-0">
                <Image
                  src="/images/main.png"
                  alt="Financial chart background"
                  fill
                  className="object-cover opacity-15 blur-md"
                />
              </div>

              {/* Content */}
              <div className="relative bg-card/90 backdrop-blur-sm p-8 rounded-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="space-y-4 text-left"
                >
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold text-primary">Bulls & Bears</span> is the premier finance club at
                    Pandit Deendayal Energy University (PDEU), dedicated to fostering financial literacy and market
                    understanding among students.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Founded with a vision to bridge the gap between theoretical knowledge and practical market
                    applications, we provide a platform for students to explore the dynamic world of finance through
                    workshops, seminars, competitions, and real-world market simulations.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our mission is to empower the next generation of financial leaders with the skills, knowledge, and
                    network they need to excel in the ever-evolving financial landscape.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

