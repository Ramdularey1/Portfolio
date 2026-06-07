"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section-band border-b border-slate-900 bg-dark py-24">
      <div className="section-shell relative z-10">
        <ScrollAnimation>
          <div className="mb-12 max-w-3xl">
            <p className="section-eyebrow mb-3">Experience</p>
            <h2 className="section-title">Hands-on product engineering experience.</h2>
            <p className="section-copy mt-5">
              Work focused on building responsive interfaces, API-backed features,
              authentication flows, and debugging the practical issues that appear
              in real applications.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer staggerDelay={0.16}>
          {experienceData.map((exp, index) => (
            <Item key={exp.id} index={index}>
              <ScrollAnimation delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="professional-card rounded-2xl p-6 md:p-8"
                >
                  <div className="flex flex-col justify-between gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-semibold text-primary">{exp.company}</p>
                      <h3 className="mt-2 text-2xl font-black text-white">{exp.position}</h3>
                    </div>
                    <span className="w-fit rounded-xl border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-300">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {exp.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 text-sm leading-6 text-slate-300 transition-colors hover:border-primary/30"
                      >
                        <span className="mr-2 text-primary">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </motion.article>
              </ScrollAnimation>
            </Item>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
