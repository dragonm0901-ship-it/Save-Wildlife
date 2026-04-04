<template>
  <div class="service-detail" v-if="service">
    <section class="page-hero">
      <img :src="service.image" :alt="service.title" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <NuxtLink to="/services" class="breadcrumb">Services</NuxtLink>
        <h1 class="page-hero__title">{{ service.title }}</h1>
      </div>
    </section>
    <section class="section section--bone">
      <div class="container detail-content">
        <div class="detail-content__main">
          <p class="detail-content__lead">{{ service.description || service.desc }}</p>
          <h3>What to Expect</h3>
          <p>Our {{ service.title.toLowerCase() }} experience is designed to create lasting memories while maintaining the highest standards of animal welfare and visitor safety. Professional guides accompany every session to ensure both you and the animals have a wonderful time.</p>
          <h3>Key Highlights</h3>
          <ul class="detail-list">
            <li v-for="item in displayHighlights" :key="item">{{ item }}</li>
          </ul>
        </div>
        <aside class="detail-content__sidebar">
          <div class="sidebar-card">
            <h4>Book This Experience</h4>
            <p class="sidebar-card__price">From <strong>${{ service.price }}</strong> / person</p>
            <UiWildButton to="/tickets" variant="primary" size="lg" :arrow="true" style="width:100%;justify-content:center" id="book-service-btn">Get Tickets</UiWildButton>
          </div>
        </aside>
      </div>
    </section>
  </div>
  <div v-else-if="pending" class="loading-state section section--bone">
    <div class="container">
      <p>Loading service details...</p>
    </div>
  </div>
  <div v-else class="error-state section section--bone">
    <div class="container">
      <p>Could not load service details. Please try again later.</p>
      <UiWildButton to="/services" variant="secondary" :arrow="true">Back to Services</UiWildButton>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const route = useRoute()
const { data: service, pending, error } = await useFetch(`/api/services/${route.params.slug}`)

useHead({ title: computed(() => service.value?.title || 'Service Detail') })

const displayHighlights = computed(() => {
  if (service.value?.highlights) {
    return typeof service.value.highlights === 'string' 
      ? JSON.parse(service.value.highlights) 
      : service.value.highlights
  }
  return ['Professional guides','Premium experience','All ages welcome','Booking required']
})
</script>
<style scoped>
.page-hero{position:relative;min-height:45vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.8) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-4xl);color:var(--white);margin-top:var(--space-sm)}
.breadcrumb{font-family:var(--font-accent);font-size:var(--text-sm);color:var(--white-50);letter-spacing:.08em;text-transform:uppercase;transition:color .2s}
.breadcrumb:hover{color:var(--electric-lime)}
.detail-content{display:grid;grid-template-columns:2fr 1fr;gap:var(--space-3xl)}
.detail-content__lead{font-size:var(--text-lg);color:var(--charcoal);line-height:1.7;margin-bottom:var(--space-2xl)}
.detail-content__main h3{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);margin:var(--space-xl) 0 var(--space-md);color:var(--charcoal)}
.detail-content__main p{line-height:1.8;margin-bottom:var(--space-lg)}
.detail-list{display:flex;flex-direction:column;gap:var(--space-sm)}
.detail-list li{display:flex;align-items:center;gap:var(--space-sm);font-size:var(--text-md);color:var(--charcoal-80)}
.detail-list li::before{content:'';width:20px;height:20px;border-radius:var(--radius-round);background:var(--electric-lime-20);border:2px solid var(--canopy-green);flex-shrink:0}
.sidebar-card{background:var(--ivory);border:1px solid var(--fog);border-radius:var(--radius-xl);padding:var(--space-2xl);position:sticky;top:100px}
.sidebar-card h4{font-family:var(--font-body);font-size:var(--text-lg);font-weight:var(--weight-bold);margin-bottom:var(--space-md)}
.sidebar-card__price{font-size:var(--text-md);color:var(--charcoal-60);margin-bottom:var(--space-xl)}
.sidebar-card__price strong{font-family:var(--font-accent);font-size:var(--text-2xl);color:var(--charcoal)}
@media(max-width:768px){.detail-content{grid-template-columns:1fr}}
</style>
