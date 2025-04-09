"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Hisaab Kitaab",
    date: "March 22, 2025",
    description:
      "A financial literacy initiative in collaboration with Rotaract, empowering security guards, helpers, and support staff with essential knowledge on managing finances, investing wisely, avoiding scams, and accessing beneficial schemes.",
    image:
      "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744217184/Hisaab_Kitaab_1_znhaf9.png",
    attendees: "75+",
    highlights: [
      "Industry expert keynotes",
      "Career fair",
      "Networking opportunities",
    ],
  },
  {
    title: "Paisa Double ya Bubble",
    date: "March 21, 2025",
    description:
      "A strategic finance game where participants analyze how different sectors react to news and economic changes. Understand past trends, evaluate market performance, and uncover the impact of news on investments.",
    image:
      "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744216830/Paisa_double_ya_bubble_1_erzgwj.png",
    attendees: "50+",
    highlights: [
      "Hands-on trading simulation",
      "understanding basics",
      "DeFi exploration",
      "easy trading",
    ],
  },
  {
    title: "Crisis Compass",
    date: "October 20, 2024",
    description:
      "Navigate through a market crash! Make strategic decisions to minimize losses and emerge as the most resilient investor.",
    image:
      "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744217319/Crisis_Compass_Poster_yjhtrt.png",
    attendees: "60+",
    highlights: [
      "Real-time market data",
      "Expert mentoring",
      "protection of assets",
      "strategic decision making",
    ],
  },
];

export default function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div
                className={`order-${index % 2 === 0 ? 1 : 2} md:order-${
                  index % 2 === 0 ? 1 : 2
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    width={600}
                    height={400}
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>

              <div
                className={`order-${index % 2 === 0 ? 2 : 1} md:order-${
                  index % 2 === 0 ? 2 : 1
                }`}
              >
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
  );
}
