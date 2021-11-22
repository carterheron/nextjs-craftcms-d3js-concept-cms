module.exports = {
    darkMode: false,
    mode: 'jit',
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
    ],
    purge: {
      content: [
        './templates/**/*.twig',
      ],
    },
    theme: {
      extend: {
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
  
          screens: {
              'sm': '640px',
              // => @media (min-width: 640px) { ... }
  
              'md': '768px',
              // => @media (min-width: 768px) { ... }
  
              'lg': '1024px',
              // => @media (min-width: 1024px) { ... }
  
              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }
  
              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
  
              '3xl': '1920px'
          }
    },
  };