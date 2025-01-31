<template>
  <div class="app flex justify-center text-center">
    <nav>
      <RouterLink class="underline" to="/">Home </RouterLink>|
      <RouterLink class="underline" to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>
