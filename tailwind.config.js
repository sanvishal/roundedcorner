const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.8rem",
        sm: "1rem",
        lg: "5rem",
        // xl: "20%",
        // "2xl": "9rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--body-font)", ...fontFamily.sans],
        mono: ["var(--mono-font)", ...fontFamily.mono],
        serif: ["var(--heading-font)", ...fontFamily.serif],
      },
      strokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
