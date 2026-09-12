"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { editorialEase } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  margin?: `${number}px` | `${number}%`;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  margin = "-60px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px` });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 36 : direction === "down" ? -36 : 0,
      x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: editorialEase,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
