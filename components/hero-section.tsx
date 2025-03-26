"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Candlestick chart animation
    let animationFrameId: number
    let time = 0

    const candlesticks: {
      x: number
      open: number
      close: number
      high: number
      low: number
      color: string
    }[] = []

    // Generate initial candlesticks
    for (let i = 0; i < canvas.width / 20; i++) {
      const open = Math.random() * 100 + 100
      const close = Math.random() * 100 + 100
      const high = Math.max(open, close) + Math.random() * 20
      const low = Math.min(open, close) - Math.random() * 20

      candlesticks.push({
        x: i * 20,
        open,
        close,
        high,
        low,
        color: close > open ? "#4ade80" : "#ef4444",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      // Update and draw candlesticks
      candlesticks.forEach((candle, index) => {
        // Draw the wick
        ctx.beginPath()
        ctx.strokeStyle = candle.color
        ctx.lineWidth = 1
        ctx.moveTo(candle.x + 5, canvas.height - candle.high)
        ctx.lineTo(candle.x + 5, canvas.height - candle.low)
        ctx.stroke()

        // Draw the body
        ctx.fillStyle = candle.color
        const bodyHeight = Math.abs(candle.close - candle.open)
        const y = canvas.height - Math.max(candle.close, candle.open)
        ctx.fillRect(candle.x, y, 10, bodyHeight)

        // Animate the last few candles
        if (index > candlesticks.length - 10) {
          const noise = Math.sin(time * 0.1 + index) * 5
          candle.close += noise * 0.2
          candle.high = Math.max(candle.high, candle.close)
          candle.low = Math.min(candle.low, candle.close)
          candle.color = candle.close > candle.open ? "#4ade80" : "#ef4444"
        }
      })

      time += 0.1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main.png"
          alt="Financial chart background"
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />
      </div>

      {/* Canvas animation overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 dark:opacity-30" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Bulls & Bears
              </span>
            </h1>
            <p className="mb-8 text-xl font-medium text-foreground/80 md:text-2xl">Finance Club of PDEU</p>
            <p className="mb-8 text-lg text-foreground/70">
              Empowering students with financial knowledge and market insights
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
              >
                Join Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-700 hover:bg-teal-700/10 dark:border-teal-500 dark:text-teal-500 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDown className="h-8 w-8 text-foreground/50" />
        </motion.div>
      </div>
    </section>
  )
}

