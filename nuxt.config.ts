// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    baseURL: "",
    public: {
      apiBase: "/api",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@nuxtjs/google-fonts"],

  css: ["~/assets/scss/main.scss"],

  googleFonts: {
    families: {
      Roboto: true,
      "Kode Mono": true,
    },
  },
});
