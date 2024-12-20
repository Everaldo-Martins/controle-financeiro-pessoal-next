import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",        
        foreground: "var(--foreground)",
        "medium-gray": "var(--background)",
        "dark-gray": "var(--dark-gray)",
        "button": "var(--button)",
        "success": "var(--success)",
        "error": "var(--error)"
      },
    },
  },
  plugins: [],
} satisfies Config;
