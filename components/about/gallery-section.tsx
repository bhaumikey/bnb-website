"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

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
    alt: "Club members at networking event",
    category: "Team",
  },
  {
    src: "https://i.ibb.co/gMC3DzMb/FE1101-D7-1-CDD-4-A1-E-9-D03-F12415-D473-F8.jpg",
    alt: "Leadership planning session",
    category: "Team",
  },
  {
    src: "https://i.ibb.co/gMC3DzMb/FE1101-D7-1-CDD-4-A1-E-9-D03-F12415-D473-F8.jpg",
    alt: "Team building activity",
    category: "Team",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Panel discussion on market trends",
    category: "Events",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team building retreat",
    category: "Team",
  },
]

export default function GalleryCarousel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [randomImages, setRandomImages] = useState<typeof galleryImages>([])

  const filteredImages = filter ? galleryImages.filter((img) => img.category === filter) : galleryImages

  // Check if we have images for both categories
  const hasTeamImages = galleryImages.some(img => img.category === "Team")
  const hasEventsImages = galleryImages.some(img => img.category === "Events")

  // If there are no images for the currently selected filter, switch to "All"
  useEffect(() => {
    if (filter && filteredImages.length === 0) {
      setFilter(null)
    }
  }, [filter, filteredImages.length])

  // Select 5 random images for the main carousel, making sure to include images from selected category
  useEffect(() => {
    if (filteredImages.length > 0) {
      let selected = []

      // If filtering, prioritize those category images
      if (filter) {
        // Get all images of the filtered category
        const categoryImages = [...filteredImages]
        const shuffledCategoryImages = categoryImages.sort(() => 0.5 - Math.random())

        // Take up to 5 from the category
        selected = shuffledCategoryImages.slice(0, Math.min(5, shuffledCategoryImages.length))
      } else {
        // When showing all, make sure we have at least one from each category if available
        let teamImages = galleryImages.filter(img => img.category === "Team")
        let eventsImages = galleryImages.filter(img => img.category === "Events")

        // Shuffle both arrays
        teamImages = teamImages.sort(() => 0.5 - Math.random())
        eventsImages = eventsImages.sort(() => 0.5 - Math.random())

        // Add at least one from each category if available
        if (teamImages.length > 0) selected.push(teamImages[0])
        if (eventsImages.length > 0) selected.push(eventsImages[0])

        // Fill the remaining slots randomly
        const remaining = galleryImages
          .filter(img => !selected.some(s => s.src === img.src))
          .sort(() => 0.5 - Math.random())

        while (selected.length < 5 && remaining.length > 0) {
          selected.push(remaining.shift()!)
        }
      }

      setRandomImages(selected)
      setActiveIndex(0)
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
      setActiveIndex((activeIndex + 1) % randomImages.length)
    } else {
      setActiveIndex((activeIndex - 1 + randomImages.length) % randomImages.length)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") {
      selectedImage !== null ? navigateImage("next") : navigateCarousel("next")
    }
    if (e.key === "ArrowLeft") {
      selectedImage !== null ? navigateImage("prev") : navigateCarousel("prev")
    }
  }

  // Fix for keyboard event handler
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, activeIndex])

  return (
    <section
      className="bg-muted/30 backdrop-blur-sm py-24 dark:bg-muted/10"
      ref={ref}
      tabIndex={-1}
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Glimpses of our journey and memorable moments
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === null ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              onClick={() => setFilter(null)}
            >
              All
            </motion.button>

            {hasTeamImages && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "Team" ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                onClick={() => setFilter("Team")}
              >
                Team
              </motion.button>
            )}

            {hasEventsImages && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "Events" ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                onClick={() => setFilter("Events")}
              >
                Events
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Main Carousel - Shows 5 random images */}
        {randomImages.length > 0 ? (
          <div
            className="relative mx-auto max-w-4xl mb-12 overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <div className="relative aspect-[16/9]">
              {randomImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  initial={false}
                  animate={{ opacity: index === activeIndex ? 1 : 0 }}
                  onClick={() => {
                    // Find the index of this image in the filteredImages array
                    const fullIndex = filteredImages.findIndex(img => img.src === image.src)
                    if (fullIndex !== -1) openLightbox(fullIndex)
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">{image.alt}</p>
                    <span className="text-sm bg-primary/80 px-2 py-0.5 rounded-full mt-2 inline-block">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Navigation */}
            {randomImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateCarousel("prev");
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateCarousel("next");
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Carousel Indicators */}
            {randomImages.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {randomImages.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? "bg-white w-4" : "bg-white/50"
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            No images found for the selected category.
          </div>
        )}

        {/* Thumbnail Carousel */}
        {filteredImages.length > 0 && (
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`flex-shrink-0 relative overflow-hidden rounded-md shadow-sm cursor-pointer ${randomImages.some(img => img.src === image.src) && randomImages.findIndex(img => img.src === image.src) === activeIndex
                    ? "ring-2 ring-amber-600"
                    : ""
                    }`}
                  onClick={() => {
                    // Find if this image is in the randomImages array
                    const randomIndex = randomImages.findIndex(img => img.src === image.src)
                    if (randomIndex !== -1) {
                      setActiveIndex(randomIndex)
                    } else {
                      // If not, open it in the lightbox
                      openLightbox(index)
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-square w-24 sm:w-28 md:w-32 relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-xs text-white text-center p-1 truncate">
                      {image.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 z-50"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            {filteredImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 z-50"
                  onClick={() => navigateImage("prev")}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 z-50"
                  onClick={() => navigateImage("next")}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[90vh] rounded-lg object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-medium">{filteredImages[selectedImage].alt}</p>
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