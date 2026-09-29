"use client";

import React from "react";
import { projectsData } from "@/lib/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-animate">
          <div>
            <span
              className="font-mono-technical text-xs uppercase tracking-widest font-semibold inline-block mb-3 px-3 py-1 rounded-full border"
              style={{
                color: "var(--accent)",
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              PORTFOLIO SHOWCASE
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl tracking-tight"
              style={{ fontWeight: 900 }}
            >
              <span style={{ color: "var(--text-primary)" }}>Featured</span>{" "}
              <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
          </div>
          <p
            className="font-display text-sm sm:text-base max-w-md mt-4 md:mt-0 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Production-grade architectures, computer vision pipelines, and full-stack web applications.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className={`portfolio-card rounded-2xl p-7 flex flex-col justify-between scroll-animate delay-${
                ((idx % 3) + 1) * 100
              }`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div>
                {/* Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="font-mono-technical text-xs font-semibold px-3 py-1 rounded-full border uppercase tracking-wider"
                    style={{
                      backgroundColor: `${project.tagColor}15`,
                      color: project.tagColor || "var(--accent)",
                      borderColor: `${project.tagColor}40`,
                    }}
                  >
                    ● {project.tag}
                  </span>
                  <span
                    className="font-mono-technical text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  className="font-display text-2xl font-bold tracking-tight mb-3 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-technical text-[11px] px-2.5 py-1 rounded-md border font-medium"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono-technical font-semibold transition-all shadow-sm"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Code ↗</span>
                </a>

                {/* Live Demo or Disabled Tooltip */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono-technical font-semibold hover:opacity-90 transition-all shadow-sm text-white"
                    style={{
                      background: "var(--accent)",
                    }}
                  >
                    <span>Live Demo ↗</span>
                  </a>
                ) : (
                  <div className="relative group/tip flex-1">
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-mono-technical font-semibold opacity-50 cursor-not-allowed"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span>Live Demo</span>
                    </button>
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tip:block text-[11px] font-mono-technical px-2.5 py-1 rounded shadow-lg whitespace-nowrap z-10 pointer-events-none"
                      style={{
                        background: "var(--card-bg)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      Coming Soon
                    </div>
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
