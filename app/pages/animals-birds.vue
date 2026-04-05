<template>
  <div class="animals-page">
    <!-- Hero -->
    <section class="page-hero">
      <NuxtImg 
        src="/images/hero/snow-leopard.jpg" 
        alt="Majestic Snow Leopard in the Himalayas" 
        class="page-hero__bg"
        loading="eager"
        format="webp"
      />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Nepal's Living Heritage</h1>
        <div class="page-hero__meta">
          <strong class="page-hero__label">Biodiversity</strong>
          <p>Explore the diverse fauna and flora across Nepal's unique ecological zones, from the Terai to the Himalayas.</p>
        </div>
      </div>
    </section>

    <UiSectionLabel :items="['ANIMALS', 'BIRDS', 'FLORA', 'CONSERVATION']" />

    <!-- Filter + Grid -->
    <section class="section section--bone" id="animals-grid-section">
      <div class="container">
        <div class="filter-tabs">
          <button
            v-for="tab in filterTabs"
            :key="tab.value"
            class="filter-tab"
            :class="{ 'filter-tab--active': activeFilter === tab.value }"
            @click="activeFilter = tab.value"
          >{{ tab.label }}</button>
        </div>

        <div v-if="pending" class="loading-state">
          <p>Scouting for wildlife...</p>
        </div>

        <div v-else-if="filteredAnimals && filteredAnimals.length" :key="activeFilter" class="animals-grid">
          <NuxtLink
            v-for="animal in filteredAnimals"
            :key="animal.slug"
            :to="`/animals/${animal.slug}`"
            class="animal-card"
          >
            <div class="animal-card__image">
              <NuxtImg 
                :src="animal.image" 
                :alt="animal.name" 
                loading="lazy" 
                format="webp"
                width="600"
              />
              <div class="animal-card__overlay">
                <span class="animal-card__habitat label">{{ animal.habitat }}</span>
              </div>
            </div>
            <div class="animal-card__content">
              <h3 class="animal-card__name">{{ animal.name }}</h3>
              <p class="animal-card__scientific">{{ animal.scientific }}</p>
            </div>
          </NuxtLink>
        </div>

        <div v-else-if="error" class="error-state">
          <p>We're having trouble locating the wildlife. Please try again later.</p>
          <UiWildButton @click="refresh" variant="outline-dark" size="sm">Retry Search</UiWildButton>
        </div>

        <div v-else class="empty-state">
          <div class="empty-state__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 10l5 5m0-5l-5 5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <p>No species found matching the current filter.</p>
          <UiWildButton @click="activeFilter = 'all'" variant="ghost" size="sm">Clear Filters</UiWildButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

useHead({ title: 'Animals & Birds' })

const { staggerChildren } = useGsapAnimations()

const activeFilter = ref('all')
const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Animals', value: 'animal' },
  { label: 'Birds', value: 'bird' },
  { label: 'Flora', value: 'flora' },
]

// Fetch animals from API
const { data: animals, pending, error, refresh } = await useFetch('/api/animals', {
  lazy: true,
  server: false
})

const filteredAnimals = computed(() => {
  if (!animals.value) return []
  if (activeFilter.value === 'all') return animals.value
  return animals.value.filter(a => {
    return a.category?.toLowerCase() === activeFilter.value.toLowerCase()
  })
})

onMounted(() => {
  if (filteredAnimals.value.length > 0) {
    setTimeout(() => {
      staggerChildren('.animals-grid', '.animal-card', { stagger: 0.08 })
    }, 400)
  }
})

// Trigger animation on filter change - Bypass ScrollTrigger for immediate visibility
watch(activeFilter, async () => {
  await nextTick()
  const { gsap } = useGsapAnimations()
  gsap.from('.animal-card', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: 'power3.out',
    clearProps: 'all'
  })
})
</script>

<style scoped>
.page-hero { position: relative; min-height: 50vh; display: flex; align-items: flex-end; padding-bottom: var(--space-3xl); overflow: hidden; }
.page-hero__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.page-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,26,18,0.3) 0%, rgba(10,26,18,0.7) 100%); }
.page-hero__content { position: relative; z-index: 2; color: var(--white); }
.page-hero__title { font-size: var(--text-5xl); color: var(--white); margin-bottom: var(--space-xl); }
.page-hero__meta { display: flex; align-items: center; gap: var(--space-xl); padding-top: var(--space-xl); border-top: 1px solid var(--white-20); }
.page-hero__label { font-family: var(--font-body); font-size: var(--text-xl); min-width: 100px; }
.page-hero__meta p { color: var(--white-70); max-width: 400px; }

.filter-tabs { display: flex; justify-content: center; gap: var(--space-xs); margin-bottom: var(--space-3xl); }
.filter-tab {
  padding: var(--space-sm) var(--space-xl);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--charcoal-60);
  border: 1px solid var(--fog);
  transition: all var(--duration-base) ease;
}
.filter-tab:hover { border-color: var(--jungle-dark); color: var(--charcoal); }
.filter-tab--active { background: var(--jungle-dark); color: var(--white); border-color: var(--jungle-dark); }

.animals-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-xl); }

.animal-card { border-radius: var(--radius-xl); overflow: hidden; background: var(--white); box-shadow: var(--shadow-sm); transition: all var(--duration-base) var(--ease-out-expo); }
.animal-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.animal-card__image { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.animal-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform var(--duration-slow) ease; }
.animal-card:hover .animal-card__image img { transform: scale(1.08); }
.animal-card__overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%); display: flex; align-items: flex-end; padding: var(--space-md); opacity: 0; transition: opacity var(--duration-base) ease; }
.animal-card:hover .animal-card__overlay { opacity: 1; }
.animal-card__habitat { color: var(--electric-lime); }
.animal-card__content { padding: var(--space-lg); }
.animal-card__name { font-family: var(--font-body); font-size: var(--text-lg); font-weight: var(--weight-bold); color: var(--charcoal); margin-bottom: var(--space-2xs); }
.animal-card__scientific { font-size: var(--text-sm); color: var(--charcoal-60); font-style: italic; }

.error-state, .empty-state { text-align: center; padding: var(--space-4xl) 0; color: var(--charcoal-60); }
.empty-state__icon { width: 48px; height: 48px; margin: 0 auto var(--space-md); color: var(--fog); }
.error-state p, .empty-state p { margin-bottom: var(--space-lg); font-size: var(--text-md); }

@media (max-width: 768px) {
  .page-hero { min-height: 40vh; }
  .page-hero__meta { flex-direction: column; align-items: flex-start; }
  .animals-grid { grid-template-columns: 1fr 1fr; gap: var(--space-md); }
}
@media (max-width: 480px) {
  .animals-grid { grid-template-columns: 1fr; }
}
</style>
