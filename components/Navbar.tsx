"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/lib/context/ThemeContext";

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)] shadow-sm py-3.5"
          : "bg-transparent backdrop-blur-sm py-5"
      }`}
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram + Name */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg p-1"
          aria-label="R Him Khan - Home"
        >
          <div className="w-8 h-8 rounded-full border border-[var(--monogram-border)] flex items-center justify-center bg-[var(--monogram-bg)] backdrop-blur-sm group-hover:border-[var(--accent)] transition-colors">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--accent)]"
            >
              <path
                d="M4.5 3.5V14.5M4.5 3.5H9.2C11.1 3.5 12.5 4.7 12.5 6.5C12.5 8.3 11.1 9.5 9.2 9.5H4.5M9.2 9.5L13 14.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-mono-technical text-sm font-semibold tracking-widest text-[var(--ink-color)] uppercase">
            R HIM KHAN
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link font-mono-technical text-[13px] font-bold tracking-[0.12em] uppercase text-[var(--nav-link)] hover:text-[var(--accent)] min-h-[38px] flex items-center px-1 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Resume Button + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Resume Download Pill Button */}
          <a
            href="/resume.pdf"
            download="RHimKhan_Resume.pdf"
            className={`hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-technical uppercase tracking-wider font-semibold shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
              isDarkMode
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,255,224,0.3)] hover:shadow-[0_0_25px_rgba(0,255,224,0.5)]"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)]"
            }`}
          >
            <span>↓</span> Resume
          </a>

          {/* Theme Toggle Button */}
          <button
            id="themeToggle"
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link font-mono-technical text-[13px] font-bold tracking-[0.12em] uppercase text-[var(--nav-link)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download="RHimKhan_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-mono-technical uppercase tracking-wider font-semibold shadow-md ${
              isDarkMode
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            }`}
          >
            <span>↓</span> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
