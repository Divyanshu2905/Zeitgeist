/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "custom-yellow": "#723E30",
        light: "#E6D6B5",
        "dark-extra": "#B2805C",
        lighter: "#F8F2D8",
      },
    },
  },
  plugins: [],
};
