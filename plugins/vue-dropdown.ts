import VueDropdownMenu from "v-dropdown-menu";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDropdownMenu);
});
