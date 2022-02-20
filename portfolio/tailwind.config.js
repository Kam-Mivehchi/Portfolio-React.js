module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '28rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',

      }
    },
    fontFamily: {
      sans: ['M PLUS Rounded 1c', 'sans-serif'],
    }
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
