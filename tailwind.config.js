/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        mediumGray: "var(--medium-gray)",
        lightGray: "var(--light-gray)",
      },
      screens: {
        tablet: "40rem",
      },
      maxWidth: {
        navContainer: "calc(83.33333333333334% - 6rem)",
        heroContainer: "calc(100% - 3rem)",
      },
      backgroundImage: {
        gradientCinema:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
    },
  },
  plugins: [],
};
