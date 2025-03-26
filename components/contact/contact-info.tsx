"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, LinkedinIcon, InstagramIcon } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out to us through any of the following channels. We're always happy to connect with
          students, alumni, industry professionals, and anyone interested in finance.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <MapPin className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-muted-foreground">
              Bulls & Bears Finance Club
              <br />
              Pandit Deendayal Energy University
              <br />
              Raisan, Gandhinagar - 382007
              <br />
              Gujarat, India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Mail className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:bullsandbears@pdeu.ac.in" className="hover:text-primary transition-colors">
                bullsandbears@pdeu.ac.in
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">For general inquiries and information</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Phone className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                +91 9876543210
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Monday to Friday, 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 10:00 AM - 5:00 PM
              <br />
              Saturday: 10:00 AM - 1:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground shadow-md"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground shadow-md"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 rounded-xl overflow-hidden h-[300px] shadow-lg">
        {/* This would be a Google Map in a real implementation */}
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Map Would Be Here</p>
        </div>
      </div>
    </motion.div>
  )
}

