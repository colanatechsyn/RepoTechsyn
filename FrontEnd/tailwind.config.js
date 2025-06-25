/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bankgothic: ['BankGothic', 'sans-serif'],
      },
      boxShadow: {
        'inner-xl': 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
        'inner-soft': 'inset 0 0 15px rgba(0, 0, 0, 0.2)',
      },
      // --- Adicionado para a animação ---
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-scale': 'fadeInScale 0.5s ease-out forwards', // 0.5s de duração, ease-out, mantém o estado final
      },
      // --- Fim da adição ---
    },
  },
  plugins: [],
};