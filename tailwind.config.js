/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        edimaPink: "#fce4ec",
        edimaDark: "#880e4f",
      },
    },
  },
  plugins: [],
}
