/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');
const fontSize = require('./config/typography/fontSize');
const fontFamily = require('./config/typography/fontFamily.js');
const colors = require('./config/abstracts/colors.js');
const letterSpacing = require('./config/typography/letterSpacing');
const screens = require('./config/abstracts/screens.js');
const boxShadow = require('./config/abstracts/shadows.js');

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      screens,
      fontFamily,
      fontSize,
      letterSpacing,
      boxShadow,
    },
  },
  plugins: [flowbite],
};
