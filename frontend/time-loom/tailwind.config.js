/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors matching the ancient/historical theme
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
          dark: '#B8860B',
        },
        bronze: {
          DEFAULT: '#CD7F32',
          light: '#E6A854',
          dark: '#A0522D',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        display: ['Cinzel Decorative', 'serif'],
      },
    },
  },
  plugins: [],
}
