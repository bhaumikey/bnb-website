"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, Users } from "lucide-react"

const pastEvents = [
  {
    title: "Annual Finance Summit 2023",
    date: "November 15, 2023",
    description:
      "A day-long summit featuring keynote speakers from the finance industry, panel discussions, and networking opportunities.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "200+",
    highlights: ["Industry expert keynotes", "Career fair", "Networking dinner"],
  },
  {
    title: "Cryptocurrency Workshop",
    date: "September 5, 2023",
    description: "An interactive workshop on blockchain technology, cryptocurrency markets, and decentralized finance.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "120+",
    highlights: ["Hands-on trading simulation", "Blockchain basics", "DeFi exploration"],
  },
  {
    title: "Stock Market Simulation 2023",
    date: "July 10-30, 2023",
    description:
      "A three-week virtual stock trading competition where participants managed a simulated portfolio to maximize returns.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "150+",
    highlights: ["₹20,000 prize pool", "Real-time market data", "Expert mentoring"],
  },
]

export default function PastEventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-muted/30 backdrop-blur-sm py-24 dark:bg-muted/10" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Past Events</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Highlights from our previous successful events
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={`order-${index % 2 === 0 ? 1 : 2} md:order-${index % 2 === 0 ? 1 : 2}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>

              <div className={`order-${index % 2 === 0 ? 2 : 1} md:order-${index % 2 === 0 ? 2 : 1}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-foreground/80">{event.description}</p>

                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-primary mb-2">Event Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

