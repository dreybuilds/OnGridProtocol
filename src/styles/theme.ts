import type { Config } from 'tailwindcss'

export const themeConfig: Partial<Config> = {
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
}

export const darkModeConfig = {
  darkMode: ["class"],
}

export const gradients = {
  primary: 'linear-gradient(45deg, #3D9970 30%, #4CAF50 90%)',
  secondary: 'linear-gradient(45deg, #FFDC00 30%, #FFEB3B 90%)',
  accent: 'linear-gradient(45deg, #3D9970 30%, #FFDC00 90%)',
}