<template>
  <div class="about-page">
    <!-- Hero Banner -->
    <section class="page-hero">
      <img
        src="https://images.unsplash.com/photo-1544136502-4fc51b73fe4b?w=1600&q=80"
        alt="Nepalese Himalayan landscape"
        class="page-hero__bg"
      />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Protecting the Rooftop<br/>of the World</h1>
        <div class="page-hero__meta">
          <strong class="page-hero__label">Our Mission</strong>
          <p>From the tropical Terai to the high Himalayas, we are dedicated to preserving Nepal's unrivaled natural heritage.</p>
          <button class="page-hero__scroll" @click="scrollToContent" aria-label="Scroll down">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <UiSectionLabel :items="['DISCOVER THE WILD', 'INSPIRING WILDLIFE', 'CONSERVATION FIRST']" />

    <!-- Mission Statement -->
    <section class="section section--bone" id="mission-section">
      <div class="container">
        <div class="mission-block" ref="missionRef">
          <p class="mission-block__text">
            Our journey began with a single vision: to turn Nepal into a global beacon for wildlife conservation. 
            Through community-led anti-poaching and premium, sustainable eco-tourism, 
            we have transformed local livelihoods and restored ancient tiger corridors.
            Join us in safeguarding the rarest species on Earth.
          </p>
          <UiWildButton to="/contact" variant="secondary" :arrow="true" id="mission-cta-btn">
            Become a Guardian
          </UiWildButton>
        </div>
      </div>
    </section>

    <!-- Stats & Impact -->
    <section class="section section--dark" id="stats-section">
      <div class="container">
        <div class="section-header">
          <span class="section-header__label">Our Impact</span>
          <h2 class="section-header__title">Making a Difference Since 2009</h2>
        </div>
        <div class="impact-stats">
          <div class="impact-stat" v-for="stat in impactStats" :key="stat.label">
            <span class="impact-stat__number">{{ stat.value }}</span>
            <span class="impact-stat__label label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section section--bone" id="team-section">
      <div class="container">
        <div class="section-header">
          <span class="section-header__label">Expert Team</span>
          <h2 class="section-header__title">Meet Our Dedicated Team</h2>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="member in team" :key="member.name">
            <div class="team-card__image">
              <img :src="member.image" :alt="member.name" loading="lazy" />
              <div class="team-card__overlay">
                <span class="team-card__bio">{{ member.bio }}</span>
              </div>
            </div>
            <h3 class="team-card__name">{{ member.name }}</h3>
            <p class="team-card__role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="section section--ivory" id="benefits-section">
      <div class="container">
        <div class="section-header">
          <span class="section-header__label">Why Visit</span>
          <h2 class="section-header__title">Benefits of Exploration</h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="benefit in benefits" :key="benefit.title">
            <span class="benefit-card__icon" v-html="benefit.icon"></span>
            <h3 class="benefit-card__title">{{ benefit.title }}</h3>
            <p class="benefit-card__desc">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLenis } from '~/composables/useLenis'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

const { data: team, pending, error } = await useFetch('/api/team')

useHead({ title: 'About Us' })

const { scrollTo } = useLenis()
const { fadeUp } = useGsapAnimations()
const missionRef = ref(null)

function scrollToContent() {
  scrollTo('#mission-section')
}

const impactStats = [
  { value: '3X', label: 'Tiger Population' },
  { value: '750+', label: 'One-horned Rhinos' },
  { value: '23%', label: 'Territory Protected' },
  { value: '0', label: 'Poaching Years' },
  { value: '12', label: 'National Parks' },
  { value: '400k+', label: 'Acres Monitored' },
]

const benefits = [
  {
    title: 'Educational Programs',
    desc: 'Interactive learning experiences for visitors of all ages about wildlife and ecosystems.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  },
  {
    title: 'Conservation Research',
    desc: 'Cutting-edge research programs to protect endangered species worldwide.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  },
  {
    title: 'Family Experiences',
    desc: 'Designed for memorable family outings with activities for every age group.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  },
  {
    title: 'Eco-Tourism',
    desc: 'Sustainable tourism practices that benefit both wildlife and local communities.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  },
]

onMounted(() => {
  setTimeout(() => {
    fadeUp('.mission-block__text', { trigger: '.mission-block' })
    fadeUp('.impact-stat', { stagger: 0.1, trigger: '.impact-stats' })
    fadeUp('.team-card', { stagger: 0.15, trigger: '.team-grid' })
    fadeUp('.benefit-card', { stagger: 0.1, trigger: '.benefits-grid' })
  }, 300)
})
</script>

<style scoped>
/* ── Page Hero (Reusable) ── */
.page-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--space-3xl);
  overflow: hidden;
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,26,18,0.3) 0%, rgba(10,26,18,0.7) 100%);
}

.page-hero__content {
  position: relative;
  z-index: 2;
  color: var(--white);
}

.page-hero__title {
  font-size: var(--text-5xl);
  color: var(--white);
  margin-bottom: var(--space-xl);
  max-width: 700px;
}

.page-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--white-20);
}

.page-hero__label {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  min-width: 100px;
}

.page-hero__meta p {
  color: var(--white-70);
  max-width: 400px;
}

.page-hero__scroll {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-round);
  border: 1px solid var(--white-20);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-left: auto;
  transition: all var(--duration-base) ease;
}

.page-hero__scroll:hover {
  border-color: var(--electric-lime);
  color: var(--electric-lime);
}

.page-hero__scroll svg {
  width: 20px;
  height: 20px;
}

/* ── Mission Block ── */
.mission-block {
  text-align: center;
  max-width: 900px;
  margin-inline: auto;
}

.mission-block__text {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-style: italic;
  line-height: 1.5;
  color: var(--charcoal);
  margin-bottom: var(--space-2xl);
}

/* ── Impact Stats ── */
.impact-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.impact-stat {
  text-align: center;
  padding: var(--space-2xl);
  border: 1px solid var(--white-10);
  border-radius: var(--radius-xl);
}

.impact-stat__number {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  color: var(--electric-lime);
  margin-bottom: var(--space-xs);
}

.impact-stat__label {
  color: var(--white-70);
}

/* ── Team Grid ── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.team-card {
  text-align: center;
}

.team-card__image {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: var(--space-md);
}

.team-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) ease;
}

.team-card:hover .team-card__image img {
  transform: scale(1.05);
}

.team-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(10,26,18,0.9) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: var(--space-lg);
  opacity: 0;
  transition: opacity var(--duration-base) ease;
}

.team-card:hover .team-card__overlay {
  opacity: 1;
}

.team-card__bio {
  font-size: var(--text-sm);
  color: var(--white-90);
}

.team-card__name {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-semibold);
  color: var(--charcoal);
}

.team-card__role {
  font-size: var(--text-sm);
  color: var(--charcoal-60);
}

/* ── Benefits ── */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.benefit-card {
  padding: var(--space-2xl);
  background: var(--white);
  border-radius: var(--radius-xl);
  transition: all var(--duration-base) var(--ease-out-expo);
  border: 1px solid var(--fog);
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.benefit-card__icon {
  display: flex;
  width: 48px;
  height: 48px;
  margin-bottom: var(--space-lg);
  color: var(--canopy-green);
}

.benefit-card__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.benefit-card__title {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-sm);
}

.benefit-card__desc {
  font-size: var(--text-sm);
  color: var(--charcoal-60);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .impact-stats { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .page-hero { min-height: 50vh; }
  .page-hero__meta { flex-direction: column; align-items: flex-start; }
  .benefits-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
}
</style>
