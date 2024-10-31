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
          primary: "#7091E6", // Customize your primary color
          secondary: "#3D52A0", // Customize your secondary color
          accent: "#8697C4",
          neutral: "#ADBBDA",
          "base-100": "#EDE8F5",
        },
      },
    ],
  },
});


