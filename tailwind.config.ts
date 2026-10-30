import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ecedf1",
        surface: "#ecedf1",
        primary: {
          DEFAULT: "#f38020",
          hover: "#fa8c34",
        },
        accent: {
          orange: "#f38020",
          amber: "#faae40",
          blue: "#0099ff",
          purple: "#9a8cf8",
        },
        dark: "#1c1c1c",
        muted: "#4d4d4d",
        subtle: "#666666",
      },
      boxShadow: {
        "neu-card": "-10px -10px 20px #fafbff, 10px 10px 20px #a6abbd40",
        "neu-card-hover": "-12px -12px 24px #fafbff, 12px 12px 24px #a6abbd60",
        "neu-icon": "inset -5px -5px 10px #fafbff, inset 5px 5px 10px #a6abbd40",
        "neu-badge": "inset -2px -2px 4px 0px #fafbff, inset 2px 2px 4px 0px rgba(243, 128, 32, 0.25)",
        "neu-card-orange": "0 14px 34px -10px rgba(243, 128, 32, 0.2), -10px -10px 20px #fafbff, 10px 10px 20px #a6abbd40",
        "neu-button-orange": "-5px -5px 10px 0px #fafbff, 5px 5px 15px 0px rgba(243, 128, 32, 0.4)",
        "neu-button": "-5px -5px 10px 0px #fafbff, 5px 5px 10px 0px rgba(166, 171, 189, 0.5)",
        "neu-button-inset": "inset -2px -2px 5px #fafbff, inset 2px 2px 5px rgba(166, 171, 189, 0.4)",
        "neu-faq": "-6px -6px 14px #fafbff, 6px 6px 14px #a6abbd35",
        "neu-navbar": "inset -5px -5px 5px 0px #fafbff, inset 5px 5px 5px 0px rgba(166, 171, 189, 0.25)",
      },
      borderRadius: {
        "card": "25px",
        "pill": "50px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
