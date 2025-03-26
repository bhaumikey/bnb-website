"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LinkedinIcon, InstagramIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-muted/20">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Bulls & Bears</h3>
            <p className="text-sm text-muted-foreground">
              The Finance Club of Pandit Deendayal Energy University, dedicated to fostering financial literacy and
              market understanding.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-muted-foreground hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/bazaar" className="text-muted-foreground hover:text-foreground">
                  Bazaar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bulls & Bears Finance Club. All rights reserved.
          </p>
          <motion.p
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
            className="text-xs text-muted-foreground"
          >
            Designed by Bhaumik Patel, Maintained by Viral Vaghela
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

