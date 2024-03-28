<template>
  <div class="grid-cols-2 items-center gap-14" id="hero-banner">
    <div>
      <h2 class="font-bold" style="font-size: 60px; line-height: 1.25;">
        Complete <span class="green">Vue.js training</span> solutions for
        companies
      </h2>
      <p class="my-10 pr-12" style="font-size: 22px; line-height: 30px;">
        Training solutions designed for companies, agencies and organisations
        with developers using or who are considering using the Vue.js
        framework
      </p>
      <ButtonGreen class="px-10 call-to-action">Talk to sales</ButtonGreen>
    </div>
    <img src="/img/people.png" alt="People using Vue">
  </div>
  <div id="corporate-training">
    <div class="flex white py-14 px-7 gap-7 justify-center items-center mx-auto wmax-1200"
      style="background: #2a2f43; border-radius: 1em;">
      <Logo class="mx-14 shrink-0" :showText="false" />
      <div class="corporate-training-about">
        <h2 class="font-bold mb-4" style="font-size: 35px;">About Vue School corporate training</h2>
        <p style="font-size: 22px;">
          School is the #1 training resource for Vue.js and has provided the
          most comprehensive Vue.js video library in the world to over 140,000
          developers. Private individuals and small to enterprise companies have
          used our services to develop their skills since 2016.
        </p>
      </div>
    </div>
    <div class="justify-between wmax-1200 mx-auto mt-14 featured-companies">
      <a href="#" v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <img src="/img/icon-google-grey.svg" alt="Google">
      </a>
    </div>
  </div>
  <div class="pt-20 pb-10" id="course-metrics">
    <div class="grid-cols-2 wmax-1200 mx-auto white gap-5 my-10">
      <div>
        <h3 class="green-to-aqua" style="font-size: 22px;">
          YOUR #1 SOURCE OF VUE.JS COURSES
        </h3>
        <h2 class="text-6xl font-bold">
          Full Stack <span class="aqua">Vue</span> <span class="green-to-aqua">Training</span> Solutions
        </h2>
      </div>
      <div class="flex justify-between items-center">
        <course-metrics title="763" subtitle="Video lessons" icon="video" />
        <course-metrics title="40" subtitle="Courses" icon="book" />
        <course-metrics title="64" subtitle="15 hours" icon="clock" />
      </div>
    </div>
  </div>
  <div class="white py-5" id="training-bundle">
    <h1 class="font-bold text-center">
      Discounted <span class="aqua">Corporate</span> <br> <span class="green-to-aqua">Training</span> Bundles
    </h1>
    <div class="flex justify-center gap-8 items-start product-plans">
      <product-plan v-bind="basicPlan" />
      <product-plan v-bind="professionalPlan">
        <course-card-preview imgUrl="/img/vue3-masterclass-course.png">
          <span class="grey">Enough time to watch:</span><br>
          <span class="text-lg">The Vue3 Masterclass</span>
        </course-card-preview>
      </product-plan>
      <product-plan v-bind="basicPlan2" />
    </div>
  </div>
  <div class="py-20 flex justify-between pl-20 flex-wrap w-full" id="workshops">
    <h2 class="text-6xl font-bold">Available Workshops</h2>
    <button-green class="text-sm px-10 mr-20 call-to-action">
      See all the workshops
    </button-green>
    <div class="mt-20 flex gap-10 items-stretch overflow-hidden w-full pr-20" v-dragscroll>
      <workshop-card v-for="workshop, i in workshops" :key="i" v-bind="workshop" class="shrink-0" />
    </div>
  </div>
</template>

<script setup>
const basicPlan = {
  title: 'Basic',
  icon: 'leaf',
  active: [
    { label: 'All Video Courses' },
    { label: 'Vue.Js Master Classes' },
    { label: 'Developer assist Slack channel' },
  ],
  inactive: [
    { label: 'Live Weekly QnA' },
    { label: '1 x ws ticker per license' },
  ]
}

const professionalPlan = {
  title: 'Professional',
  icon: 'rocket',
  active: [
    { label: 'All Video Courses' },
    { label: 'Vue.Js Master Classes' },
    { label: 'Developer assist Slack channel' },
  ],
  activeBold: [
    { label: 'Live Weekly QnA' },
    { label: '1 x ws ticker per license' },
  ]
}

const basicPlan2 = {
  title: 'Basic',
  icon: 'thunderbolt',
  active: [
    { label: 'All Video Courses' },
    { label: 'Vue.Js Master Classes' },
    { label: 'Developer assist Slack channel' },
    { label: 'Live Weekly QnA' },
  ],
  activeBold: [
    { label: '4 x Virtual Workshop of your choice' },
  ]
}

const workshops = [
  {
    authorImgUrl: '/img/person-steve.jpg',
    authorName: 'Steve Popoola',
    date: 'December 14th - 11:00 AM (GMT-3)',
    description: 'A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...',
    duration: '15 Hours',
    title: 'Vue.js Fundamentals',
    videoType: 'LIVE Training',
  },
  {
    authorImgUrl: '/img/person-steve.jpg',
    authorName: 'Steve Popoola',
    date: 'December 14th - 11:00 AM (GMT-3)',
    description: 'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...',
    duration: '15 Hours',
    title: 'Vue 3 and Composition API',
    videoType: 'LIVE Training',
  },
  {
    authorImgUrl: '/img/person-steve.jpg',
    authorName: 'Steve Popoola',
    date: 'December 14th - 11:00 AM (GMT-3)',
    description: 'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...',
    duration: '15 Hours',
    title: 'Vue 3 and Composition API',
    videoType: 'LIVE Training',
  },
]
</script>

<style src="./index.css"></style>
