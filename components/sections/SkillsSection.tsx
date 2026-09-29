"use client";

import React from "react";
import { floatingSkills, skillCategories } from "@/lib/data/portfolioData";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-28 border-t border-[var(--border)] relative overflow-hidden"
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
          <span className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] font-semibold inline-block mb-3 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
            CAPABILITIES &amp; TOOLING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            My Skills
          </h2>
          <p className="font-display text-sm sm:text-base text-[var(--text-secondary)] mt-3 font-normal">
            Technical expertise blended with creativity
          </p>
        </div>

        {/* Top Floating Skill Bubbles */}
        <div className="relative mb-20 py-8 px-4 border border-[var(--border)] rounded-3xl bg-[var(--card-bg)] shadow-sm scroll-animate">
          <div className="text-center mb-6">
            <span className="font-mono-technical text-xs uppercase tracking-wider text-[var(--text-secondary)]">
              // Core Stack Interactive Cloud
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {floatingSkills.map((skill, idx) => {
              const isEven = idx % 2 === 0;
              const isAlt = idx % 3 === 0;
              return (
                <div
                  key={idx}
                  className={`group px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-[var(--border)] bg-[var(--bg)] shadow-sm hover:border-[var(--accent)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all cursor-pointer ${
                    isEven ? "animate-float-slow" : "animate-float-fast"
                  }`}
                  style={{
                    animationDelay: `${idx * 0.35}s`,
                  }}
                >
                  <span className="font-mono-technical text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isAlt
                          ? "var(--accent)"
                          : isEven
                          ? "#10b981"
                          : "#8b5cf6",
                      }}
                    />
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Category Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`portfolio-card rounded-2xl p-6 relative overflow-hidden scroll-animate delay-${
                ((idx % 3) + 1) * 100
              }`}
              style={{
                borderLeftWidth: "4px",
                borderLeftColor: cat.color,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {cat.category}
                </h3>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="font-mono-technical text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-medium hover:border-[var(--accent)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
