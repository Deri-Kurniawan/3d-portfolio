const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A293FF",
        secondary: "#00F0FF",
        accent: "#000000",
        accent2: "#8E8E8E",
        gray: "#F1F1F1",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      poppins: ["var(--font-poppins)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
