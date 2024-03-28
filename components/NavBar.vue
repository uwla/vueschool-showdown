<template>
  <nav class="flex justify-between px-12 py-5" style="background: #212435; color: #fff">
    <Logo class="text-lg" style="height: 56px;" />
    <div class="flex gap-5 items-center">
      <NavBarLinks />
    </div>
    <div class="flex gap-7">
      <button>Login</button>
      <div
        style="padding: 2px; width:fit-content; height: fit-content; border-radius: 10px;  background: linear-gradient(95.39deg, #0BD88F 0%, #00C2FF 100%);">
        <button class="py-3 px-7 green weight-600 font-semibold"
          style="background: rgba(33, 36, 53, 0.9); border-radius: 10px ">
          Sign up
        </button>
      </div>
    </div>
  </nav>

</template>
