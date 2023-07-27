/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'g-100': '#FFFFFF',
        'g-200': '#DED2F5',
        'g-300': '#140B25',
        'g-400': '#0F0919',
        'g-500': '#0C0813',
        'p-100': '#6942FE',
        'p-200': '#5435CB',
        'p-300': '#4F36AE',
        'p-400': '#7D68A1',
        'p-500': '#2E1758',
        'p-600': '#221240',
        'modal-bg': '#140B25',
        'modal-border': '#2E1B50',
        'input-bg': '#221240',
        'success': '#73DC59',
        'failure': '#EA1A5B'
      },
      screens: {
        'short': { 'raw': '(min-height: 820px)' },
      },
      keyframes: {
        MoveUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-300px)'
          },
        },
        SmallMove: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5px)'
          },
        },

      },
      animation: {
        MoveUpDown: 'MoveUpDown 2.6s linear infinite',
        SmallMove: 'SmallMove 1.5s ease-in-out infinite',
      }
    },

  },
  plugins: [],
}
