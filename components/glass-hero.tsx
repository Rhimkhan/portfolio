"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "@/lib/context/ThemeContext";
import Navbar from "./Navbar";
import DarkHero from "./DarkHero";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

function LightGlassHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitLayersRef = useRef<HTMLDivElement>(null);
  const rawPos = useRef({ x: -999, y: -999 });
  const smoothPos = useRef({ x: -999, y: -999 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTrackingTouch = useRef(false);
  const frameId = useRef<number | null>(null);

  // Scroll Animation Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    const timer = setTimeout(() => {
      elements.forEach((el) => el.classList.add("animate-in"));
    }, 150);

    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (portraitLayersRef.current) {
        const offset = window.scrollY * 0.35;
        portraitLayersRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // RequestAnimationFrame Mask Reveal Loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const animate = () => {
      const posFactor = prefersReducedMotion ? 1 : 0.14;
      const radiusFactor = prefersReducedMotion ? 1 : 0.12;

      smoothPos.current.x += (rawPos.current.x - smoothPos.current.x) * posFactor;
      smoothPos.current.y += (rawPos.current.y - smoothPos.current.y) * posFactor;

      currentRadius.current += (targetRadius.current - currentRadius.current) * radiusFactor;

      if (targetRadius.current === 0 && currentRadius.current < 0.1) {
        currentRadius.current = 0;
      }

      container.style.setProperty("--reveal-x", `${smoothPos.current.x.toFixed(2)}px`);
      container.style.setProperty("--reveal-y", `${smoothPos.current.y.toFixed(2)}px`);
      container.style.setProperty("--reveal-radius", `${currentRadius.current.toFixed(2)}px`);

      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
      }
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Pointer event handlers
  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawPos.current = { x, y };
      smoothPos.current = { x, y };
      targetRadius.current = DESKTOP_RADIUS;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      const rect = e.currentTarget.getBoundingClientRect();
      rawPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    } else if (isTrackingTouch.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      rawPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      targetRadius.current = 0;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      isTrackingTouch.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Fallback
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      rawPos.current = { x, y };
      smoothPos.current = { x, y };
      targetRadius.current = MOBILE_RADIUS;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      isTrackingTouch.current = false;
      targetRadius.current = 0;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Fallback
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      isTrackingTouch.current = false;
      targetRadius.current = 0;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Fallback
      }
    }
  };

  return (
    <div
      id="home"
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className="relative isolation-isolate overflow-hidden min-w-[320px] w-full h-[100dvh] select-none cursor-default"
      style={{
        touchAction: "none",
        backgroundColor: "var(--paper-bg)",
        color: "var(--ink-color)",
      }}
    >
      {/* LAYER 1 & 2: Portrait Layers with Parallax */}
      <div ref={portraitLayersRef} className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        <div
          className="hero-portrait-base z-0"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/images/hero/base-desktop.jpg)",
          }}
        />
        <div
          className="hero-portrait-reveal z-[1]"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/images/hero/reveal-desktop.png)",
          }}
        />
      </div>

      {/* LAYER 4: Headline and Copy (Rhim Khan) */}
      <div className="relative z-[3] w-full h-full pointer-events-none">
        {/* Most Recent Badge */}
        <div
          className="absolute scroll-animate pointer-events-auto z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card-bg)]/80 backdrop-blur-md text-xs font-mono-technical font-semibold shadow-sm"
          style={{
            top: "clamp(80px, 11vh, 105px)",
            left: "max(5.6vw, 2rem)",
            color: "var(--text-primary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            Most Recent: <span style={{ color: "var(--accent)" }}>AI Intern @ Codtech IT Solutions</span>
          </span>
        </div>

        {/* Right Side Vertical Text: Build · Learn · Grow */}
        <div
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-3 pointer-events-none select-none z-10"
          style={{ writingMode: "vertical-rl" }}
        >
          <span
            className="font-mono-technical text-[11px] uppercase tracking-[0.25em] font-semibold"
            style={{ color: "var(--text-muted)" }}
          >
            Build · Learn · Grow
          </span>
          <span className="w-px h-12 bg-[var(--border)]" />
        </div>

        {/* Right Side Section Labels */}
        <div
          className="hidden lg:flex absolute right-14 top-[28%] items-center pointer-events-none select-none opacity-50 z-10"
          style={{ writingMode: "vertical-rl" }}
        >
          <span
            className="font-mono-technical text-[9px] uppercase tracking-[0.22em] font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            SKILLS · PROJECTS · EXPERIENCE · IMPACT
          </span>
        </div>

        {/* Main Hero Name */}
        <div
          className="absolute scroll-animate"
          style={{
            top: "23%",
            left: "max(5.6vw, 2rem)",
          }}
        >
          <div
            className="font-mono-technical text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: "var(--accent)" }}
          >
            AI/ML &amp; FULL STACK DEVELOPER
          </div>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[0.9] m-0"
            style={{
              fontSize: "clamp(60px, 10vw, 120px)",
              fontWeight: 700,
            }}
          >
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Rhim</span>
            <br />
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>Khan.</span>
          </h1>
        </div>

        {/* Bottom Left Stats & Intro */}
        <div
          className="absolute max-w-[540px] pointer-events-auto scroll-animate delay-100 z-10"
          style={{
            bottom: "clamp(2.5rem, 5vh, 4rem)",
            left: "max(5.6vw, 2rem)",
          }}
        >
          <p
            className="font-display text-sm md:text-base leading-relaxed font-normal tracking-[-0.015em] mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            B.Tech in AI &amp; ML (Amity University). Building intelligent computer vision systems, NLP pipelines, and tactile full-stack web applications.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center min-h-[42px] px-7 rounded-full text-white text-xs font-mono-technical tracking-wider uppercase font-bold shadow-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
              }}
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Rhim_Khan_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[42px] px-6 rounded-full text-xs font-mono-technical tracking-wider uppercase font-bold border border-[var(--accent)] bg-[var(--card-bg)]/90 backdrop-blur-sm transition-all hover:bg-[var(--accent)] hover:text-white hover:scale-105 active:scale-95 shadow-sm"
              style={{
                color: "var(--accent)",
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[42px] px-6 rounded-full text-xs font-mono-technical tracking-wider uppercase font-semibold border border-[var(--border)] bg-[var(--card-bg)]/80 backdrop-blur-sm transition-all hover:border-[var(--accent)]"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Stats Row */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 border-t border-[var(--border)] font-mono-technical text-xs font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black" style={{ color: "var(--accent)" }}>
                5+
              </span>
              <span className="text-[11px] uppercase tracking-wider">PROJECTS BUILT</span>
            </div>
            <span style={{ color: "var(--border)" }}>|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black" style={{ color: "var(--accent)" }}>
                3+
              </span>
              <span className="text-[11px] uppercase tracking-wider">INTERNSHIPS</span>
            </div>
            <span style={{ color: "var(--border)" }}>|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black" style={{ color: "var(--accent)" }}>
                4+
              </span>
              <span className="text-[11px] uppercase tracking-wider">CERTIFICATES</span>
            </div>
          </div>
        </div>

        {/* Bottom SCROLL indicator with arrow */}
        <div className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1 pointer-events-none z-10 animate-bounce opacity-70">
          <span
            className="font-mono-technical text-[10px] tracking-[0.2em] uppercase font-bold"
            style={{ color: "var(--text-muted)" }}
          >
            SCROLL
          </span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* LAYER 5: Navigation */}
      <Navbar />
    </div>
  );
}

export default function GlassHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && theme === "dark") {
    return <DarkHero />;
  }

  return <LightGlassHero />;
}
