"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, Users } from "lucide-react"

type Event = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  image: string | { src: string };
  capacity?: string;
  registrationOpen?: boolean;
  attendees?: string;
  highlights?: string[];
};

const pastEvents: Event[] = [
  {
    title: "Market Unlocked",
    date: "April 02, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "TBA",
    description: "Learn the basics of personal finance, budgeting, and investment strategies for college students.",
    image: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744223443/hxyhgmzgernbedlrq2d3.jpg",
    capacity: "100 seats",
    registrationOpen: false,
  },
  {
    title: "Hisaab Kitaab",
    date: "March 22, 2025",
    description:
      "A financial literacy initiative in collaboration with Rotaract, empowering security guards, helpers, and support staff with essential knowledge on managing finances, investing wisely, avoiding scams, and accessing beneficial schemes.",
    image: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744217184/Hisaab_Kitaab_1_znhaf9.png",
    attendees: "75+",
    highlights: ["Industry expert keynotes", "Career fair", "Networking opportunities"],
  },
  {
    title: "Paisa Double ya Bubble",
    date: "March 21, 2025",
    description: "A strategic finance game where participants analyze how different sectors react to news and economic changes. Understand past trends, evaluate market performance, and uncover the impact of news on investments.",
    image: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744216830/Paisa_double_ya_bubble_1_erzgwj.png",
    attendees: "50+",
    highlights: ["Hands-on trading simulation", "understanding basics", "DeFi exploration","easy trading"],
  },
  {
    title: "Crisis Compass",
    date: "Octomber 20, 2024",
    description:
      "Navigate through a market crash! Make strategic decisions to minimize losses and emerge as the most resilient investor.",
    image: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744217319/Crisis_Compass_Poster_yjhtrt.png",
    attendees: "60+",
    highlights: [ "Real-time market data", "Expert mentoring", "protection of assets", "strategic decision making"],
  },
];

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
              {/* Image container - full poster but smaller */}
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="overflow-hidden rounded-xl shadow-lg w-full max-w-[400px] mx-auto"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={typeof event.image === "string" ? event.image : event.image?.src || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-auto object-contain"
                    style={{ aspectRatio: '3/4' }}
                  />
                </motion.div>
              </div>

              {/* Content container */}
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-1">
                        <span className="h-4 w-4 text-primary">⏱️</span>
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.attendees && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <span className="h-4 w-4 text-primary">📍</span>
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-foreground/80">{event.description}</p>

                  {event.highlights && (
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-primary mb-2">Event Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
