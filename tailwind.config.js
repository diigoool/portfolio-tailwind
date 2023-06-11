/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0f2527",
        secondary: "#b9a846",
        tertiary: "#adc9b6",
        text2: "#436063",
        azure: "#effffd",
        judul: "#098f9c",
        azure2: "#d5e8e6",
        foot: "#1e3f42",
      },
      screens: {
        "2xl": "1320px",
        sm: "540px",
      },
    },
  },
  plugins: [],
};
