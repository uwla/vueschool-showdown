<template>
  <dropdown-menu :overlay="false" direction="right">
    <template #trigger>
      <button>{{ title }} </button>
    </template>
    <template #body>
      <div class="green flex flex-col nowrap">
        <a href="#" v-for="item, i in items" :key="i">{{ item }}</a>
      </div>
    </template>
  </dropdown-menu>
</template>

<script>
const props = {
  title: String,
  items: Array,
}

export default {
  props
}
</script>
