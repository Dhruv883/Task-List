/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#f9f9f9",
        darkOrange: "#f99638",
        lightgrey: "#F7F7F7",
        darkGrey: "#757575",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
        WorkSans: ["Work Sans", "sans-serif"],
        QuickSand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        bgImage: "url('../low-poly-grid-haikei.svg')",
        projectBg: "url('../blob-haikei.svg')",
      },
      boxShadow: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
