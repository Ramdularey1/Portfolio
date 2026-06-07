"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.13),transparent_34%),linear-gradient(180deg,#020617_0%,#0b1120_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
              Available for full-stack roles and freelance builds
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-black leading-[1.02] text-white md:text-7xl"
          >
            I build clean, scalable web products with{" "}
            <span className="gradient-text">React, Next.js and Node.js.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            {siteConfig.name} is a full-stack developer focused on modern interfaces,
            reliable APIs, authentication, databases, and polished user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-slate-950 transition-all duration-300 hover:bg-sky-300"
            >
              View Projects
              <FaArrowRight size={15} />
            </Link>
            <a
              href="/Ram_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-bold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-900"
            >
              <FaDownload size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <Link href={siteConfig.links.github} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <FaGithub /> GitHub
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 hover:text-white">
              Contact me <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative"
        >
          <div className="professional-card rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Developer Profile</p>
                <p className="text-xs text-slate-400">Production-ready full-stack work</p>
              </div>
              <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary">
                Open
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Frontend", "React, Next.js, Tailwind"],
                ["Backend", "Node.js, Express, REST APIs"],
                ["Database", "MongoDB, PostgreSQL"],
                ["Delivery", "Vercel, Git, debugging"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
                  <p className="mt-2 text-sm text-slate-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-slate-800 bg-slate-950/70 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Current focus</span>
                <span>Full-stack apps</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-primary to-secondary" />
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Building practical products like coding platforms, video tools, and
                food ordering experiences with real APIs and responsive interfaces.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
