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
        background: "var(--bg)",
        paddingLeft: "max(5.6vw, 1.5rem)",
        paddingRight: "max(5.6vw, 1.5rem)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 scroll-animate">
          <div>
            <span
              className="font-mono-technical text-xs uppercase tracking-widest font-semibold inline-block mb-3 px-3 py-1 rounded-full border"
              style={{
                color: "var(--accent)",
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              CREDENTIALS &amp; RECOGNITION
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              My Certificates &amp; Badges
            </h2>
          </div>

          {/* Stats Bar */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 md:mt-0 font-mono-technical text-xs sm:text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="px-3 py-1.5 rounded-xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              🎖️ 4 Certificates
            </span>
            <span
              className="px-3 py-1.5 rounded-xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
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
              className="font-mono-technical text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full border transition-all"
              style={
                selectedFilter === tab
                  ? {
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "#ffffff",
                      boxShadow: "var(--shadow)",
                    }
                  : {
                      background: "var(--card-bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }
              }
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
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderTopWidth: "4px",
                borderTopColor: cert.accentColor,
                boxShadow: "var(--shadow)",
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
                <h3
                  className="font-display text-xl font-bold leading-snug mb-2 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
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
                <div
                  className="flex flex-wrap items-center gap-2 text-xs font-mono-technical mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>📅 {cert.date}</span>
                  {cert.hours && <span>• ⏱ {cert.hours}</span>}
                  {cert.topic && <span>• 💡 {cert.topic}</span>}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p
                    className="font-mono-technical text-[11px] mb-6 truncate"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* View Certificate Button */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <button
                  onClick={() => handleOpenPdf(cert.pdf)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-mono-technical font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
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
