/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkCyan: "hsl(158, 36%, 37%)",
          darkGreen: "hsl(156, 42%, 18%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          veryDarkBlue: "hsl(212, 21%, 14%)",
          darkGrayishBlue: "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};

