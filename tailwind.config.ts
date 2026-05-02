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
        night: "#060816",
        night2: "#0d1228",
        night3: "#141933",
        signal: "#13E9BA",
        parchment: "#E8E2D2",
        spark: "#FF6340",
        muted: "rgba(232,226,210,0.42)",
        border: "rgba(19,233,186,0.13)",
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        blink: "blink 1s infinite",
        pulse: "pulse 1.6s ease-in-out infinite",
        "scroll-clients": "scrollClients 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.4)" },
        },
        scrollClients: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
