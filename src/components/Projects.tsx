"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-dark to-darker">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {showAll ? "All" : "Featured"}{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
        </ScrollAnimation>

        {/* ✅ FIX: force animation re-render */}
        <StaggerContainer
          key={showAll ? "all-projects" : "featured-projects"}
          staggerDelay={0.2}
        >
          {displayedProjects.map((project, index) => (
            <Item
              key={project.id + (showAll ? "-all" : "-featured")}
              index={index}
            >
              <ScrollAnimation delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-lg overflow-hidden mb-8 group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden group">
                      <div className="w-full h-full flex items-center justify-center text-6xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {project.longDescription}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 glass hover:bg-white/20 rounded-lg transition-all duration-300"
                          >
                            <FaGithub size={16} />
                            Code
                          </Link>
                        )}
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-opacity-90 rounded-lg transition-all duration-300"
                          >
                            <FaExternalLinkAlt size={16} />
                            Live Demo
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </Item>
          ))}
        </StaggerContainer>

        {/* ✅ Button */}
        <ScrollAnimation delay={0.3}>
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/20 rounded-lg font-semibold transition-all duration-300"
            >
              {showAll
                ? "Show Less"
                : `View All ${projects.length} Projects`}
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}