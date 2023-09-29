// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    // "@nuxtjs/supabase"
  ],
  // supabase: {
  //   redirect: true,
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/confirm",
  //     exclude: []
  //   }
  // },
  ui: {
    global: true,
    icons: ["heroicons"]
  },
  css: [
    "~/assets/style.scss"
  ]
})
