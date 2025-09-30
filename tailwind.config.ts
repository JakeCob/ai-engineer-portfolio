import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        fraunces: ['var(--font-fraunces)'],
        jetmono: ['var(--font-jetmono)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            code: {
              backgroundColor: 'rgb(243 244 246)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgb(31 41 55)',
              color: 'rgb(243 244 246)',
            },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: 'rgb(31 41 55)',
              color: 'rgb(243 244 246)',
            },
            pre: {
              backgroundColor: 'rgb(17 24 39)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;