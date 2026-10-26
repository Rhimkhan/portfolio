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
    setStatusMessage(null);

    // Client-side validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setStatusMessage({
        type: "error",
        text: "Please enter your full name.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (!trimmedMessage) {
      setStatusMessage({
        type: "error",
        text: "Please write a message before submitting.",
      });
      return;
    }

    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!web3formsKey || web3formsKey === "your_web3forms_key_here") {
      setStatusMessage({
        type: "error",
        text: "Web3Forms access key is missing. Please set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: trimmedName,
          email: trimmedEmail,
          subject: formData.subject.trim() || `Portfolio Contact from ${trimmedName}`,
          message: trimmedMessage,
          from_name: `${trimmedName} (Portfolio)`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message was sent successfully. I'll get back to you shortly.",
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
        text: "Network error occurred. Please try again or reach out directly to rhim78975730@gmail.com.",
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
            • AVAILABLE FOR OPPORTUNITIES
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl tracking-tight"
            style={{ fontWeight: 900 }}
          >
            <span style={{ color: "var(--text-primary)" }}>Get in</span>{" "}
            <span style={{ color: "var(--accent)" }}>Touch</span>
          </h2>
          <p
            className="font-display text-sm sm:text-base mt-2 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind, an internship opening, or just want to connect? Reach out below.
          </p>
        </div>

        {/* Two-Column Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info Cards & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6 scroll-animate">
            {/* Open to Collaborate Card */}
            <div
              className="portfolio-card rounded-2xl p-6 sm:p-7"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <h3
                  className="font-display font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  Open to Collaborate
                </h3>
              </div>

              <p
                className="text-sm leading-relaxed mb-6 font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                Currently open to internship opportunities, research collaborations, and full-stack/AI engineering roles.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="font-display font-bold text-base sm:text-lg block"
                    style={{ color: "var(--accent)" }}
                  >
                    &lt; 24h
                  </span>
                  <span
                    className="font-mono-technical text-[10px] uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Response
                  </span>
                </div>
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="font-display font-bold text-base sm:text-lg block"
                    style={{ color: "var(--accent)" }}
                  >
                    100%
                  </span>
                  <span
                    className="font-mono-technical text-[10px] uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Replies
                  </span>
                </div>
                <div
                  className="p-3 rounded-xl border"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-emerald-500 block">
                    Active
                  </span>
                  <span
                    className="font-mono-technical text-[10px] uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Info Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 transition-all group"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  ✉️
                </div>
                <div className="min-w-0">
                  <span
                    className="font-mono-technical text-[11px] uppercase tracking-wider block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Email Address
                  </span>
                  <span
                    className="text-sm font-semibold truncate block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personalInfo.email} ↗
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 transition-all group"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  💼
                </div>
                <div className="min-w-0">
                  <span
                    className="font-mono-technical text-[11px] uppercase tracking-wider block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    LinkedIn Profile
                  </span>
                  <span
                    className="text-sm font-semibold truncate block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    linkedin.com/in/rhimkhan ↗
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card rounded-xl p-4 flex items-center gap-4 transition-all group"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  🐙
                </div>
                <div className="min-w-0">
                  <span
                    className="font-mono-technical text-[11px] uppercase tracking-wider block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    GitHub Ecosystem
                  </span>
                  <span
                    className="text-sm font-semibold truncate block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    github.com/Rhimkhan ↗
                  </span>
                </div>
              </a>

              <div
                className="portfolio-card rounded-xl p-4 flex items-center gap-4"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg shrink-0"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  📍
                </div>
                <div className="min-w-0">
                  <span
                    className="font-mono-technical text-[11px] uppercase tracking-wider block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Base Location
                  </span>
                  <span
                    className="text-sm font-semibold block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="Rhim_Khan_Resume.pdf"
                className="portfolio-card rounded-xl p-4 flex items-center justify-between gap-4 transition-all group hover:border-[var(--accent)] hover:scale-[1.01]"
                style={{
                  background: "var(--card-bg)",
                  border: "1.5px solid var(--accent)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: "var(--accent)",
                      color: "#ffffff",
                    }}
                  >
                    📄
                  </div>
                  <div className="min-w-0">
                    <span
                      className="font-mono-technical text-[11px] uppercase tracking-wider block font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      Official Curriculum Vitae
                    </span>
                    <span
                      className="text-sm font-bold truncate block"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Download Resume (PDF)
                    </span>
                  </div>
                </div>
                <span
                  className="font-mono-technical text-xs font-bold px-3 py-1.5 rounded-full border border-[var(--accent)] bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] group-hover:text-white transition-all shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  ↓ Download
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-7 portfolio-card rounded-2xl p-7 sm:p-9 scroll-animate delay-100"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <h3
              className="font-display font-bold text-2xl mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Send a Direct Message
            </h3>
            <p
              className="text-sm mb-6 font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              Fill out the form below and I&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-mono-technical uppercase tracking-wider mb-1.5 font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-mono-technical uppercase tracking-wider mb-1.5 font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-mono-technical uppercase tracking-wider mb-1.5 font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Inquiry"
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-mono-technical uppercase tracking-wider mb-1.5 font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
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
                className="w-full py-3.5 rounded-xl font-mono-technical text-xs uppercase tracking-wider font-bold shadow-lg hover:brightness-110 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 text-white"
                style={{
                  background: "var(--accent)",
                  color: "#ffffff",
                }}
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

              <p
                className="text-center text-[11px] pt-2 font-mono-technical"
                style={{ color: "var(--text-secondary)" }}
              >
                🔒 Your info is private and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
