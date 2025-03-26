"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "Understanding Market Volatility: A Beginner's Guide",
    excerpt:
      "Learn how to navigate market fluctuations and make informed investment decisions during volatile periods.",
    image: "/images/blog-1.jpg",
    date: "March 10, 2024",
    author: "Priya Patel",
    category: "Investment",
  },
  {
    id: 2,
    title: "The Impact of Geopolitical Events on Global Markets",
    excerpt:
      "An analysis of how international conflicts and political developments affect financial markets worldwide.",
    image: "/images/blog-2.jpg",
    date: "March 5, 2024",
    author: "Rahul Mehta",
    category: "Global Finance",
  },
]

export default function FeaturedPosts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-muted/30 py-16 dark:bg-muted/10" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="mb-2 text-3xl font-bold">Featured Articles</h2>
          <p className="text-lg text-muted-foreground">Our most insightful and popular content</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-card/80 dark:backdrop-blur-sm"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">{post.title}</h3>

                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-amber-600 transition-colors hover:text-amber-700"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

