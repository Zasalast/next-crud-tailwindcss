/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./scr/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};