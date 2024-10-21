import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        default: {
          css: {
            '--tw-prose-body': theme('colors.default'),
            '--tw-prose-headings': theme('colors.default'),
            '--tw-prose-lead': theme('colors.default'),
            '--tw-prose-links': theme('colors.default'),
            '--tw-prose-bold': theme('colors.default'),
            '--tw-prose-counters': theme('colors.default'),
            '--tw-prose-bullets': theme('colors.default'),
            '--tw-prose-hr': theme('colors.default'),
            '--tw-prose-quotes': theme('colors.default'),
            '--tw-prose-quote-borders': theme('colors.default'),
            '--tw-prose-captions': theme('colors.default'),
            '--tw-prose-code': theme('colors.default'),
            '--tw-prose-pre-code': theme('colors.default'),
            '--tw-prose-pre-bg': theme('colors.default'),
            '--tw-prose-th-borders': theme('colors.default'),
            '--tw-prose-td-borders': theme('colors.default'),
            '--tw-prose-invert-body': theme('colors.default'),
            '--tw-prose-invert-headings': theme('colors.default'),
            '--tw-prose-invert-lead': theme('colors.default'),
            '--tw-prose-invert-links': theme('colors.default'),
            '--tw-prose-invert-bold': theme('colors.default'),
            '--tw-prose-invert-counters': theme('colors.default'),
            '--tw-prose-invert-bullets': theme('colors.default'),
            '--tw-prose-invert-hr': theme('colors.default'),
            '--tw-prose-invert-quotes': theme('colors.default'),
            '--tw-prose-invert-quote-borders': theme('colors.default'),
            '--tw-prose-invert-captions': theme('colors.default'),
            '--tw-prose-invert-code': theme('colors.default'),
            '--tw-prose-invert-pre-code': theme('colors.default'),
            '--tw-prose-invert-pre-bg': theme('colors.default'),
            '--tw-prose-invert-th-borders': theme('colors.default'),
            '--tw-prose-invert-td-borders': theme('colors.default'),
            a: {
              fontWeight: 'bold',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
