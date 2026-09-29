"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your message was sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Failed to submit message. Please try again.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please try again or email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
            • AVAILABLE FOR OPPORTUNITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="font-display text-sm sm:text-base text-[var(--text-secondary)] mt-2 font-normal">
            Have a project in mind, an internship opening, or just want to connect? Reach out below.
          </p>
        </div>

        {/* Two-Column Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info Cards & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6 scroll-animate">
            {/* Open to Collaborate Card */}
            <div className="portfolio-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  Open to Collaborate
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                Currently open to internship opportunities, research collaborations, and full-stack/AI engineering roles.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--accent)] block">
                    &lt; 24h
                  </span>
                  <span className="font-mono-technical text-[10px] uppercase text-[var(--text-secondary)]">
                    Response
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--accent)] block">
                    100%
                  </span>
                  <span className="font-mono-technical text-[10px] uppercase text-[var(--text-secondary)]">
                    Replies
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                  <span className="font-display font-bold text-base sm:text-lg text-emerald-500 block">
                    Active
                  </span>
                  <span className="font-mono-technical text-[10px] uppercase text-[var(--text-secondary)]">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Info Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 hover:border-[var(--accent)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div className="min-w-0">
                  <span className="font-mono-technical text-[11px] uppercase tracking-wider text-[var(--text-secondary)] block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 hover:border-[var(--accent)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div className="min-w-0">
                  <span className="font-mono-technical text-[11px] uppercase tracking-wider text-[var(--text-secondary)] block">
                    LinkedIn Profile
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate block">
                    linkedin.com/in/rhimkhan ↗
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 hover:border-[var(--accent)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                  🐙
                </div>
                <div className="min-w-0">
                  <span className="font-mono-technical text-[11px] uppercase tracking-wider text-[var(--text-secondary)] block">
                    GitHub Ecosystem
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate block">
                    github.com/Rhimkhan ↗
                  </span>
                </div>
              </a>

              <div className="portfolio-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div className="min-w-0">
                  <span className="font-mono-technical text-[11px] uppercase tracking-wider text-[var(--text-secondary)] block">
                    Base Location
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 portfolio-card rounded-2xl p-7 sm:p-9 scroll-animate delay-100">
            <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6 font-normal">
              Fill out the form below and I&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-technical uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-technical uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-technical uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-technical uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-mono-technical ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"
                      : "bg-red-500/10 border border-red-500/30 text-red-500"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-mono-technical text-xs uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>→</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[var(--text-secondary)] pt-2 font-mono-technical">
                🔒 Your info is private and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
