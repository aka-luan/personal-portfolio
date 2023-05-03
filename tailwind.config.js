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
        nunito: ['var(--font-albert)'],
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: '#eeeeee',
      purple: '#7971ea',
      ['purple-200']: '#beb7f3',
      black: '#393e46',
      midnight: '#222831',
    },
  },
  plugins: [],
};
