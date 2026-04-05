import { _ as __nuxt_component_1 } from './SectionLabel-CvX_xHGr.mjs';
import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCartStore } from './cart-CZWJ9JOX.mjs';
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
  __name: "tickets",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: tickets2, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/tickets",
      "$YigAlzj58u"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: "Tickets" });
    const cartStore = useCartStore();
    function addToCart(ticket) {
      cartStore.addItem({
        id: ticket.id,
        name: ticket.name,
        price: ticket.price,
        image: null
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSectionLabel = __nuxt_component_1;
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tickets-page" }, _attrs))} data-v-d3d19f3f><section class="page-hero" data-v-d3d19f3f><img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&amp;q=80" alt="Sanctuary entrance" class="page-hero__bg" data-v-d3d19f3f><div class="page-hero__overlay" data-v-d3d19f3f></div><div class="container page-hero__content" data-v-d3d19f3f><h1 class="page-hero__title" data-v-d3d19f3f>Conservation Passes</h1><div class="page-hero__meta" data-v-d3d19f3f><strong class="page-hero__label" data-v-d3d19f3f>Experiences</strong><p data-v-d3d19f3f>Choose your journey across Nepal&#39;s most vital conservation zones.</p></div></div></section>`);
      _push(ssrRenderComponent(_component_UiSectionLabel, { items: ["PLAN YOUR VISIT", "BOOK TODAY", "ADVENTURE AWAITS"] }, null, _parent));
      _push(`<section class="section section--bone" data-v-d3d19f3f><div class="container" data-v-d3d19f3f><div class="section-header" data-v-d3d19f3f><span class="section-header__label" data-v-d3d19f3f>Access Options</span><h2 class="section-header__title" data-v-d3d19f3f>Choose Your Journey</h2></div><div class="tickets-grid" data-v-d3d19f3f><!--[-->`);
      ssrRenderList(unref(tickets2), (ticket) => {
        _push(`<div class="${ssrRenderClass([{ "ticket-card--featured": ticket.featured }, "ticket-card"])}" data-v-d3d19f3f>`);
        if (ticket.featured) {
          _push(`<div class="ticket-card__badge" data-v-d3d19f3f>Most Popular</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="ticket-card__header" data-v-d3d19f3f><h3 class="ticket-card__name" data-v-d3d19f3f>${ssrInterpolate(ticket.name)}</h3><p class="ticket-card__desc" data-v-d3d19f3f>${ssrInterpolate(ticket.desc)}</p></div><div class="ticket-card__price" data-v-d3d19f3f><span class="ticket-card__currency" data-v-d3d19f3f>$</span><span class="ticket-card__amount" data-v-d3d19f3f>${ssrInterpolate(ticket.price)}</span><span class="ticket-card__period" data-v-d3d19f3f>/ person</span></div><ul class="ticket-card__features" data-v-d3d19f3f><!--[-->`);
        ssrRenderList(ticket.includes, (feat) => {
          _push(`<li data-v-d3d19f3f><svg viewBox="0 0 24 24" fill="none" stroke="var(--canopy-green)" stroke-width="2" width="16" height="16" data-v-d3d19f3f><polyline points="20 6 9 17 4 12" data-v-d3d19f3f></polyline></svg> ${ssrInterpolate(feat)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          variant: ticket.featured ? "primary" : "outline-dark",
          size: "lg",
          arrow: true,
          onClick: ($event) => addToCart(ticket),
          style: { "width": "100%", "justify-content": "center" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add to Cart `);
            } else {
              return [
                createTextVNode(" Add to Cart ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="trust-banner section--dark" style="${ssrRenderStyle({ "padding": "var(--space-2xl) 0" })}" data-v-d3d19f3f><div class="container trust-banner__inner" data-v-d3d19f3f><p data-v-d3d19f3f>We&#39;ve helped over <span class="trust-banner__count" data-v-d3d19f3f>200+</span> organizations committed to protecting animals</p></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tickets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tickets = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3d19f3f"]]);

export { tickets as default };
//# sourceMappingURL=tickets-AeN0W1y1.mjs.map
