"use client";

import React, { useState } from "react";
import { certificatesData } from "@/lib/data/portfolioData";

export default function CertificatesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterTabs = ["All", "AI & ML", "Data Science", "Internship"];

  const filteredCertificates = certificatesData.filter((cert) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "AI & ML") return cert.category === "AI";
    if (selectedFilter === "Data Science") return cert.category === "Data Science";
    if (selectedFilter === "Internship") return cert.category === "Internship";
    return true;
  });

  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="certificates"
      className="w-full py-28 border-t border-[var(--border)] relative"
      style={{
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 scroll-animate">
          <div>
            <span className="font-mono-technical text-xs uppercase tracking-widest text-[var(--accent)] font-semibold inline-block mb-3 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
              CREDENTIALS &amp; RECOGNITION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
              My Certificates &amp; Badges
            </h2>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 md:mt-0 font-mono-technical text-xs sm:text-sm text-[var(--text-secondary)]">
            <span className="px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              🎖️ 4 Certificates
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
              🏛️ 3 Issuers
            </span>
            <span className="px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-semibold">
              ✓ 2 Verified Online
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 scroll-animate">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`font-mono-technical text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full border transition-all ${
                selectedFilter === tab
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-md scale-105"
                  : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="portfolio-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group scroll-animate"
              style={{
                borderTopWidth: "4px",
                borderTopColor: cert.accentColor,
              }}
            >
              <div>
                {/* Top Badges Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="font-mono-technical text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md border"
                    style={{
                      backgroundColor: `${cert.accentColor}18`,
                      borderColor: `${cert.accentColor}40`,
                      color: cert.accentColor,
                    }}
                  >
                    {cert.category}
                  </span>

                  {cert.verified && (
                    <span className="font-mono-technical text-[11px] font-semibold text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Certificate Name */}
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <span
                  className="font-display text-sm font-semibold block mb-4"
                  style={{ color: cert.accentColor }}
                >
                  {cert.issuer}
                </span>

                {/* Date & Hours */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-technical text-[var(--text-secondary)] mb-4">
                  <span>📅 {cert.date}</span>
                  {cert.hours && <span>• ⏱ {cert.hours}</span>}
                  {cert.topic && <span>• 💡 {cert.topic}</span>}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="font-mono-technical text-[11px] text-[var(--text-secondary)]/80 mb-6 truncate">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* View Certificate Button */}
              <div className="pt-4 border-t border-[var(--border)]">
                <button
                  onClick={() => handleOpenPdf(cert.pdf)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-xs font-mono-technical font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>📄 View Certificate</span>
                  <span className="text-[10px]">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
