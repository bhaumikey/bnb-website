"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://i.ibb.co/NPcwCLL/20250124-164246.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://i.ibb.co/23yPSRyN/20250124-164521.jpg",
    alt: "Workshop session with students",
    category: "Events",
  },
  {
    src: "https://i.ibb.co/1GpqHw5j/20250124-164620.jpg",
    alt: "Award ceremony for trading competition",
    category: "Events",
  },
  {
    src: "https://i.ibb.co/W4wtSR8B/20250124-164659.jpg",
    alt: "Core team planning meeting",
    category: "Team",
  },
  {
    src: "https://i.ibb.co/cSsr5v1x/20250124-164912.jpg",
    alt: "Guest lecture by industry expert",
    category: "Events",
  },
  {
    src: "https://i.ibb.co/gMC3DzMb/FE1101-D7-1-CDD-4-A1-E-9-D03-F12415-D473-F8.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311668/t3_w7hdyg.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311668/t2_foanee.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311668/t5_fucstr.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311669/t_eykzqt.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311669/t8_r0j9sv.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311670/t7_bkxqv1.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311673/t10_fy1el2.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311673/t9_eqzhgn.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311674/t4_rodznw.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311670/e1_myzyue.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311668/e2_uyvpmm.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311670/e3_ixeu91.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311674/e4_xbneeo.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311669/e5_epkprb.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311671/e6_wfpf5y.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311669/e7_ciftqt.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
  {
    src: "https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744311672/e9_wutmvm.jpg",
    alt: "Team photo at Annual Finance Summit",
    category: "Events",
  },
]

export default function GalleryCarousel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px 100px 0px",
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const [randomImages, setRandomImages] = useState<typeof galleryImages>([])

  // Auto-rotate slides every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % randomImages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [randomImages])

  // Count images by category
  const categoryCounts = galleryImages.reduce<Record<string, number>>((acc, img) => {
    const category = img.category.toLowerCase()
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  const categories = ["All", "Team", "Events"]

  // Filter images based on selection (case-insensitive)
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === filter.toLowerCase())

  // Select 5 random images for the main carousel
  useEffect(() => {
    if (filteredImages.length > 0) {
      let selected: { src: string; alt: string; category: string }[] = []
      
      // If filtering, prioritize those category images
      if (filter !== "All") {
        // Get all images of the filtered category
        const categoryImages = [...filteredImages]
        const shuffledCategoryImages = categoryImages.sort(() => 0.5 - Math.random())
        // Take up to 5 from the category
        selected = shuffledCategoryImages.slice(0, Math.min(5, shuffledCategoryImages.length))
      } else {
        // When showing all, make sure we have at least one from each category if available
        let teamImages = galleryImages.filter(img => img.category === "Team")
        let eventsImages = galleryImages.filter(img => img.category === "Events")

        // Add at least one from each available category
        if (teamImages.length > 0) selected.push(teamImages[Math.floor(Math.random() * teamImages.length)])
        if (eventsImages.length > 0) selected.push(eventsImages[Math.floor(Math.random() * eventsImages.length)])

        // Fill the remaining slots randomly
        const remaining = galleryImages
          .filter(img => !selected.some(s => s.src === img.src))
          .sort(() => 0.5 - Math.random())

        while (selected.length < 5 && remaining.length > 0) {
          selected.push(remaining.shift()!)
        }
      }

      setRandomImages(selected)
      setCurrentSlide(0)
    }
  }, [filter, filteredImages])

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

  const navigateCarousel = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentSlide((currentSlide + 1) % randomImages.length)
    } else {
      setCurrentSlide((currentSlide - 1 + randomImages.length) % randomImages.length)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") {
        selectedImage !== null ? navigateImage("next") : navigateCarousel("next")
      }
      if (e.key === "ArrowLeft") {
        selectedImage !== null ? navigateImage("prev") : navigateCarousel("prev")
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentSlide, randomImages])

  return (
    <section className="min-h-screen bg-white font-sans flex flex-col" ref={ref}>
      {/* Hero Slideshow Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {randomImages.length > 0 && (
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={randomImages[currentSlide].src}
                  alt={randomImages[currentSlide].alt}
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-5xl font-light text-white tracking-widest"
                >
                  GALLERY
                </motion.h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Indicators */}
        {randomImages.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {randomImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Gallery Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Gallery</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto">
            Glimpses of our journey and memorable moments
          </p>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all ${
                  filter === category 
                    ? 'bg-black text-white border-black shadow' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                } rounded-full`}
              >
                {category} 
                {category !== "All" && (
                  <span className="ml-1">
                    ({categoryCounts[category.toLowerCase()] || 0})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow cursor-pointer aspect-[4/3] bg-gray-200"
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
                <span className="inline-block mt-2 bg-amber-600/90 px-2 py-1 rounded-full text-xs uppercase">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No images found in this category</p>
            <button 
              className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => setFilter("All")}
            >
              Show All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1 text-white text-xs sm:text-sm shadow-md">
              {selectedImage + 1} / {filteredImages.length}
            </div>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
              onClick={() => navigateImage("prev")}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-colors"
              onClick={() => navigateImage("next")}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <motion.div 
              className="relative w-full h-full max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm rounded-b-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{filteredImages[selectedImage].alt}</h3>
                    <span className="inline-block mt-1 text-xs sm:text-sm text-white/70">
                      {filteredImages[selectedImage].category}
                    </span>
                  </div>
                  <span className="bg-amber-600/90 px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-xs sm:text-sm text-gray-500">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </section>
  )
}