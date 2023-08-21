const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xs: "560px",
      sm: "670px",
      md: "915px",
      lg: "1000px",
      xl: "1110px",
      xxl: "1290px",
      xxxl: "1500px",
    },
  },

  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      worksans: ["Work Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};
