/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FF2E63",
        "accent-pink": "#FF2E63",
        "secondary": "#9C27B0",
        "background-light": "#f6f6f8",
        "background-dark": "#050505",
        "card-dark": "#111111",
        "bar-bg-dark": "#222222",
        "bar-bg-light": "#E5E7EB",
      },
      fontFamily: {
        "sans": ['Inter', 'sans-serif'],
        "outfit": ['Outfit', 'sans-serif'],
        "display": ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(255, 46, 99, 0.3)',
      }
    },
  },
  plugins: [],
}