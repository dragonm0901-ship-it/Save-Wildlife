import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "donation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: pageData, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/donations/content",
      "$qlgn096Ei_"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: "Donate" });
    const freq = ref("monthly");
    const amount = ref(50);
    const custom = ref("");
    const impacts = computed(() => pageData.value?.impacts || [
      { title: "Terai Arc Restoration", desc: "Reconnecting wildlife corridors for tigers and rhinos in the subtropical lowlands.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>' },
      { title: "High-Altitude Monitoring", desc: "Support tracking teams protecting snow leopards and musk deer in the high mountains.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
      { title: "Captive Breeding", desc: "Fund specialized centers for the critically endangered Gharial crocodile and Red Panda.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
      { title: "Community Education", desc: "Empowering local youth to lead conservation within their own Himalayan villages.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>' }
    ]);
    const stories = computed(() => pageData.value?.stories || [
      { title: "The Ghost of Dolpo", desc: "In 2024, our trackers successfully identified three new snow leopard families in the Upper Dolpo region.", image: "https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=500&q=80" },
      { title: "Tiger Corridors", desc: "Donor support helped us purchase and restore critical land bridging Bardia and Banke National Parks.", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&q=80" },
      { title: "Red Panda Rescue", desc: "Successfully rehabilitation of five red pandas through our community-monitored bamboo forests.", image: "https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=500&q=80" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "donation-page" }, _attrs))} data-v-f63d0f8c><section class="page-hero" data-v-f63d0f8c><img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&amp;q=80" alt="Wildlife conservation" class="page-hero__bg" data-v-f63d0f8c><div class="page-hero__overlay" data-v-f63d0f8c></div><div class="container page-hero__content" data-v-f63d0f8c><h1 class="page-hero__title" data-v-f63d0f8c>Protect Nepal&#39;s<br data-v-f63d0f8c>Wild Heritage</h1><div class="page-hero__meta" data-v-f63d0f8c><strong class="page-hero__label" data-v-f63d0f8c>Support</strong><p data-v-f63d0f8c>Every contribution directly funds the frontlines of conservation across the Himalayas and Terai.</p></div></div></section><section class="section section--bone" data-v-f63d0f8c><div class="container" data-v-f63d0f8c><div class="donation-page__grid" data-v-f63d0f8c><div class="donation-page__info" data-v-f63d0f8c><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-f63d0f8c>Your Impact</span><h2 style="${ssrRenderStyle({ "margin": "var(--space-md) 0 var(--space-lg)" })}" data-v-f63d0f8c>Where Your Donation Goes</h2><div class="impact-items" data-v-f63d0f8c><!--[-->`);
      ssrRenderList(unref(impacts), (item) => {
        _push(`<div class="impact-item" data-v-f63d0f8c><span class="impact-item__icon" data-v-f63d0f8c>${item.icon ?? ""}</span><div data-v-f63d0f8c><h4 data-v-f63d0f8c>${ssrInterpolate(item.title)}</h4><p data-v-f63d0f8c>${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="donation-form-card" data-v-f63d0f8c><h3 data-v-f63d0f8c>Support Conservation</h3><div class="donation-tabs" data-v-f63d0f8c><button class="${ssrRenderClass({ active: freq.value === "monthly" })}" data-v-f63d0f8c>Monthly</button><button class="${ssrRenderClass({ active: freq.value === "yearly" })}" data-v-f63d0f8c>Yearly</button></div><div class="donation-amounts" data-v-f63d0f8c><!--[-->`);
      ssrRenderList([30, 50, 100, 150], (a) => {
        _push(`<button class="${ssrRenderClass({ active: amount.value === a })}" data-v-f63d0f8c>$${ssrInterpolate(a)}</button>`);
      });
      _push(`<!--]--></div><div class="donation-custom" data-v-f63d0f8c><span data-v-f63d0f8c>$</span><input type="number"${ssrRenderAttr("value", custom.value)} placeholder="Custom amount" data-v-f63d0f8c></div>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        variant: "primary",
        size: "lg",
        arrow: true,
        style: { "width": "100%", "justify-content": "center", "margin-top": "var(--space-lg)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate ${ssrInterpolate(freq.value === "monthly" ? "Monthly" : "Yearly")}`);
          } else {
            return [
              createTextVNode(" Donate " + toDisplayString(freq.value === "monthly" ? "Monthly" : "Yearly"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="donation-note" data-v-f63d0f8c>Your donation is tax-deductible. You will receive a receipt via email.</p></div></div></div></section><section class="section section--dark" data-v-f63d0f8c><div class="container" data-v-f63d0f8c><div class="section-header" data-v-f63d0f8c><span class="section-header__label" data-v-f63d0f8c>Stories of Impact</span><h2 class="section-header__title" data-v-f63d0f8c>See How Your Donations Help</h2></div><div class="stories-grid" data-v-f63d0f8c><!--[-->`);
      ssrRenderList(unref(stories), (story) => {
        _push(`<div class="story-card" data-v-f63d0f8c><div class="story-card__image" data-v-f63d0f8c><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} loading="lazy" data-v-f63d0f8c></div><div class="story-card__content" data-v-f63d0f8c><h4 data-v-f63d0f8c>${ssrInterpolate(story.title)}</h4><p data-v-f63d0f8c>${ssrInterpolate(story.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/donation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f63d0f8c"]]);

export { donation as default };
//# sourceMappingURL=donation-DcjlwHrk.mjs.map
