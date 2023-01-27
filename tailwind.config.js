/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-debug': '#0c1016',
        'blue-debug': '#00fff1',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
