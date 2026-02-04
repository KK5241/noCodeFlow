import { tailwindThemeTokens } from './src/styles/tokens/tokens';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: tailwindThemeTokens,
  },
  plugins: [import('tailwindcss-animate')],
};
