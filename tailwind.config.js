import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--aw-color-primary)",
        secondary: "var(--aw-color-secondary)",
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
        blue: "rgb(6,13,155)",
        goldrush: "rgb(244,177,66)",
        deepblue: "rgb(0,0,68)",
        trueblue: "rgb(49,123,255)",
        sky: "rgb(218,235,252)",
        deepgold: "rgb(238,138,7)",
        trueyellow: "rgb(255,222,70)",
        ivory: "rgb(251,249,237)",
        digitalblue: "rgb(0,0,255)",
        digitalyellow: "rgb(255,255,0)",
      },
      fontFamily: {
        sans: [
          "var(--aw-font-sans, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "var(--aw-font-serif, ui-serif)",
          ...defaultTheme.fontFamily.serif,
        ],
        heading: [
          "var(--aw-font-heading, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        "otago-sans": [
          "WickliffeSans",
          "var(--aw-font-sans, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        "otago-serif": [
          "Wickliffe",
          "var(--aw-font-serif, ui-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      typography: ({ theme }) => ({
        otago: {
          css: {
            "--tw-prose-body": theme("colors.ivory"),
            "--tw-prose-headings": theme("colors.deepgold"),
            "--tw-prose-lead": theme("colors.ivory"),
            "--tw-prose-links": theme("colors.ivory"),
            "--tw-prose-bold": theme("colors.ivory"),
            "--tw-prose-counters": theme("colors.ivory"),
            "--tw-prose-bullets": theme("colors.iory"),
            "--tw-prose-hr": theme("colors.ivory"),
            "--tw-prose-quotes": theme("colors.ivory"),
            "--tw-prose-quote-borders": theme("colors.ivory"),
            "--tw-prose-captions": theme("colors.ivory"),
            "--tw-prose-code": theme("colors.ivory"),
            "--tw-prose-pre-code": theme("colors.ivory"),
            "--tw-prose-pre-bg": theme("colors.ivory"),
            "--tw-prose-th-borders": theme("colors.ivory"),
            "--tw-prose-td-borders": theme("colors.ivory"),
            h1: {
              fontWeight: "400",
            },
            h2: {
              color: "var(--tw-prose-body)",
              fontWeight: "400",
            },
            p: {
              marginBottom: 0,
            },
            ul: {
              marginTop: 0,
            },
            li: {
              fontSize: "1.5rem",
            },
            "ul > ul > li": {
              fontSize: "1.25rem",
            },
            dt: {
              fontSize: "1rem",
              color: theme("colors.ivory"),
              marginBottom: 0,
            },
            dd: {
              fontSize: "1rem",
              color: theme("colors.ivory"),
              marginTop: 0,
            },
          },
        },
        default: {
          css: {
            "--tw-prose-body": theme("colors.default"),
            "--tw-prose-headings": theme("colors.default"),
            "--tw-prose-lead": theme("colors.default"),
            "--tw-prose-links": theme("colors.default"),
            "--tw-prose-bold": theme("colors.default"),
            "--tw-prose-counters": theme("colors.default"),
            "--tw-prose-bullets": theme("colors.default"),
            "--tw-prose-hr": theme("colors.default"),
            "--tw-prose-quotes": theme("colors.default"),
            "--tw-prose-quote-borders": theme("colors.default"),
            "--tw-prose-captions": theme("colors.default"),
            "--tw-prose-code": theme("colors.default"),
            "--tw-prose-pre-code": theme("colors.default"),
            "--tw-prose-pre-bg": theme("colors.default"),
            "--tw-prose-th-borders": theme("colors.default"),
            "--tw-prose-td-borders": theme("colors.default"),
            "--tw-prose-invert-body": theme("colors.default"),
            "--tw-prose-invert-headings": theme("colors.default"),
            "--tw-prose-invert-lead": theme("colors.default"),
            "--tw-prose-invert-links": theme("colors.default"),
            "--tw-prose-invert-bold": theme("colors.default"),
            "--tw-prose-invert-counters": theme("colors.default"),
            "--tw-prose-invert-bullets": theme("colors.default"),
            "--tw-prose-invert-hr": theme("colors.default"),
            "--tw-prose-invert-quotes": theme("colors.default"),
            "--tw-prose-invert-quote-borders": theme("colors.default"),
            "--tw-prose-invert-captions": theme("colors.default"),
            "--tw-prose-invert-code": theme("colors.default"),
            "--tw-prose-invert-pre-code": theme("colors.default"),
            "--tw-prose-invert-pre-bg": theme("colors.default"),
            "--tw-prose-invert-th-borders": theme("colors.default"),
            "--tw-prose-invert-td-borders": theme("colors.default"),
            a: {
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
  darkMode: "class",
};
