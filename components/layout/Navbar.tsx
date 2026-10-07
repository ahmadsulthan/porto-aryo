"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg">
            Aryo Anargya
          </Link>

          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-slate-950/95
            backdrop-blur-xl
            flex
            flex-col
            items-center
            justify-center
            gap-8
            text-xl
            text-white
          "
        >
          <a href="#about" onClick={() => setMobileOpen(false)}>
            About
          </a>

          <a href="#research" onClick={() => setMobileOpen(false)}>
            Research
          </a>

          <a href="#experience" onClick={() => setMobileOpen(false)}>
            Experience
          </a>

          <a href="#skills" onClick={() => setMobileOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setMobileOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}
