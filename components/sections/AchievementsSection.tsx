"use client";

import React from "react";
import { achievementsData } from "@/lib/data/portfolioData";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 scroll-animate">
          <span className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] font-semibold inline-block mb-3 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
            HONORS &amp; HIGHLIGHTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Achievements &amp; Recognition
          </h2>
          <p className="font-display text-sm sm:text-base text-[var(--text-secondary)] mt-2 font-normal">
            Milestones that define my journey
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="portfolio-card rounded-2xl p-6 sm:p-7 flex items-start gap-5 group scroll-animate"
            >
              {/* Emoji Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 group-hover:border-[var(--accent)] transition-all shadow-sm">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono-technical text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] font-semibold">
                    {item.date}
                  </span>
                </div>

                <span className="font-mono-technical text-xs uppercase tracking-wider text-[var(--text-secondary)] block mb-2 font-medium">
                  {item.issuer}
                </span>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
