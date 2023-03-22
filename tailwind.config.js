/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0px 25px rgba(255, 255, 255, 1)'
      },
      backgroundImage: {
        'neonCity': "url('/3157.jpg')"
      },
      colors:{
        'glass': "rgba(0, 0, 0, 0.35)",
        'blueOpacity': 'rgba(100, 2, 119, 0.6)',
      }
    },
  },
  plugins: [],
}