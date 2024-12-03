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
        tree: "0px 15px 15px 0 rgba(34, 33, 81, 0.1)",
      },
      maxWidth: {
        container: "1200px",
      },
      minHeight: {
        skeletonNavList: "96px",
      },
      colors: {
        secondary: "#F9FAFB",
        primary: "#7F56D9",
        "primary-900": "#101828",
        "tetiary-700": "#344054",
        "tetiary-600": "#475467",
        "quanternary-500": "#667085",
        "button-secondary-fg": "#6941C6",
        "button-tetiary-hover": "#F9F5FF",
        placeholder: "#667085",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        "button-primary": "#7F56D9",
        "button-secondary": "#D6BBFB",
        primary: "#D0D5DD",
        secondary: "#EAECF0",
      },
    },
  },
  plugins: [],
} satisfies Config;
