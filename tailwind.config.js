/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        radio: 'Radio Canada Big',
      },
      screens: {
        xl: { max: '1279px' },

        lg: { max: '1195px' },

        md: { max: '767px' },

        sm: { max: '639px' },
      },
    },
  },
  plugins: [],
};
