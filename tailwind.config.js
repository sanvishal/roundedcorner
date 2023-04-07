const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--body-font)", ...fontFamily.sans],
        mono: ["var(--mono-font)", ...fontFamily.mono],
        serif: ["var(--heading-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
