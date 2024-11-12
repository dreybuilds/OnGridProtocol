import type { Config } from 'tailwindcss'
import { themeConfig, darkModeConfig } from './src/styles/theme'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        b612: ['var(--font-b612)', 'sans-serif'],
        sans: ['B612', 'sans-serif'],
      },
      colors: {
        'oga-green': {
          DEFAULT: '#3D9970',
          light: '#4CAF50',
          dark: '#2E7D32',
        },
        'oga-yellow': {
          DEFAULT: '#FFDC00',
          light: '#FFEB3B',
          dark: '#FBC02D',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3D9970",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFDC00",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        'h1': '4rem',
        'h2': '3rem',
        'h3': '2.5rem',
        'body': '1rem',
        'body-sm': '0.875rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config