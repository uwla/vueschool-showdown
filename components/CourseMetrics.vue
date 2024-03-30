<template>
  <div class="flex flex-col items-center gap-3">
    <span class="green-to-aqua text-8xl font-semibold course-metric-val">{{ value }}</span>
    <span class="flex gap-2">
      <img :src="`/img/icon-${icon}.svg`" :alt="`${icon} icon`">
      {{ subtitle }}
    </span>
  </div>
</template>

<script>
const props = {
  value: [String, Number],
  subtitle: String,
  icon: String,
}

export default {
  props
}
</script>
