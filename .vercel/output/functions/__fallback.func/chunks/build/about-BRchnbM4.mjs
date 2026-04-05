import { _ as __nuxt_component_1 } from './SectionLabel-CvX_xHGr.mjs';
import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useLenis } from './useLenis-DP8-S7x6.mjs';
import { g as useFetch, u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-131K-cP5.mjs';
import '../nitro/nitro.mjs';
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
import 'lenis';
import 'pinia';
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: team, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/team",
      "$5YVycHE58D"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: "About Us" });
    useLenis();
    ref(null);
    const impactStats = [
      { value: "3X", label: "Tiger Population" },
      { value: "750+", label: "One-horned Rhinos" },
      { value: "23%", label: "Territory Protected" },
      { value: "0", label: "Poaching Years" },
      { value: "12", label: "National Parks" },
      { value: "400k+", label: "Acres Monitored" }
    ];
    const benefits = [
      {
        title: "Educational Programs",
        desc: "Interactive learning experiences for visitors of all ages about wildlife and ecosystems.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
      },
      {
        title: "Conservation Research",
        desc: "Cutting-edge research programs to protect endangered species worldwide.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'
      },
      {
        title: "Family Experiences",
        desc: "Designed for memorable family outings with activities for every age group.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
      },
      {
        title: "Eco-Tourism",
        desc: "Sustainable tourism practices that benefit both wildlife and local communities.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSectionLabel = __nuxt_component_1;
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-5176d99a><section class="page-hero" data-v-5176d99a><img src="https://images.unsplash.com/photo-1544136502-4fc51b73fe4b?w=1600&amp;q=80" alt="Nepalese Himalayan landscape" class="page-hero__bg" data-v-5176d99a><div class="page-hero__overlay" data-v-5176d99a></div><div class="container page-hero__content" data-v-5176d99a><h1 class="page-hero__title" data-v-5176d99a>Protecting the Rooftop<br data-v-5176d99a>of the World</h1><div class="page-hero__meta" data-v-5176d99a><strong class="page-hero__label" data-v-5176d99a>Our Mission</strong><p data-v-5176d99a>From the tropical Terai to the high Himalayas, we are dedicated to preserving Nepal&#39;s unrivaled natural heritage.</p><button class="page-hero__scroll" aria-label="Scroll down" data-v-5176d99a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-5176d99a><path d="M12 5v14M19 12l-7 7-7-7" data-v-5176d99a></path></svg></button></div></div></section>`);
      _push(ssrRenderComponent(_component_UiSectionLabel, { items: ["DISCOVER THE WILD", "INSPIRING WILDLIFE", "CONSERVATION FIRST"] }, null, _parent));
      _push(`<section class="section section--bone" id="mission-section" data-v-5176d99a><div class="container" data-v-5176d99a><div class="mission-block" data-v-5176d99a><p class="mission-block__text" data-v-5176d99a> Our journey began with a single vision: to turn Nepal into a global beacon for wildlife conservation. Through community-led anti-poaching and premium, sustainable eco-tourism, we have transformed local livelihoods and restored ancient tiger corridors. Join us in safeguarding the rarest species on Earth. </p>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/contact",
        variant: "secondary",
        arrow: true,
        id: "mission-cta-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Become a Guardian `);
          } else {
            return [
              createTextVNode(" Become a Guardian ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section section--dark" id="stats-section" data-v-5176d99a><div class="container" data-v-5176d99a><div class="section-header" data-v-5176d99a><span class="section-header__label" data-v-5176d99a>Our Impact</span><h2 class="section-header__title" data-v-5176d99a>Making a Difference Since 2009</h2></div><div class="impact-stats" data-v-5176d99a><!--[-->`);
      ssrRenderList(impactStats, (stat) => {
        _push(`<div class="impact-stat" data-v-5176d99a><span class="impact-stat__number" data-v-5176d99a>${ssrInterpolate(stat.value)}</span><span class="impact-stat__label label" data-v-5176d99a>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section section--bone" id="team-section" data-v-5176d99a><div class="container" data-v-5176d99a><div class="section-header" data-v-5176d99a><span class="section-header__label" data-v-5176d99a>Expert Team</span><h2 class="section-header__title" data-v-5176d99a>Meet Our Dedicated Team</h2></div><div class="team-grid" data-v-5176d99a><!--[-->`);
      ssrRenderList(unref(team), (member) => {
        _push(`<div class="team-card" data-v-5176d99a><div class="team-card__image" data-v-5176d99a><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} loading="lazy" data-v-5176d99a><div class="team-card__overlay" data-v-5176d99a><span class="team-card__bio" data-v-5176d99a>${ssrInterpolate(member.bio)}</span></div></div><h3 class="team-card__name" data-v-5176d99a>${ssrInterpolate(member.name)}</h3><p class="team-card__role" data-v-5176d99a>${ssrInterpolate(member.role)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section section--ivory" id="benefits-section" data-v-5176d99a><div class="container" data-v-5176d99a><div class="section-header" data-v-5176d99a><span class="section-header__label" data-v-5176d99a>Why Visit</span><h2 class="section-header__title" data-v-5176d99a>Benefits of Exploration</h2></div><div class="benefits-grid" data-v-5176d99a><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="benefit-card" data-v-5176d99a><span class="benefit-card__icon" data-v-5176d99a>${benefit.icon ?? ""}</span><h3 class="benefit-card__title" data-v-5176d99a>${ssrInterpolate(benefit.title)}</h3><p class="benefit-card__desc" data-v-5176d99a>${ssrInterpolate(benefit.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5176d99a"]]);

export { about as default };
//# sourceMappingURL=about-BRchnbM4.mjs.map
