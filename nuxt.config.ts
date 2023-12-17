// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: "My Awesome Nuxt Application",
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "animate.css/animate.min.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"]
});