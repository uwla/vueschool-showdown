<template>
  <nav id="navbar" class="flex justify-between px-12 py-5">
    <div class="flex gap-6 items-center">
      <NavBarMenu />
      <Logo class="text-lg" />
    </div>
    <div class="flex gap-5 items-center hide-md">
      <NavBarLinks />
    </div>
    <div class="flex gap-7 hide-sm">
      <AuthButtons />
    </div>
  </nav>
</template>
