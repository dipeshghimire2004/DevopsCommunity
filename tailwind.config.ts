/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        accent: "#22C55E", // Green
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
