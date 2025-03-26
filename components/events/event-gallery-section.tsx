"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Finance Summit keynote speaker",
    category: "Summit",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Workshop participants",
    category: "Workshop",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Panel discussion",
    category: "Summit",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Award ceremony",
    category: "Competition",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team competition",
    category: "Competition",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Student presentation",
    category: "Workshop",
  },
]

export default function EventGallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredImages = filter ? galleryImages.filter((img) => img.category === filter) : galleryImages

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") navigateImage("next")
    if (e.key === "ArrowLeft") navigateImage("prev")
  }

  const categories = ["Summit", "Workshop", "Competition", "Networking"]

  return (
    <section className="bg-background/80 backdrop-blur-sm py-24" ref={ref} onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Event Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">Glimpses from our previous events</p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === null ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setFilter(null)}
            >
              All
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === category ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm">{image.alt}</p>
                  <span className="text-xs bg-primary/80 px-2 py-0.5 rounded-full">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[90vh] rounded-lg object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p>{filteredImages[selectedImage].alt}</p>
                <span className="inline-block mt-2 bg-primary/80 px-3 py-1 rounded-full text-sm">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

