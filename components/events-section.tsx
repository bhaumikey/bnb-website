"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, Users } from "lucide-react"

const events = [
  {
    title: "Annual Finance Summit",
    date: "March 15, 2024",
    description:
      "A day-long summit featuring keynote speakers from the finance industry, panel discussions, and networking opportunities.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "200+",
  },
  {
    title: "Stock Market Simulation",
    date: "April 10-30, 2024",
    description:
      "A three-week virtual stock trading competition where participants manage a simulated portfolio to maximize returns.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "150+",
  },
  {
    title: "Financial Literacy Workshop",
    date: "May 5, 2024",
    description:
      "An interactive workshop on personal finance basics, including budgeting, saving, and investing for college students.",
    image: "/placeholder.svg?height=400&width=600",
    attendees: "100+",
  },
]

export default function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="events" className="bg-background py-24" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Events & Updates
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay informed about our upcoming events and latest activities
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50opacity: 0, y: 50}}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={`order-${index % 2 === 0 ? 1 : 2} md:order-${index % 2 === 0 ? 1 : 2}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="overflow-hidden rounded-xl"
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
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-foreground/80">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

