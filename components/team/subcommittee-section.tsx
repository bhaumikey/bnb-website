"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"
import Image from 'next/image'

import Bhaumik from "@/public/B&B_Photos/BhaumikPatel.jpg"
import Viral from "@/public/B&B_Photos/Viral Vaghela.jpg"
import Soham from "@/public/B&B_Photos/Soham Borsadiya.jpg"
import Yug from "@/public/B&B_Photos/Yug Prajapati.jpg"
import Darshil from "@/public/B&B_Photos/Darshil Desai.jpg"
import Kashyap from "@/public/B&B_Photos/Kashyap Sevak.jpg"
import Srijan from "@/public/B&B_Photos/Srijan mishra.jpg"
import Donna from "@/public/B&B_Photos/Donna kasundra.jpg"
import Pratham from "@/public/B&B_Photos/Pratham Mehta.jpg"
import Aashvi from "@/public/B&B_Photos/Aashvi Padhiyar.jpg"
import Deep from "@/public/B&B_Photos/Deep Mathukiya.jpg"
import Paril from "@/public/B&B_Photos/Paril Paladiya.jpg"
import Drashti from "@/public/B&B_Photos/Drashti Master.jpg"
// import Neil from "@/public/B&B_Photos/Neil Gandhi.jpg"
import Nishu from "@/public/B&B_Photos/Nishu Shukla.jpg"
import Ankesh from "@/public/B&B_Photos/Ankesh Kanu.jpg"
import Dhruvina from "@/public/B&B_Photos/Rathod Dhruvina.jpg"
import Anand from "@/public/B&B_Photos/Anand Zanzmeriya.jpg"
import Suribhi from "@/public/B&B_Photos/Suribhi yadav.jpg"
import Aayushi from "@/public/B&B_Photos/Aayushi Shah.jpg"
import Daksh from "@/public/B&B_Photos/DAKSH MATHUR.jpg"
import Anshul from "@/public/B&B_Photos/Anshul ashishbhai bhatt.jpg"
import DeepS from "@/public/B&B_Photos/Deep Shingala.jpg"
import Harsh from "@/public/B&B_Photos/Harsh Patil.jpg"
import Karan from "@/public/B&B_Photos/Karan Boda.jpeg"
import Gaurika from "@/public/B&B_Photos/Gaurika Soni.jpg"
import Ishaan from "@/public/B&B_Photos/Ishaan Kathiriya.jpg"
import Pritesh from "@/public/B&B_Photos/Pritesh Patel.jpg"
import DarshilS from "@/public/B&B_Photos/Darshil Shah.jpg"
import Aditya from "@/public/B&B_Photos/Aditya Sevak.jpg"
import Mohit from "@/public/B&B_Photos/Mohit Gurnani.jpg"
import Tank from "@/public/B&B_Photos/Chelshi Tank.jpg"
import Yatri from "@/public/B&B_Photos/Yatri patel.jpg"
import Raj from "@/public/B&B_Photos/Raj Shah.jpg"
import AnshulB from "@/public/B&B_Photos/Anshul Bhatt.jpg"
import HarshN from "@/public/B&B_Photos/Harsh Nenwani.jpg"
import Dhruv from "@/public/B&B_Photos/Dhruv Jegoda.jpg"
import Het from "@/public/B&B_Photos/Het Sanghvi.jpg"
import Smit from "@/public/B&B_Photos/Smit Joshi.jpg"
import Vishva from "@/public/B&B_Photos/Vishva Gandhi.jpg"
import Arya from "@/public/B&B_Photos/Arya Shah.jpg"
import Kartik from "@/public/B&B_Photos/Kartik Akbari.jpg"
import Shoury from "@/public/B&B_Photos/Shoury Mishra.jpg"
import Yuvraj from "@/public/B&B_Photos/Yuvraj Patel.jpg"
import Ved from "@/public/B&B_Photos/Ved Patel.jpg"
import Bhumi from "@/public/B&B_Photos/Bhumi shah.jpg"
import Jhil from "@/public/B&B_Photos/Jhil mandavia.jpg"
import AayushiP from "@/public/B&B_Photos/Aayushi patel.jpg"

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
      image: Bhaumik,
      bio: "Frontend specialist with expertise in React and Next.js. Maintains the club's website and digital platforms.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Viral Vaghela",
      position: "App Developer",
      image: Viral,
      bio: "Mobile app developer who created the Bulls & Bears trading simulation app for Android and iOS.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Nishu Shukla",
      position: "Database Administrator",
      image: Nishu,
      bio: "Manages the club's databases and ensures data security for all digital platforms and applications.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Aashvi Padhiyar",
      position: "UI/UX Designer",
      image: Aashvi,
      bio: "Creates intuitive and engaging user interfaces for the club's digital products and marketing materials.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Shoury Mishra",
      position: "Backend Developer",
      image: Shoury,
      bio: "Specializes in server-side programming and API development for the club's web applications.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  Research: [
    {
      name: "Aayushi Shah",
      position: "Equity Research Analyst",
      image: Aayushi,
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Smit Joshi",
      position: "Fixed Income Analyst",
      image: Smit,
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Anshul Bhatt",
      position: "Macroeconomic Analyst",
      image: AnshulB,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Neil Gandhi",
      position: "Cryptocurrency Researcher",
      image: "Neil",
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Darshil Shah",
      position: "ESG Research Analyst",
      image: DarshilS,
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  "Event Management": [
    {
      name: "Chelshi Tank",
      position: "Equity Research Analyst",
      image: Tank,
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Donna Kasundra",
      position: "Fixed Income Analyst",
      image: Donna,
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Suribhi Yadav",
      position: "Macroeconomic Analyst",
      image: Suribhi,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Dhruvina Rathod",
      position: "Cryptocurrency Researcher",
      image: Dhruvina,
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Pratham Mehta",
      position: "ESG Research Analyst",
      image: Pratham,
      bio: "Specializes in environmental, social, and governance factors in investment analysis and decision-making.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Pritesh Patel",
      position: "Sector Specialist - Technology",
      image: Pritesh,
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  "Content & Documentation": [
    {
      name: "Anand Zanzmeriya",
      position: "Equity Research Analyst",
      image: Anand,
      bio: "Specializes in analyzing equity markets...",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Daksh Mathur",
      position: "Cryptocurrency Researcher",
      image: Daksh,
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Karan Boda",
      position: "Macroeconomic Analyst",
      image: Karan,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  Marketing: [
    {
      name: "Aditya Sevak",
      position: "Macroeconomic Analyst",
      image: Aditya,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Jhil Mandavia",
      position: "Sector Specialist - Technology",
      image: Jhil,
      bio: "Focuses on technology sector analysis and investment opportunities in tech companies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  "Graphic Design": [
    {
      name: "Drashti Master",
      position: "Equity Research Analyst",
      image: Drashti,
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Gaurika Soni",
      position: "Fixed Income Analyst",
      image: Gaurika,
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Paril Paladiya",
      position: "Macroeconomic Analyst",
      image: Paril,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Ishaan Katariya",
      position: "Cryptocurrency Researcher",
      image: Ishaan,
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  "Digital Marketing": [
    {
      name: "Aayushi Patel",
      position: "Macroeconomic Analyst",
      image: AayushiP,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Yuvraj Patel",
      position: "Cryptocurrency Researcher",
      image: Yuvraj,
      bio: "Analyzes blockchain technologies and cryptocurrency markets to identify emerging trends and opportunities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
  ],
  Sponsorship: [
    {
      name: "Harsh Patil",
      position: "Equity Research Analyst",
      image: Harsh,
      bio: "Specializes in analyzing equity markets and providing investment recommendations for club members.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Yug Prajapati",
      position: "Fixed Income Analyst",
      image: Yug,
      bio: "Focuses on bond markets and interest rate analysis to provide insights on debt securities.",
      linkedin: "https://linkedin.com",
      flip: false,
    },
    {
      name: "Dhruv Jegoda",
      position: "Macroeconomic Analyst",
      image: Dhruv,
      bio: "Studies global economic trends and their impact on financial markets and investment strategies.",
      linkedin: "https://linkedin.com",
      flip: false,
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
                className={`p-4 rounded-xl text-center transition-all ${selectedDepartment === dept
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
                    flip={member.flip ?? false}
                    bio={member.bio}
                    linkedin={member.linkedin}
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