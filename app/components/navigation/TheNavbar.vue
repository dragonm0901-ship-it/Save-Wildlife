<template>
  <header
    ref="headerRef"
    class="navbar"
    :class="{
      'navbar--scrolled': isScrolled || isAuthPage,
      'navbar--hidden': isHidden && !isHovered,
      'navbar--menu-open': isMenuOpen
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="navbar__inner">
      <button
        id="nav-menu-toggle"
        class="navbar__menu-btn"
        aria-label="Toggle navigation menu"
        @click.stop="toggleMenu"
      >
        <span class="navbar__menu-icon">
          <span class="navbar__menu-line"></span>
          <span class="navbar__menu-line"></span>
          <span class="navbar__menu-line"></span>
        </span>
      </button>

      <NuxtLink to="/" class="navbar__logo" aria-label="Save Wildlife Home" @click="closeMenu">
        <span class="navbar__logo-text">SAVE WILDLIFE</span>
      </NuxtLink>

      <div class="navbar__actions">
        <NuxtLink
          v-if="isAuthenticated"
          to="/account"
          class="navbar__action-btn navbar__action-btn--user"
          aria-label="My account"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </NuxtLink>
        <NuxtLink
          v-else
          to="/auth/login"
          class="navbar__action-btn navbar__action-btn--user"
          aria-label="Sign in"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </NuxtLink>

        <button
          id="nav-cart-toggle"
          class="navbar__action-btn navbar__cart-btn"
          aria-label="Shopping cart"
          @click.stop="toggleDropdown('cart')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span v-if="cartStore.totalItems > 0" class="navbar__cart-badge">{{ cartStore.totalItems }}</span>
        </button>
      </div>
    </div>

    <!-- ── Floating Dropdown Panels ── -->
    <Transition name="dropdown">
      <div 
        v-if="activeDropdown" 
        class="navbar__dropdown"
        :class="{ 'navbar__dropdown--cart': activeDropdown === 'cart' }"
        data-lenis-prevent
        @click.stop
      >
        <!-- Navigation Menu Panel -->
        <div v-if="activeDropdown === 'menu'" class="navbar__panel navbar__panel--menu">
          <div class="nav-grid">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="nav-grid__item"
              @click="closeDropdown"
            >
              <span class="nav-grid__text">{{ link.label }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Cart Panel -->
        <div v-if="activeDropdown === 'cart'" class="navbar__panel navbar__panel--cart">
          <div class="cart-quick">
            <div v-if="cartStore.items.length === 0" class="cart-quick__empty">
              <p>Your cart is empty</p>
              <NuxtLink to="/tickets" class="label-link" @click="closeDropdown">Browse Tickets</NuxtLink>
            </div>
            <div v-else class="cart-quick__content">
              <div class="cart-quick__items">
              <div v-for="item in cartStore.items" :key="item.id" class="cart-quick__item">
                <div class="cart-quick__item-card">
                  <div class="cart-quick__item-info">
                    <span class="cart-quick__item-name">{{ item.name }}</span>
                    <span class="cart-quick__item-details">Qty: {{ item.quantity }} • ${{ (item.price * item.quantity).toFixed(2) }}</span>
                  </div>
                  <button class="cart-quick__remove" @click="cartStore.removeItem(item.id)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              </div>
              </div>
              <div class="cart-quick__footer">
                <div class="cart-quick__total">
                  <span>Total</span>
                  <span>{{ cartStore.formattedSubtotal }}</span>
                </div>
                <NuxtLink to="/checkout" class="cart-quick__checkout" @click="closeDropdown">
                  Checkout
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '~/stores/cart'
import { useAuth } from '~/composables/useAuth'
import { useLenis } from '~/composables/useLenis'
import gsap from 'gsap'

const route = useRoute()
const cartStore = useCartStore()
const { isAuthenticated, initialize } = useAuth()
const { stop: stopLenis, start: startLenis } = useLenis()

const headerRef = ref(null)
const isScrolled = ref(false)
const isHidden = ref(false)
const isHovered = ref(false)
const activeDropdown = ref(null) // 'menu' | 'cart' | null

const isAuthPage = computed(() => route.path.startsWith('/auth'))

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

  // Hide on scroll down after threshold, only show when at the top
  if (currentScrollY > 100 && !isAuthPage.value) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }

  lastScrollY = currentScrollY
}

function handleMouseMove(e) {
  // If mouse is near the top edge (e.g., < 60px), show the navbar
  if (e.clientY < 60) {
    isHidden.value = false
  } else if (!isScrolled.value || window.scrollY < 100) {
    // If we're at the top, it should be visible anyway
    isHidden.value = false
  } else if (!isHovered.value) {
    // Hide if mouse moves away from the top and we're not hovering the navbar itself
    isHidden.value = true
  }
}

function toggleDropdown(type) {
  if (activeDropdown.value === type) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = type
  }
}

function closeDropdown() {
  activeDropdown.value = null
}

// Keep menu state in sync for some animations
const isMenuOpen = computed(() => activeDropdown.value === 'menu')

// Auto-show/hide menu logic refactoring
function toggleMenu() {
  toggleDropdown('menu')
}

function closeMenu() {
  closeDropdown()
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
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('click', closeDropdown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  min-width: 320px;
  z-index: var(--z-sticky);
  transition: all 400ms var(--ease-out-expo);
  pointer-events: none; /* Let clicks pass through empty areas */
}

.navbar--hidden:not(.navbar--menu-open) {
  transform: translate(-50%, -150%);
}

/* ── Shared Panels (Header & Dropdowns) ── */
.navbar__box,
.navbar__inner,
.navbar__panel {
  background: rgba(18, 18, 18, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

.navbar--scrolled .navbar__inner,
.navbar--scrolled .navbar__panel {
  background: rgba(10, 26, 18, 0.9);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-xl);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  pointer-events: auto;
  transition: all 400ms ease;
}

@media (max-width: 768px) {
  .navbar__inner {
    padding: var(--space-xs) var(--space-md);
    gap: var(--space-xs);
  }
}

/* ── Hamburger Menu Button ── */
.navbar__menu-btn {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 4px;
  border: 1px solid var(--white);
  transition: all var(--duration-base) ease;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .navbar__menu-btn {
    width: 48px;
    height: 48px;
  }
}

.navbar__menu-btn:hover {
  transform: translateY(-2px) scale(1.05);
  background: var(--white);
  border-color: var(--electric-lime);
}

.navbar__menu-icon {
  position: relative;
  width: 28px;
  height: 20px; /* Precise height for symmetry */
}

.navbar__menu-line {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: var(--jungle-deep);
  border-radius: 1px;
  transition: all 400ms var(--ease-out-expo);
}

.navbar__menu-line:nth-child(1) { top: 0; }
.navbar__menu-line:nth-child(2) { top: 50%; transform: translateY(-50%); width: 18px; }
.navbar__menu-line:nth-child(3) { bottom: 0; }

.navbar--menu-open .navbar__menu-line:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.navbar--menu-open .navbar__menu-line:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) scaleX(0);
}

.navbar--menu-open .navbar__menu-line:nth-child(3) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

/* ── Logo ── */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--white);
  transition: transform 300ms ease;
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
}

.navbar__logo-text {
  font-family: var(--font-body);
  font-size: var(--text-2xl); /* Scaled up */
  font-weight: 900;
  letter-spacing: 0.2em;
  color: var(--white);
  text-transform: uppercase;
}

@media (max-width: 480px) {
  .navbar__logo-text {
    font-size: var(--text-lg);
    letter-spacing: 0.1em;
  }
}

/* ── Action Buttons ── */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.navbar__action-btn {
  position: relative;
  width: 60px; /* Scaled from 40px */
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: var(--white);
  transition: all var(--duration-base) ease;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .navbar__action-btn {
    width: 48px;
    height: 48px;
  }
}

.navbar__action-btn--user {
  background: var(--electric-lime);
  color: var(--jungle-deep);
}

.navbar__action-btn--user:hover {
  transform: translateY(-2px) scale(1.05);
  background: var(--white);
  color: var(--jungle-deep);
  border-color: var(--white);
}

.navbar__cart-btn {
  background: var(--white);
  color: var(--jungle-deep);
  border: 1px solid var(--white);
}

.navbar__cart-btn:hover {
  transform: translateY(-2px) scale(1.05);
  background: var(--electric-lime);
  color: var(--jungle-deep);
  border-color: var(--electric-lime);
}

.navbar__action-btn svg {
  width: 28px; /* Scaled internal icons */
  height: 28px;
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

/* ── Dropdown System ── */
.navbar__dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 40px);
  max-width: 1200px;
  pointer-events: auto;
  z-index: 1000;
}

.navbar__dropdown--cart {
  min-width: 360px;
}

@media (max-width: 768px) {
  .navbar__dropdown {
    width: calc(100vw - 32px);
  }
}

@media (max-width: 480px) {
  .navbar__dropdown--cart {
    min-width: unset;
    width: calc(100vw - 24px);
  }
}

.navbar__panel {
  padding: var(--space-md) var(--space-xl);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  height: auto;
}

/* ── Navigation Grid ── */
.nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-xs) var(--space-md);
}

@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .nav-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xs);
  }
}

.nav-grid__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs) 0;
  color: var(--white-90);
  text-align: center;
  transition: all 300ms ease;
}

.nav-grid__item:hover {
  color: var(--electric-lime);
  transform: translateX(5px);
}

.nav-grid__number {
  font-family: var(--font-accent);
  font-size: 10px;
  color: var(--white-30);
}

.nav-grid__text {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Quick Cart ── */
.cart-quick__empty {
  text-align: center;
  padding: var(--space-xl);
  color: var(--white-40);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cart-quick__items {
  display: flex;
  flex-direction: column; /* Better for cart items than row/wrap */
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  max-height: 300px;
  overflow-y: auto;
  padding-right: var(--space-xs);
}

@media (max-width: 480px) {
  .cart-quick__items {
    max-height: 40vh; /* Adjust for mobile viewport */
  }
}

.cart-quick__item {
  flex: 0 0 auto;
}

.cart-quick__item-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.cart-quick__item-name {
  display: block;
  font-size: 11px;
  font-weight: var(--weight-bold);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cart-quick__item-details {
  font-size: 10px;
  color: var(--white-50);
}

.cart-quick__remove {
  padding: 4px;
  opacity: 0.3;
  transition: opacity 300ms ease;
}

.cart-quick__remove:hover {
  opacity: 1;
  color: var(--danger);
}

.cart-quick__remove svg {
  width: 14px;
  height: 14px;
}

.cart-quick__footer {
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
}

.cart-quick__total {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-md);
  font-weight: var(--weight-bold);
  color: var(--white);
}

.cart-quick__checkout {
  display: block;
  text-align: center;
  background: var(--electric-lime);
  color: var(--jungle-deep);
  padding: var(--space-sm);
  border-radius: 4px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
}

/* ── Transitions ── */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 400ms var(--ease-out-expo);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


</style>
