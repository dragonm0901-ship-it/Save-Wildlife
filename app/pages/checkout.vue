<template>
  <div class="checkout-page">
    <section class="section section--bone">
      <div class="container">
        <div class="checkout-grid">
          <div class="checkout-main">
            <h1 class="checkout-title">Your Safari Journey</h1>
            <p class="checkout-subtitle">Review your selection and prepare for an unforgettable adventure.</p>
            
            <div v-if="cartStore.items.length === 0" class="empty-cart">
              <div class="empty-cart__icon">🛒</div>
              <p>Your cart is empty. Let's find some adventures!</p>
              <UiWildButton to="/tickets" variant="primary" :arrow="true">Browse Tickets</UiWildButton>
            </div>

            <div v-else class="cart-items">
              <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
                <div class="cart-item__info">
                  <h3>{{ item.name }}</h3>
                  <p class="label" style="color: var(--canopy-green);">Premium Entry</p>
                </div>
                <div class="cart-item__actions">
                  <div class="quantity-control">
                    <button @click="cartStore.removeItem(item.id)">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="cartStore.addItem(item)">+</button>
                  </div>
                  <div class="cart-item__price">${{ item.price * item.quantity }}</div>
                </div>
              </div>
            </div>
          </div>

          <aside class="checkout-sidebar" v-if="cartStore.items.length > 0">
            <div class="summary-card">
              <h3>Order Summary</h3>
              <div class="summary-row">
                <span>Subtotal</span>
                <span>${{ cartStore.totalPrice }}</span>
              </div>
              <div class="summary-row">
                <span>Sanctuary Fee</span>
                <span>$0</span>
              </div>
              <div class="summary-divider"></div>
              <div class="summary-row summary-row--total">
                <span>Total</span>
                <span>${{ cartStore.totalPrice }}</span>
              </div>

              <div class="checkout-form">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" class="form-input" />
                </div>
                <div class="form-group">
                  <label>Card Details</label>
                  <div class="form-input form-input--card">
                    <span>💳</span>
                    <input type="text" placeholder="•••• •••• •••• ••••" />
                  </div>
                </div>
              </div>

              <UiWildButton 
                variant="primary" 
                size="lg" 
                style="width: 100%; justify-content: center; margin-top: var(--space-xl);"
                @click="processPayment"
              >
                Complete Payment
              </UiWildButton>
              <p class="summary-note">Secured by Stripe encryption</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const router = useRouter()

function processPayment() {
  alert('Thank you for your purchase! Your tickets have been sent to your email.')
  cartStore.clearCart()
  router.push('/')
}

useHead({ title: 'Checkout' })
</script>

<style scoped>
.checkout-page { min-height: 90vh; padding-top: var(--space-4xl); }
.checkout-title { font-family: var(--font-display); font-size: var(--text-4xl); color: var(--charcoal); margin-bottom: var(--space-xs); }
.checkout-subtitle { color: var(--charcoal-60); margin-bottom: var(--space-3xl); }

.checkout-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: var(--space-4xl); align-items: start; }

.empty-cart { text-align: center; padding: var(--space-4xl) 0; background: var(--white); border-radius: var(--radius-2xl); border: 1px dashed var(--fog); }
.empty-cart__icon { font-size: 64px; margin-bottom: var(--space-xl); opacity: 0.3; }
.empty-cart p { margin-bottom: var(--space-2xl); font-size: var(--text-lg); color: var(--charcoal-60); }

.cart-items { display: flex; flex-direction: column; gap: var(--space-md); }
.cart-item { display: flex; justify-content: space-between; align-items: center; padding: var(--space-xl); background: var(--white); border-radius: var(--radius-xl); border: 1px solid var(--fog); }
.cart-item h3 { font-family: var(--font-body); font-size: var(--text-lg); font-weight: var(--weight-bold); margin-bottom: var(--space-2xs); }
.cart-item__actions { display: flex; align-items: center; gap: var(--space-2xl); }

.quantity-control { display: flex; align-items: center; gap: var(--space-md); background: var(--fog); padding: 4px; border-radius: var(--radius-pill); }
.quantity-control button { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--white); border: 1px solid var(--fog); border-radius: var(--radius-round); font-weight: bold; cursor: pointer; transition: all 0.2s; }
.quantity-control button:hover { border-color: var(--jungle-dark); color: var(--canopy-green); }
.quantity-control span { font-family: var(--font-accent); font-weight: bold; width: 20px; text-align: center; }

.cart-item__price { font-family: var(--font-accent); font-size: var(--text-xl); font-weight: bold; min-width: 60px; text-align: right; }

.summary-card { background: var(--jungle-dark); border-radius: var(--radius-2xl); padding: var(--space-2xl); color: var(--white); position: sticky; top: 100px; box-shadow: var(--shadow-2xl); }
.summary-card h3 { font-family: var(--font-body); font-size: var(--text-xl); margin-bottom: var(--space-xl); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: var(--space-md); }
.summary-row { display: flex; justify-content: space-between; margin-bottom: var(--space-md); color: var(--white-70); }
.summary-row--total { font-family: var(--font-accent); font-size: var(--text-2xl); color: var(--white); font-weight: bold; }
.summary-divider { height: 1px; background: rgba(255,255,255,0.1); margin: var(--space-xl) 0; }

.checkout-form { margin-top: var(--space-2xl); display: flex; flex-direction: column; gap: var(--space-lg); }
.form-group label { display: block; font-family: var(--font-accent); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--electric-lime); margin-bottom: var(--space-2xs); }
.form-input { width: 100%; padding: var(--space-md); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); color: var(--white); font-family: var(--font-body); }
.form-input--card { display: flex; align-items: center; gap: var(--space-sm); }
.form-input--card input { background: none; border: none; color: var(--white); width: 100%; outline: none; }

.summary-note { font-size: 10px; color: var(--white-30); text-align: center; margin-top: var(--space-md); text-transform: uppercase; letter-spacing: 0.05em; }

@media (max-width: 1024px) {
  .checkout-grid { grid-template-columns: 1fr; }
  .checkout-sidebar { position: static; }
}
</style>
