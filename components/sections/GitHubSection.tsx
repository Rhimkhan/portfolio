"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/lib/context/ThemeContext";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex items-center justify-center h-32 font-mono-technical text-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        Loading contribution calendar...
      </div>
    ),
  }
);

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url?: string;
  name?: string;
}

export default function GitHubSection() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to load GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const sinceYear = stats?.created_at
    ? new Date(stats.created_at).getFullYear()
    : "2023";

  return (
    <section
      id="github"
      className="w-full py-28 border-t border-[var(--border)] relative"
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
            • LIVE GITHUB ACTIVITY
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl tracking-tight"
            style={{ fontWeight: 900 }}
          >
            <span style={{ color: "var(--text-primary)" }}>CODE &amp; COMMIT</span>{" "}
            <span style={{ color: "var(--accent)" }}>ECOSYSTEM</span>
          </h2>
          <p
            className="font-display text-sm sm:text-base mt-3 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            A real-time snapshot of my engineering activity and coding consistency.
          </p>
        </div>

        {/* Profile Card & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          {/* Profile Card */}
          <div
            className="lg:col-span-5 portfolio-card rounded-2xl p-7 flex items-center gap-5 scroll-animate"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full border-2 overflow-hidden flex items-center justify-center shrink-0"
              style={{
                borderColor: "var(--accent)",
                background: "var(--bg)",
              }}
            >
              {stats?.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={stats.avatar_url}
                  alt="Rhimkhan GitHub Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "var(--accent)" }}
                >
                  RK
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className="font-display text-xl font-bold truncate"
                style={{ color: "var(--text-primary)" }}
              >
                R Him Khan
              </h3>
              <a
                href="https://github.com/Rhimkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-technical text-xs hover:underline block mb-1"
                style={{ color: "var(--accent)" }}
              >
                @Rhimkhan
              </a>
              <p
                className="text-xs italic leading-tight"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;Building intelligent solutions, one commit at a time.&rdquo;
              </p>
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 scroll-animate delay-100">
            <div
              className="portfolio-card p-5 rounded-2xl text-center flex flex-col justify-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {loading ? "..." : "500+"}
              </span>
              <span
                className="font-mono-technical text-[11px] uppercase tracking-wider mt-1 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Contributions
              </span>
            </div>

            <div
              className="portfolio-card p-5 rounded-2xl text-center flex flex-col justify-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {loading ? "..." : stats?.public_repos ?? "8"}
              </span>
              <span
                className="font-mono-technical text-[11px] uppercase tracking-wider mt-1 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Public Repos
              </span>
            </div>

            <div
              className="portfolio-card p-5 rounded-2xl text-center flex flex-col justify-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {loading ? "..." : stats?.followers ?? "12"}
              </span>
              <span
                className="font-mono-technical text-[11px] uppercase tracking-wider mt-1 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Followers
              </span>
            </div>

            <div
              className="portfolio-card p-5 rounded-2xl text-center flex flex-col justify-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {loading ? "..." : sinceYear}
              </span>
              <span
                className="font-mono-technical text-[11px] uppercase tracking-wider mt-1 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                GitHub Since
              </span>
            </div>
          </div>
        </div>

        {/* Heatmap Card */}
        <div
          className="portfolio-card rounded-2xl p-6 sm:p-8 overflow-x-auto scroll-animate delay-200"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <span
              className="font-mono-technical text-xs uppercase tracking-wider flex items-center gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Annual Contribution Graph (@Rhimkhan)
            </span>

            <a
              href="https://github.com/Rhimkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono-technical font-semibold hover:underline"
              style={{
                background: "var(--bg)",
                borderColor: "var(--border)",
                color: "var(--accent)",
              }}
            >
              <span>↗ View on GitHub</span>
            </a>
          </div>

          <div className="flex justify-center min-w-[700px] py-4">
            {mounted ? (
              <GitHubCalendar
                username="Rhimkhan"
                colorScheme={isDarkMode ? "dark" : "light"}
                fontSize={12}
              />
            ) : (
              <div
                className="flex items-center justify-center h-32 font-mono-technical text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                Loading contribution calendar...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
