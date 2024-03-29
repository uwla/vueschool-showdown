<template>
  <div class="flex items-center py-3 px-5 gap-3" style="background: #245355; border-radius: .7em">
    <img :src="imgUrl" alt="Course image">
    <div class="font-semibold" style="line-height: 1.5">
      <slot></slot>

    </div>
  </div>
</template>

<script>
const props = {
  imgUrl: String,
}

export default {
  props
}
</script>
