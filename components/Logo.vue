<template>
  <div class="flex items-center gap-6 logo">
    <img src="/img/logo.svg" alt="VueSchool logo"
    style="max-width: 100%; max-height: 100%;">
    <a href="" class="w-min font-bold" v-if="showText">
      Vue School.io
    </a>
  </div>
</template>

<script>
export default {
  props: {
    showText: {
      type: Boolean,
      default: true,
    },
    width: {
      default: 'auto'
    },
    height: {
      default: 'auto'
    }
  }
}
</script>
