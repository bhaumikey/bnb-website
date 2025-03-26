"use client"

import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Text3D, Center, PerspectiveCamera } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"

// Simplified 3D Text component
function AnimatedText({ text, position, color, targetPosition, delay, onAnimationComplete }) {
  const [animationPhase, setAnimationPhase] = useState(0)
  const groupRef = useRef()

  useEffect(() => {
    let timeout

    // Phase 1: Move to target position
    if (animationPhase === 0) {
      timeout = setTimeout(() => {
        setAnimationPhase(1)
      }, delay + 1500)
    }
    // Phase 2: Trigger impact and fade out
    else if (animationPhase === 1) {
      timeout = setTimeout(() => {
        setAnimationPhase(2)
        if (text === "Bears") {
          setTimeout(() => {
            onAnimationComplete()
          }, 1000)
        }
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [animationPhase, delay, onAnimationComplete, text])

  return (
    <group ref={groupRef}>
      <Center position={[animationPhase >= 1 ? targetPosition[0] : position[0], position[1], position[2]]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            opacity={animationPhase === 2 ? 0.5 : 1}
            transparent={true}
          />
        </Text3D>
      </Center>
    </group>
  )
}

// Scene component
function Scene({ onComplete }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <AnimatedText
        text="Bulls &"
        position={[-5, 0, 0]}
        color="#d97706" // Amber-600
        targetPosition={[-1, 0, 0]}
        delay={500}
        onAnimationComplete={() => {}}
      />

      <AnimatedText
        text="Bears"
        position={[5, 0, 0]}
        color="#0f766e" // Teal-700
        targetPosition={[1, 0, 0]}
        delay={1000}
        onAnimationComplete={onComplete}
      />

      {/* Background */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#111827" opacity={0.8} transparent />
      </mesh>
    </>
  )
}

export default function PreLanding() {
  const [introEnded, setIntroEnded] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (hasSeenIntro === "true") {
      setIntroEnded(true)
    }

    // Add keyboard event listener to skip intro
    const handleKeyDown = () => {
      handleComplete()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleComplete = () => {
    setFadeOut(true)
    setTimeout(() => {
      setIntroEnded(true)
      // Dispatch custom event to notify main content
      window.dispatchEvent(new Event("introComplete"))
      // Save to session storage
      sessionStorage.setItem("hasSeenIntro", "true")
    }, 1000)
  }

  if (introEnded) {
    return null
  }

  return (
    <AnimatePresence>
      {!introEnded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-background dark:bg-background"
        >
          <Canvas>
            <Scene onComplete={handleComplete} />
          </Canvas>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-muted-foreground">
            <p className="text-sm">Press any key to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

