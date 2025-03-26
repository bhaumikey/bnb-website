"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, User, Tag } from "lucide-react"

interface BlogPostProps {
  post: {
    id: number
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    author: string
    category: string
    tags?: string[]
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="mx-auto max-w-4xl py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-primary" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4 text-primary" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        <div className="relative mb-10 h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground prose-li:text-foreground/80">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 border-t border-border pt-6">
            <h3 className="mb-3 text-lg font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-xl bg-card/80 p-6 backdrop-blur-sm shadow-md border border-primary/10">
          <h3 className="mb-4 text-xl font-bold">Share your thoughts</h3>
          <p className="mb-4 text-muted-foreground">
            Did you find this article helpful? Join the conversation and share your insights!
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
            >
              Leave a Comment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-amber-600 bg-transparent px-4 py-2 text-sm font-medium text-amber-600 hover:bg-amber-600/10"
            >
              Share Article
            </motion.button>
          </div>
        </div>
      </motion.div>
    </article>
  )
}

