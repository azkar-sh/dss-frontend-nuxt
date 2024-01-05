/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#85586F",
          secondary: "#D0B8A8",
          accent: "#edbb90",
          neutral: "#39243d",
          "base-100": "#fdfaf7",
          info: "#497dca",
          success: "#1cab50",
          warning: "#f2c950",
          error: "#e9496c",
        },

        dark: {
          primary: "#85586F",
          "primary-focus": "#6e475a",
          "primary-content": "#ffffff",
          secondary: "#D0B8A8",
          "secondary-focus": "#c0a89a",
          "secondary-content": "#ffffff",
          accent: "#edbb90",
          "accent-focus": "#e5b28a",
          "accent-content": "#ffffff",
          neutral: "#39243d",
          "neutral-focus": "#2d1f2f",
          "neutral-content": "#ffffff",
          "base-100": "#F8EDE3",
          "base-200": "#e2d5c9",
          "base-300": "#cbbdb0",
          "base-content": "#1f2937",
          info: "#497dca",
          success: "#1cab50",
          warning: "#f2c950",
          error: "#e9496c",
        },
      },
    ],
  },
};
