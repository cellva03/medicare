/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA5252",
        secondary: {
          light: "#3c3c43",
          dark: "#dfdfd6",
          DEFAULT: "#3c3c43",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
