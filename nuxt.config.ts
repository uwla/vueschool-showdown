// https://nuxt.com/docs/api/configuration/nuxt-config
const title = "Vue School | The #1 source for learning Vue.js from experts";
const description = "Basic to advanced Vue.js training from core team members &amp; industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more"
const siteName = "Vue School";
const siteUrl = "https://vueschool.io";
const img = "/img/preview_image.png";

export default defineNuxtConfig({
  app: {
    head: {
      title: title,
      htmlAttrs: { lang: "en", },
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1", },
        { name: "viewport", content: "width=device-width, initial-scale=1", },
        { name: "description", content: description },
        { name: "image", content: img, },
        { name: "locale", content: "en", },
        { name: "robots", content: "index, follow", },
        { name: "site_name", content: siteName },
        { name: "url", content: siteUrl, },
        { name: "twitter:card", content: "Large", },
        { name: "twitter:description", content: description, },
        { name: "twitter:image", content: img, },
        { name: "twitter:title", content: title },
        { property: "og:description", content: description, },
        { property: "og:image", content: img, },
        { property: "og:locale", content: "en_EN", },
        { property: "og:site_name", content: siteName, },
        { property: "og:title", content: title, },
        { property: "og:url", content: siteUrl, },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/img/favicon-16x16.png", sizes: "16x16" },
        { rel: "icon", type: "image/png", href: "/img/favicon-32x32.png", sizes: "32x32" },
        { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png", sizes: "180x180"  },
        { rel: "image_src", href: img },
        { rel: "canonical", href: siteUrl, },
      ],
    },
  },
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
    useCdn: false,
  },
});
