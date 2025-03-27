"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"

const coreMembers = [
  {
    name: "Aditya Sharma",
    position: "President",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Finance enthusiast with a passion for equity markets and a track record of organizing successful financial events.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Priya Patel",
    position: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializes in financial analysis and has interned with top investment banks. Leads the club's market research initiatives.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Rahul Mehta",
    position: "General Secretary",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Skilled in event management and public relations. Ensures smooth coordination between different departments.",
    linkedin: "https://linkedin.com",
    //instagram: "https:////instagram.com",
  },
  {
    name: "Ananya Singh",
    position: "Treasurer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Detail-oriented finance major with expertise in budgeting and financial planning for club activities.",
    linkedin: "https://linkedin.com",
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

