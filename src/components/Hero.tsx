"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium">
            ✨ Welcome to my portfolio
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block mb-3">Hey, I'm</span>
          <span className="gradient-text text-6xl md:text-8xl">{siteConfig.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-4">
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View My Work
            <FaArrowRight size={16} />
          </Link>
          <a
            href="/Ram_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaDownload size={16} />
            Download Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 glass hover:bg-white/20 rounded-lg font-semibold transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 glass rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
