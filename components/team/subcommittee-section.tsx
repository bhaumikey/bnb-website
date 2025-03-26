"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"

// Define departments
const departments = [
  "Technical",
  "Research",
  "Events",
  "Marketing",
  "Content",
  "Public Relations",
  "Finance",
  "Operations",
  "Design",
  "Editorial",
]

// Define subcommittee members for each department
const subcommitteeMembers = {
  Technical: [
    {
      name: "Rahul Verma",
      position: "Web Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Frontend specialist with expertise in React and Next.js. Maintains the club's website and digital platforms.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Priya Singh",
      position: "App Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mobile app developer who created the Bulls & Bears trading simulation app for Android and iOS.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Aryan Patel",
      position: "Database Administrator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages the club's databases and ensures data security for all digital platforms and applications.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Neha Sharma",
      position: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates intuitive and engaging user interfaces for the club's digital products and marketing materials.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Vikram Mehta",
      position: "Backend Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in server-side programming and API development for the club's web applications.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Ananya Reddy",
      position: "QA Tester",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ensures quality and functionality of all technical products before they are released to club members.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Rohan Kapoor",
      position: "Data Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes user data and provides insights to improve the club's digital platforms and engagement.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Tanya Malhotra",
      position: "Cybersecurity Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Implements security measures to protect the club's digital assets and member information.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Karan Gupta",
      position: "DevOps Engineer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages deployment pipelines and ensures smooth operation of the club's technical infrastructure.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Meera Joshi",
      position: "Technical Writer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates documentation and guides for the club's technical products and platforms.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  Research: [
    {
      name: "Aditya Kumar",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Sneha Patel",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Raj Malhotra",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Anita Desai",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Vikrant Singh",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Priyanka Sharma",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Arjun Nair",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Kavita Reddy",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Rahul Mehta",
      position: "Technical Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in chart patterns and technical indicators to predict market movements.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      name: "Neha Gupta",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  // Add placeholder members for other departments
  Events: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Events Member ${i + 1}`,
      position: "Events Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Helps organize and coordinate various events and activities for the club.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Marketing: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Marketing Member ${i + 1}`,
      position: "Marketing Associate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Works on promoting club activities and increasing student engagement.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Content: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Content Member ${i + 1}`,
      position: "Content Creator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates educational and promotional content for the club's platforms.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  "Public Relations": Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `PR Member ${i + 1}`,
      position: "PR Associate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages relationships with external organizations and promotes the club's image.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Finance: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Finance Member ${i + 1}`,
      position: "Finance Associate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages the club's budget and financial planning for events and activities.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Operations: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Operations Member ${i + 1}`,
      position: "Operations Associate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ensures smooth execution of club activities and manages day-to-day operations.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Design: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Design Member ${i + 1}`,
      position: "Graphic Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates visual content and designs for the club's marketing materials and platforms.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
  Editorial: Array(10)
    .fill(0)
    .map((_, i) => ({
      name: `Editorial Member ${i + 1}`,
      position: "Content Editor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Edits and reviews content for the club's publications and digital platforms.",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    })),
}

export default function SubcommitteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedDepartment, setSelectedDepartment] = useState("Technical")

  // Set Technical department as default when component mounts
  useEffect(() => {
    setSelectedDepartment("Technical")
  }, [])

  return (
    <section className="bg-background/80 backdrop-blur-sm py-24" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Departments</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
            Explore our specialized departments and their dedicated members
          </p>

          {/* Department selection boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
            {departments.map((dept, index) => (
              <motion.button
                key={dept}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedDepartment === dept
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-card/80 text-foreground/80 hover:bg-card shadow-md"
                } backdrop-blur-sm border border-primary/10`}
                onClick={() => setSelectedDepartment(dept)}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <span className="font-medium">{dept}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Subcommittee members section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-12">
          <h3 className="text-2xl font-bold mb-2 text-center">
            Subcommittee Members - <span className="text-primary">{selectedDepartment} Department</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            Meet the dedicated team members working behind the scenes
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDepartment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {subcommitteeMembers[selectedDepartment as keyof typeof subcommitteeMembers].map((member, index) => (
                <div key={member.name} className="flex justify-center">
                  <TeamMemberCard
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    bio={member.bio}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                    delay={0.1 * index}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

