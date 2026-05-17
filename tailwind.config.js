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
          blue: "#0f43a2",
          navy: "#071b3a",
          orange: "#f97316",
          yellow: "#facc15",
          sky: "#eef6ff",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 67, 162, 0.16)",
      },
    },
  },
  plugins: [],
};
