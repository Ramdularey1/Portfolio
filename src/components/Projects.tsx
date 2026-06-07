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
    <section id="projects" className="border-b border-slate-900 bg-darker py-24">
      <div className="section-shell">
        <ScrollAnimation>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow mb-3">Projects</p>
              <h2 className="section-title">
                {showAll ? "All projects" : "Featured project work"}
              </h2>
            </div>
            <p className="section-copy max-w-xl">
              Practical full-stack builds with real APIs, authentication flows, state
              management, and production deployment in mind.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          key={showAll ? "all-projects" : "featured-projects"}
          staggerDelay={0.16}
        >
          <div className="grid gap-6">
            {displayedProjects.map((project, index) => (
              <Item key={project.id + (showAll ? "-all" : "-featured")} index={index}>
                <ScrollAnimation delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="professional-card overflow-hidden rounded-lg"
                  >
                    <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
                      <div className="relative min-h-72 overflow-hidden border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 520px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darker/40 to-transparent" />
                      </div>

                      <div className="flex flex-col justify-between p-6 md:p-8">
                        <div>
                          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-2xl font-black text-white">{project.title}</h3>
                            {project.featured && (
                              <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-sm leading-7 text-slate-300 md:text-base">
                            {project.longDescription}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300"
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
                              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-sky-300"
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
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-900"
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
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10"
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
