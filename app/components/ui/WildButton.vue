<template>
  <component
    :is="tag"
    v-bind="{ ...$attrs, ...(tag === 'button' ? { type } : (tag === 'a' ? { href } : { to })) }"
    class="wild-btn"
    :class="[
      `wild-btn--${variant}`,
      `wild-btn--${size}`,
      { 'wild-btn--icon-only': iconOnly }
    ]"
  >
    <span class="wild-btn__content">
      <slot />
    </span>
    <span v-if="arrow" class="wild-btn__arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  to: { type: String, default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  arrow: { type: Boolean, default: false },
  iconOnly: { type: Boolean, default: false },
})

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.wild-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-out-expo);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.wild-btn:hover {
  transform: scale(1.05);
}

.wild-btn__content {
  position: relative;
  z-index: 1;
}

.wild-btn__arrow {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  background: var(--jungle-deep);
  color: var(--electric-lime);
  transition: all var(--duration-base) var(--ease-out-expo);
  position: relative;
  z-index: 1;
}

.wild-btn__arrow svg {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-base) var(--ease-out-expo);
}

.wild-btn:hover .wild-btn__arrow svg {
  transform: rotate(45deg) scale(1.05);
}

/* ── Sizes ── */
.wild-btn--sm {
  padding: var(--space-xs) var(--space-lg);
  font-size: 11px;
}

.wild-btn--md {
  padding: var(--space-sm) var(--space-xl);
  font-size: var(--text-xs);
}

.wild-btn--lg {
  padding: var(--space-md) var(--space-2xl);
  font-size: var(--text-sm);
}

/* ── Variants ── */
.wild-btn--primary {
  background: var(--electric-lime);
  color: var(--jungle-deep);
}

.wild-btn--primary:hover {
  background: var(--white);
}

.wild-btn--primary .wild-btn__arrow {
  background: var(--jungle-deep);
  color: var(--electric-lime);
}

.wild-btn--secondary {
  background: var(--jungle-dark);
  color: var(--white);
}

.wild-btn--secondary:hover {
  background: var(--jungle-mid);
}

.wild-btn--secondary .wild-btn__arrow {
  background: var(--electric-lime);
  color: var(--jungle-deep);
}

.wild-btn--outline {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--white-20);
}

.wild-btn--outline:hover {
  border-color: var(--electric-lime);
  color: var(--electric-lime);
}

.wild-btn--outline-dark {
  background: transparent;
  color: var(--charcoal);
  border: 1px solid var(--fog);
}

.wild-btn--outline-dark:hover {
  border-color: var(--jungle-dark);
  background: var(--jungle-dark);
  color: var(--white);
}

.wild-btn--ghost {
  background: transparent;
  color: var(--charcoal);
  padding-inline: var(--space-xs);
}

.wild-btn--ghost:hover {
  color: var(--canopy-green);
}

/* ── Icon Only ── */
.wild-btn--icon-only {
  padding: var(--space-sm);
}
</style>
