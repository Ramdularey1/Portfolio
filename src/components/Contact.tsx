"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone } from "react-icons/fa";
import { ScrollAnimation } from "./AnimationWrappers";
import { siteConfig } from "@/data/siteConfig";

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
    setError(null);
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
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to send email");
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
    <section id="contact" className="bg-darker py-24">
      <div className="section-shell">
        <ScrollAnimation>
          <div className="mb-12 max-w-3xl">
            <p className="section-eyebrow mb-3">Contact</p>
            <h2 className="section-title">Let&apos;s build something useful.</h2>
            <p className="section-copy mt-5">
              Reach out for full-stack roles, internship opportunities, freelance builds,
              or collaboration on React and Node.js products.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollAnimation>
            <div className="professional-card h-full rounded-lg p-6">
              <h3 className="text-xl font-black text-white">Contact details</h3>
              <div className="mt-6 space-y-4">
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-950/55 p-4 transition-colors hover:border-primary/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/12 text-primary">
                    <FaEnvelope />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">Email</span>
                    <span className="break-all text-sm font-semibold text-white">{siteConfig.email}</span>
                  </span>
                </Link>

                <div className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-950/55 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary/12 text-secondary">
                    <FaPhone />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">Phone</span>
                    <span className="text-sm font-semibold text-white">+91 9519313830</span>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-slate-300">Profiles</p>
                <div className="flex gap-3">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-primary hover:text-primary"
                    aria-label="GitHub profile"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-primary hover:text-primary"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="professional-card rounded-lg p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              {error && (
                <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-slate-950 transition-all duration-300 hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane size={14} />
                {loading ? "Sending..." : submitted ? "Message Sent" : "Send Message"}
              </motion.button>
            </motion.form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
