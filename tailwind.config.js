/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#28504c",
        darkGreen: "#1a2c2a",
      },
    },
  },
  plugins: [],
};
