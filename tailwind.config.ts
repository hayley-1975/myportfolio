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
        cerulean: {
          50: "#F0F8FB",
          100: "#E2F2F8",
          200: "#C6E6F2",
          300: "#99D4E8",
          400: "#4AB4D7",
          500: "#0F8FC4",
          600: "#007BA7",
          700: "#0A5F80",
          800: "#0A4D68",
          900: "#073B4C",
          950: "#042430",
        },
        surface: {
          DEFAULT: "#F2F7FA",
          card: "#FFFFFF",
          border: "#D8E7EE",
          muted: "#5C6B73",
        },
        badge: {
          orange: "#E85D04",
          orangeBg: "#FFF1E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(7, 59, 76, 0.04), 0 2px 6px -1px rgba(7, 59, 76, 0.02)",
        card: "0 10px 30px -5px rgba(7, 59, 76, 0.04), 0 4px 10px -2px rgba(7, 59, 76, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;