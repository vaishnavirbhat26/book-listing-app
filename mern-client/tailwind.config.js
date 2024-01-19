/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        proza: ['"Proza Libre"', 'sans-serif']
      },
      colors: {
        primary: "#00b8ff",
        secondary: "#00719c",
        dark: "#1e1e1e",
        light: "#f5f5f5",
        customBlue1:"009bd6",
        customBlue2:"00415a",
        customBlue3:"001f2b"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};