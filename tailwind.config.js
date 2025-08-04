/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#40E0D0',  // base turquoise
          100: '#66E6D6',      // lighter
          200: '#8CEBDD',      // even lighter
          300: '#B3F1E3',      // pale soft turquoise
          500: '#D9F7EA',      // very light, almost pastel
          600: '#36BFB2',      // slightly darker shade
          },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};