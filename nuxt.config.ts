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
      Inter: [400, 700],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
      "Kode Mono": true,
    },
  },
});
