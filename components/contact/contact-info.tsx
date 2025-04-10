"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, LinkedinIcon, InstagramIcon } from "lucide-react";
import React from "react";

const ContactInfo: React.FC = () => {
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
              School of Technology, Raisan, Gandhinagar - 382421
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
                pdpubnb@gmail.com
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
                +91 7046663619
              </a>
              <br />
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                +91 9316170948
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
            <h3 className="text-lg font-semibold">Club Hours</h3>
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
            href="https://www.linkedin.com/company/bulls-bearspdeu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground shadow-md"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/bullsandbears_pdeu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground shadow-md"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 rounded-xl overflow-hidden h-[300px] shadow-lg">
        <iframe
          title="PDEU Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.971911509739!2d72.6643342!3d23.1540997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81121adadc2f%3A0x27a67130d51703ea!2sSCHOOL%20OF%20TECHNOLOGY%2C%20PDEU!5e0!3m2!1sen!2sin!4v1711638453635!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactInfo;