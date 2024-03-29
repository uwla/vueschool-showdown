<template>
  <footer class="grid grid-cols-2">
    <div class="footer-banner">
      <Logo class="text-4xl footer-logo" style="height: 90px" />
      <div class="sponsor-msg" >
        Thanks to fine people like you, Vue School can proudly sponsor Evan and the
        future of Vue.js by being a Platinum Patreon
      </div>
      <div>
        <h3 style="color: rgba(115, 123, 152, 1); font-size: 22px;">
          FOLLOW US IN SOCIAL MEDIA
        </h3>
        <div class="flex my-8 social-media-links">
          <social-media-icon class="shrink-0" v-for="brandName, i in socialMediaList" :key="i" :icon="brandName" />
        </div>
      </div>
    </div>
    <div class="sitemap-desktop">
      <div><footer-links v-for="info, i in siteInfo.slice(0, 3)" :key="i" v-bind="info" /></div>
      <div><footer-links v-for="info, i in siteInfo.slice(3)" :key="i" v-bind="info" /></div>
    </div>
    <div class="sitemap">
      <footer-links v-for="info, i in siteInfo" :key="i" v-bind="info"
        :style="`grid-area: ${toKebab(info.title)};`" />
    </div>
  </footer>
</template>

<script setup>
const socialMediaList = ['facebook', 'twitter', 'github', 'linkedin', 'youtube'];

const toKebab = (str) => str.replaceAll(' ', '-').toLowerCase();

const siteInfo = [
  {
    title: 'PRODUCTS',
    links: [
      { url: '#', label: 'Courses' },
      { url: '#', label: 'Workshops' },
      { url: '#', label: 'Vue Masterclass' },
      { url: '#', label: 'Mastering Vue' },
    ]
  },
  {
    title: 'PRICING',
    links: [
      { url: '#', label: 'Plans' },
    ]
  },
  {
    title: 'CONNECT WITH US',
    links: [
      { url: '#', label: 'About Us' },
      { url: '#', label: 'Careers' },
      { url: '#', label: 'Contact Us' },
    ]
  },
  {
    title: 'EVENTS',
    links: [
      { url: '#', label: 'Vue.js Nation' },
      { url: '#', label: 'Nuxt Nation' },
      { url: '#', label: 'Vue.js Forge' },
    ]
  },
  {
    title: 'CORPORATE',
    links: [
      { url: '#', label: 'Corporate Training' },
      { url: '#', label: 'Developer Recruitment' },
      { url: '#', label: 'Course Development' },
      { url: '#', label: 'On-site Workshops' },
      { url: '#', label: 'Consulting' },
      { url: '#', label: 'Affiliate Programs' },
    ]
  },
  {
    title: 'RESOURCES',
    links: [
      { url: '#', label: 'Articles' },
    ]
  },
]
</script>

