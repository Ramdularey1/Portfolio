"use client";

import React, { useState } from "react";
import { ScrollAnimation, StaggerContainer, Item } from "./AnimationWrappers";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-dark to-darker">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12 mx-auto"></div>
          <p className="text-gray-400 text-center text-lg mb-12">
            I'd love to hear from you! Whether you have a project, question, or just want to chat, feel free to reach out.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <StaggerContainer staggerDelay={0.15}>
            <Item index={0}>
              <ScrollAnimation>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              </ScrollAnimation>
            </Item>

            <Item index={1}>
              <motion.div whileHover={{ x: 5 }} className="glass rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <Link
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-white hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Item>

            <Item index={2}>
              <motion.div whileHover={{ x: 5 }} className="glass rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold text-white">+91 9519313830</p>
                  </div>
                </div>
              </motion.div>
            </Item>

            <Item index={3}>
              <ScrollAnimation>
                <h3 className="text-lg font-bold mb-4 text-white">Follow Me</h3>
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-white" size={20} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-white" size={20} />
                    </Link>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </Item>
          </StaggerContainer>

          {/* Contact Form */}
          <ScrollAnimation>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-lg p-8 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="w-full px-6 py-3 bg-primary hover:bg-opacity-90 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </motion.form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
