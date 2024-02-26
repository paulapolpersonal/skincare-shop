// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    baseURL: "",
    public: {
      apiBase: "/api",
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],

  css: ["~/assets/scss/main.scss"],

  googleFonts: {
    families: {
      Roboto: [100, 200, 300, 400, 500, 600],
      "Kode Mono": true,
    },
  },
});
