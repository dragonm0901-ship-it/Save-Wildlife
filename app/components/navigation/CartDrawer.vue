<template>
  <Transition name="cart-drawer">
    <div v-if="cartStore.isOpen" class="cart-drawer-overlay" @click.self="cartStore.closeCart()">
      <aside class="cart-drawer" role="dialog" aria-label="Shopping Cart">
        <div class="cart-drawer__header">
          <h3 class="cart-drawer__title">Your Cart</h3>
          <button
            id="cart-close-btn"
            class="cart-drawer__close"
            @click="cartStore.closeCart()"
            aria-label="Close cart"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div v-if="cartStore.items.length === 0" class="cart-drawer__empty">
          <svg viewBox="0 0 80 80" fill="none" stroke="var(--charcoal-40)" stroke-width="1.2">
            <rect x="10" y="20" width="60" height="50" rx="4"/>
            <path d="M25 20V15a15 15 0 0 1 30 0v5"/>
          </svg>
          <p>Your cart is empty</p>
          <NuxtLink to="/tickets" class="cart-drawer__shop-btn" @click="cartStore.closeCart()">
            Browse Tickets
          </NuxtLink>
        </div>

        <div v-else class="cart-drawer__items">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="cart-item"
          >
            <div class="cart-item__image" v-if="item.image">
              <img :src="item.image" :alt="item.name" loading="lazy" />
            </div>
            <div class="cart-item__info">
              <h4 class="cart-item__name">{{ item.name }}</h4>
              <p class="cart-item__price">${{ (item.price * item.quantity).toFixed(2) }}</p>
              <div class="cart-item__controls">
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                  aria-label="Decrease quantity"
                  class="cart-item__qty-btn"
                >-</button>
                <span class="cart-item__qty">{{ item.quantity }}</span>
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                  aria-label="Increase quantity"
                  class="cart-item__qty-btn"
                >+</button>
              </div>
            </div>
            <button
              class="cart-item__remove"
              @click="cartStore.removeItem(item.id)"
              aria-label="Remove item"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <div v-if="cartStore.items.length > 0" class="cart-drawer__footer">
          <div class="cart-drawer__subtotal">
            <span>Subtotal</span>
            <span class="cart-drawer__subtotal-amount">{{ cartStore.formattedSubtotal }}</span>
          </div>
          <NuxtLink to="/checkout" class="cart-drawer__checkout-btn" @click="cartStore.closeCart()">
            Continue to Checkout
          </NuxtLink>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
</script>

<style scoped>
.cart-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.cart-drawer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  background: var(--ivory);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.cart-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xl) var(--space-xl);
  border-bottom: 1px solid var(--fog);
}

.cart-drawer__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--charcoal);
}

.cart-drawer__close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  border: 1px solid var(--fog);
  transition: all var(--duration-base) ease;
}

.cart-drawer__close:hover {
  border-color: var(--charcoal);
  background: var(--charcoal);
  color: var(--white);
}

.cart-drawer__close svg {
  width: 18px;
  height: 18px;
}

/* ── Empty Cart ── */
.cart-drawer__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-3xl);
  text-align: center;
}

.cart-drawer__empty svg {
  width: 80px;
  height: 80px;
  opacity: 0.4;
}

.cart-drawer__empty p {
  font-size: var(--text-md);
  color: var(--charcoal-60);
}

.cart-drawer__shop-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-sm) var(--space-xl);
  background: var(--jungle-dark);
  color: var(--white);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.05em;
  transition: background var(--duration-base) ease;
}

.cart-drawer__shop-btn:hover {
  background: var(--jungle-mid);
}

/* ── Cart Items ── */
.cart-drawer__items {
  flex: 1;
  padding: var(--space-lg) var(--space-xl);
  overflow-y: auto;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--fog);
}

.cart-item__image {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--fog);
}

.cart-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item__info {
  flex: 1;
}

.cart-item__name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--charcoal);
  margin-bottom: var(--space-2xs);
}

.cart-item__price {
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--jungle-dark);
}

.cart-item__controls {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-xs);
}

.cart-item__qty-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fog);
  border-radius: var(--radius-sm);
  font-size: var(--text-md);
  color: var(--charcoal);
  transition: all var(--duration-fast) ease;
}

.cart-item__qty-btn:hover {
  border-color: var(--jungle-dark);
  background: var(--jungle-dark);
  color: var(--white);
}

.cart-item__qty {
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  min-width: 20px;
  text-align: center;
}

.cart-item__remove {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  transition: opacity var(--duration-fast) ease;
}

.cart-item__remove:hover {
  opacity: 1;
  color: var(--danger);
}

.cart-item__remove svg {
  width: 16px;
  height: 16px;
}

/* ── Cart Footer ── */
.cart-drawer__footer {
  padding: var(--space-xl);
  border-top: 1px solid var(--fog);
}

.cart-drawer__subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.cart-drawer__subtotal span:first-child {
  font-size: var(--text-md);
  color: var(--charcoal-60);
}

.cart-drawer__subtotal-amount {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--charcoal);
}

.cart-drawer__checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--space-md) var(--space-xl);
  background: var(--jungle-dark);
  color: var(--white);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all var(--duration-base) ease;
}

.cart-drawer__checkout-btn:hover {
  background: var(--electric-lime);
  color: var(--jungle-deep);
}

/* ── Transitions ── */
.cart-drawer-enter-active {
  transition: opacity 300ms ease;
}
.cart-drawer-enter-active .cart-drawer {
  transition: transform 400ms var(--ease-out-expo);
}
.cart-drawer-leave-active {
  transition: opacity 250ms ease;
}
.cart-drawer-leave-active .cart-drawer {
  transition: transform 300ms ease;
}
.cart-drawer-enter-from {
  opacity: 0;
}
.cart-drawer-enter-from .cart-drawer {
  transform: translateX(100%);
}
.cart-drawer-leave-to {
  opacity: 0;
}
.cart-drawer-leave-to .cart-drawer {
  transform: translateX(100%);
}
</style>
