/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1e3a5f",
          navy: "#0b1628",
          orange: "#9f7a2d",
          yellow: "#c8a95a",
          sky: "#f6f1e8",
        },
      },
      boxShadow: {
        soft: "0 28px 90px rgba(11, 22, 40, 0.18)",
      },
    },
  },
  plugins: [],
};
