/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
});