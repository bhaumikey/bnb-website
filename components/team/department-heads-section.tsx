"use client"

import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamMemberCard from "@/components/team/team-member-card"

const departmentHeads = [
  {
    name: "Srijan Mishra",
    position: "Head of Event Management",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Finance and event management are interconnected through strategy and timing. He incorporates market insights into planning, ensuring that every event reflects economic trends. His ability to manage budgets, negotiate sponsorships, and optimize financial resources enhances the club’s ability to create high-impact experiences with maximum financial efficiency.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Yatri Patel",
    position: "Head of Event Management",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creative thinking and financial stability go hand in hand. She applies economic principles to event execution, ensuring that resources are allocated efficiently. By analyzing cost structures and market demand, she enhances profitability and engagement, making financial decision-making an integral part of organizing large-scale, impactful experiences.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Mohit Gurnani",
    position: "Head of Digital Marketing",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Digital landscapes shape financial markets, influencing investment behavior and business strategies. He deciphers online trends, consumer engagement, and market movements through a digital lens. By leveraging data analytics, algorithm-driven marketing, and real- time insights, he optimizes digital campaigns that align with both market trends and investor psychology.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Arya Shah",
    position: "Head of Marketing",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Marketing is not just about promotions but understanding market cycles, consumer psychology, and financial trends. She crafts strategies that align with economic conditions, ensuring that branding decisions are backed by solid financial insights. Her work bridges the gap between financial literacy and creative storytelling, making complex concepts accessible.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Deep Mathukiya",
    position: "Head of Tech & IT",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Technology is reshaping finance, from algorithmic trading to blockchain advancements. He integrates tech-driven solutions into financial processes, enhancing efficiency and accuracy. Automation, AI-driven analytics, and digital transformation are his key focus areas, helping bridge the gap between traditional markets and the future of decentralized financial systems.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Dhruv Maradiya",
    position: "Head of Public Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Innovation in fintech is revolutionizing how financial markets operate. He develops systems that enhance decision-making, using predictive analytics, automation, and smart algorithms. His work involves refining data processing, optimizing trading platforms, and ensuring that technological advancements lead to smarter, more informed investment strategies in an evolving financial landscape.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Arnav Dixit",
    position: "Head of Public Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Financial concepts become powerful when visually represented with clarity. His designs simplify complex data, ensuring that trends, statistics, and analyses are easily understood. By merging creativity with financial knowledge, he creates compelling visual stories that make market insights engaging, accessible, and insightful for a broader audience.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Mohnish Pathak",
    position: "Head of Public Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Financial literacy thrives on storytelling. He translates market complexities into engaging content, making economics and investment strategies easier to grasp. His approach involves breaking down data-driven insights, explaining global financial trends, and using narrative techniques to captivate audiences while ensuring information remains accurate and insightful..",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Raj Shah",
    position: "Head of Public Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Data is the key to financial decision-making. He specializes in analyzing global economic trends, risk factors, and market patterns to make well-informed investment choices. His approach relies on statistical modeling, quantitative analysis, and deep research, ensuring that every financial move is backed by solid empirical evidence and critical thinking.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Deep Singhala",
    position: "Head of Public Relations",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sponsorships are strategic investments, not just financial contributions. He builds valuable partnerships by aligning business interests with financial incentives. His expertise lies in structuring deals that provide mutual benefits, securing long-term collaborations that contribute to both market presence and economic stability for all parties involved.",
    //instagram: "https:////instagram.com",
  },
]

export default function DepartmentHeadsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
      setTimeout(checkScrollability, 500)
    }
  }

  return (
    <section className="bg-muted/30 backdrop-blur-sm py-24 dark:bg-muted/10" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Department Heads</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet our specialized team leaders driving excellence in each department
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
            onScroll={checkScrollability}
          >
            {departmentHeads.map((head, index) => (
              <div key={head.name} className="min-w-[280px] max-w-[280px]">
                <TeamMemberCard
                  name={head.name}
                  position={head.position}
                  image={head.image}
                  bio={head.bio}
                  linkedin={head.linkedin}
                  //instagram={head.//instagram}
                  delay={0.1 * index}
                />
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className={`absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm ${
              !canScrollLeft ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm ${
              !canScrollRight ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

