"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const metrics = [
  ["3+", "Production-style projects"],
  ["MERN", "Primary stack"],
  ["2026", "Modern UI approach"],
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65 },
    },
  };

  return (
    <section className="section-band surface-grid relative border-b border-slate-900 bg-[linear-gradient(180deg,#020617_0%,#07111f_48%,#020617_100%)]">
      <div className="section-shell relative z-10 grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-3">
            <div className="pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-primary">
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_rgba(163,230,53,0.9)]" />
              Available for full-stack work
            </div>
            <div className="pill hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-300 sm:inline-flex">
              React • Next.js • Node.js
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-5xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl"
          >
            Designing and shipping{" "}
            <span className="gradient-text">modern full-stack web apps.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            I&apos;m {siteConfig.name}, a full-stack developer building fast,
            responsive interfaces and reliable backend systems with React,
            Next.js, Node.js, Express, and databases.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-black text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.22)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              Explore Work
              <FaArrowRight size={15} />
            </Link>
            <a
              href="/Ram_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="muted-button inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-black text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-900"
            >
              <FaDownload size={15} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-xl border border-slate-800/90 bg-slate-950/54 p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500">
            <Link href={siteConfig.links.github} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <FaGithub /> GitHub
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-white">
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 hover:text-white">
              Let&apos;s talk <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.75 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="professional-card relative overflow-hidden rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-black text-white">Engineering Dashboard</p>
                <p className="text-xs text-slate-500">Portfolio readiness snapshot</p>
              </div>
              <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-black text-secondary">
                Live
              </span>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/68 p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Current role target
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white">Full-stack Developer</h2>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-xl font-black text-primary">
                  RD
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Building app experiences with clean UX, secure auth, real API
                integration, and maintainable frontend architecture.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Frontend quality", "92%"],
                ["API integration", "88%"],
                ["Responsive craft", "95%"],
                ["Debugging depth", "90%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/56 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-bold text-white">{value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-slate-800 bg-slate-950/72 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
