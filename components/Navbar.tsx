"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/lib/context/ThemeContext";

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Certificates", href: "#certificates", id: "certificates" },
    { label: "GitHub", href: "#github", id: "github" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "certificates",
        "github",
        "contact",
      ];

      // If scrolled near page bottom, set active to contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
        backgroundColor: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: scrolled ? "var(--border)" : "transparent",
        boxShadow: scrolled ? "var(--shadow)" : "none",
        paddingTop: scrolled ? "0.85rem" : "1.1rem",
        paddingBottom: scrolled ? "0.85rem" : "1.1rem",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram + Name */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg p-1"
          aria-label="R him Khan - Home"
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
          <span className="font-mono-technical text-sm tracking-wider">
            <span className="font-normal" style={{ color: "var(--text-primary)" }}>
              R him{" "}
            </span>
            <span className="font-bold" style={{ color: "var(--accent)" }}>
              Khan
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link font-mono-technical text-[13px] font-bold tracking-[0.12em] uppercase min-h-[38px] flex items-center px-1 transition-colors duration-200 ${
                  isActive ? "active" : ""
                }`}
                style={{
                  color: isActive ? "var(--accent)" : "var(--nav-link)",
                  opacity: 1,
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Resume Button + Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Resume Download Pill Button */}
          <a
            href="/resume.pdf"
            download="RHimKhan_Resume.pdf"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 shadow-md transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: isDarkMode ? "rgba(0, 255, 224, 0.08)" : "#c2410c",
              color: isDarkMode ? "#00ffe0" : "#ffffff",
              border: isDarkMode ? "1.5px solid rgba(0, 255, 224, 0.75)" : "none",
              boxShadow: isDarkMode ? "0 0 15px rgba(0, 255, 224, 0.2)" : "none",
              borderRadius: "999px",
              padding: "8px 20px",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
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
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link font-mono-technical text-[13px] font-bold tracking-[0.12em] uppercase py-2 border-b border-[var(--border)] transition-colors duration-200 ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    color: isActive ? "var(--accent)" : "var(--nav-link)",
                    opacity: 1,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href="/resume.pdf"
            download="RHimKhan_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 shadow-md transition-all duration-200"
            style={{
              background: isDarkMode ? "rgba(0, 255, 224, 0.08)" : "#c2410c",
              color: isDarkMode ? "#00ffe0" : "#ffffff",
              border: isDarkMode ? "1.5px solid rgba(0, 255, 224, 0.75)" : "none",
              boxShadow: isDarkMode ? "0 0 15px rgba(0, 255, 224, 0.2)" : "none",
              borderRadius: "999px",
              padding: "8px 20px",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            <span>↓</span> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
