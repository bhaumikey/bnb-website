"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export default function AmoebaBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Create gradient based on theme
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      if (theme === "dark") {
        gradient.addColorStop(0, "rgba(15, 118, 110, 0.2)") // Teal-700 with opacity
        gradient.addColorStop(1, "rgba(217, 119, 6, 0.2)") // Amber-600 with opacity
      } else {
        gradient.addColorStop(0, "rgba(15, 118, 110, 0.1)") // Teal-700 with opacity
        gradient.addColorStop(1, "rgba(217, 119, 6, 0.1)") // Amber-600 with opacity
      }

      return gradient
    }

    // Draw amoeba shape
    const drawAmoeba = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      ctx.clearRect(0, 0, width, height)

      // Create gradient
      ctx.fillStyle = createGradient()

      // Draw amoeba shape
      ctx.beginPath()

      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.4

      // Start point
      ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0))

      // Draw points around the circle with noise
      const points = 8
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2
        const noise = Math.sin(time + i * 2) * 10

        const x = centerX + (radius + noise) * Math.cos(angle)
        const y = centerY + (radius + noise) * Math.sin(angle)

        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fill()

      // Update time
      time += 0.01

      // Request next frame
      animationFrameId = requestAnimationFrame(drawAmoeba)
    }

    drawAmoeba()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(20px)" }} />
}

