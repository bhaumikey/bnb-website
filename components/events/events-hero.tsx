"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarClock } from "lucide-react";

export default function EventsHero() {
  // Target event date
  const nextEventDate = new Date("2025-04-11T16:00:00");

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const diffTime = nextEventDate.getTime() - now.getTime();
    return {
      days: Math.floor(diffTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffTime / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diffTime / (1000 * 60)) % 60),
      seconds: Math.floor((diffTime / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Our Events
              </span>
            </h1>
            <p className="mb-6 text-xl text-foreground/80">
              Engaging financial workshops, competitions, and networking
              opportunities
            </p>
            <p className="mb-8 text-muted-foreground">
              From market simulations to expert-led seminars, our events provide
              hands-on experience and valuable insights into the world of
              finance.
            </p>

            {/* Countdown timer */}
            <motion.div
              className="mb-8 p-6 rounded-xl bg-card/80 backdrop-blur-sm shadow-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <CalendarClock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Next Event Countdown</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Financial Literacy Workshop - March 29, 2025
              </p>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">
                    {timeLeft.days}
                  </span>
                  <span className="text-xs text-muted-foreground">Days</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">
                    {timeLeft.hours}
                  </span>
                  <span className="text-xs text-muted-foreground">Hours</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-xs text-muted-foreground">Minutes</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-background/50">
                  <span className="text-2xl font-bold text-primary">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-xs text-muted-foreground">Seconds</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://res.cloudinary.com/dsvgwq2ab/image/upload/v1744309405/Screenshot_2025-04-10_at_11.53.01_PM_mrwm0g.png"
                alt="Bulls & Bears Events"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
