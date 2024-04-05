/** @type {import('tailwindcss').Config} */
const theme = import('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...theme.theme,
    extend: {
      colors: {
        primary: `var(--primary)`,
        primaryHover: `var(--primary-hover)`,
        background: `var(--background)`,
        navBackground: `var(--nav-background)`,
        secondary: `var(--secondary)`,
        tertiary: `var(--tertiary)`,
        textPrimary: `var(--text-primary)`,
        textSecondary: `var(--text-secondary)`,
        textTertiary: `var(--text-tertiary)`,
      },
    }
  },
  plugins: [],
}

