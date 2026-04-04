<template>
  <div class="floating-bar" :class="{ 'floating-bar--visible': isVisible }">
    <div class="floating-bar__inner">
      <NuxtLink to="/donation" class="floating-bar__btn" id="floating-donations">
        <span class="floating-bar__btn-text">DONATIONS</span>
      </NuxtLink>
      <NuxtLink to="/events" class="floating-bar__btn" id="floating-events">
        <span class="floating-bar__btn-text">EVENTS</span>
      </NuxtLink>
      <NuxtLink to="/tickets" class="floating-bar__btn floating-bar__btn--accent" id="floating-tickets">
        <span class="floating-bar__btn-text">TICKETS</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-bar {
  position: fixed;
  bottom: var(--space-lg);
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  z-index: var(--z-sticky);
  opacity: 0;
  transition: all 500ms var(--ease-out-expo);
  pointer-events: none;
}

.floating-bar--visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
  pointer-events: all;
}

.floating-bar__inner {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  background: var(--jungle-dark);
  border-radius: var(--radius-pill);
  border: 1px solid var(--white-10);
  box-shadow: var(--shadow-xl);
}

.floating-bar__btn {
  padding: var(--space-sm) var(--space-xl);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  color: var(--white);
  transition: all var(--duration-base) ease;
  white-space: nowrap;
}

.floating-bar__btn:hover {
  background: var(--white-10);
}

.floating-bar__btn--accent {
  background: var(--electric-lime);
  color: var(--jungle-deep);
}

.floating-bar__btn--accent:hover {
  background: var(--white);
  color: var(--jungle-deep);
}

@media (max-width: 480px) {
  .floating-bar__btn {
    padding: var(--space-xs) var(--space-lg);
    font-size: 10px;
  }
}
</style>
