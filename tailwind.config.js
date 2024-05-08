/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        'primary':'#679436',
        'second':'#A4BD01',
        'background':'#edf2ca',
        'textColor':'#2d3114',
        'evidence_1':'#06668C',
        'evidence_2':'#427AA1',
      },
    },
  },
  plugins: [],
};
