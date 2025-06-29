/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#4485e9',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        'ibm3270': ['IBM Plex 3270', 'monospace'],
      }
    },
  },
  plugins: [],
} 