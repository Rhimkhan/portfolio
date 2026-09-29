"use client";

import React from "react";
import { floatingSkills, skillCategories } from "@/lib/data/portfolioData";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-28 border-t border-[var(--border)] relative overflow-hidden"
      style={{
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
          <span
            className="font-mono-technical text-xs uppercase tracking-widest font-semibold inline-block mb-3 px-3 py-1 rounded-full border"
            style={{
              color: "var(--accent)",
              background: "var(--card-bg)",
              borderColor: "var(--border)",
            }}
          >
            CAPABILITIES &amp; TOOLING
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            My Skills
          </h2>
          <p
            className="font-display text-sm sm:text-base mt-3 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Technical expertise blended with creativity
          </p>
        </div>

        {/* Top Floating Skill Bubbles */}
        <div
          className="relative mb-20 py-8 px-4 rounded-3xl scroll-animate"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="text-center mb-6">
            <span
              className="font-mono-technical text-xs uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
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
                  className={`group px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border transition-all cursor-pointer ${
                    isEven ? "animate-float-slow" : "animate-float-fast"
                  }`}
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow)",
                    animationDelay: `${idx * 0.35}s`,
                  }}
                >
                  <span
                    className="font-mono-technical text-xs sm:text-sm font-semibold flex items-center gap-2"
                    style={{ color: "var(--text-primary)" }}
                  >
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
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderLeftWidth: "4px",
                borderLeftColor: cat.color,
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="font-display text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
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
                    className="font-mono-technical text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
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
