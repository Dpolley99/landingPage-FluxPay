/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01036A',
        'dark': '#0D0700',
        'light-gray': '#F2F2F2',
        'light-purple': '#E5E5F0',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

