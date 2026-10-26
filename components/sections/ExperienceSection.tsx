"use client";

import React from "react";
import { experienceData } from "@/lib/data/offerLetters";

export default function ExperienceSection() {

  return (
    <section
      id="experience"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-5xl mx-auto">
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
            CAREER &amp; INTERNSHIPS
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl tracking-tight"
            style={{ fontWeight: 900 }}
          >
            <span style={{ color: "var(--text-primary)" }}>Work</span>{" "}
            <span style={{ color: "var(--accent)" }}>Experience</span>
          </h2>
          <p
            className="font-display text-sm sm:text-base mt-2 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Click on any card or document button to view credentials &amp; offer letters
          </p>
        </div>

        {/* Vertical Timeline */}
        <div
          className="relative pl-6 sm:pl-10 border-l-2 space-y-12"
          style={{ borderColor: "var(--border)" }}
        >
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group scroll-animate">
              {/* Timeline Initial Circle Badge */}
              <div
                className="absolute -left-[35px] sm:-left-[51px] top-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center font-display font-bold text-xs sm:text-sm text-white shadow-md z-10 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: exp.initialsColor,
                  borderColor: "var(--bg)",
                }}
              >
                {exp.initials}
              </div>

              {/* Experience Card */}
              <div
                className="portfolio-card rounded-2xl p-6 sm:p-8"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3
                        className="font-display text-xl sm:text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="font-mono-technical text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                          ✦ {exp.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className="font-display text-base font-semibold block"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono-technical text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      📅 {exp.period}
                    </span>
                    <span
                      className="font-mono-technical text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      📍 {exp.location}
                    </span>
                  </div>
                </div>

                {/* Sub-meta (Duration & Intern ID) */}
                <div
                  className="flex flex-wrap items-center gap-4 text-xs font-mono-technical mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>⏱ Duration: {exp.duration}</span>
                  {exp.internId && <span>• Intern ID: {exp.internId}</span>}
                  <span className="text-emerald-500 font-semibold">• {exp.status}</span>
                </div>

                {/* Work Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6 font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {exp.work}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono-technical text-xs px-2.5 py-1 rounded-md border font-medium"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Document buttons */}
                {exp.documents.length > 0 && (
                  <div
                    className="flex flex-wrap items-center gap-3 pt-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {exp.documents.map((doc, dIdx) => (
                      <a
                        key={dIdx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono-technical font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                        style={{
                          background: "var(--bg)",
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <span>{doc.label}</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
