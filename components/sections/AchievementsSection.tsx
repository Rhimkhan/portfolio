"use client";

import React from "react";
import { achievementsData } from "@/lib/data/portfolioData";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 scroll-animate">
          <span
            className="font-mono-technical text-xs uppercase tracking-widest font-semibold inline-block mb-3 px-3 py-1 rounded-full border"
            style={{
              color: "var(--accent)",
              background: "var(--card-bg)",
              borderColor: "var(--border)",
            }}
          >
            HONORS &amp; HIGHLIGHTS
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl tracking-tight"
            style={{ fontWeight: 900 }}
          >
            <span style={{ color: "var(--text-primary)" }}>Key</span>{" "}
            <span style={{ color: "var(--accent)" }}>Achievements</span>
          </h2>
          <p
            className="font-display text-sm sm:text-base mt-2 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Milestones that define my journey
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="portfolio-card rounded-2xl p-6 sm:p-7 flex items-start gap-5 group scroll-animate"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Emoji Icon Badge */}
              <div
                className="w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-all shadow-sm"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3
                    className="font-display text-lg sm:text-xl font-bold transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="font-mono-technical text-xs px-2.5 py-0.5 rounded-full border font-semibold"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <span
                  className="font-mono-technical text-xs uppercase tracking-wider block mb-2 font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.issuer}
                </span>

                <p
                  className="text-sm leading-relaxed font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
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
