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
        '3xl': '0 35px 60px 15px rgba(0, 0, 0, 0.3)',

      }
    },
    fontFamily: {
      sans: ['M PLUS Rounded 1c', 'sans-serif'],
    },
    backgroundImage: {
      'wave': "url('./assets/layered-waves-haikei.svg')",
      'menu-wave': "url('./assets/wave-haikeiright.svg')",
      'stacked-wave': "url('./assets/stacked-waves-haikei.svg')",
      'blurry': "url('./assets/blob-scene-haikei.svg')",
    },
    colors: {
      'primaryd': '#041C32',
      'secondaryd': '#04293A',
      'tertiaryd': '#064663',
      'accentd': '#ECB365',
      'light-blue': '#DBEAFE'
    },
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
