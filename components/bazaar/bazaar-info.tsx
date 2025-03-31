"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Trophy } from "lucide-react"

export default function BazaarInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-amber-500" />,
      title: "October 19, 2024",
      description: "A single day of immersive financial trading experience",
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      title: "PDEU Campus",
      description: "BLT-1, Pandit Deendayal Energy University",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "9:00 AM - 4:00 PM",
      description: "Full day event with refreshments provided",
    },
    {
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      title: "₹12,000 Prize Pool",
      description: "Compete to win cash prizes and internship opportunities",
    },
  ]

  return (
    <section className="bg-muted/30 py-24 dark:bg-muted/10" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">About Bazaar</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Bazaar is Bulls & Bears' flagship event that simulates real-world financial markets. Participants trade
            virtual stocks in a dynamic environment that reacts to real-time market
            conditions and simulated news events.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-card/80 dark:backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-xl bg-gradient-to-r from-amber-600/10 to-teal-700/10 p-8 text-center shadow-lg"
        >
          <h3 className="mb-4 text-2xl font-bold">What You'll Experience</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold text-primary">Learn</h4>
              <p className="text-sm text-foreground/80">
                Workshops and sessions by industry experts to understand market dynamics
              </p>
            </div>
            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold text-primary">Trade</h4>
              <p className="text-sm text-foreground/80">
                Hands-on trading experience with our sophisticated simulation platform
              </p>
            </div>
            <div className="rounded-lg bg-card/50 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold text-primary">Network</h4>
              <p className="text-sm text-foreground/80">Connect with finance professionals and like-minded students</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

