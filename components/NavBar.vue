<template>
  <nav class="flex justify-between px-12 py-5" style="background: #212435; color: #fff">
    <div class="flex gap-6 items-center">
      <NavBarMenu />
      <Logo class="text-lg" style="height: 56px;" />
    </div>
    <div class="flex gap-5 items-center hide-md">
      <NavBarLinks />
    </div>
    <div class="flex gap-7 hide-sm">
      <AuthButtons />
    </div>
  </nav>
</template>

<style src="./NavBar.css"></style>
