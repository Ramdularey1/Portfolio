"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-darker px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-black text-white">
            {siteConfig.name}
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            Full-stack developer building reliable web applications with modern
            JavaScript, React, Next.js, Node.js, and clean UI systems.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-primary"
              aria-label="GitHub profile"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-slate-400 transition-colors hover:text-primary"
              aria-label="Email Ram"
            >
              <FaEnvelope size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-900 pt-6 text-sm text-slate-500">
        © {currentYear} {siteConfig.name}. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
}
