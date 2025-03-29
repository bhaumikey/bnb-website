"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"

// Define departments
const departments = [
  "Tech & IT",
  "Event Management",
  "Content & Documentation",
  "Marketing",
  "Research",
  "Graphic Design",
  "Digital Marketing",
  "Sponsorship",
]

// Define subcommittee members for each department
const subcommitteeMembers = {
  "Tech & IT": [
    {
      name: "Bhaumik Patel",
      position: "Future-Ready Innovator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Frontend specialist with expertise in React and Next.js. Maintains the club's website and digital platforms.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Viral Vaghela",
      position: "App Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mobile app developer who created the Bulls & Bears trading simulation app for Android and iOS.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Nishu Shukla",
      position: "Database Administrator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages the club's databases and ensures data security for all digital platforms and applications.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Aashvi Padhiyar",
      position: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Creates intuitive and engaging user interfaces for the club's digital products and marketing materials.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Shoury Mishra",
      position: "Backend Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in server-side programming and API development for the club's web applications.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    
  ],
  Research: [
    {
      name: "Aayushi Shah",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Smit Joshi",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Anshul Bhatt",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Neil Gandhi",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Darshil Shah",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  "Event Management":  [
    {
      name: "Chelshi Tank",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Donna Kasundra",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Suribhi Yadav",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Dhruvina Rathod",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Pratham Mehta",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Pritesh Patel",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Aaryan Amin",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Hetvi Makadiya",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Ved Patel",
      position: "Technical Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in chart patterns and technical indicators to predict market movements.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Bhumi Shah",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Shanay Vyas",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  "Content & Documentation": [
    {
      name: "Anand Zanzmeriya",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Muskan Goplani",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Karan Boda Patel",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Daksh Mathur",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Ishita Shah",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  Marketing: [
    {
      name: "Shaurya Khandelwal",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Lakshya Baldaniya",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Aditya Sevak",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Kalp Dhariwal",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Pinal Samani",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Jhil Mandavia",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Diya Patel",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Aaditya Gupta",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  "Graphic Design": [
    {
      name: "Aditya Kumar",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Sneha Patel",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Raj Malhotra",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Anita Desai",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Vikrant Singh",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Priyanka Sharma",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Arjun Nair",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Kavita Reddy",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Rahul Mehta",
      position: "Technical Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in chart patterns and technical indicators to predict market movements.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Neha Gupta",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  "Digital Marketing": [
    {
      name: "Aditya Kumar",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Sneha Patel",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Raj Malhotra",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Anita Desai",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Vikrant Singh",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Priyanka Sharma",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Arjun Nair",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Kavita Reddy",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Rahul Mehta",
      position: "Technical Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in chart patterns and technical indicators to predict market movements.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Neha Gupta",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  Sponsorship: [
    {
      name: "Aditya Kumar",
      position: "Equity Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    // Add 9 more members for Research department
    {
      name: "Sneha Patel",
      position: "Fixed Income Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Raj Malhotra",
      position: "Macroeconomic Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Anita Desai",
      position: "Cryptocurrency Researcher",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Vikrant Singh",
      position: "ESG Research Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Priyanka Sharma",
      position: "Sector Specialist - Technology",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Arjun Nair",
      position: "Sector Specialist - Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Analyzes banking, insurance, and financial services companies for investment insights.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Kavita Reddy",
      position: "Quantitative Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Applies mathematical and statistical methods to financial market analysis and trading strategies.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Rahul Mehta",
      position: "Technical Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in chart patterns and technical indicators to predict market movements.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
    {
      name: "Neha Gupta",
      position: "Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Manages research projects and coordinates between different research teams within the department.",
      linkedin: "https://linkedin.com",
      //instagram: "https:////instagram.com",
    },
  ],
  
}

export default function SubcommitteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedDepartment, setSelectedDepartment] = useState("Tech & IT")

  // Set Technical department as default when component mounts
  useEffect(() => {
    setSelectedDepartment("Tech & IT")
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
                    //instagram={member.instagram}
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

