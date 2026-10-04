import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090D",
        surface: {
          DEFAULT: "#101218",
          secondary: "#171A22",
          tertiary: "#1E222D",
          hover: "#222736",
        },
        foreground: "#F5F6FA",
        muted: {
          DEFAULT: "#969BA8",
          dark: "#636875",
        },
        accent: {
          DEFAULT: "#6D7CFF",
          hover: "#5A69FF",
          glow: "rgba(109, 124, 255, 0.25)",
          subtle: "rgba(109, 124, 255, 0.12)",
        },
        emerald: {
          glow: "rgba(16, 185, 129, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.08)",
        highlight: "rgba(255, 255, 255, 0.16)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
