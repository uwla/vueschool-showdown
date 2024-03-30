<template>
  <dropdown-menu class="tooltip" :overlay="false" mode="hover" direction="right" :dropup="true">
    <template #trigger>
        <img src="/img/icon-info.svg" alt="Info">
    </template>
    <template #body>
      {{ info }}
    </template>
  </dropdown-menu>
</template>

<script>
const props = {
  info: String,
}

export default {
  props
}
</script>
