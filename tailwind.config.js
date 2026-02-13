/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0b0b10",
        text: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
