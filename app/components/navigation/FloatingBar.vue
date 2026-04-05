<template>
  <div 
    class="floating-bar" 
    :class="{ 
      'floating-bar--visible': isVisible,
      'floating-bar--expanded': isExpanded 
    }"
  >
    <!-- Combined Inner Container for Morphing -->
    <div ref="innerRef" class="floating-bar__inner">
      <!-- Full Menu (Expanded Content) -->
      <div v-show="isExpanded" ref="menuRef" class="floating-bar__menu">
        <NuxtLink to="/donation" class="floating-bar__btn" id="floating-donations">
          DONATIONS
        </NuxtLink>
        <NuxtLink to="/events" class="floating-bar__btn" id="floating-events">
          EVENTS
        </NuxtLink>
        <NuxtLink to="/tickets" class="floating-bar__btn" id="floating-tickets">
          TICKETS
        </NuxtLink>
      </div>

      <!-- Collapsed Trigger (Circle with Arrow restored) -->
      <div v-show="!isExpanded" ref="triggerRef" class="floating-bar__trigger" @click="toggleExpand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
    </div>

    <!-- The Corner Toggle Button (Visible only when expanded) -->
    <button 
      v-show="isExpanded"
      class="floating-bar__toggle" 
      aria-label="Close menu"
      @click="toggleExpand"
    >
      <div class="floating-bar__toggle-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

const isVisible = ref(false)
const isExpanded = ref(true)

const innerRef = ref(null)
const menuRef = ref(null)
const triggerRef = ref(null)

function handleScroll() {
  isVisible.value = window.scrollY > 400
}

function toggleExpand() {
  const currentState = isExpanded.value
  
  if (currentState) {
    // Professional Collapsing Logic
    const tl = gsap.timeline({
      onComplete: () => { 
        isExpanded.value = false
        gsap.set(innerRef.value, { width: 56 }) // Reset to explicit width
      }
    })
    
    // Phase 1: Fade out content
    tl.to(menuRef.value, { 
      opacity: 0, 
      x: 10,
      duration: 0.2, 
      ease: 'power2.in' 
    })
    
    // Phase 2: Morph the bar into a circle
    tl.to(innerRef.value, { 
      width: 56, 
      duration: 0.6, 
      ease: 'expo.inOut',
      borderRadius: '28px' // Half of 56px for perfect circle
    }, '-=0.1')
  } else {
    // Seamless Expanding Logic
    isExpanded.value = true
    nextTick(() => {
      const tl = gsap.timeline()
      
      // Prepare state
      tl.set(menuRef.value, { opacity: 0, x: -10 })
      
      // Morph to full width
      tl.to(innerRef.value, { 
        width: 'auto', 
        duration: 0.7, 
        ease: 'expo.out',
        borderRadius: '100px'
      })
      
      // Fade in buttons
      tl.to(menuRef.value, { 
        opacity: 1, 
        x: 0,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.4')
    })
  }
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
  bottom: var(--space-xl);
  right: var(--space-xl);
  z-index: var(--z-sticky);
  pointer-events: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 600ms var(--ease-out-expo);
}

.floating-bar--visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.floating-bar__inner {
  height: 56px;
  background: #fbfbfb; /* Bone/White color from image */
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 100px;
  min-width: 56px;
}

.floating-bar__menu {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0 var(--space-lg);
  white-space: nowrap;
}

/* ── Pill Buttons in Bar ── */
.floating-bar__btn {
  height: 40px;
  padding: 0 var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a1a12; /* Dark Green from image */
  color: var(--white);
  border-radius: 100px;
  font-family: var(--font-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 300ms var(--ease-out-expo), background 300ms ease;
}

.floating-bar__btn:hover {
  transform: scale(1.05);
  background: var(--jungle-mid);
}

/* ── Toggle/Close Button (The Corner Lime Circle) ── */
.floating-bar__toggle {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  transition: transform 300ms var(--ease-out-expo);
}

.floating-bar__toggle:hover {
  transform: scale(1.1) rotate(90deg);
}

.floating-bar__toggle-circle {
  width: 28px;
  height: 28px;
  background: #ecf25b; /* Electric Lime from image */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  color: #0a1a12; /* Dark cross color */
}

.floating-bar__toggle-circle svg {
  width: 12px;
  height: 12px;
}

/* ── Trigger Icon (Visible only when collapsed) ── */
.floating-bar__trigger {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1a12;
}

.floating-bar__trigger svg {
  width: 24px;
  height: 24px;
  transition: transform 400ms var(--ease-out-expo);
}

/* ── Hover Effects for Circular State ── */
.floating-bar:not(.floating-bar--expanded) .floating-bar__inner {
  cursor: pointer;
  transition: all 400ms var(--ease-out-expo);
}

.floating-bar:not(.floating-bar--expanded) .floating-bar__inner:hover {
  background: #ecf25b; /* Electric Lime */
  transform: scale(1.05);
}

.floating-bar:not(.floating-bar--expanded) .floating-bar__inner:hover .floating-bar__trigger svg {
  transform: rotate(45deg); /* Rotates top-right arrow to horizontal */
}

@media (max-width: 480px) {
  .floating-bar {
    right: var(--space-md);
    bottom: var(--space-md);
  }
  
  .floating-bar__btn {
    padding: 0 var(--space-lg);
    font-size: 10px;
  }
}
</style>
