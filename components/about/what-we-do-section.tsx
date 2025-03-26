"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { TrendingUp, BookOpen, Users, Award, Calendar, BarChart } from "lucide-react"

const activities = [
  {
    icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
    title: "Market Simulations",
    description:
      "Virtual trading competitions that simulate real-world market conditions, allowing students to apply theoretical knowledge in a risk-free environment.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600" />,
    title: "Educational Workshops",
    description:
      "Regular workshops on financial literacy, investment strategies, market analysis, and personal finance management.",
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600" />,
    title: "Networking Events",
    description:
      "Opportunities to connect with industry professionals, alumni, and like-minded peers through seminars, panel discussions, and informal meetups.",
  },
  {
    icon: <Award className="h-8 w-8 text-amber-600" />,
    title: "Competitions",
    description:
      "Finance-themed competitions that challenge students to solve real-world financial problems, analyze case studies, and present investment strategies.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-amber-600" />,
    title: "Annual Finance Summit",
    description:
      "Our flagship event featuring keynote speakers, panel discussions, workshops, and networking opportunities with industry leaders.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-amber-600" />,
    title: "Research Publications",
    description:
      "Student-led research on market trends, investment opportunities, and economic developments, published through our newsletter and blog.",
  },
]

export default function WhatWeDoSection() {
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
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What We Do</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Bulls & Bears offers a variety of activities and programs designed to enhance financial literacy, develop
            practical skills, and provide networking opportunities for students interested in finance.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-card/80 p-6 shadow-lg backdrop-blur-sm border border-primary/10"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(245, 158, 11, 0.3)",
              }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                {activity.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{activity.title}</h3>
              <p className="text-muted-foreground">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

