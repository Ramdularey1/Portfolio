"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-dark to-darker">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <ScrollAnimation>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-lg overflow-hidden h-96 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-gray-400">Profile Image</p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          {/* Right side - Content */}
          <StaggerContainer staggerDelay={0.15}>
            <Item index={0}>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with a knack for building beautiful and scalable web applications.
                With over 5 years of experience in the tech industry, I've had the opportunity to work with diverse teams
                and technologies.
              </p>
            </Item>

            <Item index={1}>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My journey started with a curiosity about how things work on the web. Over time, I've developed a strong
                foundation in modern JavaScript frameworks, backend technologies, and best practices for building
                performant applications.
              </p>
            </Item>

            <Item index={2}>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                mentoring junior developers. I'm always eager to learn new technologies and tackle challenging problems.
              </p>
            </Item>

            <Item index={3}>
              <div className="pt-4">
                <h3 className="font-semibold mb-3 text-white">What I'm passionate about:</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Building performant, user-friendly web applications</li>
                  <li>✓ Clean code and best development practices</li>
                  <li>✓ Mentoring and collaborating with teams</li>
                  <li>✓ Open-source contributions and community engagement</li>
                </ul>
              </div>
            </Item>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
