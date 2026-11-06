/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F7774',
        navy: '#123541',
        purple: '#B98112',
        cyan: '#D19A1B',
        background: '#F2F8F6',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
