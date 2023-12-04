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
        gray: {
          10: "var(--gray-10)",
          20: "var(--gray-20)",
          30: "var(--gray-30)",
          40: "var(--gray-40)",
          50: "var(--gray-50)",
          60: "var(--gray-60)",
        },
      },
      screens: {
        lg: "960px",
        tablet: "640px",
      },
      maxWidth: {
        navContainer: "calc(83.33333333333334% - 6rem)",
        container: "calc(100% - 3rem)",
        containerMedium: "calc(100% - 4rem)",
      },
      backgroundImage: {
        gradientCinema:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
        redishGradient: "linear-gradient(180deg, #6c1f41 0%, #210d0e 100%)",
        blueishGradient: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
      },
      transitionTimingFunction: {
        subtle: "cubic-bezier(0.9, 0, 0.51, 1)",
        softly: "cubic-bezier(0.5, 0, 0.1, 1)",
      },
      flexBasis: {
        onethirdM3: "calc(50% - .75rem)",
        oneFourthM4: "calc(25% - 1rem)",
      },
    },
  },
  plugins: [],
};
