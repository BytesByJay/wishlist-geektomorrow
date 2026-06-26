// Drop into your tailwind config under `theme.extend.colors`.
// Requires tokens.css (or equivalent CSS vars) loaded globally.
export const novionColors = {
  primary: {
    DEFAULT: "rgb(var(--primary) / <alpha-value>)",
    50:  "rgb(var(--primary-50)  / <alpha-value>)",
    100: "rgb(var(--primary-100) / <alpha-value>)",
    200: "rgb(var(--primary-200) / <alpha-value>)",
    300: "rgb(var(--primary-300) / <alpha-value>)",
    700: "rgb(var(--primary-700) / <alpha-value>)",
    800: "rgb(var(--primary-800) / <alpha-value>)",
    900: "rgb(var(--primary-900) / <alpha-value>)",
  },
  accent: {
    DEFAULT: "rgb(var(--accent) / <alpha-value>)",
    50:  "rgb(var(--accent-50)  / <alpha-value>)",
    100: "rgb(var(--accent-100) / <alpha-value>)",
    200: "rgb(var(--accent-200) / <alpha-value>)",
    700: "rgb(var(--accent-700) / <alpha-value>)",
  },
  paper: "rgb(var(--paper) / <alpha-value>)",
} as const;
