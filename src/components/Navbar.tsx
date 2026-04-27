"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { navLinks } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl gradient-text">
            RD.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Ram_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-opacity-90 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
            <a
              href="/Ram_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-opacity-90 rounded-lg text-sm font-semibold transition-all duration-300 w-full justify-center"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
                key={link.name}
                href={link.href}
                className="block text-sm font-medium hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
