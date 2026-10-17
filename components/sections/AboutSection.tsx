"use client";

import React from "react";
import { personalInfo, educationData, statsData } from "@/lib/data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-28 border-t border-[var(--border)] relative overflow-hidden"
      style={{
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 scroll-animate">
          <span className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] font-semibold inline-block mb-3 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
            02 · BACKGROUND &amp; PHILOSOPHY
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl tracking-tight"
            style={{ fontWeight: 900 }}
          >
            <span style={{ color: "var(--text-primary)" }}>About</span>{" "}
            <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>
        </div>

        {/* Two-Column Grid: Bio & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6 scroll-animate">
            <blockquote className="text-xl sm:text-2xl font-display font-medium text-[var(--text-primary)] leading-snug pl-5 border-l-4 border-[var(--accent)] italic">
              &ldquo;{personalInfo.quote}&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {personalInfo.roleBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="font-mono-technical text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] shadow-sm"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  ✦ {badge}
                </span>
              ))}
            </div>

            {/* Quick Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
              <div>
                <span className="font-mono-technical text-xs uppercase text-[var(--text-secondary)] block">
                  Location
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  📍 {personalInfo.location}
                </span>
              </div>
              <div>
                <span className="font-mono-technical text-xs uppercase text-[var(--text-secondary)] block">
                  Availability
                </span>
                <span className="text-sm font-semibold text-emerald-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {personalInfo.availableText}
                </span>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="pt-2">
              <a
                href={personalInfo.resume}
                download="Rhim_Khan_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-mono-technical text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                style={{
                  background: "var(--accent)",
                  color: "#ffffff",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume (PDF)</span>
                <span className="text-[11px] opacity-80 font-normal">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-5 scroll-animate delay-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎓</span>
              <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                Education Journey
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[var(--border)] space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] group-hover:scale-125 transition-transform" />

                  <div
                    className="portfolio-card p-5 rounded-xl"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display font-semibold text-base text-[var(--text-primary)]">
                        {edu.degree}
                      </h4>
                      <span className="font-mono-technical text-xs text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--card-bg)] border border-[var(--border)] shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mt-1 font-medium">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-xs font-mono-technical text-[var(--text-secondary)]">
                      {edu.board && (
                        <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)]">
                          {edu.board}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] font-semibold text-[var(--text-primary)]">
                        {edu.grade}
                      </span>
                      <span className="text-emerald-500 font-semibold ml-auto">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 scroll-animate delay-200">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="portfolio-card p-6 rounded-2xl text-center group hover:scale-[1.02]"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="font-display text-3xl sm:text-5xl font-bold text-[var(--accent)] tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono-technical text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
