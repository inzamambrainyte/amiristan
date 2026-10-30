import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "#ffffff",
        primary: {
          DEFAULT: "#f38020",
          hover: "#fa8c34",
          light: "#fff7ed",
        },
        accent: {
          orange: "#f38020",
          amber: "#faae40",
          blue: "#0284c7",
          purple: "#7c3aed",
        },
        dark: "#111827",
        muted: "#475569",
        subtle: "#64748b",
      },
      boxShadow: {
        "modern-card": "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
        "modern-card-hover": "0 20px 40px -12px rgba(243, 128, 32, 0.22), 0 8px 16px -6px rgba(15, 23, 42, 0.04)",
        "glass-nav": "0 8px 30px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        "glass-card": "0 12px 36px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        "pill-glow": "0 2px 10px rgba(243, 128, 32, 0.12)",
        "button-glow": "0 6px 20px -4px rgba(243, 128, 32, 0.45)",
      },
      borderRadius: {
        "card": "24px",
        "pill": "9999px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
