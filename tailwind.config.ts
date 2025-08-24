/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        // primary: "#161616",
        // secondary: "#22C55E",
        accent: "#22C55E", // Green
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
