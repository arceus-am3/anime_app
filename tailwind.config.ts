import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },

    extend: {
      colors: {
        background: "#070a10",
        foreground: "#f4f4f5",

        primary: "#7c9cff",
        accent: "#a78bfa",
        glow: "#60a5fa",

        card: "#0b0f17",
        border: "rgba(255,255,255,0.08)",
        muted: "#9ca3af",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
      },

      borderRadius: {
        xl: "1rem",
        lg: "0.75rem",
        md: "0.5rem",
      },

      boxShadow: {
        glow: "0 0 40px rgba(124,156,255,0.25)",
        soft: "0 10px 30px rgba(0,0,0,0.4)",
      },

      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg,#7c9cff 0%,#a78bfa 50%,#7c9cff 100%)",
        "gradient-soft":
          "radial-gradient(circle at top, rgba(124,156,255,0.2), transparent 60%)",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      animation: {
        gradient: "gradient 12s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
}

export default config
