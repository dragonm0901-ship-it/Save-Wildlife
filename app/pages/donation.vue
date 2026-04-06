<template>
  <div class="donation-page">
    <section class="page-hero">
      <NuxtImg
        src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80"
        alt="Wildlife conservation"
        class="page-hero__bg"
        loading="eager"
        fetchpriority="high"
        format="webp"
        quality="80"
      />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Protect Nepal's<br/>Wild Heritage</h1>
        <div class="page-hero__meta"><strong class="page-hero__label">Support</strong><p>Every contribution directly funds the frontlines of conservation across the Himalayas and Terai.</p></div>
      </div>
    </section>
    <section class="section section--bone">
      <div class="container">
        <div class="donation-page__grid">
          <div class="donation-page__info">
            <span class="label" style="color:var(--canopy-green)">Your Impact</span>
            <h2 style="margin:var(--space-md) 0 var(--space-lg)">Where Your Donation Goes</h2>
            <div class="impact-items">
              <div class="impact-item" v-for="item in impacts" :key="item.title">
                <span class="impact-item__icon" v-html="item.icon"></span>
                <div><h4>{{ item.title }}</h4><p>{{ item.desc }}</p></div>
              </div>
            </div>
          </div>
          <div class="donation-form-card">
            <h3>Support Conservation</h3>
            <div class="donation-tabs">
              <button :class="{ active: freq === 'monthly' }" @click="freq='monthly'">Monthly</button>
              <button :class="{ active: freq === 'yearly' }" @click="freq='yearly'">Yearly</button>
            </div>
            <div class="donation-amounts">
              <button v-for="a in [30,50,100,150]" :key="a" :class="{ active: amount===a }" @click="amount=a;custom=''">${{ a }}</button>
            </div>
            <div class="donation-custom"><span>$</span><input type="number" v-model="custom" placeholder="Custom amount" @focus="amount=null" /></div>
            <UiWildButton variant="primary" size="lg" :arrow="true" style="width:100%;justify-content:center;margin-top:var(--space-lg)">
              Donate {{ freq === 'monthly' ? 'Monthly' : 'Yearly' }}
            </UiWildButton>
            <p class="donation-note">Your donation is tax-deductible. You will receive a receipt via email.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Donation Stories -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header"><span class="section-header__label">Stories of Impact</span><h2 class="section-header__title">See How Your Donations Help</h2></div>
        <div class="stories-grid">
          <div class="story-card" v-for="story in stories" :key="story.title">
            <div class="story-card__image">
              <NuxtImg 
                :src="story.image" 
                :alt="story.title" 
                loading="lazy" 
                format="webp" 
                quality="80"
                width="500"
              />
            </div>
            <div class="story-card__content"><h4>{{ story.title }}</h4><p>{{ story.desc }}</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const { data: pageData, pending, error } = await useFetch('/api/donations/content')

useHead({ title: 'Donate' })

const freq = ref('monthly')
const amount = ref(50)
const custom = ref('')

// Fallback data if API not yet populated
const impacts = computed(() => pageData.value?.impacts || [
  { title:'Terai Arc Restoration', desc:'Reconnecting wildlife corridors for tigers and rhinos in the subtropical lowlands.', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>' },
  { title:'High-Altitude Monitoring', desc:'Support tracking teams protecting snow leopards and musk deer in the high mountains.', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { title:'Captive Breeding', desc:'Fund specialized centers for the critically endangered Gharial crocodile and Red Panda.', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
  { title:'Community Education', desc:'Empowering local youth to lead conservation within their own Himalayan villages.', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>' },
])

const stories = computed(() => pageData.value?.stories || [
  { title:'The Ghost of Dolpo', desc:'In 2024, our trackers successfully identified three new snow leopard families in the Upper Dolpo region.', image:'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=500&q=80' },
  { title:'Tiger Corridors', desc:'Donor support helped us purchase and restore critical land bridging Bardia and Banke National Parks.', image:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&q=80' },
  { title:'Red Panda Rescue', desc:'Successfully rehabilitation of five red pandas through our community-monitored bamboo forests.', image:'https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=500&q=80' },
])
</script>
<style scoped>
.page-hero{position:relative;min-height:50vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white);margin-bottom:var(--space-xl)}
.page-hero__meta{display:flex;align-items:center;gap:var(--space-xl);padding-top:var(--space-xl);border-top:1px solid var(--white-20)}
.page-hero__label{font-size:var(--text-xl);min-width:100px}
.page-hero__meta p{color:var(--white-70);max-width:400px}
.donation-page__grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4xl);align-items:start}
.impact-items{display:flex;flex-direction:column;gap:var(--space-xl)}
.impact-item{display:flex;gap:var(--space-lg)}
.impact-item__icon{flex-shrink:0;width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-lg);background:var(--electric-lime-20);color:var(--canopy-green)}
.impact-item h4{font-family:var(--font-body);font-size:var(--text-md);font-weight:var(--weight-bold);margin-bottom:var(--space-2xs)}
.impact-item p{font-size:var(--text-sm);color:var(--charcoal-60)}
.donation-form-card{background:var(--ivory);border:1px solid var(--fog);border-radius:var(--radius-xl);padding:var(--space-2xl);position:sticky;top:100px}
.donation-form-card h3{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);margin-bottom:var(--space-xl)}
.donation-tabs{display:flex;background:var(--fog);border-radius:var(--radius-pill);padding:4px;margin-bottom:var(--space-xl)}
.donation-tabs button{flex:1;padding:var(--space-sm);border-radius:var(--radius-pill);font-family:var(--font-accent);font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--charcoal-60);transition:all .2s}
.donation-tabs button.active{background:var(--jungle-dark);color:var(--white)}
.donation-amounts{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-sm);margin-bottom:var(--space-md)}
.donation-amounts button{padding:var(--space-md);border:1px solid var(--fog);border-radius:var(--radius-lg);font-family:var(--font-accent);font-size:var(--text-xl);font-weight:var(--weight-bold);transition:all .2s;cursor:pointer;background:var(--white)}
.donation-amounts button:hover{border-color:var(--jungle-dark)}
.donation-amounts button.active{border-color:var(--electric-lime);background:var(--electric-lime-20)}
.donation-custom{display:flex;align-items:center;gap:var(--space-xs);padding:var(--space-md);border:1px solid var(--fog);border-radius:var(--radius-lg);background:var(--white)}
.donation-custom span{font-family:var(--font-accent);font-size:var(--text-xl);font-weight:var(--weight-bold)}
.donation-custom input{border:none;background:none;width:100%;font-family:var(--font-accent);font-size:var(--text-xl);font-weight:var(--weight-bold)}
.donation-custom input:focus{outline:none}
.donation-custom input::placeholder{color:var(--charcoal-40)}
.donation-note{font-size:var(--text-xs);color:var(--charcoal-40);text-align:center;margin-top:var(--space-md)}
.stories-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-xl)}
.story-card{border-radius:var(--radius-xl);overflow:hidden;background:var(--jungle-mid);transition:transform .3s var(--ease-out-expo)}
.story-card:hover{transform:translateY(-4px)}
.story-card__image{aspect-ratio:16/10;overflow:hidden}
.story-card__image img{width:100%;height:100%;object-fit:cover}
.story-card__content{padding:var(--space-xl)}
.story-card__content h4{font-family:var(--font-body);font-size:var(--text-md);font-weight:var(--weight-bold);color:var(--white);margin-bottom:var(--space-sm)}
.story-card__content p{font-size:var(--text-sm);color:var(--white-70)}
@media (max-width: 768px) {
  .page-hero { min-height: 40vh; padding-bottom: var(--space-xl); }
  .page-hero__title { font-size: 3rem; margin-bottom: var(--space-md); }
  .page-hero__meta { flex-direction: column; align-items: flex-start; gap: var(--space-sm); padding-top: var(--space-md); }
  .page-hero__label { min-width: 0; font-size: var(--text-lg); }
  
  .donation-page__grid { grid-template-columns: 1fr; gap: var(--space-2xl); }
  .donation-form-card { padding: var(--space-xl); position: relative; top: 0; }
  
  .stories-grid { grid-template-columns: 1fr; }
  .impact-item { gap: var(--space-md); }
}

@media (max-width: 480px) {
  .page-hero__title { font-size: 2.5rem; }
  .donation-amounts { grid-template-columns: 1fr; }
}
</style>
