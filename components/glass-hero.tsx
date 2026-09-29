"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "@/lib/context/ThemeContext";
import Navbar from "./Navbar";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

export default function GlassHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitLayersRef = useRef<HTMLDivElement>(null);
  const rawPos = useRef({ x: -999, y: -999 });
  const smoothPos = useRef({ x: -999, y: -999 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTrackingTouch = useRef(false);
  const frameId = useRef<number | null>(null);

  // Global Theme from ThemeContext
  const { theme, toggle: toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

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
        <div className="hero-portrait-base z-0" aria-hidden="true" />
        <div className="hero-portrait-reveal z-[1]" aria-hidden="true" />
      </div>

      {/* LAYER 3: Technical Grid + Large Outlined Circle */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Desktop Grid */}
        <div className="hidden md:grid absolute inset-0 w-full h-full grid-cols-12 grid-rows-4 opacity-75">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={`desk-cell-${i}`} className="border-r border-b border-[var(--line-color)]" />
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden absolute inset-0 w-full h-full grid-cols-4 grid-rows-6 opacity-45">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={`mob-cell-${i}`} className="border-r border-b border-[var(--line-color)]" />
          ))}
        </div>

        {/* Desktop Circle */}
        <div
          className="hidden md:block absolute rounded-full border border-[var(--line-color-circle)]"
          style={{
            width: "min(78vw, 72rem)",
            aspectRatio: "1 / 1",
            left: "8%",
            top: "-36%",
          }}
        />

        {/* Mobile Circle */}
        <div
          className="block md:hidden absolute rounded-full border border-[var(--line-color-circle)]"
          style={{
            width: "150vw",
            aspectRatio: "1 / 1",
            left: "-76%",
            top: "-8%",
          }}
        />
      </div>

      {/* LAYER 4: Headline and Copy (R Him Khan) */}
      <div className="relative z-[3] w-full h-full pointer-events-none">
        <div
          className="absolute scroll-animate"
          style={{
            top: "32%",
            left: "max(5.6vw, 2rem)",
          }}
        >
          <div className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-medium">
            AI/ML & FULL STACK DEVELOPER
          </div>
          <h1
            className="font-display font-medium text-[var(--ink-color)] tracking-[-0.085em] leading-[0.93] m-0"
            style={{
              fontSize: "clamp(4.2rem, 5.8vw, 6.4rem)",
            }}
          >
            Hi, I&apos;m<br />
            <span className="text-[var(--accent)]">R Him</span><br />
            Khan.
          </h1>
        </div>

        <div
          className="absolute max-w-[480px] pointer-events-auto scroll-animate delay-100"
          style={{
            bottom: "max(3rem, env(safe-area-inset-bottom))",
            left: "max(5.6vw, 2rem)",
          }}
        >
          <p className="font-display text-sm md:text-base leading-relaxed text-[var(--text-muted)] font-normal tracking-[-0.015em] mb-4">
            B.Tech in AI &amp; ML (Amity University). Building intelligent computer vision systems, NLP pipelines, and tactile full-stack web applications.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center justify-center min-h-[44px] px-7 rounded-full bg-[var(--accent)] text-white text-xs font-mono-technical tracking-wider uppercase font-semibold shadow-[0_4px_16px_rgba(0,102,255,0.3)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-all"
            style={{
              transitionTimingFunction: "var(--ease-primary)",
            }}
          >
            View Projects
          </a>
        </div>
      </div>

      {/* LAYER 5: Navigation */}
      <Navbar />
    </div>
  );
}
