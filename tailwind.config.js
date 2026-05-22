/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Kanit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#212428",
          navy: "#0d1013",
          orange: "#d8b45a",
          yellow: "#f3d37a",
          sky: "#f9f9f9",
        },
      },
      boxShadow: {
        soft: "0 28px 90px rgba(13, 16, 19, 0.28)",
      },
    },
  },
  plugins: [],
};
