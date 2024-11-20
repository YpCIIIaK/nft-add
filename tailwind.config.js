/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A0CA3', // Фиолетовый для акцентов
        secondary: '#F72585', // Розовый для кнопок и элементов
        background: '#1A1B41', // Тёмный фон
        textLight: '#F1F1F1', // Светлый текст
        highlight: '#7209B7', // Подсветка
        cardBg: '#2B2D4F', // Фон карточек
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};