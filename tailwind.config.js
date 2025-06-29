/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'dark-bg': '#0a0a0a',
      },
    },
  },
  plugins: [],
} 