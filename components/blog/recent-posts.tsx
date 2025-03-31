"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

const recentPosts = [
  {
    id: 3,
    title: "Cryptocurrency Trends in 2024",
    excerpt: "Exploring the evolving landscape of digital currencies and blockchain technology.",
    image: "/images/blog-3.jpg",
    date: "February 28, 2024",
    author: "Aditya Sharma",
    category: "Cryptocurrency",
  },
  {
    id: 4,
    title: "ESG Investing: Balancing Profit and Purpose",
    excerpt: "How environmental, social, and governance factors are reshaping investment strategies.",
    image: "/images/blog-4.jpg",
    date: "February 20, 2024",
    author: "Ananya Singh",
    category: "Sustainable Finance",
  },
  {
    id: 5,
    title: "The Rise of Fintech: Disrupting Traditional Banking",
    excerpt: "Analyzing how financial technology startups are transforming the banking industry.",
    image: "/images/blog-5.jpg",
    date: "February 15, 2024",
    author: "Vikram Desai",
    category: "Fintech",
  },
  {
    id: 6,
    title: "Personal Finance Essentials for College Students",
    excerpt: "Practical tips for budgeting, saving, and building credit during your university years.",
    image: "/images/blog-6.jpg",
    date: "February 10, 2024",
    author: "Neha Kapoor",
    category: "Personal Finance",
  },
  {
    id: 7,
    title: "Analyzing Quarterly Earnings Reports",
    excerpt: "A step-by-step guide to interpreting company financial statements and earnings calls.",
    image: "/images/blog-7.jpg",
    date: "February 5, 2024",
    author: "Rohan Sharma",
    category: "Financial Analysis",
  },
  {
    id: 8,
    title: "The Psychology of Investing",
    excerpt: "Understanding cognitive biases and emotional factors that influence investment decisions.",
    image: "/images/blog-8.jpg",
    date: "January 30, 2024",
    author: "Tanya Gupta",
    category: "Behavioral Finance",
  },
]

export default function RecentPosts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-background py-16" ref={ref}>
      <div className="container px-4">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="mb-2 text-3xl font-bold">Recent Articles</h2>
          <p className="text-lg text-muted-foreground">Stay updated with our latest financial insights</p>
        </motion.div> */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-card/80 dark:backdrop-blur-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 rounded-full bg-amber-600 px-2 py-0.5 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-amber-600 transition-colors hover:text-amber-700"
                >
                  Read More
                </Link>
              </div>
            </motion.article>
          ))} */}
        </div>

        {/* <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-amber-600 bg-transparent px-6 py-3 font-medium text-amber-600 transition-all hover:bg-amber-600 hover:text-white"
          >
            Load More Articles
          </motion.button>
        </div> */}
      </div>
    </section>
  )
}

