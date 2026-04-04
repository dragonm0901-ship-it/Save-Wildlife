<template>
  <div class="services-page">
    <section class="page-hero">
      <NuxtImg 
        src="https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=1600&q=80" 
        alt="Wildlife safari" 
        class="page-hero__bg"
        loading="eager"
        format="webp"
      />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Our Services</h1>
        <div class="page-hero__meta">
          <strong class="page-hero__label">Experiences</strong>
          <p>From safari rides to educational tours, discover unique experiences that bring you closer to the heart of nature.</p>
        </div>
      </div>
    </section>

    <UiSectionLabel :items="['UNFORGETTABLE MOMENTS', 'WILD EXPERIENCES', 'NATURE AWAITS']" />

    <section class="section section--bone">
      <div class="container">
        <div v-if="pending" class="loading-state">
          <p>Loading sanctuary services...</p>
        </div>

        <div v-else-if="services && services.length" class="services-list">
          <NuxtLink 
            v-for="(service, i) in services" 
            :key="service.slug" 
            :to="`/services/${service.slug}`" 
            class="service-row" 
            :class="{ 'service-row--reverse': i % 2 !== 0 }"
          >
            <div class="service-row__image">
              <NuxtImg 
                :src="service.image" 
                :alt="service.title" 
                loading="lazy"
                format="webp"
                width="800"
              />
            </div>
            <div class="service-row__content">
              <span class="label" style="color:var(--canopy-green)">{{ String(i+1).padStart(2,'0') }}</span>
              <h2 class="service-row__title">{{ service.title }}</h2>
              <p>{{ service.description }}</p>
              <div class="service-row__link">
                Learn More 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="empty-state">
          <p>We are currently updating our service offerings. Please check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Visitor Services & Experiences' })

const { data: services, pending } = await useFetch('/api/services', {
  default: () => []
})
</script>

<style scoped>
.page-hero { position: relative; min-height: 50vh; display: flex; align-items: flex-end; padding-bottom: var(--space-3xl); overflow: hidden; }
.page-hero__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.page-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,26,18,0.3) 0%, rgba(10,26,18,0.7) 100%); }
.page-hero__content { position: relative; z-index: 2; color: var(--white); }
.page-hero__title { font-size: var(--text-5xl); color: var(--white); margin-bottom: var(--space-xl); line-height: 1.1; }
.page-hero__meta { display: flex; align-items: center; gap: var(--space-xl); padding-top: var(--space-xl); border-top: 1px solid var(--white-20); }
.page-hero__label { font-family: var(--font-body); font-size: var(--text-xl); min-width: 100px; }
.page-hero__meta p { color: var(--white-70); max-width: 440px; }

.services-list { display: flex; flex-direction: column; gap: var(--space-5xl); }
.service-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4xl); align-items: center; text-decoration: none; }
.service-row--reverse { direction: rtl; }
.service-row--reverse > * { direction: ltr; }

.service-row__image { border-radius: var(--radius-xl); overflow: hidden; aspect-ratio: 4/3; box-shadow: var(--shadow-md); transition: transform 0.6s var(--ease-out-expo); }
.service-row__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
.service-row:hover .service-row__image { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.service-row:hover .service-row__image img { transform: scale(1.05); }

.service-row__content { padding: var(--space-xl) 0; }
.service-row__title { font-size: var(--text-4xl); color: var(--charcoal); margin: var(--space-sm) 0 var(--space-md); font-family: var(--font-display); line-height: 1.1; }
.service-row__content p { color: var(--charcoal-80); margin-bottom: var(--space-2xl); line-height: 1.7; font-size: var(--text-base); max-width: 540px; }

.service-row__link svg {
  transition: transform 0.4s var(--ease-out-expo);
}

.service-row:hover .service-row__link {
  color: var(--electric-lime);
}

.service-row:hover .service-row__link svg {
  transform: rotate(45deg) scale(1.1);
}

.service-row {
  transition: all var(--duration-base) var(--ease-out-expo);
}

.service-row:hover {
  transform: scale(1.02);
}

.loading-state, .empty-state { text-align: center; padding: var(--space-5xl) 0; color: var(--charcoal-60); }

@media (max-width: 768px) {
  .service-row, .service-row--reverse { grid-template-columns: 1fr; gap: var(--space-xl); direction: ltr; }
  .service-row--reverse > * { direction: ltr; }
  .page-hero__meta { flex-direction: column; align-items: flex-start; gap: var(--space-md); }
  .service-row__title { font-size: var(--text-3xl); }
}
</style>
