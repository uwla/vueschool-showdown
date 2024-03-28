import VueSlider from 'vue-slider-component'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('vue-slider', VueSlider);
})
