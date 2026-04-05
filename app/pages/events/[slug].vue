<template>
  <div class="event-detail" v-if="event">
    <section class="page-hero">
      <img :src="event.image" :alt="event.title" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <NuxtLink to="/events" class="breadcrumb">Events</NuxtLink>
        <h1 class="page-hero__title">{{ event.title }}</h1>
      </div>
    </section>
    <section class="section section--bone">
      <div class="container detail-content">
        <div class="detail-content__main">
          <p class="detail-content__lead">{{ event.description || event.desc }}</p>
          <h3>Event Details</h3>
          <div class="event-info-grid">
            <div class="event-info">
              <span class="label" style="color:var(--canopy-green)">Date & Time</span>
              <p>{{ event.date }} | {{ event.time }}</p>
            </div>
            <div class="event-info">
              <span class="label" style="color:var(--canopy-green)">Location</span>
              <p>{{ event.location }}</p>
            </div>
            <div class="event-info">
              <span class="label" style="color:var(--canopy-green)">Capacity</span>
              <p>{{ event.capacity }}</p>
            </div>
            <div class="event-info">
              <span class="label" style="color:var(--canopy-green)">Price</span>
              <p>{{ event.price }}</p>
            </div>
          </div>
        </div>
        <aside class="detail-content__sidebar">
          <div class="sidebar-card">
            <h4>Reserve Your Spot</h4>
            <p style="margin-bottom:var(--space-xl);color:var(--charcoal-60)">Limited capacity. Book early to guarantee your place at this event.</p>
            <UiWildButton to="/tickets" variant="primary" size="lg" :arrow="true" style="width:100%;justify-content:center" id="reserve-event-btn">Book Now</UiWildButton>
          </div>
        </aside>
      </div>
    </section>
  </div>
  <div v-else-if="pending" class="loading-state section section--bone">
    <div class="container">
      <p>Loading event details...</p>
    </div>
  </div>
  <div v-else class="error-state section section--bone">
    <div class="container">
      <p>Could not load event details. Please try again later.</p>
      <UiWildButton to="/events" variant="secondary" :arrow="true">Back to Events</UiWildButton>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const route = useRoute()
const { data: event, pending, error } = await useFetch(`/api/events/${route.params.slug}`)

useHead({ title: computed(() => event.value?.title || 'Event Detail') })
</script>
<style scoped>
.page-hero{position:relative;min-height:45vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.8) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-4xl);color:var(--white);margin-top:var(--space-sm)}
.breadcrumb{font-family:var(--font-accent);font-size:var(--text-sm);color:var(--white-50);letter-spacing:.08em;text-transform:uppercase}
.breadcrumb:hover{color:var(--electric-lime)}
.detail-content{display:grid;grid-template-columns:2fr 1fr;gap:var(--space-3xl)}
.detail-content__lead{font-size:var(--text-lg);line-height:1.7;margin-bottom:var(--space-2xl)}
.detail-content__main h3{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);margin-bottom:var(--space-lg)}
.event-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md)}
.event-info{padding:var(--space-lg);background:var(--white);border-radius:var(--radius-lg);border:1px solid var(--fog)}
.event-info p{font-size:var(--text-md);font-weight:var(--weight-medium);margin-top:var(--space-xs);color:var(--charcoal)}
.sidebar-card{background:var(--ivory);border:1px solid var(--fog);border-radius:var(--radius-xl);padding:var(--space-2xl);position:sticky;top:100px}
.sidebar-card h4{font-family:var(--font-body);font-size:var(--text-lg);font-weight:var(--weight-bold);margin-bottom:var(--space-md)}
@media (max-width: 768px) {
  .page-hero { min-height: 40vh; padding-bottom: var(--space-xl); }
  .page-hero__title { font-size: 2.5rem; margin-bottom: var(--space-md); }
  .detail-content { grid-template-columns: 1fr; gap: var(--space-2xl); }
  .event-info-grid { grid-template-columns: 1fr; }
  .sidebar-card { padding: var(--space-xl); position: relative; top: 0; }
}

@media (max-width: 480px) {
  .page-hero__title { font-size: 2rem; }
  .detail-content__lead { font-size: var(--text-base); }
}
</style>
