"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const milestones = [
  {
    year: "2018",
    title: "Club Foundation",
    description:
      "Bulls & Bears was founded by a group of finance enthusiasts at PDEU with the vision of promoting financial literacy among students.",
  },
  {
    year: "2018",
    title: "First Event",
    description:
      "First ever event was hosted to introduce students to the basics of stock trading and investment strategies. And the event was conducted by Mr. Aakash Soni.",
  },
  {
    year: "2018",
    title: "First Bazaar",
    description:
      "This was our first main flagship event in which the student need to invest according news given to them and then need to analyze the news and invest accordingly which was held on 18th of november.",
  },
  {
    year: "2023",
    title: "Fantasia",
    description:
      "Fintasia redefined financial strategy, where stocks, bonds, and crypto became superpowers in an intense market battle. The event’s unique integration of real-time financial news set a new benchmark, further cementing Bulls & Bears’ legacy in hosting elite finance competitions.",
  },
  {
    year: "2024",
    title: "1st ever Bulls & Bears Spotify Podcast",
    description:
      "Our club took a bold step into the digital space with the launch of our Spotify podcast series! Covering finance, markets, and investment strategies, we aim to educate and engage beyond PDEU. Stay tuned for insights from experts and club members alike!",
  },
  {
    year: "2024",
    title: "bazaar 6.0",
    description:
      "We revolutionized the Bazaar 6.0 experience with a brand-new website, ensuring seamless event management!  From interactive dashboards to real-time updates, our tech-driven approach elevated user experience. This milestone set a new benchmark for event platforms at PDEU! .",
  },
]

export default function HistorySection() {
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
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Journey</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From humble beginnings to becoming a premier finance club, here's how we've grown over the years
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-muted md:left-[80px] md:translate-x-0"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-center md:flex-row"
              >
                {/* Year bubble */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-[80px] md:translate-x-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg">
                    <span className="text-lg font-bold">{milestone.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-20 w-full rounded-xl bg-card/80 p-6 shadow-lg backdrop-blur-sm md:ml-[160px] md:mt-0">
                  <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

