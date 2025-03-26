"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LinkedinIcon, InstagramIcon } from "lucide-react"

interface MemberCardProps {
  name: string
  position: string
  image: string
  bio: string
  linkedin?: string
  instagram?: string
  delay?: number
}

export default function MemberCard({ name, position, image, bio, linkedin, instagram, delay = 0 }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group perspective h-[400px] w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn("relative h-full w-full transition-all duration-500 preserve-3d", isFlipped && "rotate-y-180")}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-card shadow-md">
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 h-40 w-40 overflow-hidden rounded-full shadow-lg">
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold">{name}</h3>
            <p className="text-primary">{position}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-card shadow-md rotate-y-180">
          <div className="flex h-full flex-col items-center justify-between p-6 text-center">
            <div>
              <h3 className="mb-2 text-xl font-bold">{name}</h3>
              <p className="mb-4 text-primary">{position}</p>
              <p className="text-sm text-muted-foreground">{bio}</p>
            </div>
            <div className="flex gap-4">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

