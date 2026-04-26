"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
        </ScrollAnimation>

        <StaggerContainer staggerDelay={0.2}>
          {experienceData.map((exp, index) => (
            <Item key={exp.id} index={index}>
              <ScrollAnimation delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-lg p-8 mb-6 relative pl-12 border-l-4 border-primary"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-6 h-6 bg-primary rounded-full transform -translate-x-3 border-4 border-dark"></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">{exp.duration}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-secondary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollAnimation>
            </Item>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
