/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        heroBG: "url('./public/images/hero-bg.svg')",
      },
      backgroundSize: {
        heroBG: 'cover',
      },
      gridTemplateColumns: {
        autofill: 'repeat(auto-fill, minmax(256px, 1fr))',
      },
      fontFamily: {
        title: '"Baloo 2", sans-serif',
        text: '"Roboto", sans-serif',
      },
      fontSize: {
        'title-xs': ['1.125rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        'title-sm': ['1.25rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        'title-base': ['1.5rem', {
          lineHeight: '130%',
          fontWeight: 'bolder',
        }],
        'title-lg': ['2rem', {
          lineHeight: '130%',
          fontWeight: 'bolder',
        }],
        'title-xl': ['3rem', {
          lineHeight: '130%',
          fontWeight: 'bolder',
        }],
        'text-xs': ['0.75rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        'text-sm': ['0.875rem', {
          lineHeight: '130%',
          fontWeight: 'normal',
        }],
        'text-base': ['1rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],
        'text-lg': ['1.25rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],

        tag: ['0.625rem', {
          lineHeight: '130%',
          fontWeight: 'bold',
        }],

        'button-sm': ['0.75rem', {
          lineHeight: '160%',
          fontWeight: 'bold',
        }],
        'button-lg': ['0.875rem', {
          lineHeight: '160%',
          fontWeight: 'bolder',
        }],
      },
      colors: {
        product: {
          'yellow-light': '#F1E9C9',
          yellow: '#DBAC2C',
          'yellow-dark': '#C47F17',
          'purple-light': '#EBE5F9',
          purple: '#8047F8',
          'purple-dark': '#4B2995',
        },
        base: {
          white: '#FFFFFF',
          background: '#FAFAFA',
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E5E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
