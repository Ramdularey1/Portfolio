"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { navLinks } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-darker/78 backdrop-blur-2xl">
      <div className="section-shell">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-3 font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-sm text-primary shadow-[0_0_35px_rgba(56,189,248,0.16)] transition-colors group-hover:border-primary/60">
              RD
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm tracking-wide text-slate-100">
                Ram Dularey Yadav
              </span>
              <span className="block text-xs font-medium text-slate-500">
                Full-stack developer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-xl border border-slate-800/90 bg-slate-950/58 p-1.5 shadow-[0_14px_55px_rgba(2,6,23,0.32)] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-400 transition-colors duration-200 hover:bg-slate-800/90 hover:text-white"
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
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950 transition-all duration-300 hover:bg-primary"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 text-white md:hidden"
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
                className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Ram_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition-all duration-300 hover:bg-primary"
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
