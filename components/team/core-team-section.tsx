"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"
import VishvaGandhi from "@/public/B&B_Photos/Vishva Gandhi.jpg";
import AashiLalwala from "@/public/B&B_Photos/ashi.jpg";
import KartikAkbari from "@/public/B&B_Photos/Kartik Akbari.jpg";
import RidhamShah from "@/public/B&B_Photos/ridham shah.jpg";

import { ArrowBigUpDashIcon } from "lucide-react";

const coreMembers = [
  {
    name: "Vishva Gandhi",
    position: "President",
    image: VishvaGandhi,
    bio: "A firm believer in behavioral finance, she understands that emotions drive investment decisions as much as numbers do. Her ability to analyze fear, greed, and market sentiment gives her an edge in predicting trends. She emphasizes the importance of patience, strategic thinking, and risk assessment in volatile market conditions.",
    linkedin: "https://www.linkedin.com/in/vishva-gandhi-20b2731b4/",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Ashi Lalwala",
    position: "vice President",
    image: AashiLalwala,
    bio: "Every financial decision is a calculated move in a long-term game. Her expertise lies in strategic financial planning, ensuring that short-term noise never overshadows sustainable growth. She focuses on adaptability, innovation, and resilience, using data-driven insights to craft robust investment approaches that withstand economic cycles.",
    linkedin: "https://www.linkedin.com/in/ashi-lalwala-657999297/",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Kartik Akbari",
    position: "General Secretary",
    image: KartikAkbari,
    bio: "Market fluctuations are opportunities, not threats. He thrives on unpredictability, identifying patterns in price movements and economic shifts. His approach involves blending technical analysis with economic indicators, making rational decisions amid uncertainty. By leveraging volatility, he turns risks into profitable strategies while keeping emotions away from trading decisions.",
    linkedin: "https://www.linkedin.com/in/kartik-akbari-ab92312ba/",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Ridham Shah",
    position: "Treasurer",
    image: RidhamShah,
    bio: "Financial discipline is the foundation of wealth creation. He ensures that structured financial management and prudent risk-taking are at the core of every decision. His focus is on optimizing resources, balancing liquidity, and capitalizing on sustainable investment opportunities that generate long-term financial stability while mitigating unnecessary exposure.",
    //linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
]

export default function CoreTeamSection() {
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Core Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the dedicated team leading Bulls & Bears to new heights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
              bio={member.bio}
              linkedin={member.linkedin}
              //instagram={member.//instagram}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

