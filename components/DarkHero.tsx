"use client";

import React from "react";
import Navbar from "./Navbar";

export default function DarkHero() {
  return (
    <div
      id="home"
      className="relative min-h-[100dvh] w-full bg-[#050a14] text-slate-100 flex flex-col justify-center items-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-12 select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main 2-Column Content */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10">
        {/* Left Column: Glowing Circular Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative flex items-center justify-center">
            {/* Outer Glowing Ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px] rounded-full p-2 border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(0,255,224,0.18)] flex items-center justify-center transition-all duration-500 hover:border-cyan-400/70 hover:shadow-[0_0_65px_rgba(0,255,224,0.3)]">
              {/* Cyan Accent Orb on Ring Perimeter (10:30 position) */}
              <div className="absolute top-[8%] left-[8%] w-4 h-4 rounded-full bg-[#00ffe0] shadow-[0_0_16px_#00ffe0] border-2 border-[#050a14] animate-pulse" />

              {/* Inner Circular Photo */}
              <div className="w-full h-full rounded-full overflow-hidden border border-cyan-400/20 shadow-2xl relative bg-[#0a1120]">
                <img
                  src="/images/user-dark-portrait.jpg"
                  alt="R him Khan"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Information */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
          {/* Most Recent Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md text-xs font-mono-technical text-emerald-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Most Recent:{" "}
              <strong className="text-cyan-300 font-semibold">
                AI Intern @ Codtech IT Solutions
              </strong>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">▲</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 font-bold">
              R him Khan
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
            Turning ideas into intelligent, impactful digital products.
          </p>

          {/* Role Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 flex items-center gap-1.5 backdrop-blur-sm hover:border-cyan-500/40 hover:text-white transition-all">
              <span>👾</span>
              <span>AI &amp; ML Engineer</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 flex items-center gap-1.5 backdrop-blur-sm hover:border-cyan-500/40 hover:text-white transition-all">
              <span>📊</span>
              <span>Data Analyst</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 flex items-center gap-1.5 backdrop-blur-sm hover:border-cyan-500/40 hover:text-white transition-all">
              <span>🚀</span>
              <span>Tech Explorer</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 flex items-center gap-1.5 backdrop-blur-sm hover:border-cyan-500/40 hover:text-white transition-all">
              <span>🧩</span>
              <span>Problem Solver</span>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <div className="p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col gap-1 hover:border-cyan-500/30 transition-all">
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <span>📍</span> Location
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                Gwalior, M.P., India
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col gap-1 hover:border-cyan-500/30 transition-all">
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <span>🏛️</span> University
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                Amity University, Gwalior
              </span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col gap-1 hover:border-cyan-500/30 transition-all">
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <span>🚀</span> Projects Built
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                5+ Live &amp; Shipped
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs font-mono-technical tracking-wider uppercase shadow-[0_0_25px_rgba(0,255,224,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <span>View My Work</span>
              <span>→</span>
            </a>
            <a
              href="/api/resume"
              download="Rhim_Khan_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/10 text-white font-semibold text-xs font-mono-technical tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href="https://github.com/Rhimkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-cyan-400/50 hover:text-cyan-300 text-xs font-medium text-slate-400 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rhimkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-cyan-400/50 hover:text-cyan-300 text-xs font-medium text-slate-400 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:rhim78975730@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-cyan-400/50 hover:text-cyan-300 text-xs font-medium text-slate-400 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Navbar */}
      <Navbar />
    </div>
  );
}
