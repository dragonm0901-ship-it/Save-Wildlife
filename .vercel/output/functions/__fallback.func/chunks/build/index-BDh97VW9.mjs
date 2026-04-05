import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { _ as __nuxt_component_1 } from './SectionLabel-CvX_xHGr.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { ref, watch, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/images/about/dolphin.png");
const staticServices = [
  {
    id: 1,
    slug: "jungle-safari",
    title: "Jungle Safari",
    description: "Traverse dense sal forests and open grasslands on a classic 4x4 safari. Spot Bengal tigers, one-horned rhinos, sloth bears, and over 500 bird species with expert naturalist guides.",
    image: "/images/offers/1.Jungle.png",
    price: 85,
    sort_order: 1,
    highlights: ["4x4 open-top vehicle", "Expert naturalist guide", "4-hour immersive experience", "Binoculars provided", "Morning & evening departures"]
  },
  {
    id: 2,
    slug: "canoe-expedition",
    title: "Canoe Expedition",
    description: "Glide silently along the Rapti and Narayani rivers in a traditional dugout canoe. Observe gharial crocodiles, marsh muggers, kingfishers, and river dolphins from just meters away.",
    image: "/images/offers/2 Boating.png",
    price: 45,
    sort_order: 2,
    highlights: ["Traditional dugout canoe", "River wildlife spotting", "2-hour peaceful journey", "Expert river guide", "Suitable for all ages"]
  },
  {
    id: 3,
    slug: "nature-walk",
    title: "Guided Nature Walk",
    description: "Walk through the buffer zone forests with certified guides who reveal the hidden stories of the jungle — from medicinal plants used by Tharu healers to tracking signs left by nocturnal predators.",
    image: "/images/offers/3 Tour.png",
    price: 35,
    sort_order: 3,
    highlights: ["Certified forest guide", "Medicinal plant identification", "Animal tracking session", "3-hour forest immersion", "Small groups (max 10)"]
  },
  {
    id: 4,
    slug: "elephant-encounter",
    title: "Ethical Elephant Encounter",
    description: "Meet our rescued elephants in a respectful, no-riding setting. Learn about their individual rescue stories, help prepare their meals, and watch them bathe in the river — an unforgettable connection.",
    image: "/images/offers/4 Elephant.png",
    price: 60,
    sort_order: 4,
    highlights: ["No-riding ethical approach", "Feed & bathe the elephants", "Learn rescue stories", "Professional keepers present", "Photography opportunities"]
  },
  {
    id: 5,
    slug: "bird-watching-tour",
    title: "Bird Watching Tour",
    description: "Nepal boasts over 880 bird species across its diverse ecosystems. Our expert ornithologists will guide you through wetlands, forests, and grasslands to observe resident and migratory species.",
    image: "/images/offers/5 Bird.png",
    price: 50,
    sort_order: 5,
    highlights: ["Professional ornithologist", "Premium binoculars & scopes", "Species checklist included", "5-hour guided session", "Dawn & dusk departures"]
  }
];
const staticEvents = [
  {
    id: 1,
    slug: "nightfall-safari",
    title: "Nightfall Safari Experience",
    description: "Embark on a guided nocturnal safari through the Terai grasslands. Witness the elusive nightlife of the jungle — from hunting owls to prowling leopards — under a canopy of stars.",
    category: "SAFARI",
    location: "Chitwan National Park, Terai",
    date: "2026-05-15",
    start_time: "18:00",
    end_time: "22:00",
    time: "18:00 - 22:00",
    capacity: "24 guests",
    price: "NPR 8,500 / person",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
  },
  {
    id: 2,
    slug: "himalayan-bird-watching-festival",
    title: "Himalayan Bird Watching Festival",
    description: "Join ornithologists and fellow birders for a three-day festival celebrating Nepal's incredible avian diversity. Guided walks, photography workshops, and expert presentations.",
    category: "FESTIVAL",
    location: "Koshi Tappu Wildlife Reserve",
    date: "2026-06-10",
    start_time: "06:00",
    end_time: "17:00",
    time: "06:00 - 17:00",
    capacity: "60 guests",
    price: "NPR 5,000 / person",
    image: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80"
  },
  {
    id: 3,
    slug: "conservation-photography-workshop",
    title: "Conservation Photography Workshop",
    description: "Learn wildlife photography from award-winning photographers in one of the world's most biodiverse regions. Cover techniques for capturing animals in their natural habitat with minimal disturbance.",
    category: "WORKSHOP",
    location: "Bardia National Park",
    date: "2026-07-20",
    start_time: "07:00",
    end_time: "16:00",
    time: "07:00 - 16:00",
    capacity: "16 guests",
    price: "NPR 12,000 / person",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
  },
  {
    id: 4,
    slug: "wildlife-rescue-awareness",
    title: "Wildlife Rescue Awareness Day",
    description: "Meet our rehabilitation team and learn about the rescue process for injured Himalayan species. A rare look behind the scenes of our specialized medical facility.",
    category: "COMMUNITY",
    location: "Rescue Center, Buffer Zone",
    date: "2026-08-05",
    start_time: "10:00",
    end_time: "15:00",
    time: "10:00 - 15:00",
    capacity: "100 guests",
    price: "Free Entry",
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&q=80"
  }
];
const staticTestimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Travel Journalist",
    content: "The nightfall safari was nothing short of magical. Hearing a tiger's call echo through the darkness while a million stars shone overhead — it was the most profound wildlife experience of my career.",
    rating: 5
  },
  {
    id: 2,
    name: "James Maharjan",
    role: "Conservation Photographer",
    content: "I've photographed wildlife across four continents, but nothing compares to the raw, up-close encounters at Save Wildlife. The ethical elephant encounter left me speechless — these animals are truly loved here.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Wright",
    role: "Family Tourist",
    content: "We brought our three kids and every single one of them said it was the best day of their lives. The Junior Ranger program is brilliantly designed — educational without being preachy. We'll be back!",
    rating: 5
  }
];
const staticBlogPosts = [
  {
    id: 1,
    slug: "nepal-tiger-population-record-high",
    title: "Nepal's Tiger Population Reaches Record High",
    category: "Conservation",
    author_name: "Dr. Asha Gurung",
    excerpt: "The 2025-2026 National Tiger Census confirms that Nepal’s wild tiger population has nearly tripled since 2009. We explore the community-led strategies and habitat restoration projects that made this global conservation milestone possible.",
    date: "2026-03-15",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80"
  },
  {
    id: 2,
    slug: "planning-your-first-safari",
    title: "Planning Your First Safari in the Terai",
    category: "Travel Guide",
    author_name: "Sita Rai",
    excerpt: "From choosing between a 4x4 or a canoe to knowing what colors to wear for camouflage, our comprehensive guide covers everything you need to know for a respectful and rewarding wildlife encounter in Nepal.",
    date: "2026-02-28",
    image: "https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=800&q=80"
  },
  {
    id: 3,
    slug: "celebrating-diversity-of-animals",
    title: "The Silent Guardians: Why Nepal's Biodiversity Matters",
    category: "Conservation",
    author_name: "Bikram Thapa",
    excerpt: 'Beyond the "Big Cats" lies a complex web of life. Discover the vital roles played by lesser-known species, from the river-dwelling gharials to the high-alpine snow leopards, in maintaining our delicate ecosystems.',
    date: "2026-01-10",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80"
  },
  {
    id: 4,
    slug: "community-conservation-success-stories",
    title: "Community Success: Tharu Guardians of the Forest",
    category: "Community",
    author_name: "Dr. Asha Gurung",
    excerpt: "How local villages in the Terai buffer zone have transformed from being at odds with wildlife to becoming its most passionate protectors, proving that local stewardship is the key to lasting change.",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80"
  }
];
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: null });
    const currentSlide = ref(0);
    ref(null);
    const videoRefs = [];
    watch(currentSlide, (newVal, oldVal) => {
      const newVideo = videoRefs[newVal];
      const oldVideo = videoRefs[oldVal];
      if (newVideo) {
        newVideo.play().catch(() => {
        });
      }
      if (oldVideo) {
        setTimeout(() => {
          if (currentSlide.value !== oldVal) {
            oldVideo.pause();
          }
        }, 1200);
      }
    });
    const heroSlides = [
      {
        title: "Asiatic Elephant",
        subtitle: "Witness the gentle giants of the lowland forests in their natural habitat",
        image: "/images/about/Ethical Elephant Visit.png",
        video: "/Hero Videos/Asiatic Elephant.mp4",
        thumb: "/images/about/Ethical Elephant Visit.png",
        alt: "Asiatic elephant roaming the Terai jungles",
        position: "50% 50%"
      },
      {
        title: "Spotted Linsang",
        subtitle: "Discover the mysterious and rare linsang in the dense subtropical forests",
        image: "/images/hero/spotted-linsang.png",
        video: "/Hero Videos/Spotted Pisang.mp4",
        thumb: "/images/hero/spotted-linsang.png",
        alt: "Spotted linsang on a tree branch",
        position: "75% 50%"
      },
      {
        title: "Danfe (Lophophorus)",
        subtitle: "Witness the iridescent beauty of Nepal's national bird",
        image: "/images/hero/danfe.png",
        video: "/Hero Videos/danfe.mp4",
        thumb: "/images/hero/danfe.png",
        alt: "Vibrant Himalayan Monal (Danfe) in the snow",
        position: "50% 50%"
      },
      {
        title: "Red Panda",
        subtitle: "Meet the firefox of the Himalayan bamboo forests",
        image: "/images/hero/red-panda.png",
        video: "/Hero Videos/Red Panda.mp4",
        thumb: "/images/hero/red-panda.png",
        alt: "Red panda on a mossy branch",
        position: "70% 50%"
      },
      {
        title: "Gharial Crocodile",
        subtitle: "Track the prehistoric gharial in the river systems of the Terai",
        image: "/images/about/Gharial Crocodile.png",
        video: "/Hero Videos/Gharial Crocodile.mp4",
        thumb: "/images/about/Gharial Crocodile.png",
        alt: "Gharial crocodile submerged in the Narayani river",
        position: "55% 50%"
      },
      {
        title: "Snow Leopard",
        subtitle: "Track the elusive Ghost of the Mountains in the high Himalayas",
        image: "/images/hero/snow-leopard.jpg",
        video: "/Hero Videos/Snow Leopard.mp4",
        thumb: "/images/hero/snow-leopard.jpg",
        alt: "Majestic snow leopard in the Himalayan peaks",
        position: "75% 50%"
      },
      {
        title: "One-Horned Rhino",
        subtitle: "Witness the prehistoric giants of the Terai tropical jungles",
        image: "/images/hero/rhino.jpg",
        video: "/Hero Videos/One Horned Rhino.mp4",
        thumb: "/images/hero/rhino.jpg",
        alt: "One-horned rhinoceros in Chitwan grasslands",
        position: "50% 50%"
      },
      {
        title: "Royal Bengal Tiger",
        subtitle: "Enter the kingdom of the jungle king in its natural habitat",
        image: "/images/hero/tiger.jpg",
        video: "/Hero Videos/Bengal Tiger.mp4",
        thumb: "/images/hero/tiger.jpg",
        alt: "Bengal tiger walking through dense jungle",
        position: "80% 50%"
      },
      {
        title: "Himalayan Flora",
        subtitle: "Discover the vibrant world of Rhododendrons and alpine poppies",
        image: "/images/hero/flora.jpg",
        video: "/Hero Videos/Himalayan Flora.mp4",
        thumb: "/images/hero/flora.jpg",
        alt: "Blue Himalayan poppies and pink rhododendrons",
        position: "90% 50%"
      }
    ];
    const services = ref(staticServices);
    const events = ref(staticEvents);
    const testimonials = ref(staticTestimonials);
    const blogPosts = ref(staticBlogPosts);
    const activeService = ref(0);
    ref(null);
    ref(null);
    let serviceCycleInterval = null;
    function startServiceCycle() {
      if (serviceCycleInterval) clearInterval(serviceCycleInterval);
      serviceCycleInterval = setInterval();
    }
    function handleServiceInteraction(index2) {
      activeService.value = index2;
      startServiceCycle();
    }
    ref(true);
    const stats = [
      { value: 12, suffix: "+", label: "National Parks" },
      { value: 350, suffix: "+", label: "Bengal Tigers" },
      { value: 20, suffix: "%+", label: "Land Protected" }
    ];
    ref([]);
    const currentTestimonial = ref(0);
    const donationFrequency = ref("monthly");
    const selectedAmount = ref(50);
    const customAmount = ref("");
    const donationAmounts = [30, 50, 100, 150];
    function handleDonate() {
      const amount = customAmount.value || selectedAmount.value;
      console.log(`Donation: $${amount} ${donationFrequency.value}`);
    }
    const newsletterEmail = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      const _component_UiSectionLabel = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-aa194bf9><section class="hero" id="hero-section" data-v-aa194bf9><div class="hero__slides" data-v-aa194bf9><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ "hero__slide--active": currentSlide.value === i }, "hero__slide"])}" data-v-aa194bf9>`);
        if (slide.video) {
          _push(`<video${ssrRenderAttr("src", slide.video)} class="hero__slide-video" style="${ssrRenderStyle({ objectPosition: slide.position || "50% 50%" })}" muted playsinline preload="auto" data-v-aa194bf9></video>`);
        } else {
          _push(`<img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.alt)} class="hero__slide-img" loading="eager" data-v-aa194bf9>`);
        }
        _push(`<div class="hero__slide-overlay" data-v-aa194bf9></div></div>`);
      });
      _push(`<!--]--></div><div class="hero__content container" data-v-aa194bf9><h1 class="hero__title" data-v-aa194bf9>${ssrInterpolate(heroSlides[currentSlide.value].title)}</h1><p class="hero__subtitle" data-v-aa194bf9>${ssrInterpolate(heroSlides[currentSlide.value].subtitle)}</p>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/animals-birds",
        variant: "primary",
        size: "lg",
        arrow: true,
        id: "hero-discover-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discover Animals `);
          } else {
            return [
              createTextVNode(" Discover Animals ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero__thumbs" data-v-aa194bf9><!--[-->`);
      ssrRenderList(heroSlides, (slide, i) => {
        _push(`<button class="${ssrRenderClass([{ "hero__thumb--active": currentSlide.value === i }, "hero__thumb"])}"${ssrRenderAttr("aria-label", `Go to slide ${i + 1}`)} data-v-aa194bf9><img${ssrRenderAttr("src", slide.thumb)}${ssrRenderAttr("alt", slide.alt)} data-v-aa194bf9></button>`);
      });
      _push(`<!--]--></div><div class="hero__indicators" data-v-aa194bf9><!--[-->`);
      ssrRenderList(heroSlides, (_, i) => {
        _push(`<button class="${ssrRenderClass([{ "hero__dot--active": currentSlide.value === i }, "hero__dot"])}"${ssrRenderAttr("aria-label", `Slide ${i + 1}`)} data-v-aa194bf9></button>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_UiSectionLabel, {
        items: ["INSPIRING WILDLIFE", "DISCOVER THE WILD", "CONSERVATION MATTERS", "EXPLORE NATURE"],
        dark: true
      }, null, _parent));
      _push(`<div class="horizontal-reveal-container" data-v-aa194bf9><div class="horizontal-reveal-wrapper" data-v-aa194bf9><section class="about-preview section" id="about-preview" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="section-header" data-v-aa194bf9><span class="section-header__label" style="${ssrRenderStyle({ "color": "var(--jungle-deep)" })}" data-v-aa194bf9>Since 1974</span><h2 class="section-header__title" style="${ssrRenderStyle({ "color": "var(--charcoal)" })}" data-v-aa194bf9>Where Wildlife <br data-v-aa194bf9> Meets Wonder</h2></div><div class="about-preview__grid" data-v-aa194bf9><div class="about-preview__info" data-v-aa194bf9><p class="about-preview__lead" data-v-aa194bf9> A sanctuary for heritage, conservation, and discovery. Experience the majesty of nature&#39;s foundations while supporting the rescue and rehabilitation of our planet&#39;s most vulnerable species. </p><div class="about-preview__stats" data-v-aa194bf9><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="about-preview__stat" data-v-aa194bf9><span class="about-preview__stat-number"${ssrRenderAttr("data-target", stat.value)} data-v-aa194bf9>${ssrInterpolate(stat.value)}${ssrInterpolate(stat.suffix)}</span><span class="about-preview__stat-label label" data-v-aa194bf9>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div><p class="about-preview__desc" data-v-aa194bf9> Our sanctuary is home to a diverse collection of animals from across the globe, including majestic big cats, curious primates, colorful birds, and fascinating reptiles. Every visit becomes a chapter in your personal story of discovery. </p><div class="about-preview__actions" data-v-aa194bf9>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/tickets",
        variant: "primary",
        arrow: true,
        id: "about-visit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Plan Your Visit `);
          } else {
            return [
              createTextVNode(" Plan Your Visit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/about",
        variant: "outline-dark",
        id: "about-more-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read Our Story `);
          } else {
            return [
              createTextVNode(" Read Our Story ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="about-preview__visual" data-v-aa194bf9><div class="about-preview__image" data-v-aa194bf9><img${ssrRenderAttr("src", _imports_0)} alt="Endangered Gangetic river dolphin in the Rapti river rapids" loading="lazy" data-v-aa194bf9><div class="about-preview__visit-card glass-card" data-v-aa194bf9><div class="visit-card__item" data-v-aa194bf9><div class="visit-card__icon" data-v-aa194bf9><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-aa194bf9><circle cx="12" cy="12" r="10" data-v-aa194bf9></circle><polyline points="12 6 12 12 16 14" data-v-aa194bf9></polyline></svg></div><div class="visit-card__text" data-v-aa194bf9><span class="label" data-v-aa194bf9>Opening Hours</span><p data-v-aa194bf9>8:00 AM - 8:00 PM</p></div></div><div class="visit-card__divider" data-v-aa194bf9></div><div class="visit-card__item" data-v-aa194bf9><div class="visit-card__icon" data-v-aa194bf9><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-aa194bf9><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-aa194bf9></path><circle cx="12" cy="10" r="3" data-v-aa194bf9></circle></svg></div><div class="visit-card__text" data-v-aa194bf9><span class="label" data-v-aa194bf9>Location</span><p data-v-aa194bf9>Royal Road, Chitwan</p></div></div></div></div></div></div></div></section><section class="services-section section section--dark" id="services-section" data-v-aa194bf9><div class="services-bg" data-v-aa194bf9><!--[-->`);
      ssrRenderList(services.value, (service, i) => {
        _push(`<div class="${ssrRenderClass([{ "services-bg__layer--active": activeService.value === i }, "services-bg__layer"])}" data-v-aa194bf9><img${ssrRenderAttr("src", service.image)}${ssrRenderAttr("alt", service.title)} class="services-bg__img" data-v-aa194bf9></div>`);
      });
      _push(`<!--]--><div class="services-bg__overlay" data-v-aa194bf9></div></div><div class="container container--wide" style="${ssrRenderStyle({ "position": "relative", "z-index": "2" })}" data-v-aa194bf9><div class="section-header section-header--right" data-v-aa194bf9><span class="section-header__label" style="${ssrRenderStyle({ "color": "var(--electric-lime)" })}" data-v-aa194bf9>What We Offer</span><h2 class="section-header__title" style="${ssrRenderStyle({ "color": "var(--white)" })}" data-v-aa194bf9>Discover Our Experiences</h2></div><div class="services-grid" data-v-aa194bf9><div class="services-grid__canvas" data-v-aa194bf9></div><div class="services-grid__list" data-v-aa194bf9><!--[-->`);
      ssrRenderList(services.value, (service, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: service.slug,
          to: `/services/${service.slug}`,
          class: ["service-item", { "service-item--active": activeService.value === i }],
          onMouseenter: ($event) => handleServiceInteraction(i)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="service-item__content" data-v-aa194bf9${_scopeId}><div class="service-item__info" data-v-aa194bf9${_scopeId}><h3 class="service-item__title" data-v-aa194bf9${_scopeId}>${ssrInterpolate(service.title)}</h3>`);
              if (service.description || service.desc) {
                _push2(`<p class="service-item__desc" data-v-aa194bf9${_scopeId}>${ssrInterpolate(service.description || service.desc)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "service-item__content" }, [
                  createVNode("div", { class: "service-item__info" }, [
                    createVNode("h3", { class: "service-item__title" }, toDisplayString(service.title), 1),
                    service.description || service.desc ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "service-item__desc"
                    }, toDisplayString(service.description || service.desc), 1)) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></section></div></div><div class="shutter-reveal" data-v-aa194bf9><div class="shutter-reveal__underlay" data-v-aa194bf9><section class="newsletter-section" id="newsletter-section" data-v-aa194bf9><img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1600&amp;q=80" alt="Wildlife keeper with giraffes" class="newsletter-section__bg" loading="lazy" data-v-aa194bf9><div class="newsletter-section__overlay" data-v-aa194bf9></div><div class="container newsletter-section__content" data-v-aa194bf9><span class="label" style="${ssrRenderStyle({ "color": "var(--electric-lime)" })}" data-v-aa194bf9>Stay Informed</span><h2 class="newsletter-section__title" data-v-aa194bf9>Be the First to Know</h2><p class="newsletter-section__desc" data-v-aa194bf9> Subscribe to receive updates about new animal arrivals, upcoming events, and special offers. </p><form class="newsletter-section__form" data-v-aa194bf9><input type="email"${ssrRenderAttr("value", newsletterEmail.value)} placeholder="Your email address" required class="newsletter-section__input" id="newsletter-email" data-v-aa194bf9>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        type: "submit",
        variant: "primary",
        id: "newsletter-submit-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Subscribe `);
          } else {
            return [
              createTextVNode(" Subscribe ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></section></div><div class="shutter-reveal__split" data-v-aa194bf9><div class="shutter-reveal__static" data-v-aa194bf9><section class="events-section section section--bone" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="section-header" data-v-aa194bf9><span class="section-header__label" data-v-aa194bf9>Upcoming Events</span><h2 class="section-header__title" data-v-aa194bf9>Our Save Wildlife Events</h2></div><div class="events-grid" data-v-aa194bf9><!--[-->`);
      ssrRenderList(unref(staticEvents), (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.slug,
          to: `/events/${event.slug}`,
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-card__image" data-v-aa194bf9${_scopeId}><img${ssrRenderAttr("src", event.image)}${ssrRenderAttr("alt", event.title)} loading="lazy" data-v-aa194bf9${_scopeId}><span class="event-card__badge label" data-v-aa194bf9${_scopeId}>EVENTS</span></div><div class="event-card__content" data-v-aa194bf9${_scopeId}><h3 class="event-card__title" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.title)}</h3><p class="event-card__desc" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.description)}</p><div class="event-card__meta" data-v-aa194bf9${_scopeId}><span class="event-card__time" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><circle cx="12" cy="12" r="10" data-v-aa194bf9${_scopeId}></circle><polyline points="12 6 12 12 16 14" data-v-aa194bf9${_scopeId}></polyline></svg> ${ssrInterpolate(event.time || event.start_time)}</span><span class="event-card__location" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-aa194bf9${_scopeId}></path><circle cx="12" cy="10" r="3" data-v-aa194bf9${_scopeId}></circle></svg> ${ssrInterpolate(event.location)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "event-card__image" }, [
                  createVNode("img", {
                    src: event.image,
                    alt: event.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("span", { class: "event-card__badge label" }, "EVENTS")
                ]),
                createVNode("div", { class: "event-card__content" }, [
                  createVNode("h3", { class: "event-card__title" }, toDisplayString(event.title), 1),
                  createVNode("p", { class: "event-card__desc" }, toDisplayString(event.description), 1),
                  createVNode("div", { class: "event-card__meta" }, [
                    createVNode("span", { class: "event-card__time" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10"
                        }),
                        createVNode("polyline", { points: "12 6 12 12 16 14" })
                      ])),
                      createTextVNode(" " + toDisplayString(event.time || event.start_time), 1)
                    ]),
                    createVNode("span", { class: "event-card__location" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
                        createVNode("circle", {
                          cx: "12",
                          cy: "10",
                          r: "3"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(event.location), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="events-section__cta" data-v-aa194bf9>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/events",
        variant: "secondary",
        arrow: true,
        id: "events-explore-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore More Events `);
          } else {
            return [
              createTextVNode(" Explore More Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div><div class="shutter shutter--top" data-v-aa194bf9><section class="events-section section section--bone" id="events-section" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="section-header" data-v-aa194bf9><span class="section-header__label" data-v-aa194bf9>Upcoming Events</span><h2 class="section-header__title" data-v-aa194bf9>Our Save Wildlife Events</h2></div><div class="events-grid" data-v-aa194bf9><!--[-->`);
      ssrRenderList(events.value, (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.slug,
          to: `/events/${event.slug}`,
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-card__image" data-v-aa194bf9${_scopeId}><img${ssrRenderAttr("src", event.image)}${ssrRenderAttr("alt", event.title)} loading="lazy" data-v-aa194bf9${_scopeId}><span class="event-card__badge label" data-v-aa194bf9${_scopeId}>EVENTS</span></div><div class="event-card__content" data-v-aa194bf9${_scopeId}><h3 class="event-card__title" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.title)}</h3><p class="event-card__desc" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.description)}</p><div class="event-card__meta" data-v-aa194bf9${_scopeId}><span class="event-card__time" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><circle cx="12" cy="12" r="10" data-v-aa194bf9${_scopeId}></circle><polyline points="12 6 12 12 16 14" data-v-aa194bf9${_scopeId}></polyline></svg> ${ssrInterpolate(event.time || event.start_time)}</span><span class="event-card__location" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-aa194bf9${_scopeId}></path><circle cx="12" cy="10" r="3" data-v-aa194bf9${_scopeId}></circle></svg> ${ssrInterpolate(event.location)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "event-card__image" }, [
                  createVNode("img", {
                    src: event.image,
                    alt: event.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("span", { class: "event-card__badge label" }, "EVENTS")
                ]),
                createVNode("div", { class: "event-card__content" }, [
                  createVNode("h3", { class: "event-card__title" }, toDisplayString(event.title), 1),
                  createVNode("p", { class: "event-card__desc" }, toDisplayString(event.description), 1),
                  createVNode("div", { class: "event-card__meta" }, [
                    createVNode("span", { class: "event-card__time" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10"
                        }),
                        createVNode("polyline", { points: "12 6 12 12 16 14" })
                      ])),
                      createTextVNode(" " + toDisplayString(event.time || event.start_time), 1)
                    ]),
                    createVNode("span", { class: "event-card__location" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
                        createVNode("circle", {
                          cx: "12",
                          cy: "10",
                          r: "3"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(event.location), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="events-section__cta" data-v-aa194bf9>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/events",
        variant: "secondary",
        arrow: true,
        id: "events-explore-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore More Events `);
          } else {
            return [
              createTextVNode(" Explore More Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div><div class="shutter shutter--bottom" data-v-aa194bf9><section class="events-section section section--bone" aria-hidden="true" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="section-header" data-v-aa194bf9><span class="section-header__label" data-v-aa194bf9>Upcoming Events</span><h2 class="section-header__title" data-v-aa194bf9>Our Save Wildlife Events</h2></div><div class="events-grid" data-v-aa194bf9><!--[-->`);
      ssrRenderList(events.value, (event) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: event.slug,
          tabindex: "-1",
          class: "event-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="event-card__image" data-v-aa194bf9${_scopeId}><img${ssrRenderAttr("src", event.image)} aria-hidden="true" data-v-aa194bf9${_scopeId}><span class="event-card__badge label" data-v-aa194bf9${_scopeId}>EVENTS</span></div><div class="event-card__content" data-v-aa194bf9${_scopeId}><h3 class="event-card__title" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.title)}</h3><p class="event-card__desc" data-v-aa194bf9${_scopeId}>${ssrInterpolate(event.description)}</p><div class="event-card__meta" data-v-aa194bf9${_scopeId}><span class="event-card__time" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><circle cx="12" cy="12" r="10" data-v-aa194bf9${_scopeId}></circle><polyline points="12 6 12 12 16 14" data-v-aa194bf9${_scopeId}></polyline></svg> ${ssrInterpolate(event.time || event.start_time)}</span><span class="event-card__location" data-v-aa194bf9${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-aa194bf9${_scopeId}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-aa194bf9${_scopeId}></path><circle cx="12" cy="10" r="3" data-v-aa194bf9${_scopeId}></circle></svg> ${ssrInterpolate(event.location)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "event-card__image" }, [
                  createVNode("img", {
                    src: event.image,
                    "aria-hidden": "true"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "event-card__badge label" }, "EVENTS")
                ]),
                createVNode("div", { class: "event-card__content" }, [
                  createVNode("h3", { class: "event-card__title" }, toDisplayString(event.title), 1),
                  createVNode("p", { class: "event-card__desc" }, toDisplayString(event.description), 1),
                  createVNode("div", { class: "event-card__meta" }, [
                    createVNode("span", { class: "event-card__time" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "12",
                          r: "10"
                        }),
                        createVNode("polyline", { points: "12 6 12 12 16 14" })
                      ])),
                      createTextVNode(" " + toDisplayString(event.time || event.start_time), 1)
                    ]),
                    createVNode("span", { class: "event-card__location" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "14",
                        height: "14"
                      }, [
                        createVNode("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
                        createVNode("circle", {
                          cx: "12",
                          cy: "10",
                          r: "3"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(event.location), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="events-section__cta" data-v-aa194bf9><div class="wild-btn wild-btn--secondary" data-v-aa194bf9>Explore More Events</div></div></div></section></div></div></div><section class="testimonials-section section section--bone" id="testimonials-section" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="testimonials-section__bg-text" data-v-aa194bf9>Testimonials</div><div class="section-header" data-v-aa194bf9><span class="section-header__label" data-v-aa194bf9>What Visitors Say</span><h2 class="section-header__title" data-v-aa194bf9>Stories from Our Community</h2></div><div class="testimonials-slider" data-v-aa194bf9><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial, i) => {
        _push(`<div class="${ssrRenderClass([{ "testimonial-card--active": currentTestimonial.value === i }, "testimonial-card"])}" data-v-aa194bf9><div class="testimonial-card__stars" data-v-aa194bf9><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<svg viewBox="0 0 24 24" fill="var(--jungle-dark)" width="16" height="16" data-v-aa194bf9><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-v-aa194bf9></polygon></svg>`);
        });
        _push(`<!--]--></div><blockquote class="testimonial-card__quote" data-v-aa194bf9> &quot;${ssrInterpolate(testimonial.content)}&quot; </blockquote><div class="testimonial-card__author" data-v-aa194bf9><div class="testimonial-card__avatar-icon" data-v-aa194bf9><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-aa194bf9><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-aa194bf9></path><path d="M8 11l3 3 5-5" data-v-aa194bf9></path></svg></div><div data-v-aa194bf9><strong class="testimonial-card__name" data-v-aa194bf9>${ssrInterpolate(testimonial.name)}</strong><span class="testimonial-card__role" data-v-aa194bf9>${ssrInterpolate(testimonial.role)}</span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="testimonials-nav" data-v-aa194bf9><button aria-label="Previous testimonial" class="testimonials-nav__btn" data-v-aa194bf9><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-aa194bf9><path d="M19 12H5M12 19l-7-7 7-7" data-v-aa194bf9></path></svg></button><div class="testimonials-dots" data-v-aa194bf9><!--[-->`);
      ssrRenderList(testimonials.value?.slice(0, 5), (_, i) => {
        _push(`<button class="${ssrRenderClass([{ "testimonials-dot--active": currentTestimonial.value === i }, "testimonials-dot"])}"${ssrRenderAttr("aria-label", `Testimonial ${i + 1}`)} data-v-aa194bf9></button>`);
      });
      _push(`<!--]--></div><button aria-label="Next testimonial" class="testimonials-nav__btn" data-v-aa194bf9><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-aa194bf9><path d="M5 12h14M12 5l7 7-7 7" data-v-aa194bf9></path></svg></button></div></div></section><section class="donation-section section section--dark" id="donation-section" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="donation-section__grid" data-v-aa194bf9><div class="donation-section__info" data-v-aa194bf9><span class="label" style="${ssrRenderStyle({ "color": "var(--electric-lime)" })}" data-v-aa194bf9>Support Nepal&#39;s Wildlife</span><h2 class="donation-section__title" data-v-aa194bf9>Fund the Frontlines</h2><p class="donation-section__desc" data-v-aa194bf9> Your contribution directly supports anti-poaching patrols, habitat restoration in the Terai Arc, and community-led conservation programs across the Himalayas. Help us ensure a future for Nepal&#39;s wild heritage. </p>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/donation",
        variant: "primary",
        arrow: true,
        id: "donate-learn-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn More `);
          } else {
            return [
              createTextVNode(" Learn More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="donation-section__form-card" data-v-aa194bf9><div class="donation-tabs" data-v-aa194bf9><button class="${ssrRenderClass([{ "donation-tabs__tab--active": donationFrequency.value === "monthly" }, "donation-tabs__tab"])}" data-v-aa194bf9>Monthly</button><button class="${ssrRenderClass([{ "donation-tabs__tab--active": donationFrequency.value === "yearly" }, "donation-tabs__tab"])}" data-v-aa194bf9>Yearly</button></div><div class="donation-amounts" data-v-aa194bf9><!--[-->`);
      ssrRenderList(donationAmounts, (amount) => {
        _push(`<button class="${ssrRenderClass([{ "donation-amount--active": selectedAmount.value === amount }, "donation-amount"])}" data-v-aa194bf9>$${ssrInterpolate(amount)}</button>`);
      });
      _push(`<!--]--><div class="donation-amount donation-amount--custom" data-v-aa194bf9><span data-v-aa194bf9>$</span><input type="number"${ssrRenderAttr("value", customAmount.value)} placeholder="Other" class="donation-amount__input" id="donation-custom-amount" data-v-aa194bf9></div></div>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        variant: "primary",
        size: "lg",
        arrow: true,
        onClick: handleDonate,
        id: "donate-now-btn",
        style: { "width": "100%", "justify-content": "center" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate ${ssrInterpolate(donationFrequency.value === "monthly" ? "Monthly" : "Yearly")}`);
          } else {
            return [
              createTextVNode(" Donate " + toDisplayString(donationFrequency.value === "monthly" ? "Monthly" : "Yearly"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="blog-section section section--ivory" id="blog-section" data-v-aa194bf9><div class="container" data-v-aa194bf9><div class="section-header" data-v-aa194bf9><span class="section-header__label" data-v-aa194bf9>Latest News</span><h2 class="section-header__title" data-v-aa194bf9>Read Our Latest Articles</h2></div><div class="blog-grid" data-v-aa194bf9><!--[-->`);
      ssrRenderList(blogPosts.value, (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.slug,
          to: `/blogs/${post.slug}`,
          class: "blog-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="blog-card__image" data-v-aa194bf9${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" data-v-aa194bf9${_scopeId}></div><div class="blog-card__content" data-v-aa194bf9${_scopeId}><div class="blog-card__meta" data-v-aa194bf9${_scopeId}><span class="blog-card__category label" data-v-aa194bf9${_scopeId}>${ssrInterpolate(post.category)}</span><span class="blog-card__date" data-v-aa194bf9${_scopeId}>${ssrInterpolate(post.date)}</span></div><h3 class="blog-card__title" data-v-aa194bf9${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="blog-card__excerpt" data-v-aa194bf9${_scopeId}>${ssrInterpolate(post.excerpt || post.description)}</p><span class="blog-card__read-more" data-v-aa194bf9${_scopeId}> Explore Blog <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" data-v-aa194bf9${_scopeId}><path d="M7 17L17 7M17 7H7M17 7v10" data-v-aa194bf9${_scopeId}></path></svg></span></div>`);
            } else {
              return [
                createVNode("div", { class: "blog-card__image" }, [
                  createVNode("img", {
                    src: post.image,
                    alt: post.title,
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "blog-card__content" }, [
                  createVNode("div", { class: "blog-card__meta" }, [
                    createVNode("span", { class: "blog-card__category label" }, toDisplayString(post.category), 1),
                    createVNode("span", { class: "blog-card__date" }, toDisplayString(post.date), 1)
                  ]),
                  createVNode("h3", { class: "blog-card__title" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "blog-card__excerpt" }, toDisplayString(post.excerpt || post.description), 1),
                  createVNode("span", { class: "blog-card__read-more" }, [
                    createTextVNode(" Explore Blog "),
                    (openBlock(), createBlock("svg", {
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      width: "16",
                      height: "16"
                    }, [
                      createVNode("path", { d: "M7 17L17 7M17 7H7M17 7v10" })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa194bf9"]]);

export { index as default };
//# sourceMappingURL=index-BDh97VW9.mjs.map
