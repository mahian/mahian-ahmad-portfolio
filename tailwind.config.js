/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4ADE80',
        'dark-2': '#111827',
        'dark': '#1f2937',
        'dark-3': '#334155',
      }
    },
  },
  plugins: [],
}
