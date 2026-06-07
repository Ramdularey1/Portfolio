"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { navLinks } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-darker/85 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-sm text-primary">
              RD
            </span>
            <span className="hidden text-sm tracking-wide text-slate-200 sm:block">
              Ram Dularey Yadav
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/50 p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="/Ram_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-primary"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-2 pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Ram_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-primary"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
