<template>
  <div class="app-wrapper">
    <NavigationTheNavbar />
    <NavigationCartDrawer />
    <main class="main-content">
      <slot />
    </main>
    <TheFooter />
    <NavigationFloatingBar />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useLenis } from '~/composables/useLenis'

const { initLenis, destroyLenis } = useLenis()

onMounted(() => {
  initLenis()
})

onUnmounted(() => {
  destroyLenis()
})
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
