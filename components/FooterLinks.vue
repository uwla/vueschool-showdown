<template>
  <div>
    <h3 class="mb-5" style="color: rgba(115, 123, 152, 1)">{{ title }}</h3>
    <div class="flex flex-col gap-3">
      <a class="block" :href="link.url" v-for="link, i in links" :key="i">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    }
  }
}
</script>
