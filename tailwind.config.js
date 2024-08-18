/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
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
          fontWeight: 'extrabold',
        }],
        'title-lg': ['2rem', {
          lineHeight: '130%',
          fontWeight: 'extrabold',
        }],
        'title-xl': ['3rem', {
          lineHeight: '130%',
          fontWeight: 'extrabold',
        }],
        'text-xs': ['0.75rem', '130%'],
        'text-sm': ['0.875rem', '130%'],
        'text-base': ['1rem', '130%'],
        'text-lg': ['1.25rem', '130%'],

        tag: ['0.625rem', '130%'],

        'button-base': ['0.75rem', '160%'],
        'button-lg': ['0.875rem', '160%'],
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
    },
  },
  plugins: [],
}
