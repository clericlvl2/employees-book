/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        martian: ['"Martian Mono"', 'monospace'],
      },
      backgroundImage: {
        'arrow-up': "url('/src/assets/images/arrow-up.svg')",
        'arrow-down': "url('/src/assets/images/arrow-down.svg')",
        'light-arrow-up': "url('/src/assets/images/light-arrow-up.svg')",
        'light-arrow-down': "url('/src/assets/images/light-arrow-down.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
