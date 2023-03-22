/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#f9f9f9",
        darkOrange: "#f99638",
        lowPriority: "#c9f9cd",
        medPriority: "#f9edc8",
        highPriority: "#f9dfc8",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        bgImage: "url('./public/low-poly-grid-haikei.svg')",
        projectBg: "url('./public/blob-haikei.svg')",
      },
      boxShadow: {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
