"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function JoinTeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-background/80 backdrop-blur-sm py-24" ref={ref}>
      <div className="container px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-amber-600/10 to-teal-700/10 p-12 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Join Our Team</h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-muted-foreground">
              We're always looking for passionate individuals to join our team. If you're interested in finance,
              economics, or want to develop your leadership and organizational skills, we'd love to have you!
            </p>

            <div className="grid gap-8 md:grid-cols-3 mb-10">
              <motion.div
                className="rounded-xl bg-card/50 p-6 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="mb-3 text-xl font-bold text-amber-600">Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Gain practical knowledge about financial markets, investment strategies, and economic principles.
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl bg-card/50 p-6 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="mb-3 text-xl font-bold text-amber-600">Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Develop essential skills like leadership, teamwork, communication, and problem-solving.
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl bg-card/50 p-6 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="mb-3 text-xl font-bold text-amber-600">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Network with industry professionals, alumni, and like-minded peers passionate about finance.
                </p>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
              >
                Apply to Join
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

