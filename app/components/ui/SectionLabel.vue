<template>
  <div class="marquee-label" :class="{ 'marquee-label--dark': dark }">
    <div class="marquee-label__track" ref="trackRef">
      <div class="marquee-label__content" v-for="n in 3" :key="n">
        <template v-for="(item, i) in items" :key="`${n}-${i}`">
          <span class="marquee-label__text">{{ item }}</span>
          <span class="marquee-label__separator">
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
              <circle cx="12" cy="12" r="5"/>
            </svg>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, default: () => ['INSPIRING WILDLIFE'] },
  dark: { type: Boolean, default: false },
})

const trackRef = ref(null)
</script>

<style scoped>
.marquee-label {
  overflow: hidden;
  padding: var(--space-md) 0;
  border-top: 1px solid var(--fog);
  border-bottom: 1px solid var(--fog);
}

.marquee-label--dark {
  border-color: var(--white-10);
}

.marquee-label__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}

.marquee-label__content {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding-right: var(--space-xl);
  flex-shrink: 0;
}

.marquee-label__text {
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--charcoal-60);
}

.marquee-label--dark .marquee-label__text {
  color: var(--white-50);
}

.marquee-label__separator {
  display: flex;
  align-items: center;
  color: var(--electric-lime);
  opacity: 0.6;
}

.marquee-label__separator svg {
  width: 8px;
  height: 8px;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.marquee-label:hover .marquee-label__track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-label__track {
    animation: none;
  }
}
</style>
