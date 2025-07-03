/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        title: '#2B3674'
      },

      fontFamily: {
        inter: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}