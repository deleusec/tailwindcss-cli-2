/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minHeight : {
        "header" : "60px",
        "body" : "calc(100vh - 60px)",
        "footer" : "60px"
      },
      maxWidth : {
        "container" : "1400px",
      },
      colors : {
        primary : "#1c85e8",
        dark : "#222222",
      },
      backgroundImage : { 
        "city-background" : "url('../src/assets/city_panorama.jpg')",
      },
      fontFamily : {
        'poppins' : ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
}

