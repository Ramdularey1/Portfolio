"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-dark">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <ScrollAnimation key={category.category} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-lg p-6 h-full"
              >
                <h3 className="font-bold text-lg mb-4 gradient-text">{category.category}</h3>
                <StaggerContainer staggerDelay={0.05}>
                  {category.skills.map((skill, skillIndex) => (
                    <Item key={skill.name} index={skillIndex}>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}/5</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          ></motion.div>
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
