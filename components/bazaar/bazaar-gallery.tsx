"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311283/IMG_7269_1_qvjdkf.jpg",
    alt: "Students participating in trading simulation",
    width: 600,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311282/IMG_7326_2_ztjfup.jpg",
    alt: "Workshop session by industry expert",
    width: 600,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311281/20241019_165047_oprcpv.jpg",
    alt: "Prize distribution ceremony",
    width: 600,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311281/IMG_6741_1_gy1q22.jpg",
    alt: "Networking session",
    width: 600,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311281/IMG_7268_1_cjycms.jpg",
    alt: "Trading floor overview",
    width: 600,
    height: 400,
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311282/IMG_7256_1_ha1bgw.jpg",
    alt: "Team competition",
    width: 600,
    height: 400,
  },
]

export default function BazaarGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") navigateImage("next")
    if (e.key === "ArrowLeft") navigateImage("prev")
  }

  return (
    <section className="bg-background py-24" ref={ref} onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Glimpses from our previous Bazaar events</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=600"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm">{image.alt}</p>
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
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

