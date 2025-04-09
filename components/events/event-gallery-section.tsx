"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

import galleryImages from "./Gallery";

export default function EventGallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px 100px 0px",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const featuredImages = galleryImages.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [featuredImages.length]);

  const categoryCounts: Record<string, number> = galleryImages.reduce(
    (acc, img) => {
      const category = img.category.toLowerCase();
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const categories = ["All", "Fun", "Workshop", "Competition", "Networking"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category.toLowerCase() === filter.toLowerCase()
        );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    } else {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col" ref={ref}>
      {/* Hero Slideshow */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
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
                src={featuredImages[currentSlide].src}
                alt={featuredImages[currentSlide].alt}
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
                EVENT GALLERY
              </motion.h1>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {featuredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Event Gallery</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto">
            Glimpses from our previous events
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider border transition-all ${
                  filter === category
                    ? "bg-black text-white border-black shadow"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
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

        {/* Image Grid - Fixed with proper dimensions */}
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
              onClick={() => setFilter("All")}
              className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Show All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-xs">
              {selectedImage + 1} / {filteredImages.length}
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="w-6 h-6" />
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="font-semibold">
                  {filteredImages[selectedImage].alt}
                </h3>
                <span className="text-xs mt-1 inline-block">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-gray-500 text-xs sm:text-sm py-6">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
}
