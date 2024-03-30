<template>
  <div class="workshop-card">
    <div class="px-8 py-4 flex items-center gap-3 font-semibold workshop-card-header">
      <img src="/img/icon-calendar.svg">
      <span>{{ date }}</span>
    </div>
    <div class="p-8 workshop-card-body">
      <div class="flex nowrap gap-6 opacity-40">
        <span class="flex gap-3">
          <img src="/img/icon-video.svg">
          {{ videoType }}
        </span>
        <span class="flex gap-3">
          <img src="/img/icon-clock.svg">
          {{ duration }}
        </span>
      </div>
      <h3 class="mt-5 mb-3 text-lg font-bold">{{ title }}</h3>
      <p class="grey-2 font-14px" >
        {{ description }}
      </p>
      <span class="flex mt-5 gap-3">
        <img class="border-radius-max" :src="authorImgUrl" :alt="`Photo of ${authorName}`">
        <span class="grey-2">
          {{ authorName }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
const props = {
  authorImgUrl: String,
  authorName: String,
  date: String,
  description: String,
  duration: String,
  title: String,
  videoType: String,
}

export default {
  props,
}
</script>
