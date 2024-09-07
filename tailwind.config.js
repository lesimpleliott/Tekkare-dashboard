/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Figtree", "sans-serif"],
      },
      colors: {
        main: {
          100: "#e0d7ff",
          200: "#b5a9ff",
          300: "#8a7dff",
          400: "#5d52ff",
          500: "#2100ad", //default
          600: "#1a0096",
          700: "#14007d",
          800: "#0e005c",
          900: "#07003a",
        },
        primary: {
          100: "#d0f2ff",
          200: "#a0e0ff",
          300: "#70cfff",
          400: "#40bfff",
          500: "#5dc8ff", //default
          600: "#49a6e0",
          700: "#3483b6",
          800: "#206084",
          900: "#103053",
        },
        secondary: {
          100: "#fcd7f5",
          200: "#f9aaf2",
          300: "#f77ce8",
          400: "#f54fe4",
          500: "#F962E5", //default
          600: "#d852c2",
          700: "#b944a0",
          800: "#9e367d",
          900: "#6e214e",
        },
      },
      boxShadow: {
        "cta-blue": "inset 2px 1000px 1px #2100ad", //background-500
        "cta-gray": "inset 2px 1000px 1px rgb(229 231 235)", //gray-200
      },
    },
  },
  plugins: [],
};
