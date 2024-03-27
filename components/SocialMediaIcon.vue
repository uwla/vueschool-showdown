<template>
  <a href="#" class="rounded-full flex items-center justify-center"
  style="background: #2b2f44; height: 60px; width: 60px">
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
