/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'mars-red': '#f9a08c',
        'mars-orange': '#ffd07b',
        'mars-dust': '#e1c7a4',
        'mars-surface': '#b17864',
        'mars-shadow': '#7a4f3e',
        'space-blue': '#1d2b53',
        'space-dark': '#0c1220',
        'space-light': '#344d7f',
      }
    }
  },
  plugins: [],
};
