<template>
  <div class="flex items-center gap-4">
    <img src="/img/logo.png" alt="VueSchool logo">
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
    }
   }
}
</script>
