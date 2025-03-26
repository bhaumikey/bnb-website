"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    title: "Financial Literacy Workshop",
    date: "May 15, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "PDEU Auditorium",
    description: "Learn the basics of personal finance, budgeting, and investment strategies for college students.",
    image: "/placeholder.svg?height=400&width=600",
    capacity: "100 seats",
    registrationOpen: true,
  },
  {
    title: "Stock Market Simulation Competition",
    date: "June 5-25, 2024",
    time: "Online Event",
    location: "Virtual Platform",
    description: "Compete with fellow students in a virtual stock trading competition with real-time market data.",
    image: "/placeholder.svg?height=400&width=600",
    capacity: "Unlimited",
    registrationOpen: true,
  },
  {
    title: "Investment Banking Career Panel",
    date: "July 10, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "PDEU Conference Hall",
    description: "Hear from alumni and industry professionals about careers in investment banking and finance.",
    image: "/placeholder.svg?height=400&width=600",
    capacity: "150 seats",
    registrationOpen: false,
  },
]

export default function UpcomingEventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-background/80 backdrop-blur-sm py-24" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Upcoming Events</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Mark your calendars for these exciting opportunities to learn and network
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="overflow-hidden rounded-xl bg-card/90 shadow-lg backdrop-blur-sm border border-primary/10"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-60 md:h-full overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">
                    {event.registrationOpen ? "Registration Open" : "Coming Soon"}
                  </div>
                </div>

                <div className="p-6 md:col-span-2">
                  <h3 className="mb-3 text-2xl font-bold">{event.title}</h3>

                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-muted-foreground">{event.description}</p>

                  <div className="flex gap-4">
                    <Button className="bg-amber-600 hover:bg-amber-700" disabled={!event.registrationOpen}>
                      {event.registrationOpen ? "Register Now" : "Registration Coming Soon"}
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

