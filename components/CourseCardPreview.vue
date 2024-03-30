<template>
  <div class="course-card-preview flex items-center py-3 px-5 gap-3">
    <img :src="imgUrl" alt="Course image">
    <div class="font-semibold line-height-1-5">
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
