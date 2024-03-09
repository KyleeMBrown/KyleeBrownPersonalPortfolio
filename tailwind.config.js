/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        curly: ["curly", 'sans-serif'],
        sweet: ["sweet", 'sans-serif'],
        varsity: ["varsity", 'sans-serif'],
        organical: ["organical", 'sans-serif']
      }
    },
  },
  plugins: [

  ],
}

