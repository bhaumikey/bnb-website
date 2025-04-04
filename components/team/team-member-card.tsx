"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LinkedinIcon, InstagramIcon } from "lucide-react"
import Image, { StaticImageData } from 'next/image'

interface TeamMemberCardProps {
  name: string
  position: string
  image: string | StaticImageData
  bio: string
  linkedin?: string
  instagram?: string
  delay?: number
  flip?: boolean
}

export default function TeamMemberCard({
  name,
  position,
  image,
  bio,
  linkedin,
  instagram,
  delay = 0,
  flip = true,
}: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleInteraction = () => {
    if (flip) {
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group h-[400px] w-full",
        flip ? "perspective cursor-pointer" : "cursor-default"
      )}
      onMouseEnter={() => flip && setIsFlipped(true)}
      onMouseLeave={() => flip && setIsFlipped(false)}
      onClick={handleInteraction}
      whileHover={{ scale: flip ? 1.02 : 1 }}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-500",
          flip ? "preserve-3d" : "",
          isFlipped && flip ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <div className={cn(
          "absolute inset-0 rounded-xl bg-card/90 shadow-lg backdrop-blur-sm border border-primary/10",
          flip ? "backface-hidden" : ""
        )}>
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 h-40 w-40 overflow-hidden rounded-full shadow-lg border-2 border-primary/20">
              <Image
                src={image}
                width={500}
                height={500}
                alt={`Picture of ${name}`}
                priority
              />
            </div>
            <h3 className="mt-4 text-xl font-bold">{name}</h3>
            <p className="text-primary">{position}</p>

            {flip && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(245, 158, 11, 0)",
                    "0 0 15px rgba(245, 158, 11, 0.2)",
                    "0 0 0px rgba(245, 158, 11, 0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            )}
          </div>
        </div>

        {/* Back of card - only rendered if flip is enabled */}
        {flip && (
          <div className="absolute inset-0 backface-hidden rounded-xl bg-card/90 shadow-lg backdrop-blur-sm rotate-y-180 border border-primary/10">
            <div className="flex h-full flex-col items-center justify-between p-6 text-center">
              <div>
                <h3 className="mb-2 text-xl font-bold">{name}</h3>
                <p className="mb-4 text-primary">{position}</p>
                <p className="text-sm text-muted-foreground">{bio}</p>
              </div>
              <div className="flex gap-4">
                {linkedin && (
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-primary"
                    whileHover={{ scale: 1.2 }}
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </motion.a>
                )}
                {instagram && (
                  <motion.a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-primary"
                    whileHover={{ scale: 1.2 }}
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}