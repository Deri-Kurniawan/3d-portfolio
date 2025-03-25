import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
export default config;
