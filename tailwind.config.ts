import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gellix: ["var(--font-gellix)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#232732",           // Main dark color
        dark: "#232732",
        muted: "#4A4A4A",
        lightMuted: "#6B7280",
        border: "#E5E5E5",
        accent: "#8E3947",            // Use very sparingly
      },
      fontSize: {
        // Desktop sizes
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '600' }],
        'h2': ['48px', { lineHeight: '1.15', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'button': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'tiny': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        // You can extend this later if needed
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
};

export default config;
