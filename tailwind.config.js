/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ef',
          100: '#c2ead8',
          200: '#9dddc1',
          300: '#78d0aa',
          400: '#53c393',
          500: '#0b8f55',
          600: '#097a47',
          700: '#076539',
          800: '#05502b',
          900: '#033b1d',
        },
        accent: {
          50: '#e8fcf3',
          100: '#c5f7e0',
          200: '#a2f2cd',
          300: '#7fedba',
          400: '#4cd790',
          500: '#3bc47e',
          600: '#2aa76a',
          700: '#228a57',
          800: '#1a6d43',
          900: '#12502f',
        },
        gold: {
          50: '#faf8f0',
          100: '#f3efd9',
          200: '#ebe5c2',
          300: '#e3dcab',
          400: '#dcd394',
          500: '#d4af37',
          600: '#b8972f',
          700: '#9c7f27',
          800: '#80671f',
          900: '#644f17',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}