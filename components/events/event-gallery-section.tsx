"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const galleryImages = [
  {
    src: "https://i.ibb.co/NPcwCLL/20250124-164246.jpg",
    alt: "Finance fun keynote speaker",
    category: "fun",
  },
  {
    src: "https://i.ibb.co/23yPSRyN/20250124-164521.jpg",
    alt: "Finance fun keynote speaker",
    category: "fun",
  },
  {
    src: "https://i.ibb.co/1GpqHw5j/20250124-164620.jpg",
    alt: "Finance fun keynote speaker",
    category: "fun",
  },
  {
    src: "https://i.ibb.co/W4wtSR8B/20250124-164659.jpg",
    alt: "Finance fun keynote speaker",
    category: "fun",
  },
  {
    src: "https://i.ibb.co/cSsr5v1x/20250124-164912.jpg",
    alt: "Finance fun keynote speaker",
    category: "fun",
  },
  {
    src: "https://i.ibb.co/0yJLhf8C/Photo1.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/VW7gDnKG/Photo2.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/23TGthBL/Photo3.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/67v8wjbq/Photo4.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/ZzmYjzXT/Photo5.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/r24tJSkT/Photo6.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/dJGbZG3n/Photo7.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/mCbhyqcJ/Photo8.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/27bPYSdQ/Photo9.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/Dftb0d3b/Photo10.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/N2DqmJqR/Photo1.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/twRQqQhV/Photo2.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/zWjjtYdN/Photo3.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/LXPNKMpS/Photo4.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/WvSd1sCF/Photo5.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/chBxhgQb/Photo6.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/x8KV5gXx/Photo7.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/RpWvx5LH/Photo8.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/Mx4r0X5Q/Photo9.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/gLmRRF8M/Photo10.jpg",
    alt: "Networking session",
    category: "Networking",
  },
  {
    src: "https://i.ibb.co/0jMYkSf0/IMG-7850.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/CKMs9jZb/IMG-7860.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/qMmjs3zw/IMG-7866.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/ZR7Vz8vn/IMG-7875.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/FLhk0hxZ/IMG-7888.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/cWdX3RZ/20250322-140659.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/gLMmV4XT/20250322-141459.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/S4ZGqsJy/20250322-142953.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/RTw4dC5T/20250322-143417.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/zVLqD10x/20250322-153935.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/jPqgqvxp/20250322-160854.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/Hf19D7GL/20250322-161353.jpg",
    alt: "Guest lecture",
    category: "Workshop",
  },
  {
    src: "https://i.ibb.co/23GRHMCc/IMG-0012.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/LXcFWk4d/IMG-0387.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/cSXBX7qk/IMG-0390.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/zWZmVkq0/IMG-0394.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/Xff2Qv81/IMG-0398.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/604HC74x/IMG-0399.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/3YGBxxQ8/IMG-0426.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
  {
    src: "https://i.ibb.co/KcQMsVhD/IMG-0437.jpg",
    alt: "Competition participants",
    category: "Competition",
  },
];

export default function EventGallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Auto-rotate slides every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Count images by category
  const categoryCounts: Record<string, number> = galleryImages.reduce<
    Record<string, number>
  >((acc, img) => {
    const category = img.category.toLowerCase();
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const categories = ["All", "Fun", "Workshop", "Competition", "Networking"];

  // Featured images for the slideshow (first 5 images)
  const featuredImages = galleryImages.slice(0, 5);

  // Filter images based on selection (case-insensitive)
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

  // Handle keyboard navigation
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
    <div className="min-h-screen bg-white font-sans" ref={ref}>
      {/* Hero Slideshow Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <LazyLoadImage
              threshold={300}
              src={featuredImages[currentSlide].src}
              alt={featuredImages[currentSlide].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-light text-white tracking-widest"
              >
                EVENT GALLERY
              </motion.h1>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
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

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Event Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
            Glimpses from our previous events
          </p>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 text-sm uppercase tracking-wider border transition-all ${
                  filter === category
                    ? "bg-black text-white border-black shadow-md"
                    : "border-gray-300 hover:bg-gray-100 text-gray-700"
                } rounded-full`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-1 font-normal">
                    ({categoryCounts[category.toLowerCase()] || 0})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                animate={{
                  scale: isHovering === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="aspect-square"
              >
                <LazyLoadImage
                  threshold={300}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
                <span className="inline-block mt-2 bg-amber-600/90 px-2.5 py-1 rounded-full text-xs uppercase tracking-wider">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500">No images found in this category</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => setFilter("All")}
            >
              Show All Photos
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
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

            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm shadow-md">
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
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <LazyLoadImage
                threshold={300}
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[80vh] rounded-lg object-contain shadow-xl"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm rounded-b-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      {filteredImages[selectedImage].alt}
                    </h3>
                    <span className="inline-block mt-1 text-sm text-white/70">
                      {filteredImages[selectedImage].category}
                    </span>
                  </div>
                  <span className="bg-amber-600/90 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </div>
  );
}
