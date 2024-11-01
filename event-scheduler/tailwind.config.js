/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),
    require("daisyui"),
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D8125B", // Customize your primary color
          secondary: "#2C2E39", // Customize your secondary color
          accent: "#CA7D94",
          neutral: "#CA7D94",
          "base-100": "#022B3A",
        },
      },
    ],
  },
});


