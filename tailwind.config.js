/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        ihatesquash: {
          "primary": "#dc2626",        // Red - passionate hatred
          "secondary": "#16a34a",      // Green - ironic vegetable color
          "accent": "#f59e0b",         // Orange - pumpkin (the good gourd)
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#dc2626",
        },
      },
    ],
  },
}
