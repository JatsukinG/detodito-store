/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./sanity_ecommerce/**/*.{js, ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);',
        'gradient2': 'linear-gradient(45deg, violet, blue)'
      },
    },
  },
  plugins: [],
}