/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#888788",
        darkGrey: "#73777B",
        offWhite: "#f9f9f9",
        darkOrange: "#f99638",
        yellow: "#fec90f",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        bgImage: "url('./public/low-poly-grid-haikei.svg')",
      },
      boxShadow: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
