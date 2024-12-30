/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'peach': '#ffb7a1',
        'yellow': '#efbc68',
        'gray-green': '#919f89',
        'light-gray': '#c8cfd6',
        'blue-gray': '#95a1ae',
        'white-bg': '#fafafa',
      },
      fontSize: {
        sm: '0.6rem',
        base: '0.75rem',
        xl: '0.938rem',
        '2xl': '1.172rem',
        '3xl': '1.459rem',
        '4xl': '1.828rem',
        '5xl': '2.328rem',
      }
    },
  },
  plugins: [],
};
