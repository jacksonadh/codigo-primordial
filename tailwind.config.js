/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#39ff14',
          50: '#f0fff0',
          100: '#d4ffd4',
          200: '#a8ffa8',
          300: '#7cff7c',
          400: '#50ff50',
          500: '#39ff14',
          600: '#2ecc10',
          700: '#24990c',
          800: '#1a6608',
          900: '#103304',
        },
        secondary: {
          DEFAULT: '#6f22c9',
          50: '#f3eeff',
          100: '#e4d4fe',
          200: '#cbb0fd',
          300: '#a87cf9',
          400: '#8c3cff',
          500: '#6f22c9',
          600: '#5a18a8',
          700: '#45128a',
          800: '#310d6c',
          900: '#1f084e',
        },
        background: '#090909',
        surface: {
          DEFAULT: '#151515',
          light: '#222222',
          dark: '#0d0d0d',
        },
        text: {
          DEFAULT: '#f5f5f5',
          muted: '#a0a0a0',
          dark: '#c0c0c0',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/bg_3.png')",
        'noise-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
