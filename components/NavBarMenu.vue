<template>
  <dropdown-menu class="navbar-menu">
    <template #trigger>
      <button>
        <img src="/img/icon-menu.svg" alt="Menu" />
      </button>
    </template>
    <template #body>
      <div class="flex py-3 px-5 mt-3 gap-2 flex-col navbar-menu-content">
        <NavBarLinks />
        <div class="flex flex-col py-3 mt-2 navbar-menu-auth">
          <AuthButtons />
        </div>
      </div>
    </template>
  </dropdown-menu>
</template>
