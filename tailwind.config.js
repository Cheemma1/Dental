/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      black: "#000A2D",
      grey: "#636571",
      white: "#ffffff",
      blue: "#3267FF",
      light: "#EEEEEE",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        archivo: ["Archivo", "sans-serif"]
      },
      backgroundImage: {
 "hero-pattern": "url('/images/div.elementor-widget-wrap.png')",
     
"section": "url('/images/section.elementor-section.png')",
      },
    },
  },
  plugins: [],
};

