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
      white: '#fffff',
      gray: '#eeeeee',
      purple: '#7971ea',
      black: '#393e46',
      midnight: '#222831',
    },
  },
  plugins: [],
};
