import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0b0f14",
          50: "#0b0f14",
          100: "#0e1319",
          200: "#111821",
          300: "#15202b"
        },
        card: "#0f151d",
        border: "#1f2a37",
        accent: "#3b82f6",
        gain: "#16a34a",
        loss: "#ef4444"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.24)"
      }
    }
  },
  plugins: []
} satisfies Config
