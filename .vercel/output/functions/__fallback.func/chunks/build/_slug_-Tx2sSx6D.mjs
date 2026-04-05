import { _ as __nuxt_component_0 } from './nuxt-link-131K-cP5.mjs';
import { _ as __nuxt_component_0$1 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { f as useRoute, g as useFetch, u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: event, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/events/${route.params.slug}`,
      "$OZGtVRdh-M"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: computed(() => event.value?.title || "Event Detail") });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiWildButton = __nuxt_component_0$1;
      if (unref(event)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "event-detail" }, _attrs))} data-v-83b56137><section class="page-hero" data-v-83b56137><img${ssrRenderAttr("src", unref(event).image)}${ssrRenderAttr("alt", unref(event).title)} class="page-hero__bg" data-v-83b56137><div class="page-hero__overlay" data-v-83b56137></div><div class="container page-hero__content" data-v-83b56137>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/events",
          class: "breadcrumb"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Events`);
            } else {
              return [
                createTextVNode("Events")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="page-hero__title" data-v-83b56137>${ssrInterpolate(unref(event).title)}</h1></div></section><section class="section section--bone" data-v-83b56137><div class="container detail-content" data-v-83b56137><div class="detail-content__main" data-v-83b56137><p class="detail-content__lead" data-v-83b56137>${ssrInterpolate(unref(event).description || unref(event).desc)}</p><h3 data-v-83b56137>Event Details</h3><div class="event-info-grid" data-v-83b56137><div class="event-info" data-v-83b56137><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-83b56137>Date &amp; Time</span><p data-v-83b56137>${ssrInterpolate(unref(event).date)} | ${ssrInterpolate(unref(event).time)}</p></div><div class="event-info" data-v-83b56137><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-83b56137>Location</span><p data-v-83b56137>${ssrInterpolate(unref(event).location)}</p></div><div class="event-info" data-v-83b56137><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-83b56137>Capacity</span><p data-v-83b56137>${ssrInterpolate(unref(event).capacity)}</p></div><div class="event-info" data-v-83b56137><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-83b56137>Price</span><p data-v-83b56137>${ssrInterpolate(unref(event).price)}</p></div></div></div><aside class="detail-content__sidebar" data-v-83b56137><div class="sidebar-card" data-v-83b56137><h4 data-v-83b56137>Reserve Your Spot</h4><p style="${ssrRenderStyle({ "margin-bottom": "var(--space-xl)", "color": "var(--charcoal-60)" })}" data-v-83b56137>Limited capacity. Book early to guarantee your place at this event.</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/tickets",
          variant: "primary",
          size: "lg",
          arrow: true,
          style: { "width": "100%", "justify-content": "center" },
          id: "reserve-event-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Book Now`);
            } else {
              return [
                createTextVNode("Book Now")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside></div></section></div>`);
      } else if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-state section section--bone" }, _attrs))} data-v-83b56137><div class="container" data-v-83b56137><p data-v-83b56137>Loading event details...</p></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-state section section--bone" }, _attrs))} data-v-83b56137><div class="container" data-v-83b56137><p data-v-83b56137>Could not load event details. Please try again later.</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/events",
          variant: "secondary",
          arrow: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Events`);
            } else {
              return [
                createTextVNode("Back to Events")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83b56137"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Tx2sSx6D.mjs.map
