/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3A8A',
          light: '#1E40AF',
        },
        gold: {
          DEFAULT: '#B45309',
          light: '#D97706',
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
