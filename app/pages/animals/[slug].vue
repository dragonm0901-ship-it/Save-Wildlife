<template>
  <div class="animal-detail" v-if="animal">
    <section class="animal-hero">
      <img :src="animal.image" :alt="animal.name" class="animal-hero__bg" />
      <div class="animal-hero__overlay"></div>
      <div class="container animal-hero__content">
        <span class="label" style="color: var(--electric-lime);">{{ animal.habitat }}</span>
        <h1 class="animal-hero__name">{{ animal.name }}</h1>
        <p class="animal-hero__scientific">{{ animal.scientific || animal.scientific_name }}</p>
      </div>
    </section>

    <section class="section section--bone">
      <div class="container">
        <div class="animal-detail__grid">
          <div class="animal-detail__info">
            <div class="animal-tabs">
              <button 
                v-for="tab in tabs" 
                :key="tab" 
                class="animal-tab" 
                :class="{ 'animal-tab--active': activeTab === tab }" 
                @click="activeTab = tab"
              >{{ tab }}</button>
            </div>
            <div class="animal-tab-content">
              <div v-if="activeTab === 'Overview'">
                <p>{{ animal.description || animal.overview }}</p>
              </div>
              <div v-if="activeTab === 'Habitat'">
                <p>{{ animal.habitatInfo || animal.habitat_info }}</p>
              </div>
              <div v-if="activeTab === 'Diet'">
                <p>{{ animal.dietInfo || animal.diet_info }}</p>
              </div>
              <div v-if="activeTab === 'Conservation'">
                <p>{{ animal.conservationInfo || animal.conservation_status }}</p>
              </div>
            </div>
            <div class="animal-facts">
              <div class="animal-fact" v-for="fact in displayFacts" :key="fact.label">
                <span class="animal-fact__label label">{{ fact.label }}</span>
                <span class="animal-fact__value">{{ fact.value }}</span>
              </div>
            </div>
          </div>
          <div class="animal-detail__sidebar">
            <div class="animal-detail__image">
              <img :src="animal.sideImage || animal.side_image || animal.image" :alt="animal.name" loading="lazy" />
            </div>
            <UiWildButton to="/donation" variant="primary" :arrow="true" size="lg" style="width:100%;justify-content:center;" id="support-species-btn">
              Support This Species
            </UiWildButton>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else-if="pending" class="loading-state section section--bone">
    <div class="container">
      <p>Loading wildlife details...</p>
    </div>
  </div>
  <div v-else class="error-state section section--bone">
    <div class="container">
      <p>Could not load animal details. Please try again later.</p>
      <UiWildButton to="/animals-birds" variant="secondary" :arrow="true">Back to Animals</UiWildButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const route = useRoute()
const { data: animal, pending, error } = await useFetch(`/api/animals/${route.params.slug}`)

useHead({ title: computed(() => animal.value?.name || 'Animal Detail') })

const activeTab = ref('Overview')
const tabs = ['Overview', 'Habitat', 'Diet', 'Conservation']

// Handle fallback facts if database doesn't provide them in expected format
const displayFacts = computed(() => {
  if (animal.value?.facts) {
    return typeof animal.value.facts === 'string' 
      ? JSON.parse(animal.value.facts) 
      : animal.value.facts
  }
  return [
    { label: 'Status', value: 'Protected' },
    { label: 'Region', value: 'Nepal' },
    { label: 'Year', value: '2026' }
  ]
})
</script>

<style scoped>
.animal-hero { position: relative; min-height: 55vh; display: flex; align-items: flex-end; padding-bottom: var(--space-3xl); }
.animal-hero__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.animal-hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,26,18,0.2) 0%, rgba(10,26,18,0.8) 100%); }
.animal-hero__content { position: relative; z-index: 2; color: var(--white); }
.animal-hero__name { font-size: var(--text-hero); color: var(--white); margin: var(--space-sm) 0; }
.animal-hero__scientific { font-size: var(--text-xl); color: var(--white-50); font-style: italic; font-family: var(--font-display); }

.animal-detail__grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: var(--space-3xl); }

.animal-tabs { display: flex; gap: var(--space-xs); margin-bottom: var(--space-xl); flex-wrap: wrap; }
.animal-tab { padding: var(--space-xs) var(--space-lg); border-radius: var(--radius-pill); font-family: var(--font-accent); font-size: var(--text-sm); font-weight: var(--weight-semibold); border: 1px solid var(--fog); color: var(--charcoal-60); transition: all var(--duration-base) ease; }
.animal-tab:hover { border-color: var(--jungle-dark); }
.animal-tab--active { background: var(--jungle-dark); color: var(--white); border-color: var(--jungle-dark); }

.animal-tab-content { margin-bottom: var(--space-2xl); }
.animal-tab-content p { font-size: var(--text-md); line-height: 1.8; color: var(--charcoal-80); }

.animal-facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md); }
.animal-fact { padding: var(--space-lg); background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--fog); }
.animal-fact__label { display: block; color: var(--canopy-green); margin-bottom: var(--space-2xs); }
.animal-fact__value { font-family: var(--font-display); font-size: var(--text-xl); color: var(--charcoal); }

.animal-detail__image { border-radius: var(--radius-xl); overflow: hidden; aspect-ratio: 3/4; margin-bottom: var(--space-lg); }
.animal-detail__image img { width: 100%; height: 100%; object-fit: cover; }

@media (max-width: 768px) { .animal-detail__grid { grid-template-columns: 1fr; } }
</style>
