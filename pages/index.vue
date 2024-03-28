<template>
  <div class="grid grid-cols-2 items-center gap-14" style="background: #212435; color: #fff; padding: 3em 2em 0 8em">
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
      <ButtonGreen class="px-10">
        Talk to sales
      </ButtonGreen>
    </div>
    <img src="/img/people.png" alt="People using Vue">
  </div>
  <div style="background: url('/img/curve-2.svg'), url('/img/curve-1.svg'), linear-gradient(to bottom, #212435, #233444);
      background-repeat: no-repeat, no-repeat, no-repeat; background-size: 100%, 100%, 100%;
      padding: 9em 0 2em 0; margin-top: -3em;">
    <div class="flex white py-14 px-7 gap-7 justify-center items-center mx-auto wmax-1200"
      style="background: #2a2f43; border-radius: 1em;">
      <Logo class="mx-14 shrink-0" :showText="false" />
      <div>
        <h2 class="font-bold mb-4" style="font-size: 35px;">About Vue School corporate training</h2>
        <p style="font-size: 22px;">
          School is the #1 training resource for Vue.js and has provided the
          most comprehensive Vue.js video library in the world to over 140,000
          developers. Private individuals and small to enterprise companies have
          used our services to develop their skills since 2016.
        </p>
      </div>
    </div>
    <div class="flex justify-between wmax-1200 mx-auto mt-14 ">
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
      <a href="#"><img src="/img/icon-google-grey.svg" alt="Google"></a>
    </div>
  </div>
  <div class="pt-20 pb-10" style="background: linear-gradient(to bottom, #254551, #212435);">
    <div class="grid grid-cols-2 wmax-1200 mx-auto white gap-5 my-10">
      <div>
        <h3 class="green-to-aqua" style="font-size: 22px;">
          YOUR #1 SOURCE OF VUE.JS COURSES
        </h3>
        <h2 class="text-6xl font-bold">
          Full Stack <span class="aqua">Vue</span> <span class="green-to-aqua">Training</span> Solutions
        </h2>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex flex-col items-center gap-3">
          <span class="green-to-aqua text-8xl font-semibold">763</span>
          <span class="flex gap-2">
            <img src="/img/icon-video.svg" alt="video">
            Video lessons
          </span>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="green-to-aqua text-8xl font-semibold">40</span>
          <span class="flex gap-2">
            <img src="/img/icon-book.svg" alt="video">
            Courses
          </span>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="green-to-aqua text-8xl font-semibold">64</span>
          <span class="flex gap-2">
            <img src="/img/icon-clock.svg" alt="video">
            15 hours
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="white py-5" style="background: url('/img/curve-2.svg'), url('/img/curve-1.svg'),  #212435;
      background-size: 100%, 100%, 100%; background-position: center, bottom, top;
      background-repeat: no-repeat, no-repeat, no-repeat; padding-top: 5em;
    ">
    <h1 class="font-bold text-center" style="font-size: 60px; margin-bottom: 2.5em; line-height: 1.2;">
      Discounted <span class="aqua">Corporate</span> <br> <span class="green-to-aqua">Training</span> Bundles
    </h1>
    <div class="flex justify-center gap-8 items-start">
      <ProductPlan v-bind="basicPlan" />
      <ProductPlan v-bind="professionalPlan">
        <div class="flex items-center py-3 px-5 gap-3" style="background: #245355; border-radius: .7em">
          <img src="/img/vue3-masterclass-course.png">
          <div class="font-semibold" style="line-height: 1.5">
            <span style="color: rgb(160, 168, 195)">Enough time to watch:</span><br>
            <span class="text-lg">The Vue3 Masterclass</span>
          </div>
        </div>
      </ProductPlan>
      <ProductPlan v-bind="basicPlan2" />
    </div>
  </div>
  <div class="py-20" style="background: #212435; color: #fff;">
    <div class="mx-auto mt-5" style="max-width: 1150px">
      <div class="flex justify-between">
        <h2 class="text-6xl font-bold">Available Workshops</h2>
        <ButtonGreen class="text-sm px-10">
          See all the workshops
        </ButtonGreen>
      </div>
      <div class="overflow-auto my-20">
        <div class="flex gap-10 items-stretch" style="width: fit-content;">
          <WorkshopCard v-for="workshop,i in workshops" :key="i" v-bind="workshop" />
        </div>
      </div>
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
