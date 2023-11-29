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
      },
      screens: {
        tablet: "40rem",
      },
      maxWidth: {
        navContainer: "calc(83.33333333333334% - 6rem)",
      },
    },
  },
  plugins: [],
};
