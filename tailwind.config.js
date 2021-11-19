// tailwind.config.js
// See more information about this file at https://tailwindcss.com/docs/installation#create-your-configuration-file

module.exports = {
  purge: [
    './templates/*.twig',
    './templates/**/*.twig',
    './templates/**/**/*.twig'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0F315A',
        'light-blue': '#0088CF',
        'orange': '#EF8515',
        'text-gray': '#606F7B',
        'light-gray': '#F8FAFC'
      },
      fontFamily: {
        sans: [
          'Lato',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem',
        '7xl': '4rem', // 64px
        '8xl': '4.5rem', // 72px
      },
      maxWidth: {
        none: 'none',
        xs: '20rem', // 320px
        sm: '24rem', // 384px
        md: '28rem', // 448px
        lg: '32rem', // 512px
        xl: '36rem', // 576px
        '2xl': '42rem', // 672px
        '3xl': '48rem', // 768px
        '4xl': '56rem', // 896px
        '5xl': '64rem', // 1024px
        '6xl': '72rem', // 1152px
        '7xl': '80rem',
        full: '100%',
        'rep-headshot': '225px'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3.25rem',
      },
    },
  },
};
