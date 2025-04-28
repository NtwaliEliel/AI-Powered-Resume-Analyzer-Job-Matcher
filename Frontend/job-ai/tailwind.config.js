const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF7F50', // Replace with the exact color from Earn.png
          light: '#FFA07A',
          dark: '#E5673E',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Arial', 'sans-serif'], // Use Geist as the primary font
        mono: ['Geist Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};