/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#32424A",
        "secondary": "#F5F5F5",
        "hover":"rgb(209 213 219)",
        "bg-primary": "#4586FF",
        "bg-secondary": "#01ECD5",
      },
    },
  },
  plugins: [],
}