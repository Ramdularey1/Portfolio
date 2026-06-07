"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-band border-b border-slate-900 bg-darker py-24">
      <div className="section-shell relative z-10">
        <ScrollAnimation>
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
            <div>
              <p className="section-eyebrow mb-3">Selected work</p>
              <h2 className="section-title">
                Real products, clean systems, measurable craft.
              </h2>
            </div>
            <p className="section-copy lg:justify-self-end">
              Project work across coding platforms, content tools, and responsive
              API-backed experiences. Built to demonstrate product thinking and
              full-stack implementation.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          key={showAll ? "all-projects" : "featured-projects"}
          staggerDelay={0.14}
        >
          <div className="grid gap-6">
            {displayedProjects.map((project, index) => (
              <Item key={project.id + (showAll ? "-all" : "-featured")} index={index}>
                <ScrollAnimation delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="group professional-card overflow-hidden rounded-2xl"
                  >
                    <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                      <div className="relative min-h-76 overflow-hidden border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 520px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darker/62 via-darker/10 to-transparent" />
                        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                          Case study {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between p-6 md:p-8">
                        <div>
                          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                                {project.featured ? "Featured build" : "Project build"}
                              </p>
                              <h3 className="text-3xl font-black text-white">{project.title}</h3>
                            </div>
                            {project.featured && (
                              <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-black text-secondary">
                                Highlight
                              </span>
                            )}
                          </div>
                          <p className="text-sm leading-7 text-slate-300 md:text-base">
                            {project.longDescription}
                          </p>

                          <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {["Architecture", "Interface", "Deployment"].map((label) => (
                              <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/58 p-3">
                                <p className="text-xs font-semibold text-slate-500">{label}</p>
                                <p className="mt-1 text-sm font-bold text-slate-200">Covered</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          {project.live && (
                            <Link
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-black text-slate-950 shadow-[0_18px_55px_rgba(56,189,248,0.18)] transition-all duration-300 hover:translate-y-[-2px]"
                            >
                              <FaExternalLinkAlt size={14} />
                              Live Demo
                            </Link>
                          )}
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="muted-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-black text-white transition-all duration-300 hover:border-slate-500"
                            >
                              <FaGithub size={15} />
                              Source Code
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </ScrollAnimation>
              </Item>
            ))}
          </div>
        </StaggerContainer>

        <ScrollAnimation delay={0.2}>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="muted-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:border-primary"
            >
              {showAll ? "Show Featured" : `View All ${projects.length} Projects`}
              <FaArrowRight size={13} />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
