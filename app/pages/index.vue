<template>
  <div class="home-page">
    <!-- ═══════════════════════════════════════════
         HERO SLIDER
    ═══════════════════════════════════════════ -->
    <section class="hero" id="hero-section">
      <div class="hero__slides">
        <div
          v-for="(slide, i) in heroSlides"
          :key="i"
          class="hero__slide"
          :class="{ 'hero__slide--active': currentSlide === i }"
        >
          <template v-if="slide.video">
            <video
              :ref="el => { if (el) videoRefs[i] = el }"
              :src="slide.video"
              class="hero__slide-video"
              :style="{ objectPosition: slide.position || '50% 50%' }"
              muted
              playsinline
              preload="auto"
            ></video>
          </template>
          <img
            v-else
            :src="slide.image"
            :alt="slide.alt"
            class="hero__slide-img"
            loading="eager"
          />
          <div class="hero__slide-overlay"></div>
        </div>
      </div>

      <div class="hero__content container">
        <h1 class="hero__title" ref="heroTitleRef">
          {{ heroSlides[currentSlide].title }}
        </h1>
        <p class="hero__subtitle">{{ heroSlides[currentSlide].subtitle }}</p>
        <UiWildButton
          to="/animals-birds"
          variant="primary"
          size="lg"
          :arrow="true"
          id="hero-discover-btn"
        >
          Discover Animals
        </UiWildButton>
      </div>

      <!-- Slide Thumbnails -->
      <div class="hero__thumbs">
        <button
          v-for="(slide, i) in heroSlides"
          :key="'thumb-' + i"
          class="hero__thumb"
          :class="{ 'hero__thumb--active': currentSlide === i }"
          @click="goToSlide(i)"
          :aria-label="`Go to slide ${i + 1}`"
        >
          <img :src="slide.thumb" :alt="slide.alt" />
        </button>
      </div>

      <!-- Slide Indicators -->
      <div class="hero__indicators">
        <button
          v-for="(_, i) in heroSlides"
          :key="'dot-' + i"
          class="hero__dot"
          :class="{ 'hero__dot--active': currentSlide === i }"
          @click="goToSlide(i)"
          :aria-label="`Slide ${i + 1}`"
        ></button>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         INFINITE MARQUEE
    ═══════════════════════════════════════════ -->
    <UiSectionLabel
      :items="['INSPIRING WILDLIFE', 'DISCOVER THE WILD', 'CONSERVATION MATTERS', 'EXPLORE NATURE']"
      :dark="true"
    />

    <!-- ═══════════════════════════════════════════
         ABOUT PREVIEW
    ═══════════════════════════════════════════ -->
    <!-- ═══════════════════════════════════════════
         HORIZONTAL REVEAL GROUP (About + Services)
    ═══════════════════════════════════════════ -->
    <div class="horizontal-reveal-container" ref="horizontalRevealRef">
      <div class="horizontal-reveal-wrapper">
        <!-- ── About Preview ── -->
        <section class="about-preview section" id="about-preview">
          <div class="container">
            <div class="section-header">
              <span class="section-header__label" style="color: var(--jungle-deep);">Since 1974</span>
              <h2 class="section-header__title" style="color: var(--charcoal);">Where Wildlife <br/> Meets Wonder</h2>
            </div>

            <div class="about-preview__grid">
              <div class="about-preview__info">
                <p class="about-preview__lead">
                  A sanctuary for heritage, conservation, and discovery. Experience the majesty of nature's 
                  foundations while supporting the rescue and rehabilitation of our planet's most vulnerable species.
                </p>

                <div class="about-preview__stats">
                  <div class="about-preview__stat" v-for="stat in stats" :key="stat.label">
                    <span class="about-preview__stat-number" :data-target="stat.value" ref="statRefs">
                      {{ stat.value }}{{ stat.suffix }}
                    </span>
                    <span class="about-preview__stat-label label">{{ stat.label }}</span>
                  </div>
                </div>

                <p class="about-preview__desc">
                  Our sanctuary is home to a diverse collection of animals from across the globe,
                  including majestic big cats, curious primates, colorful birds, and fascinating reptiles.
                  Every visit becomes a chapter in your personal story of discovery.
                </p>

                <div class="about-preview__actions">
                  <UiWildButton to="/tickets" variant="primary" :arrow="true" id="about-visit-btn">
                    Plan Your Visit
                  </UiWildButton>
                  <UiWildButton to="/about" variant="outline-dark" id="about-more-btn">
                    Read Our Story
                  </UiWildButton>
                </div>
              </div>

              <div class="about-preview__visual">
                <div class="about-preview__image">
                  <img
                    src="/images/about/dolphin.png"
                    alt="Endangered Gangetic river dolphin in the Rapti river rapids"
                    loading="lazy"
                  />
                  
                  <!-- Floating Visiting Card -->
                  <div class="about-preview__visit-card glass-card">
                    <div class="visit-card__item">
                      <div class="visit-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                      <div class="visit-card__text">
                        <span class="label">Opening Hours</span>
                        <p>8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div class="visit-card__divider"></div>
                    <div class="visit-card__item">
                      <div class="visit-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div class="visit-card__text">
                        <span class="label">Location</span>
                        <p>Royal Road, Chitwan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Services (Experience Gallery) ── -->
        <section class="services-section section section--dark" id="services-section">
          <!-- Full-Section Background Stack -->
          <div class="services-bg">
            <div 
              v-for="(service, i) in services" 
              :key="'bg-' + service.slug"
              class="services-bg__layer"
              :class="{ 'services-bg__layer--active': activeService === i }"
            >
              <img :src="service.image" :alt="service.title" class="services-bg__img" />
            </div>
            <div class="services-bg__overlay"></div>
          </div>

          <div class="container container--wide" style="position: relative; z-index: 2;">
            <div class="section-header section-header--right">
              <span class="section-header__label" style="color: var(--electric-lime);">What We Offer</span>
              <h2 class="section-header__title" style="color: var(--white);">Discover Our Experiences</h2>
            </div>

            <div class="services-grid">
              <!-- Left Column (Large Canvas) -->
              <div class="services-grid__canvas"></div>

              <!-- Right Column (Cards List) -->
              <div class="services-grid__list">
                <NuxtLink
                  v-for="(service, i) in services"
                  :key="service.slug"
                  :to="`/services/${service.slug}`"
                  class="service-item"
                  :class="{ 'service-item--active': activeService === i }"
                  @mouseenter="handleServiceInteraction(i)"
                >
                  <div class="service-item__content">
                    <div class="service-item__info">
                      <h3 class="service-item__title">{{ service.title }}</h3>
                      <p class="service-item__desc" v-if="service.description || service.desc">
                        {{ service.description || service.desc }}
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         SHUTTER REVEAL GROUP (Events + Newsletter)
    ═══════════════════════════════════════════ -->
    <div class="shutter-reveal" ref="shutterGroupRef">
      <!-- Ground Layer (Revealed Underneath) -->
      <div class="shutter-reveal__underlay">
        <section class="newsletter-section" id="newsletter-section">
          <img
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1600&q=80"
            alt="Wildlife keeper with giraffes"
            class="newsletter-section__bg"
            loading="lazy"
          />
          <div class="newsletter-section__overlay"></div>
          <div class="container newsletter-section__content">
            <span class="label" style="color: var(--electric-lime);">Stay Informed</span>
            <h2 class="newsletter-section__title">Be the First to Know</h2>
            <p class="newsletter-section__desc">
              Subscribe to receive updates about new animal arrivals, upcoming events, and special offers.
            </p>
            <form class="newsletter-section__form" @submit.prevent="handleNewsletterSubmit">
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Your email address"
                required
                class="newsletter-section__input"
                id="newsletter-email"
              />
              <UiWildButton type="submit" variant="primary" id="newsletter-submit-btn">
                Subscribe
              </UiWildButton>
            </form>
          </div>
        </section>
      </div>

      <!-- Shutter Layer (Splits in half) -->
      <div class="shutter-reveal__split">
        <!-- Static (Interactive) Layer during Hold -->
        <div class="shutter-reveal__static">
          <section class="events-section section section--bone">
            <div class="container">
              <div class="section-header">
                <span class="section-header__label">Upcoming Events</span>
                <h2 class="section-header__title">Our Save Wildlife Events</h2>
              </div>
              <div class="events-grid">
                <NuxtLink
                  v-for="event in staticEvents"
                  :key="event.slug"
                  :to="`/events/${event.slug}`"
                  class="event-card"
                >
                  <div class="event-card__image">
                    <img :src="event.image" :alt="event.title" loading="lazy" />
                    <span class="event-card__badge label">EVENTS</span>
                  </div>
                  <div class="event-card__content">
                    <h3 class="event-card__title">{{ event.title }}</h3>
                    <p class="event-card__desc">{{ event.description }}</p>
                    <div class="event-card__meta">
                      <span class="event-card__time">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {{ event.time || event.start_time }}
                      </span>
                      <span class="event-card__location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ event.location }}
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="events-section__cta">
                <UiWildButton to="/events" variant="secondary" :arrow="true" id="events-explore-btn">
                  Explore More Events
                </UiWildButton>
              </div>
            </div>
          </section>
        </div>

        <!-- Top Half Shutter (Animation Only) -->
        <div class="shutter shutter--top">
          <section class="events-section section section--bone" id="events-section">
            <div class="container">
              <div class="section-header">
                <span class="section-header__label">Upcoming Events</span>
                <h2 class="section-header__title">Our Save Wildlife Events</h2>
              </div>
              <div class="events-grid">
                <NuxtLink
                  v-for="event in events"
                  :key="event.slug"
                  :to="`/events/${event.slug}`"
                  class="event-card"
                >
                  <div class="event-card__image">
                    <img :src="event.image" :alt="event.title" loading="lazy" />
                    <span class="event-card__badge label">EVENTS</span>
                  </div>
                  <div class="event-card__content">
                    <h3 class="event-card__title">{{ event.title }}</h3>
                    <p class="event-card__desc">{{ event.description }}</p>
                    <div class="event-card__meta">
                      <span class="event-card__time">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {{ event.time || event.start_time }}
                      </span>
                      <span class="event-card__location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ event.location }}
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="events-section__cta">
                <UiWildButton to="/events" variant="secondary" :arrow="true" id="events-explore-btn">
                  Explore More Events
                </UiWildButton>
              </div>
            </div>
          </section>
        </div>

        <!-- Bottom Half Shutter -->
        <div class="shutter shutter--bottom">
          <section class="events-section section section--bone" aria-hidden="true">
            <div class="container">
              <div class="section-header">
                <span class="section-header__label">Upcoming Events</span>
                <h2 class="section-header__title">Our Save Wildlife Events</h2>
              </div>
              <div class="events-grid">
                <NuxtLink
                  v-for="event in events"
                  :key="event.slug"
                  tabindex="-1"
                  class="event-card"
                >
                  <div class="event-card__image">
                    <img :src="event.image" aria-hidden="true" />
                    <span class="event-card__badge label">EVENTS</span>
                  </div>
                  <div class="event-card__content">
                    <h3 class="event-card__title">{{ event.title }}</h3>
                    <p class="event-card__desc">{{ event.description }}</p>
                    <div class="event-card__meta">
                      <span class="event-card__time">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {{ event.time || event.start_time }}
                      </span>
                      <span class="event-card__location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ event.location }}
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="events-section__cta">
                <div class="wild-btn wild-btn--secondary">Explore More Events</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════
         TESTIMONIALS
    ═══════════════════════════════════════════ -->
    <section class="testimonials-section section section--bone" id="testimonials-section">
      <div class="container">
        <div class="testimonials-section__bg-text">Testimonials</div>
        <div class="section-header">
          <span class="section-header__label">What Visitors Say</span>
          <h2 class="section-header__title">Stories from Our Community</h2>
        </div>

        <div class="testimonials-slider" ref="testimonialsRef">
          <div
            class="testimonial-card"
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :class="{ 'testimonial-card--active': currentTestimonial === i }"
          >
            <div class="testimonial-card__stars">
              <svg v-for="s in 5" :key="s" viewBox="0 0 24 24" fill="var(--jungle-dark)" width="16" height="16">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <blockquote class="testimonial-card__quote">
              "{{ testimonial.content }}"
            </blockquote>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M8 11l3 3 5-5"/>
                </svg>
              </div>
              <div>
                <strong class="testimonial-card__name">{{ testimonial.name }}</strong>
                <span class="testimonial-card__role">{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonials-nav">
          <button @click="prevTestimonial" aria-label="Previous testimonial" class="testimonials-nav__btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          
          <!-- Modern Dots for Navigation -->
          <div class="testimonials-dots">
            <button
              v-for="(_, i) in testimonials?.slice(0, 5)"
              :key="'tdot-' + i"
              class="testimonials-dot"
              :class="{ 'testimonials-dot--active': currentTestimonial === i }"
              @click="currentTestimonial = i"
              :aria-label="`Testimonial ${i + 1}`"
            ></button>
          </div>

          <button @click="nextTestimonial" aria-label="Next testimonial" class="testimonials-nav__btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         DONATION SECTION
    ═══════════════════════════════════════════ -->
    <section class="donation-section section section--dark" id="donation-section">
      <div class="container">
        <div class="donation-section__grid">
          <div class="donation-section__info">
            <span class="label" style="color: var(--electric-lime);">Support Nepal's Wildlife</span>
            <h2 class="donation-section__title">Fund the Frontlines</h2>
            <p class="donation-section__desc">
              Your contribution directly supports anti-poaching patrols, habitat restoration in the Terai Arc, 
              and community-led conservation programs across the Himalayas. Help us ensure a future for Nepal's wild heritage.
            </p>
            <UiWildButton to="/donation" variant="primary" :arrow="true" id="donate-learn-btn">
              Learn More
            </UiWildButton>
          </div>

          <div class="donation-section__form-card">
            <div class="donation-tabs">
              <button
                class="donation-tabs__tab"
                :class="{ 'donation-tabs__tab--active': donationFrequency === 'monthly' }"
                @click="donationFrequency = 'monthly'"
              >Monthly</button>
              <button
                class="donation-tabs__tab"
                :class="{ 'donation-tabs__tab--active': donationFrequency === 'yearly' }"
                @click="donationFrequency = 'yearly'"
              >Yearly</button>
            </div>

            <div class="donation-amounts">
              <button
                v-for="amount in donationAmounts"
                :key="amount"
                class="donation-amount"
                :class="{ 'donation-amount--active': selectedAmount === amount }"
                @click="selectedAmount = amount; customAmount = ''"
              >${{ amount }}</button>
              <div class="donation-amount donation-amount--custom">
                <span>$</span>
                <input
                  type="number"
                  v-model="customAmount"
                  placeholder="Other"
                  class="donation-amount__input"
                  @focus="selectedAmount = null"
                  id="donation-custom-amount"
                />
              </div>
            </div>

            <UiWildButton
              variant="primary"
              size="lg"
              :arrow="true"
              @click="handleDonate"
              id="donate-now-btn"
              style="width: 100%; justify-content: center;"
            >
              Donate {{ donationFrequency === 'monthly' ? 'Monthly' : 'Yearly' }}
            </UiWildButton>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         LATEST BLOG
    ═══════════════════════════════════════════ -->
    <section class="blog-section section section--ivory" id="blog-section">
      <div class="container">
        <div class="section-header">
          <span class="section-header__label">Latest News</span>
          <h2 class="section-header__title">Read Our Latest Articles</h2>
        </div>

        <div class="blog-grid">
          <NuxtLink
            v-for="post in blogPosts"
            :key="post.slug"
            :to="`/blogs/${post.slug}`"
            class="blog-card"
          >
            <div class="blog-card__image">
              <img :src="post.image" :alt="post.title" loading="lazy" />
            </div>
            <div class="blog-card__content">
              <div class="blog-card__meta">
                <span class="blog-card__category label">{{ post.category }}</span>
                <span class="blog-card__date">{{ post.date }}</span>
              </div>
              <h3 class="blog-card__title">{{ post.title }}</h3>
              <p class="blog-card__excerpt">{{ post.excerpt || post.description }}</p>
              <span class="blog-card__read-more">
                Explore Blog
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapAnimations } from '~/composables/useGsapAnimations'
import { staticServices, staticEvents, staticTestimonials, staticBlogPosts } from '~/data/homepage'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

useHead({ title: null })

const { fadeUp, staggerChildren, clipReveal, refresh } = useGsapAnimations()

// ── Hero Slider ──
const currentSlide = ref(0)
const heroTitleRef = ref(null)
const videoRefs = []
let slideInterval = null

watch(currentSlide, (newVal, oldVal) => {
  const newVideo = videoRefs[newVal]
  const oldVideo = videoRefs[oldVal]

  if (newVideo) {
    newVideo.play().catch(() => {})
  }

  if (oldVideo) {
    // Delay pausing to allow smooth transition fade-out
    setTimeout(() => {
      if (currentSlide.value !== oldVal) {
        oldVideo.pause()
      }
    }, 1200)
  }
})

const heroSlides = [
  {
    title: 'Asiatic Elephant',
    subtitle: 'Witness the gentle giants of the lowland forests in their natural habitat',
    image: '/images/about/Ethical Elephant Visit.png',
    video: '/Hero Videos/Asiatic Elephant.mp4',
    thumb: '/images/about/Ethical Elephant Visit.png',
    alt: 'Asiatic elephant roaming the Terai jungles',
    position: '50% 50%',
  },
  {
    title: 'Spotted Linsang',
    subtitle: 'Discover the mysterious and rare linsang in the dense subtropical forests',
    image: '/images/hero/spotted-linsang.png',
    video: '/Hero Videos/Spotted Pisang.mp4',
    thumb: '/images/hero/spotted-linsang.png',
    alt: 'Spotted linsang on a tree branch',
    position: '75% 50%',
  },
  {
    title: 'Danfe (Lophophorus)',
    subtitle: 'Witness the iridescent beauty of Nepal\'s national bird',
    image: '/images/hero/danfe.png',
    video: '/Hero Videos/danfe.mp4',
    thumb: '/images/hero/danfe.png',
    alt: 'Vibrant Himalayan Monal (Danfe) in the snow',
    position: '50% 50%',
  },
  {
    title: 'Red Panda',
    subtitle: 'Meet the firefox of the Himalayan bamboo forests',
    image: '/images/hero/red-panda.png',
    video: '/Hero Videos/Red Panda.mp4',
    thumb: '/images/hero/red-panda.png',
    alt: 'Red panda on a mossy branch',
    position: '70% 50%',
  },
  {
    title: 'Gharial Crocodile',
    subtitle: 'Track the prehistoric gharial in the river systems of the Terai',
    image: '/images/about/Gharial Crocodile.png',
    video: '/Hero Videos/Gharial Crocodile.mp4',
    thumb: '/images/about/Gharial Crocodile.png',
    alt: 'Gharial crocodile submerged in the Narayani river',
    position: '55% 50%',
  },
  {
    title: 'Snow Leopard',
    subtitle: 'Track the elusive Ghost of the Mountains in the high Himalayas',
    image: '/images/hero/snow-leopard.jpg',
    video: '/Hero Videos/Snow Leopard.mp4',
    thumb: '/images/hero/snow-leopard.jpg',
    alt: 'Majestic snow leopard in the Himalayan peaks',
    position: '75% 50%',
  },
  {
    title: 'One-Horned Rhino',
    subtitle: 'Witness the prehistoric giants of the Terai tropical jungles',
    image: '/images/hero/rhino.jpg',
    video: '/Hero Videos/One Horned Rhino.mp4',
    thumb: '/images/hero/rhino.jpg',
    alt: 'One-horned rhinoceros in Chitwan grasslands',
    position: '50% 50%',
  },
  {
    title: 'Royal Bengal Tiger',
    subtitle: 'Enter the kingdom of the jungle king in its natural habitat',
    image: '/images/hero/tiger.jpg',
    video: '/Hero Videos/Bengal Tiger.mp4',
    thumb: '/images/hero/tiger.jpg',
    alt: 'Bengal tiger walking through dense jungle',
    position: '80% 50%',
  },
  {
    title: 'Himalayan Flora',
    subtitle: 'Discover the vibrant world of Rhododendrons and alpine poppies',
    image: '/images/hero/flora.jpg',
    video: '/Hero Videos/Himalayan Flora.mp4',
    thumb: '/images/hero/flora.jpg',
    alt: 'Blue Himalayan poppies and pink rhododendrons',
    position: '90% 50%',
  },
]

function goToSlide(i) {
  currentSlide.value = i
  resetSlideTimer()
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

function resetSlideTimer() {
  if (slideInterval) clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 3000)
}

// ── API Fetching ──
// ── Static Data (Previously API Fetching) ──
const services = ref(staticServices)
const events = ref(staticEvents)
const testimonials = ref(staticTestimonials)
const blogPosts = ref(staticBlogPosts)

const activeService = ref(0)
const shutterGroupRef = ref(null)
const horizontalRevealRef = ref(null)
let serviceCycleInterval = null

function startServiceCycle() {
  if (serviceCycleInterval) clearInterval(serviceCycleInterval)
  serviceCycleInterval = setInterval(() => {
    activeService.value = (activeService.value + 1) % services.value.length
  }, 3000)
}

function handleServiceInteraction(index) {
  activeService.value = index
  startServiceCycle() // Reset interval on interaction
}

// ── Events Section Toggle ──
const showEvents = ref(true)

// ── Stats ──
const stats = [
  { value: 12, suffix: '+', label: 'National Parks' },
  { value: 350, suffix: '+', label: 'Bengal Tigers' },
  { value: 20, suffix: '%+', label: 'Land Protected' },
]
const statRefs = ref([])

const currentTestimonial = ref(0)

function nextTestimonial() {
  if (!testimonials.value) return
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length
}

function prevTestimonial() {
  if (!testimonials.value) return
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length
}

// ── Donation ──
const donationFrequency = ref('monthly')
const selectedAmount = ref(50)
const customAmount = ref('')
const donationAmounts = [30, 50, 100, 150]

function handleDonate() {
  const amount = customAmount.value || selectedAmount.value
  console.log(`Donation: $${amount} ${donationFrequency.value}`)
}

// ── Newsletter ──
const newsletterEmail = ref('')

function handleNewsletterSubmit() {
  console.log('Newsletter signup:', newsletterEmail.value)
  newsletterEmail.value = ''
}

// ── Blog Data ──
// blogPosts defined as static refs above

// ── Lifecycle ──
onMounted(async () => {
  resetSlideTimer()
  startServiceCycle()

  // Initial play for first slide
  if (videoRefs[0]) {
    videoRefs[0].play().catch(() => {})
  }

  // Ensure data is ready and nextTick for GSAP
  await nextTick()
  
  setTimeout(() => {
    fadeUp('.about-preview__info > *', { stagger: 0.1, trigger: '.about-preview' })
    clipReveal('.about-preview__image img', { trigger: '.about-preview__image' })

    // ── Horizontal Reveal Animation (About + Services) ──
    if (horizontalRevealRef.value) {
      const wrapper = horizontalRevealRef.value.querySelector('.horizontal-reveal-wrapper')
      
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalRevealRef.value,
          start: 'top top',
          end: '+=300%', // Decreased weight as requested
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      // Phase 1: Initial Hold (Pause on "About" section)
      horizontalTl.to({}, { duration: 0.4 }) 

      // Phase 2: The Slide
      horizontalTl.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth),
        ease: 'none',
        duration: 2
      })

      // Phase 3: The Final Hold (Pause on "Services" section)
      horizontalTl.to({}, { duration: 0.6 })
    }

    fadeUp('.donation-section__info > *', { stagger: 0.1, trigger: '.donation-section' })

    // ── Shutter Reveal Animation ──
    if (shutterGroupRef.value) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: shutterGroupRef.value,
          start: 'top top',
          end: '+=150%', // Standard snappy weight
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // Phase 1: Minimal Hold (0.4s equivalent)
      tl.to({}, { duration: 0.2 }) 

      // The Swap: Hide Static, Show Shutters
      tl.set('.shutter-reveal__static', { autoAlpha: 0 })
      tl.set('.shutter', { autoAlpha: 1 })

      // Phase 2: The Cut
      tl.to('.shutter--top', { yPercent: -100, ease: 'power2.in' }, '>-0.01')
      tl.to('.shutter--bottom', { yPercent: 100, ease: 'power2.in' }, '<')
      tl.to('.shutter-reveal__underlay', { opacity: 1, visibility: 'visible', ease: 'none' }, '<')
    }

    refresh()
  }, 1200)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
  if (serviceCycleInterval) clearInterval(serviceCycleInterval)
})
</script>

<style scoped>
/* ═══════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════ */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--jungle-deep);
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
}

.hero__slides {
  position: absolute;
  inset: 0;
}

.hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1200ms ease-in-out;
}

.hero__slide--active {
  opacity: 1;
}

.hero__slide-img,
.hero__slide-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transform: scale(1.05);
  transition: transform 8s ease-out;
}

.hero__slide-video {
  transform: scale(1.1);
}

.hero__slide--active .hero__slide-img,
.hero__slide--active .hero__slide-video {
  transform: scale(1);
}

.hero__slide--active .hero__slide-video {
  transform: scale(1.05);
}

.hero__slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 26, 18, 0.4) 0%,
    rgba(10, 26, 18, 0.2) 40%,
    rgba(10, 26, 18, 0.7) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--white);
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  color: var(--white);
  margin-bottom: var(--space-md);
  line-height: 1;
  text-shadow: 0 2px 40px rgba(0, 0, 0, 0.3);
}

.hero__subtitle {
  font-size: var(--text-lg);
  color: var(--white-70);
  margin-bottom: var(--space-2xl);
  font-style: italic;
  font-family: var(--font-display);
}

/* ── Hero Thumbnails ── */
.hero__thumbs {
  position: absolute;
  bottom: var(--space-3xl);
  left: var(--container-pad);
  z-index: 3;
  display: flex;
  gap: var(--space-sm);
}

@media (max-width: 768px) {
  .hero__thumbs {
    display: none; /* Hide thumbnails on tablets/mobile for cleaner look */
  }
}

.hero__thumb {
  width: 80px;
  height: 60px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--duration-base) ease;
  opacity: 0.5;
}

.hero__thumb--active {
  border-color: var(--electric-lime);
  opacity: 1;
}

.hero__thumb:hover {
  opacity: 0.9;
}

.hero__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Indicators ── */
.hero__indicators {
  position: absolute;
  bottom: var(--space-3xl);
  right: var(--container-pad);
  z-index: 3;
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

@media (max-width: 768px) {
  .hero__indicators {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    bottom: var(--space-xl);
  }
}

.hero__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-round);
  border: 1px solid var(--white-50);
  background: transparent;
  cursor: pointer;
  transition: all var(--duration-base) ease;
}

.hero__dot--active {
  background: var(--canopy-green);
  border-color: var(--canopy-green);
  width: 32px;
  border-radius: var(--radius-pill);
}

/* ═══════════════════════════════════════════
   HORIZONTAL REVEAL GROUP
═══════════════════════════════════════════ */
.horizontal-reveal-container {
  position: relative;
  overflow: hidden;
  background: var(--bone);
}

.horizontal-reveal-wrapper {
  display: flex;
  flex-wrap: nowrap;
  width: 200vw;
}

.about-preview {
  background-color: var(--bone);
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: var(--space-4xl) 0;
}

@media (max-width: 768px) {
  .about-preview {
    height: auto;
    min-height: 0;
    padding: var(--space-2xl) 0;
  }
}

.about-preview .container {
  max-height: 100%;
}

.about-preview__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .about-preview__grid {
    grid-template-columns: 1.2fr 0.8fr;
    gap: var(--space-4xl);
  }
}

.about-preview__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.about-preview__lead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--jungle-deep);
  font-weight: var(--weight-medium);
  margin-bottom: var(--space-2xs);
}

.about-preview__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  align-items: center;
  margin-top: var(--space-xs);
}

.about-preview__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: var(--radius-xl);
}

@media (max-width: 480px) {
  .about-preview__stats {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    text-align: center;
  }
}

.about-preview__stat {
  display: flex;
  flex-direction: column;
}

.about-preview__stat-number {
  font-family: var(--font-accent);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--jungle-deep);
  line-height: 1;
}

.about-preview__stat-label {
  font-size: 10px;
  color: var(--jungle-deep);
  letter-spacing: 0.1em;
  opacity: 0.7;
  margin-top: var(--space-2xs);
}

.about-preview__desc {
  font-size: var(--text-md);
  color: var(--charcoal-60);
  line-height: var(--leading-relaxed);
  max-width: 600px;
}

.about-preview__visual {
  position: relative;
}

.about-preview__image {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: visible;
}

.about-preview__image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
}

.about-preview__visit-card {
  position: absolute;
  bottom: -20px;
  left: -20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(20px);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 30px rgba(10, 26, 18, 0.1);
  z-index: 5;
}

@media (max-width: 1023px) {
  .about-preview__visit-card {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: var(--space-xl);
  }
}

.visit-card__item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.visit-card__icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--jungle-deep);
  color: var(--white);
  border-radius: var(--radius-lg);
}

.visit-card__icon svg {
  width: 18px;
  height: 18px;
}

.visit-card__text {
  display: flex;
  flex-direction: column;
}

.visit-card__text .label {
  font-size: 10px;
  color: var(--jungle-deep);
  opacity: 0.6;
}

.visit-card__text p {
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--jungle-deep);
}

.visit-card__divider {
  height: 1px;
  background: rgba(10, 26, 18, 0.1);
}

/* ═══════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════ */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr 340px; /* Reference: cards on right (~30%) */
    gap: var(--space-2xl);
  }
}

.services-grid__list {
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.services-section {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: var(--space-4xl) 0;
}

@media (max-width: 768px) {
  .services-section {
    height: auto;
    min-height: 0;
    padding: var(--space-2xl) 0;
  }
}

.services-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.services-bg__layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1000ms var(--ease-out-expo);
  transform: scale(1.05);
  transition-property: opacity, transform;
}

.services-bg__layer--active {
  opacity: 1;
  transform: scale(1);
}

.services-bg__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.services-bg__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to left,
    rgba(10, 26, 18, 0.95) 0%,
    rgba(10, 26, 18, 0.8) 30%,
    rgba(10, 26, 18, 0.4) 60%,
    transparent 100%
  );
  z-index: 1;
}

.service-item {
  display: flex;
  flex-direction: column;
  padding: var(--space-md) var(--space-lg); /* Reduced for vertical compression */
  border-radius: var(--radius-lg);
  color: var(--white);
  cursor: pointer;
  transition: all 600ms var(--ease-out-expo);
  background: transparent;
  border: none;
}

.service-item__content {
  display: flex;
  flex-direction: column;
}

.service-item--active {
  background: rgba(255, 255, 255, 0.08); /* Reference image highlight box */
  backdrop-filter: blur(10px);
}

/* Service item numbers removed as per reference */

.service-item__info {
  flex: 1;
}

.service-item__title {
  font-family: var(--font-body);
  font-size: var(--text-lg); /* Compact title */
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-2xs); /* Tighter spacing */
  color: var(--white);
}

.service-item__desc {
  font-size: var(--text-xs); /* Compact desc */
  color: var(--white-70);
  opacity: 0.8;
  line-height: 1.5;
  max-width: 340px;
}

.section-header--right {
  text-align: right;
  margin-bottom: var(--space-xl);
}

@media (max-width: 768px) {
  .section-header--right {
    text-align: center;
  }
}

.services-grid__canvas {
  height: 100%;
  pointer-events: none;
}

/* ═══════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════ */
.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .events-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.event-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--white);
  transition: all var(--duration-base) var(--ease-out-expo);
  box-shadow: var(--shadow-sm);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.event-card__image {
  position: relative;
  aspect-ratio: 16 / 7; /* Reference: much shorter image */
  overflow: hidden;
}

.event-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) ease;
}

.event-card:hover .event-card__image img {
  transform: scale(1.05);
}

.event-card__badge {
  position: absolute;
  top: var(--space-sm);
  left: var(--space-sm);
  padding: var(--space-2xs) var(--space-sm);
  background: var(--electric-lime);
  color: var(--jungle-deep);
  border-radius: var(--radius-sm);
  font-size: 10px;
}

.event-card__content {
  padding: var(--space-lg); /* Reduced for compression */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.event-card__title {
  font-family: var(--font-body);
  font-size: var(--text-lg); /* More compact title */
  font-weight: var(--weight-bold);
  color: var(--charcoal);
  margin-bottom: var(--space-2xs); /* Tighter spacing */
}

.event-card__desc {
  font-size: var(--text-xs); /* Smaller description */
  color: var(--charcoal-60);
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.event-card__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.event-card__time,
.event-card__location {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--charcoal-60);
}

.events-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: var(--space-4xl) 0;
  box-sizing: border-box;
}

.events-section__cta {
  text-align: center;
  margin-top: var(--space-xl);
}

/* Specific override for events CTA button arrow color on hover */
.events-section__cta :deep(.wild-btn:hover .wild-btn__arrow svg) {
  color: var(--jungle-deep) !important;
}

/* ═══════════════════════════════════════════
   NEWSLETTER
═══════════════════════════════════════════ */
/* ═══════════════════════════════════════════
   SHUTTER REVEAL
═══════════════════════════════════════════ */
.shutter-reveal {
  position: relative;
  overflow: hidden;
  background: var(--jungle-deep);
  height: 100vh;
  min-height: 600px;
}

@media (max-width: 768px) {
  .shutter-reveal {
    height: auto;
    min-height: 0;
  }
}

.shutter-reveal__underlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0; 
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shutter-reveal__split {
  position: relative;
  z-index: 2;
  height: 100%;
}

.shutter-reveal__static {
  position: absolute;
  inset: 0;
  z-index: 3;
}

.shutter {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  visibility: hidden; /* Start hidden */
  opacity: 0;
  backface-visibility: hidden;
  will-change: transform, clip-path;
  z-index: 2;
}

.shutter--top {
  clip-path: inset(0 0 50% 0);
  pointer-events: auto;
}

.shutter--bottom {
  clip-path: inset(50% 0 0 0);
}

.shutter .events-section {
  height: 100%;
  display: flex;
  align-items: center;
}

.shutter-reveal__underlay .newsletter-section {
  width: 100%;
  height: 100%;
}

.newsletter-section {
  position: relative;
  padding: var(--space-6xl) 0;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: 600px;
}

.newsletter-section__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.newsletter-section__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 26, 18, 0.75);
}

.newsletter-section__content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  margin-inline: auto;
}

.newsletter-section__title {
  font-size: var(--text-4xl);
  color: var(--white);
  margin: var(--space-md) 0 var(--space-md);
}

.newsletter-section__desc {
  color: var(--white-70);
  margin-bottom: var(--space-2xl);
}

.newsletter-section__form {
  display: flex;
  gap: var(--space-xs);
  max-width: 480px;
  margin-inline: auto;
}

@media (max-width: 480px) {
  .newsletter-section__form {
    flex-direction: column;
    gap: var(--space-md);
  }
}

.newsletter-section__input {
  flex: 1;
  padding: var(--space-md) var(--space-lg);
  background: var(--white-10);
  border: 1px solid var(--white-20);
  border-radius: var(--radius-pill);
  color: var(--white);
  font-size: var(--text-sm);
}

.newsletter-section__input::placeholder {
  color: var(--white-50);
}

.newsletter-section__input:focus {
  outline: none;
  border-color: var(--electric-lime);
}

/* ═══════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════ */
.testimonials-section {
  position: relative;
  overflow: hidden;
}

.testimonials-section__bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(6rem, 15vw, 16rem);
  color: var(--fog);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  opacity: 0.5;
}

.testimonials-slider {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  min-height: 520px;
  margin-bottom: var(--space-xl);
}

@media (max-width: 768px) {
  .testimonials-slider {
    min-height: 400px;
  }
}

.testimonial-card {
  position: absolute;
  max-width: 700px;
  text-align: center;
  padding: var(--space-2xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 500ms var(--ease-out-expo);
  pointer-events: none;
}

.testimonial-card--active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.testimonial-card__stars {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: var(--space-lg);
}

.testimonial-card__quote {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-style: italic;
  color: var(--charcoal);
  margin-bottom: var(--space-xl);
  line-height: 1.4;
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: var(--space-lg);
  }
  
  .testimonial-card__quote {
    font-size: var(--text-xl);
  }
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  justify-content: center;
}

.testimonial-card__avatar-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-round);
  background: var(--canopy-green);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.testimonial-card__avatar-icon svg {
  width: 100%;
  height: 100%;
}

.testimonial-card__name {
  display: block;
  font-size: var(--text-base);
  color: var(--charcoal);
}

.testimonial-card__role {
  font-size: var(--text-sm);
  color: var(--charcoal-60);
}

.testimonials-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  position: relative;
  z-index: 1;
  margin-top: var(--space-xl);
}

.testimonials-nav__btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  border: 1px solid var(--fog);
  transition: all var(--duration-base) ease;
}

.testimonials-nav__btn:hover {
  border-color: var(--jungle-dark);
  background: var(--jungle-dark);
  color: var(--white);
}

.testimonials-nav__btn svg {
  width: 20px;
  height: 20px;
}

.testimonials-dot {
  width: 12px;
  height: 4px;
  border-radius: 2px;
  background: var(--charcoal-10);
  border: none;
  cursor: pointer;
  transition: all 400ms var(--ease-out-expo);
  padding: 0;
}

.testimonials-dot--active {
  background: var(--jungle-dark);
  width: 48px;
  box-shadow: 0 0 15px rgba(10, 26, 18, 0.2);
}

.testimonials-dots {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* ═══════════════════════════════════════════
   DONATION
═══════════════════════════════════════════ */
.donation-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, rgba(10, 26, 18, 0.9), rgba(10, 26, 18, 0.6)), url('/images/hero/rhino.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax-like effect */
}

.donation-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (max-width: 1023px) {
  .donation-section__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}

.donation-section__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  position: relative;
  z-index: 1;
}

.donation-section__title {
  font-size: var(--text-4xl);
  color: var(--white);
  margin: var(--space-md) 0 var(--space-lg);
}

.donation-section__desc {
  color: var(--white-70);
  margin-bottom: var(--space-xl);
  max-width: 460px;
}

.donation-section__form-card {
  background: var(--ivory);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
}

.donation-tabs {
  display: flex;
  background: var(--fog);
  border-radius: var(--radius-pill);
  padding: 4px;
  margin-bottom: var(--space-xl);
}

.donation-tabs__tab {
  flex: 1;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--charcoal-60);
  transition: all var(--duration-base) ease;
}

.donation-tabs__tab--active {
  background: var(--jungle-dark);
  color: var(--white);
}

.donation-amounts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.donation-amount {
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--fog);
  border-radius: var(--radius-lg);
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--charcoal);
  text-align: center;
  cursor: pointer;
  transition: all var(--duration-base) ease;
}

.donation-amount:hover {
  border-color: var(--jungle-dark);
}

.donation-amount--active {
  border-color: var(--electric-lime);
  background: var(--electric-lime-20);
}

.donation-amount--custom {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  cursor: default;
}

.donation-amount__input {
  border: none;
  background: transparent;
  width: 100%;
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  color: var(--charcoal);
}

.donation-amount__input::placeholder {
  color: var(--charcoal-40);
}

.donation-amount__input:focus {
  outline: none;
}

/* ═══════════════════════════════════════════
   BLOG GRID
═══════════════════════════════════════════ */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--white);
  transition: all var(--duration-base) var(--ease-out-expo);
  box-shadow: var(--shadow-sm);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.blog-card__image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.blog-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) ease;
}

.blog-card:hover .blog-card__image img {
  transform: scale(1.05);
}

.blog-card__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--space-lg);
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
}

.blog-card__category {
  color: var(--canopy-green);
}

.blog-card__date {
  font-size: var(--text-xs);
  color: var(--charcoal-40);
}

.blog-card__title {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  color: var(--charcoal);
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card__excerpt {
  font-size: var(--text-sm);
  color: var(--charcoal-60);
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card__read-more {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--canopy-green);
  transition: color var(--duration-fast) ease;
}

.blog-card__read-more svg {
  transition: transform var(--duration-base) var(--ease-out-expo);
}

.blog-card:hover .blog-card__read-more {
  color: var(--jungle-dark);
}

.blog-card:hover .blog-card__read-more svg {
  transform: rotate(45deg) scale(1.05);
}

.blog-section {
  padding-bottom: 150px; /* Add extra clearance for floating navigation bar */
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
/* ── Standard Responsive Overrides ── */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

/* --- Special Button Override (Plan Your Visit) --- */
#about-visit-btn:hover :deep(.wild-btn__arrow svg),
#donation-submit-btn:hover :deep(.wild-btn__arrow svg) {
  color: var(--electric-lime) !important;
}

#about-visit-btn:hover,
#donation-submit-btn:hover {
  background: var(--electric-lime) !important;
}
</style>
