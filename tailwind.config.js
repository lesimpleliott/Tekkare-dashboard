/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Figtree", "sans-serif"],
      },
      colors: {
        background: "#2100ad",
        primary: "#5dc8ff",
        secondary: "#F962E5",
      },
      boxShadow: {
        "cta-blue": "inset 2px 1000px 1px #2100ad",
        "cta-gray": "inset 2px 1000px 1px rgb(229 231 235)",
      },
    },
  },
  plugins: [],
};
