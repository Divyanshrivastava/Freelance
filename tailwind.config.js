/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'white-50': '#d9ecff',
        'black-200': '#282732',
        'black-50': '#1c1c21',
        'black-100': '#0e0e10'
      },
    },
  },
  plugins: [],
}

