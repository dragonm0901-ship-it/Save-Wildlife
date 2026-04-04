<template>
  <header
    ref="headerRef"
    class="navbar"
    :class="{
      'navbar--scrolled': isScrolled,
      'navbar--hidden': isHidden,
      'navbar--menu-open': isMenuOpen
    }"
  >
    <div class="navbar__inner">
      <button
        id="nav-menu-toggle"
        class="navbar__menu-btn"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span class="navbar__menu-icon">
          <span class="navbar__menu-line"></span>
          <span class="navbar__menu-line"></span>
          <span class="navbar__menu-line"></span>
        </span>
      </button>

      <NuxtLink to="/" class="navbar__logo" aria-label="Wildpark Home" @click="closeMenu">
        <div class="logo-flip">
          <div class="logo-flip__inner">
            <div class="logo-flip__front">
              <img src="/images/logo.png" alt="Wildpark Rhino Badge" />
            </div>
            <div class="logo-flip__back">
              <img src="/images/logo2.png" alt="Visit Nepal Badge" />
            </div>
          </div>
        </div>
        <span class="navbar__logo-text">SAVE WILDLIFE</span>
      </NuxtLink>

      <div class="navbar__actions">
        <NuxtLink
          v-if="isAuthenticated"
          to="/account"
          class="navbar__action-btn"
          aria-label="My account"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg>
        </NuxtLink>
        <NuxtLink
          v-else
          to="/auth/login"
          class="navbar__action-btn"
          aria-label="Sign in"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/></svg>
        </NuxtLink>

        <button
          id="nav-cart-toggle"
          class="navbar__action-btn navbar__cart-btn"
          aria-label="Shopping cart"
          @click="cartStore.toggleCart()"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span v-if="cartStore.totalItems > 0" class="navbar__cart-badge">{{ cartStore.totalItems }}</span>
        </button>
      </div>
    </div>

    <!-- Full-screen Navigation Menu -->
    <Transition name="nav-menu">
      <div v-if="isMenuOpen" class="nav-overlay" @click.self="closeMenu" data-lenis-prevent>
        <nav class="nav-overlay__content" role="navigation">
          <div class="nav-overlay__links" ref="navLinksRef">
            <NuxtLink
              v-for="(link, i) in navLinks"
              :key="link.path"
              :to="link.path"
              class="nav-overlay__link"
              :style="{ transitionDelay: `${i * 60 + 100}ms` }"
              @click="closeMenu"
            >
              <span class="nav-overlay__link-number">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="nav-overlay__link-text">{{ link.label }}</span>
              <span class="nav-overlay__link-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </span>
            </NuxtLink>
          </div>

          <div class="nav-overlay__footer">
            <div class="nav-overlay__social">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X/Twitter">Twitter</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest">Pinterest</a>
            </div>
            <p class="nav-overlay__contact">info@savewildlife.org.np</p>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuth } from '~/composables/useAuth'
import { useLenis } from '~/composables/useLenis'
import gsap from 'gsap'

import '~/assets/css/logo-flip.css'

const cartStore = useCartStore()
const { isAuthenticated, initialize } = useAuth()
const { stop: stopLenis, start: startLenis } = useLenis()

const headerRef = ref(null)
const navLinksRef = ref(null)
const isScrolled = ref(false)
const isHidden = ref(false)
const isMenuOpen = ref(false)

let lastScrollY = 0
let scrollThreshold = 80

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Mission', path: '/about' },
  { label: 'Himalayan Species', path: '/animals-birds' },
  { label: 'Exploration', path: '/services' },
  { label: 'Expeditions', path: '/events' },
  { label: 'Access Passes', path: '/tickets' },
  { label: 'Support Us', path: '/donation' },
  { label: 'News', path: '/news' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

function handleScroll() {
  const currentScrollY = window.scrollY

  isScrolled.value = currentScrollY > scrollThreshold

  if (currentScrollY > lastScrollY && currentScrollY > 300) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }

  lastScrollY = currentScrollY
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  if (isMenuOpen.value) {
    stopLenis()
  } else {
    startLenis()
  }
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = ''
  startLenis()
}

// Staggered menu animation
watch(isMenuOpen, async (open) => {
  if (open) {
    await nextTick()
    gsap.fromTo('.nav-overlay__link', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.05, 
        duration: 0.8, 
        ease: 'expo.out',
        delay: 0.2
      }
    )
  }
})

onMounted(() => {
  initialize()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  transition: transform 400ms var(--ease-out-expo), background-color 400ms ease;
}

.navbar--hidden:not(.navbar--menu-open) {
  transform: translateY(-100%);
}

.navbar--scrolled {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--glass-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--container-pad);
  max-width: var(--container-2xl);
  margin-inline: auto;
}

/* ── Hamburger Menu Button ── */
.navbar__menu-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  border: 1px solid var(--white-20);
  transition: border-color var(--duration-base) ease;
}

.navbar__menu-btn:hover {
  border-color: var(--electric-lime);
}

.navbar__menu-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 18px;
}

.navbar__menu-line {
  display: block;
  height: 1.5px;
  background: var(--white);
  border-radius: 1px;
  transition: all 350ms var(--ease-out-expo);
  transform-origin: center;
}

.navbar__menu-line:nth-child(2) {
  width: 12px;
}

.navbar--menu-open .navbar__menu-line:nth-child(1) {
  transform: translateY(5.5px) rotate(45deg);
}

.navbar--menu-open .navbar__menu-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar--menu-open .navbar__menu-line:nth-child(3) {
  transform: translateY(-5.5px) rotate(-45deg);
}

/* ── Logo ── */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--white);
  transition: opacity var(--duration-base) ease;
}

.navbar__logo:hover {
  opacity: 0.8;
}

.navbar__logo-icon {
  width: 36px;
  height: 36px;
  color: var(--electric-lime);
}

.navbar__logo-text {
  font-family: var(--font-accent);
  font-size: 2.25rem; /* ~200% of text-lg (which is usually ~1.125rem) */
  font-weight: var(--weight-bold);
  letter-spacing: 0.15em;
  color: var(--white);
}

/* ── Action Buttons ── */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.navbar__action-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  border: 1px solid var(--white-20);
  color: var(--white);
  transition: all var(--duration-base) ease;
}

.navbar__action-btn:hover {
  border-color: var(--electric-lime);
  color: var(--electric-lime);
}

.navbar__action-btn svg {
  width: 20px;
  height: 20px;
}

.navbar__cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--electric-lime);
  color: var(--jungle-deep);
  font-family: var(--font-accent);
  font-size: 10px;
  font-weight: var(--weight-bold);
  border-radius: var(--radius-round);
}

/* ── Navigation Overlay ── */
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
  background: var(--jungle-deep);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.nav-overlay__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px var(--container-pad) var(--space-2xl);
  max-width: var(--container-xl);
  margin-inline: auto;
  width: 100%;
}

.nav-overlay__links {
  display: flex;
  flex-direction: column;
}

.nav-overlay__link {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--white-10);
  color: var(--white);
  transition: all 400ms var(--ease-out-expo);
  opacity: 0;
  transform: translateY(20px);
}

.nav-menu-enter-active .nav-overlay__link {
  opacity: 1;
  transform: translateY(0);
}

.nav-overlay__link:hover {
  padding-left: var(--space-lg);
  color: var(--electric-lime);
}

.nav-overlay__link-number {
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  color: var(--white-50);
  min-width: 24px;
}

.nav-overlay__link-text {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  flex: 1;
}

.nav-overlay__link-arrow {
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: all 400ms var(--ease-out-expo);
}

.nav-overlay__link-arrow svg {
  width: 100%;
  height: 100%;
}

.nav-overlay__link:hover .nav-overlay__link-arrow {
  opacity: 1;
}

.nav-overlay__link:hover .nav-overlay__link-arrow svg {
  transform: rotate(45deg) scale(1.1);
}

.nav-overlay__link-arrow svg {
  transition: transform 400ms var(--ease-out-expo);
}

.nav-overlay__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-2xl);
  margin-top: auto;
  border-top: 1px solid var(--white-10);
}

.nav-overlay__social {
  display: flex;
  gap: var(--space-xl);
}

.nav-overlay__social a {
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  color: var(--white-50);
  transition: color var(--duration-base) ease;
}

.nav-overlay__social a:hover {
  color: var(--electric-lime);
}

.nav-overlay__contact {
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  color: var(--white-50);
}

/* ── Nav Menu Transition ── */
.nav-menu-enter-active {
  transition: opacity 400ms var(--ease-out-expo);
}

.nav-menu-leave-active {
  transition: opacity 300ms ease;
}

.nav-menu-enter-from,
.nav-menu-leave-to {
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .navbar__logo-text {
    font-size: var(--text-base);
    letter-spacing: 0.1em;
  }

  .nav-overlay__link-text {
    font-size: var(--text-2xl);
  }

  .nav-overlay__footer {
    flex-direction: column;
    gap: var(--space-md);
    align-items: flex-start;
  }
}
</style>
