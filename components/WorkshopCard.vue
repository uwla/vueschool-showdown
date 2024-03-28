<template>
  <div style="width: 580px; height: 100%">
    <div class="px-8 py-4 flex items-center gap-3 font-semibold" style="background: linear-gradient(90deg, rgba(79, 8, 230, 0.5) 0%, rgba(255, 73, 117, 0.5) 96.56%);
      border-radius: 1em 1em 0 0">
      <img src="/img/icon-calendar.svg">
      <span>{{ date }}</span>
    </div>
    <div class="p-8" style="background: #242e42;
      border-radius: 0 0 1em 1em">
      <div class="flex gap-6" style="opacity: 0.4">
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
      <p  style="font-size: 14px ;color: rgb(115, 123, 152)">
        {{ description }}
      </p>
      <span class="flex mt-5 gap-3">
        <img style="border-radius: 999px" :src="authorImgUrl" :alt="`Photo of ${authorName}`">
        <span style="color: rgb(115, 123, 152)">
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
