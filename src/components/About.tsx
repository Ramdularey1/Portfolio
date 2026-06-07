"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";

const highlights = [
  "Reusable React interfaces with responsive layouts",
  "REST APIs, authentication, and database-backed features",
  "Debugging across frontend, backend, CORS, and deployment issues",
  "Clean project structure with practical delivery habits",
];

const stats = [
  ["3+", "Featured projects"],
  ["Full-stack", "Primary focus"],
  ["MERN", "Core stack"],
];

export function About() {
  return (
    <section id="about" className="section-band border-b border-slate-900 bg-darker py-24">
      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollAnimation>
            <p className="section-eyebrow mb-3">About</p>
            <h2 className="section-title">A developer who cares about both product and code quality.</h2>
            <p className="section-copy mt-5">
              I build full-stack web applications with a strong focus on usable interfaces,
              dependable backend logic, and clear implementation. My work spans coding
              platforms, content tools, API integrations, authentication, and responsive
              user experiences.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <p className="text-xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <StaggerContainer staggerDelay={0.12}>
            <div className="professional-card rounded-2xl p-6">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                How I Work
              </p>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <Item key={item} index={index}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/55 p-4 transition-colors hover:border-primary/30"
                    >
                      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-xs font-black text-primary">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </motion.div>
                  </Item>
                ))}
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
