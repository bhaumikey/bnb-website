"use client"

import React, { useEffect, useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, PerspectiveCamera } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

// Error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? null : this.props.children; }
}

function AnimatedText({ text, position, color, targetPosition, delay, onAnimationComplete }) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const groupRef = useRef();
  const [fontError, setFontError] = useState(false);

  useEffect(() => {
    let timeout;

    if (animationPhase === 0) {
      timeout = setTimeout(() => {
        setAnimationPhase(1);
      }, delay + 1500);
    } else if (animationPhase === 1) {
      timeout = setTimeout(() => {
        setAnimationPhase(2);
        if (text === "Bears") {
          setTimeout(onAnimationComplete, 1000);
        }
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (groupRef.current) {
        groupRef.current.traverse((obj) => {
          if (obj.dispose) obj.dispose();
        });
      }
    };
  }, [animationPhase, delay, onAnimationComplete, text]);

  return (
    <group ref={groupRef}>
      <Center position={[animationPhase >= 1 ? targetPosition[0] : position[0], position[1], position[2]]}>
        <Text3D 
          font={fontError ? undefined : "/fonts/helvetiker_regular.typeface.json"}
          size={1.5} 
          height={0.2} 
          curveSegments={12} 
          bevelEnabled 
          bevelThickness={0.02} 
          bevelSize={0.02} 
          bevelOffset={0} 
          bevelSegments={5}
          onError={() => setFontError(true)}
        >
          {text}
          <meshStandardMaterial 
            color={color} 
            metalness={0.8} 
            roughness={0.2} 
            opacity={animationPhase === 2 ? 0.5 : 1} 
            transparent 
          />
        </Text3D>
      </Center>
    </group>
  );
}

function Scene({ onComplete }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <ErrorBoundary>
        <Suspense fallback={null}>
          <AnimatedText 
            text="Bulls &" 
            position={[-5, 0, 0]} 
            color="#d97706" 
            targetPosition={[-1, 0, 0]} 
            delay={500} 
            onAnimationComplete={() => {}} 
          />
          <AnimatedText 
            text="Bears" 
            position={[5, 0, 0]} 
            color="#0f766e" 
            targetPosition={[1, 0, 0]} 
            delay={1000} 
            onAnimationComplete={onComplete} 
          />
        </Suspense>
      </ErrorBoundary>

      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#111827" opacity={0.8} transparent />
      </mesh>
    </>
  );
}

export default function PreLanding() {
  const [introEnded, setIntroEnded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (sessionStorage.getItem("hasSeenIntro") === "true") {
      setIntroEnded(true);
    }

    const handleKeyDown = () => handleComplete();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted]);

  const handleComplete = () => {
    if (!mounted) return;
    setFadeOut(true);
    setTimeout(() => {
      setIntroEnded(true);
      window.dispatchEvent(new Event("introComplete"));
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 1000);
  };

  if (introEnded) return null;

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
          <ErrorBoundary>
            <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center">Loading...</div>}>
              <Canvas>
                <Scene onComplete={handleComplete} />
              </Canvas>
            </Suspense>
          </ErrorBoundary>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-muted-foreground">
            <p className="text-sm">Press any key to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}