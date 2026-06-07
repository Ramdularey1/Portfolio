"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="border-b border-slate-900 bg-dark py-24">
      <div className="section-shell">
        <ScrollAnimation>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow mb-3">Skills</p>
              <h2 className="section-title">Stack built for modern full-stack delivery.</h2>
            </div>
            <p className="section-copy max-w-xl">
              Comfortable across interfaces, APIs, databases, deployment workflows, and
              the practical debugging that keeps real applications moving.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, categoryIndex) => (
            <ScrollAnimation key={category.category} delay={categoryIndex * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="professional-card h-full rounded-lg p-5"
              >
                <h3 className="mb-5 text-base font-bold text-white">{category.category}</h3>
                <StaggerContainer staggerDelay={0.04}>
                  {category.skills.map((skill, skillIndex) => (
                    <Item key={skill.name} index={skillIndex}>
                      <div className="mb-4 last:mb-0">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                          <span className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-400">
                            {skill.level}/5
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                      </div>
                    </Item>
                  ))}
                </StaggerContainer>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
