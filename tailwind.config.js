/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        nutMeg: "hsl(14, 45%, 36%)",
        dark_raspberry: "hsl(332, 51%, 32%)",
        white: "hsl(0, 0%, 100%)",
        rose_white: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        light_grey: "hsl(30, 18%, 87%)",
        wenge_brown: "hsl(30, 10%, 34%)",
        dark_charcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        young_serif: ["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}
