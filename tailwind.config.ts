import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#edf5ff",
        ink: "#0a0e17",
      },
      fontFamily: {
        display: ["'Albert Sans'", "sans-serif"],
        body: ["'Albert Sans'", "sans-serif"],
        mono: ["'Fragment Mono'", "monospace"],
      },
      transitionTimingFunction: {
        primary: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
