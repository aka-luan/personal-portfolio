/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
    },
    colors: {
      white: '#fffcf2ff',
      gray: '#ccc5b9ff',
      darkgray: '#403d39ff',
      black: '#252422ff',
      orange: '#eb5e28ff',
    },
  },
  plugins: [],
};
