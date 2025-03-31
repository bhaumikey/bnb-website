"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import TeamMemberCard from "@/components/team/team-member-card"
import Image from 'next/image'

import Bhaumik from "@/public/B&B_Photos/BhaumikPatel.jpg"
import Soham from "@/public/B&B_Photos/Soham Borsadiya.jpg"
import Yug from "@/public/B&B_Photos/Yug Prajapati.jpg"
import Darshil from "@/public/B&B_Photos/Darshil Desai.jpg"
import Kashyap from "@/public/B&B_Photos/Kashyap Sevak.jpg"
import Srijan from "@/public/B&B_Photos/Srijan mishra.jpg"
import Donna from "@/public/B&B_Photos/Donnakasundra.jpg"
import Kasundra from "@/public/B&B_Photos/Donnakasundra.jpg"
import Pratham from "@/public/B&B_Photos/Pratham Mehta.jpg"
import Aashvi from "@/public/B&B_Photos/Aashvi Padhiyar.jpg"
import Deep from "@/public/B&B_Photos/Deep Mathukiya.jpg"
//import DeepS form "@/public/B&B_Photos/Deep Shingala.jpg"
import Paril from "@/public/B&B_Photos/Paril Paladiya.jpg"
import Drashti from "@/public/B&B_Photos/Drashti Master.jpg"
//import Neil from "@/public/B&B_Photos/Neil Gandhi.jpg"
import Nishu from "@/public/B&B_Photos/Nishu Shukla.jpg"
import Dhruvina from "@/public/B&B_Photos/Rathod Dhruvina.jpg"
import Anand from "@/public/B&B_Photos/Anand Zanzmeriya.jpg"
import Suribhi from "@/public/B&B_Photos/SuribhiYadav.jpg"
import AayushiS from "@/public/B&B_Photos/Aayushi Shah.jpg"
import Daksh from "@/public/B&B_Photos/dakshMathus.jpg"
import Anshul from "@/public/B&B_Photos/AnshulBhatt.jpg"
//import DeepS from "@/public/B&B_Photos/Deep Shingala.jpg"
import Harsh from "@/public/B&B_Photos/Harsh Patil.jpg"
import Karan from "@/public/B&B_Photos/Karan Boda.jpeg"
//import Muskan from "@/public/B&B_Photos/Muskan Goplani.jpg"
import Gaurika from "@/public/B&B_Photos/Gaurika Soni.jpg"
import Ishaan from "@/public/B&B_Photos/Ishaan Kathiriya.jpg"
import Pritesh from "@/public/B&B_Photos/Pritesh Patel.jpg"
import DarshilS from "@/public/B&B_Photos/Darshil Shah.jpg"
import Aditya from "@/public/B&B_Photos/Aditya Sevak.jpg"
import Mohit from "@/public/B&B_Photos/Mohit Gurnani.jpg"
import Tank from "@/public/B&B_Photos/Chelshi Tank.jpg"
import Yatri from "@/public/B&B_Photos/Yatri patel.jpg"
import Raj from "@/public/B&B_Photos/Raj Shah.jpg"
import AnshulB from "@/public/B&B_Photos/AnshulBhatt.jpg"
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
import Bhumi from "@/public/B&B_Photos/BhumiShah.jpg"
import Jhil from "@/public/B&B_Photos/Jhil Mandavia.jpg"
import AayushiP from "@/public/B&B_Photos/Aayushi Patel.jpg"
import DiyaP from "@/public/B&B_Photos/DIya Pat.jpg"
import KalpD from "@/public/B&B_Photos/Kalp D.jpeg"
import Helish from  "@/public/B&B_Photos/Helish P.jpeg"


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
      flip: false,
    },
    {
      name: "Viral Vaghela",
      position: "App Developer",
      image: 'https://i.ibb.co/0yfT8FXn/Viral-Vaghela.jpg',
      flip: false,
    },
    {
      name: "Nishu Shukla",
      position: "Database Administrator",
      image: Nishu,
      flip: false,
    },
    {
      name: "Aashvi Padhiyar",
      position: "UI/UX Designer",
      image: Aashvi,
      flip: false,
    },
    {
      name: "Shoury Mishra",
      position: "Backend Developer",
      image: Shoury,
      flip: false,
    },
  ],
  Research: [
    {
      name: "Aayushi Shah",
      position: "",
      image: AayushiS,
      flip: false,
    },
    {
      name: "Smit Joshi",
      position: "",
      image: Smit,
      flip: false,
    },
    {
      name: "Anshul Bhatt",
      position: "",
      image: AnshulB,
      flip: false,
    },
    {
      name: "Neil Gandhi",
      position: "",
      image: "Neil",
      flip: false,
    },
    {
      name: "Darshil Shah",
      position: "",
      image: Darshil,
      flip: false,
    },
  ],
  "Event Management": [
    {
      name: "Chelshi Tank",
      position: "Equity Research Analyst",
      image: Tank,
      flip: false,
    },
    {
      name: "Donna Kasundra",
      position: "",
      image: Kasundra,
      flip: false,
    },
    {
      name: "Suribhi Yadav",
      position: "",
      image: Suribhi,
      flip: false,
    },
    {
      name: "Dhruvina Rathod",
      position: "",
      image: Dhruvina,
      flip: false,
    },
    {
      name: "Pratham Mehta",
      position: "",
      image: Pratham,
      flip: false,
    },
    {
      name: "Pritesh Patel",
      position: "",
      image: Pritesh,
      flip: false,
    },
    {
      name: "Aaryan Amin",
      position: "",
      image: "Aaryan",
      flip: false,
    },
    {
      name: "Pratham Magnani",
      position: "",
      image: "Pratham",
      flip: false,
    },
    {
      name: "Hetvi Makadiya",
      position: "",
      image: "Hetvi",
      flip: false,
    },
    {
      name: "Ved Patel",
      position: "",
      image: Ved,
      flip: false,
    },
    {
      name: "Bhumi Shah",
      position: "",
      image: Bhumi,
      flip: false,
    },
    {
      name: "Shanay Vyas",
      position: "",
      image: "Shanay",
      flip: false,
    },
  ],
  "Content & Documentation": [
    {
      name: "Anand Zanzmeriya",
      position: "",
      image: Anand,
      flip: false,
    },
    {
      name: "Muskan Goplani",
      position: "",
      image: "Muskan",
      flip: false,
    },
    {
      name: "Karan Boda Patel",
      position: "",
      image: Karan,
      flip: false,
    },
    {
      name: "Daksh Mathur",
      position: "",
      image: Daksh,
      flip: false,
    },
    {
      name: "Ishita Shah",
      position: "",
      image: "Ishita",
      flip: false,
    },
  ],
  Marketing: [
    {
      name: "Shaurya Khandelwal",
      position: "",
      image: "Shaurya",
      flip: false,
    },
    {
      name: "Lakshya Baldaniya",
      position: "",
      image: "Lakshya",
      flip: false,
    },
    {
      name: "Aditya Sevak",
      position: "",
      image: Aditya,
      flip: false,
    },
    {
      name: "Kalp Dhariwal",
      position: "",
      image: KalpD,
      flip: false,
    },
    {
      name: "Pinal Samani",
      position: "",
      image: "Pinal",
      flip: false,
    },
    {
      name: "Jhil Mandavia",
      position: "",
      image: Jhil,
      flip: false,
    },
    {
      name: "Diya Patel",
      position: "",
      image: DiyaP,
      flip: false,
    },
    {
      name: "Aaditya Gupta",
      position: "",
      image: "Aaditya",
      flip: false,
    },
  ],
  "Graphic Design": [
    {
      name: "Drashti Master",
      position: "Equity Research Analyst",
      image: Drashti,
      flip: false,
    },
    {
      name: "Gaurika Soni",
      position: "Fixed Income Analyst",
      image: Gaurika,
      flip: false,
    },
    {
      name: "Paril Paladiya",
      position: "Macroeconomic Analyst",
      image: Paril,
      flip: false,
    },
    {
      name: "Ishaan Katariya",
      position: "Cryptocurrency Researcher",
      image: Ishaan,
      flip: false,
    },
  ],
  "Digital Marketing": [
    {
      name: "Helish Patel",
      position: "",
      image: Helish,
      flip: false,
    },
    {
      name: "Siya Gandhi",
      position: "",
      image: "Siya",
      flip: false,
    },
    {
      name: "Aayushi Patel",
      position: "",
      image: AayushiP,
      flip: false,
    },
    {
      name: "Yuvraj Patel",
      position: "",
      image: Yuvraj,
      flip: false,
    },
  ],
  Sponsorship: [
    {
      name: "Harsh Patil",
      position: "",
      image: Harsh,
      flip: false,
    },
    {
      name: "Yug Prajapati",
      position: "",
      image: Yug,
      flip: false,
    },
    {
      name: "Dhruv Jegoda",
      position: "",
      image: Dhruv,
      flip: false,
    },
    {
      name: "Yug T",
      position: "",
      image: "YugT",
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