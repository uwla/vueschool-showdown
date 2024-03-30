// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sanity"],
  css: [
    "~/assets/css/navbar.css",
    "~/assets/css/homepage.css",
    "~/assets/css/footer.css",
    "~/assets/css/app.css",
    "@fontsource/rubik/400.css",
    "@fontsource/rubik/500.css",
    "@fontsource/rubik/600.css",
    "@fontsource/rubik/700.css",
    "@fontsource/rubik/800.css",
    "vue-slider-component/theme/default.css",
    "v-dropdown-menu/css",
  ],
  plugins: [{ src: "~/plugins/vue-slider.ts", mode: "client" }],
  sanity: {
    projectId: "xrbzblpe",
    dataset: "production",
    useCdn: false
  },
});
