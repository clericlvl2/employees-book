/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        martian: ['"Martian Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
