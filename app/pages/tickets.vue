<template>
  <div class="tickets-page">
    <section class="page-hero">
      <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&q=80" alt="Sanctuary entrance" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Conservation Passes</h1>
        <div class="page-hero__meta"><strong class="page-hero__label">Experiences</strong><p>Choose your journey across Nepal's most vital conservation zones.</p></div>
      </div>
    </section>
    <UiSectionLabel :items="['PLAN YOUR VISIT', 'BOOK TODAY', 'ADVENTURE AWAITS']" />
    <section class="section section--bone">
      <div class="container">
        <div class="section-header"><span class="section-header__label">Access Options</span><h2 class="section-header__title">Choose Your Journey</h2></div>
        <div class="tickets-grid">
          <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" :class="{ 'ticket-card--featured': ticket.featured }">
            <div class="ticket-card__badge" v-if="ticket.featured">Most Popular</div>
            <div class="ticket-card__header">
              <h3 class="ticket-card__name">{{ ticket.name }}</h3>
              <p class="ticket-card__desc">{{ ticket.desc }}</p>
            </div>
            <div class="ticket-card__price">
              <span class="ticket-card__currency">$</span>
              <span class="ticket-card__amount">{{ ticket.price }}</span>
              <span class="ticket-card__period">/ person</span>
            </div>
            <ul class="ticket-card__features">
              <li v-for="feat in ticket.includes" :key="feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--canopy-green)" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feat }}
              </li>
            </ul>
            <UiWildButton :variant="ticket.featured ? 'primary' : 'outline-dark'" size="lg" :arrow="true" @click="addToCart(ticket)" style="width:100%;justify-content:center">
              Add to Cart
            </UiWildButton>
          </div>
        </div>
      </div>
    </section>
    <!-- Trust Banner -->
    <section class="trust-banner section--dark" style="padding:var(--space-2xl) 0">
      <div class="container trust-banner__inner">
        <p>We've helped over <span class="trust-banner__count">200+</span> organizations committed to protecting animals</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useCartStore } from '~/stores/cart'

const { data: tickets, pending, error } = await useFetch('/api/tickets')

useHead({ title: 'Tickets' })
const cartStore = useCartStore()

function addToCart(ticket) {
  cartStore.addItem({ 
    id: ticket.id, 
    name: ticket.name, 
    price: ticket.price, 
    image: null 
  })
}
</script>
<style scoped>
.page-hero{position:relative;min-height:50vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white);margin-bottom:var(--space-xl)}
.page-hero__meta{display:flex;align-items:center;gap:var(--space-xl);padding-top:var(--space-xl);border-top:1px solid var(--white-20)}
.page-hero__label{font-family:var(--font-body);font-size:var(--text-xl);min-width:100px}
.page-hero__meta p{color:var(--white-70);max-width:400px}

.tickets-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-xl);align-items:start}
.ticket-card{position:relative;background:var(--white);border:1px solid var(--fog);border-radius:var(--radius-xl);padding:var(--space-2xl);transition:all .3s var(--ease-out-expo)}
.ticket-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.ticket-card--featured{border-color:var(--electric-lime);background:var(--ivory);transform:scale(1.03)}
.ticket-card--featured:hover{transform:scale(1.03) translateY(-4px)}
.ticket-card__badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:var(--space-2xs) var(--space-lg);background:var(--electric-lime);color:var(--jungle-deep);border-radius:var(--radius-pill);font-family:var(--font-accent);font-size:11px;font-weight:var(--weight-bold);letter-spacing:.05em;white-space:nowrap}
.ticket-card__header{margin-bottom:var(--space-xl)}
.ticket-card__name{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);color:var(--charcoal);margin-bottom:var(--space-xs)}
.ticket-card__desc{font-size:var(--text-sm);color:var(--charcoal-60)}
.ticket-card__price{display:flex;align-items:baseline;gap:2px;margin-bottom:var(--space-xl)}
.ticket-card__currency{font-family:var(--font-accent);font-size:var(--text-lg);color:var(--charcoal)}
.ticket-card__amount{font-family:var(--font-accent);font-size:var(--text-4xl);font-weight:var(--weight-bold);color:var(--charcoal);line-height:1}
.ticket-card__period{font-size:var(--text-sm);color:var(--charcoal-60);margin-left:var(--space-xs)}
.ticket-card__features{display:flex;flex-direction:column;gap:var(--space-sm);margin-bottom:var(--space-xl)}
.ticket-card__features li{display:flex;align-items:center;gap:var(--space-sm);font-size:var(--text-sm);color:var(--charcoal-80)}
.trust-banner__inner{text-align:center;font-size:var(--text-md);color:var(--white-70)}
.trust-banner__count{display:inline-flex;align-items:center;justify-content:center;padding:var(--space-2xs) var(--space-md);background:var(--electric-lime);color:var(--jungle-deep);border-radius:var(--radius-pill);font-family:var(--font-accent);font-weight:var(--weight-bold);margin:0 var(--space-xs)}
@media(max-width:1024px){.tickets-grid{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.tickets-grid{grid-template-columns:1fr}.ticket-card--featured{transform:none}.page-hero__meta{flex-direction:column;align-items:flex-start}}
</style>
