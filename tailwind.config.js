/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode by adding 'dark' class
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // 追加のブレイクポイント
        'xl': '1440px',
      },
      colors: {
        'dark-background': 'var(--background-body)',
        // 'dark-text': 'var(--text-white)',
        // Add other custom colors or themes as needed
      },
      backgroundImage: {
        'hero-right': 'var(--background-hero-right)',
        'border-top-hero-right': 'var(--border-top-hero-right)',
        // Other gradient backgrounds
      },
      fontFamily: {
        custom: ['"Poppins"', 'sans-serif'],  // 新しいフォント
      },
    },
  },
  plugins: [],
};

