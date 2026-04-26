"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollAnimation({ children, delay = 0, duration = 0.6 }: ScrollAnimationProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants as any}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.1 }: StaggerContainerProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants as any}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  index?: number;
}

export function Item({ children, index = 0 }: ItemProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    },
  };

  return <motion.div variants={variants as any}>{children}</motion.div>;
}
