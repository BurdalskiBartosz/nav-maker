import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        xs: " 0px 1px 2px 0px #1018280D",
      },
      colors: {
        secondary: "#F9FAFB",
        primary: "#7F56D9",
        "primary-900": "#101828",
        "tetiary-700": "#344054",
        "tetiary-600": "#475467",
        placeholder: "#667085",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        "button-primary": "#7F56D9",
        primary: "#D0D5DD",
        secondary: "#EAECF0",
      },
    },
  },
  plugins: [],
} satisfies Config;
