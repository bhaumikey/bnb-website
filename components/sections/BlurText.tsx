"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimateBy = "letters" | "words";
type Direction = "left" | "right" | "top" | "bottom";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: AnimateBy;
  direction?: Direction;
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "bottom",
  onAnimationComplete,
  className = "",
}) => {
  // Split text into individual elements (words or letters)
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  // Get animation direction values
  const getDirectionValues = () => {
    switch (direction) {
      case "left":
        return { initial: -20, animate: 0 };
      case "right":
        return { initial: 20, animate: 0 };
      case "top":
        return { initial: -20, animate: 0 };
      case "bottom":
        return { initial: 20, animate: 0 };
      default:
        return { initial: 20, animate: 0 };
    }
  };

  const { initial, animate } = getDirectionValues();

  // Create animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: (delay / 1000) * i,
        when: "beforeChildren",
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: direction === "top" || direction === "bottom" ? initial : 0,
      x: direction === "left" || direction === "right" ? initial : 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: direction === "top" || direction === "bottom" ? animate : 0,
      x: direction === "left" || direction === "right" ? animate : 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      <span className="inline-block">
        {elements.map((element, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{
              marginRight: animateBy === "letters" ? "0" : "0.25em",
              whiteSpace: animateBy === "words" ? "nowrap" : "normal",
            }}
          >
            {element}
            {animateBy === "letters" && index !== elements.length - 1 && ""}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default BlurText;
