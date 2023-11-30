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
        darkGray: "var(--dark-gray)",
        darkerGray: "var(--darker-gray)",
      },
      screens: {
        tablet: "40rem",
      },
      maxWidth: {
        navContainer: "calc(83.33333333333334% - 6rem)",
        container: "calc(100% - 3rem)",
        containerMedium: "calc(100% - 4rem)",
      },
      backgroundImage: {
        gradientCinema:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
      transitionTimingFunction: {
        subtle: "cubic-bezier(0.9, 0, 0.51, 1)",
        softly: "cubic-bezier(0.5, 0, 0.1, 1)",
      },
    },
  },
  plugins: [],
};
