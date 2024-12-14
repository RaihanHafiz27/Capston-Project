import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      BebasNeue: ["BebasNeue", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#DB4444",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "50%": { transform: "translateX(25px)", opacity: "1" },
          "51%": { opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "0" },
        },
      },
      animation: {
        slide: "slide 1.5s infinite",
      },
    },
  },
  plugins: [scrollbar],
};
