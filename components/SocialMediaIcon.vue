<template>
  <a href="#" class="social-media-icon rounded-full flex items-center justify-center">
    <img :src="`/img/icon-${icon}.svg`" alt="Icon">
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    }
  }
}
</script>
