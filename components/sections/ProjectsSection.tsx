"use client";

import React from "react";
import { projectsData } from "@/lib/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 scroll-animate">
          <div>
            <span className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] font-semibold inline-block mb-3 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h2>
          </div>
          <p className="font-display text-sm sm:text-base text-[var(--text-secondary)] max-w-md mt-4 md:mt-0 font-normal">
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
            >
              <div>
                {/* Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="font-mono-technical text-xs font-semibold px-3 py-1 rounded-full border border-[var(--border)] uppercase tracking-wider"
                    style={{
                      backgroundColor: `${project.tagColor}15`,
                      color: project.tagColor || "var(--accent)",
                      borderColor: `${project.tagColor}40`,
                    }}
                  >
                    ● {project.tag}
                  </span>
                  <span className="font-mono-technical text-xs text-[var(--text-secondary)]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-technical text-[11px] px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-xs font-mono-technical font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg)] transition-all shadow-sm"
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white text-xs font-mono-technical font-semibold hover:opacity-90 transition-all shadow-sm"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                ) : (
                  <div className="relative group/tip flex-1">
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-xs font-mono-technical font-semibold text-[var(--text-secondary)] opacity-50 cursor-not-allowed"
                    >
                      <span>Live Demo</span>
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tip:block bg-black text-white text-[11px] font-mono-technical px-2.5 py-1 rounded shadow-lg whitespace-nowrap z-10 pointer-events-none">
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
