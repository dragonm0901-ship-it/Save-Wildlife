import { _ as __nuxt_component_0 } from './nuxt-link-131K-cP5.mjs';
import { _ as __nuxt_component_0$1 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    const { data: service, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/services/${route.params.slug}`,
      "$OQAitxyIgf"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: computed(() => service.value?.title || "Service Detail") });
    const displayHighlights = computed(() => {
      if (service.value?.highlights) {
        return typeof service.value.highlights === "string" ? JSON.parse(service.value.highlights) : service.value.highlights;
      }
      return ["Professional guides", "Premium experience", "All ages welcome", "Booking required"];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiWildButton = __nuxt_component_0$1;
      if (unref(service)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-detail" }, _attrs))} data-v-7a6d6e88><section class="page-hero" data-v-7a6d6e88><img${ssrRenderAttr("src", unref(service).image)}${ssrRenderAttr("alt", unref(service).title)} class="page-hero__bg" data-v-7a6d6e88><div class="page-hero__overlay" data-v-7a6d6e88></div><div class="container page-hero__content" data-v-7a6d6e88>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "breadcrumb"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Services`);
            } else {
              return [
                createTextVNode("Services")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="page-hero__title" data-v-7a6d6e88>${ssrInterpolate(unref(service).title)}</h1></div></section><section class="section section--bone" data-v-7a6d6e88><div class="container detail-content" data-v-7a6d6e88><div class="detail-content__main" data-v-7a6d6e88><p class="detail-content__lead" data-v-7a6d6e88>${ssrInterpolate(unref(service).description || unref(service).desc)}</p><h3 data-v-7a6d6e88>What to Expect</h3><p data-v-7a6d6e88>Our ${ssrInterpolate(unref(service).title.toLowerCase())} experience is designed to create lasting memories while maintaining the highest standards of animal welfare and visitor safety. Professional guides accompany every session to ensure both you and the animals have a wonderful time.</p><h3 data-v-7a6d6e88>Key Highlights</h3><ul class="detail-list" data-v-7a6d6e88><!--[-->`);
        ssrRenderList(displayHighlights.value, (item) => {
          _push(`<li data-v-7a6d6e88>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><aside class="detail-content__sidebar" data-v-7a6d6e88><div class="sidebar-card" data-v-7a6d6e88><h4 data-v-7a6d6e88>Book This Experience</h4><p class="sidebar-card__price" data-v-7a6d6e88>From <strong data-v-7a6d6e88>$${ssrInterpolate(unref(service).price)}</strong> / person</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/tickets",
          variant: "primary",
          size: "lg",
          arrow: true,
          style: { "width": "100%", "justify-content": "center" },
          id: "book-service-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Get Tickets`);
            } else {
              return [
                createTextVNode("Get Tickets")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside></div></section></div>`);
      } else if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-state section section--bone" }, _attrs))} data-v-7a6d6e88><div class="container" data-v-7a6d6e88><p data-v-7a6d6e88>Loading service details...</p></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-state section section--bone" }, _attrs))} data-v-7a6d6e88><div class="container" data-v-7a6d6e88><p data-v-7a6d6e88>Could not load service details. Please try again later.</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/services",
          variant: "secondary",
          arrow: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Services`);
            } else {
              return [
                createTextVNode("Back to Services")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a6d6e88"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-rK2S9FWh.mjs.map
