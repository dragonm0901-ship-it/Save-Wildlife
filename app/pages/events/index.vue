<template>
  <div class="events-page">
    <section class="page-hero">
      <NuxtImg 
        src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=80" 
        alt="Wildlife event" 
        class="page-hero__bg"
        loading="eager"
        format="webp"
      />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Join Us for Fun<br/>and Educational Events</h1>
        <div class="page-hero__meta">
          <strong class="page-hero__label">Events</strong>
          <p>Explore our sanctuary's seasonal gatherings, from educational workshops to festive wildlife celebrations.</p>
        </div>
      </div>
    </section>

    <UiSectionLabel :items="['UPCOMING EVENTS', 'JOIN THE FUN', 'WILDLIFE GATHERINGS']" />

    <section class="section section--bone">
      <div class="container">
        <div class="section-header">
          <span class="section-header__label">Schedule</span>
          <h2 class="section-header__title">Our Sanctuary Events</h2>
        </div>

        <div v-if="pending" class="loading-state">
          <p>Gathering event schedules...</p>
        </div>

        <div v-else-if="events && events.length" class="events-grid">
          <NuxtLink 
            v-for="event in events" 
            :key="event.slug" 
            :to="`/events/${event.slug}`" 
            class="event-card-lg"
          >
            <div class="event-card-lg__image">
              <NuxtImg 
                :src="event.image" 
                :alt="event.title" 
                loading="lazy"
                format="webp"
                width="800"
              />
              <span class="event-card-lg__badge label">{{ event.category || 'EVENT' }}</span>
            </div>
            <div class="event-card-lg__content">
              <h3>{{ event.title }}</h3>
              <p class="line-clamp">{{ event.description }}</p>
              <div class="event-card-lg__meta">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg> 
                  {{ event.time }}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg> 
                  {{ event.location }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="empty-state">
          <p>No upcoming events scheduled at the moment. Please check back later!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Upcoming Events' })

const { data: events, pending } = await useFetch('/api/events', {
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

.section-header { margin-bottom: var(--space-3xl); }
.section-header__label { display: block; font-family: var(--font-accent); font-size: var(--text-xs); color: var(--canopy-green); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-xs); }
.section-header__title { font-size: var(--text-3xl); color: var(--charcoal); }

.events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: var(--space-xl); }

.event-card-lg { background: var(--white); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); transition: all 0.5s var(--ease-out-expo); text-decoration: none; display: flex; flex-direction: column; }
.event-card-lg:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.event-card-lg__image { position: relative; aspect-ratio: 16/10; overflow: hidden; }
.event-card-lg__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
.event-card-lg:hover .event-card-lg__image img { transform: scale(1.05); }
.event-card-lg__badge { position: absolute; top: var(--space-sm); left: var(--space-sm); padding: var(--space-2xs) var(--space-sm); background: var(--electric-lime); color: var(--jungle-deep); border-radius: var(--radius-sm); font-size: 10px; font-weight: var(--weight-bold); }

.event-card-lg__content { padding: var(--space-xl); flex: 1; display: flex; flex-direction: column; }
.event-card-lg__content h3 { font-family: var(--font-body); font-size: var(--text-xl); font-weight: var(--weight-bold); color: var(--charcoal); margin-bottom: var(--space-sm); }
.event-card-lg__content p { font-size: var(--text-sm); color: var(--charcoal-60); margin-bottom: var(--space-xl); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.event-card-lg__meta { margin-top: auto; display: flex; flex-direction: column; gap: var(--space-xs); }
.event-card-lg__meta span { display: flex; align-items: center; gap: var(--space-xs); font-size: var(--text-sm); color: var(--charcoal-60); }

.loading-state, .empty-state { text-align: center; padding: var(--space-4xl) 0; color: var(--charcoal-60); }

@media (max-width: 768px) {
  .events-grid { grid-template-columns: 1fr; }
  .page-hero__meta { flex-direction: column; align-items: flex-start; gap: var(--space-md); }
}
</style>
