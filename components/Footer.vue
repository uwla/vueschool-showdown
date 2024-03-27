<template>
  <footer class="grid grid-cols-2"
    style="background: #212435; color: #fff; gap: 10em; padding: 6em 8em;">
    <div>
      <Logo class="text-4xl" />
      <div style="margin: 4em 0;">
        Thanks to fine people like you, Vue School can proudly sponsor Evan and the
        future of Vue.js by being a Platinum Patreon
      </div>
      <div>
        <span style="color: rgba(115, 123, 152, 1); font-size: 22px;">
          FOLLOW US IN SOCIAL MEDIA
        </span>
        <div class="flex gap-10 my-8">
            <SocialMediaIcon icon="facebook" />
            <SocialMediaIcon icon="twitter" />
            <SocialMediaIcon icon="github" />
            <SocialMediaIcon icon="linkedin" />
            <SocialMediaIcon icon="youtube" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex flex-col gap-10">
        <FooterLinks v-for="info, i in siteInfo.slice(0,3)" :key="i" v-bind="info" />
      </div>
      <div class="flex flex-col gap-10">
        <FooterLinks v-for="info, i in siteInfo.slice(3)" :key="i" v-bind="info" />
      </div>
    </div>
  </footer>
</template>

<script setup>

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
