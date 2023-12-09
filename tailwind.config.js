/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-bg': '#f3f9ff',
        'darkblue': '#0c0048',
      },
    },
  },
  plugins: [],
}

