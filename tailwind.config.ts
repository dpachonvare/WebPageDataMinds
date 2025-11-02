import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0056e0',
          600: '#0044ad',
          700: '#00337a',
          800: '#002147',
          900: '#001029',
        },
        azure: {
          50: '#e6f7ff',
          100: '#b3e6ff',
          200: '#80d5ff',
          300: '#4dc4ff',
          400: '#1ab3ff',
          500: '#00a2e6',
          600: '#007fb3',
          700: '#005c80',
          800: '#00394d',
          900: '#00161a',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
