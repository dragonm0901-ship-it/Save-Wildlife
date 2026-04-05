import { _ as __nuxt_component_0 } from './NuxtImg-DAUOxifl.mjs';
import { _ as __nuxt_component_1 } from './SectionLabel-CvX_xHGr.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, g as useFetch } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Visitor Services & Experiences" });
    const { data: services, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/services",
      {
        default: () => []
      },
      "$X3EN9cE1Ae"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_UiSectionLabel = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-page" }, _attrs))} data-v-ae49cbf1><section class="page-hero" data-v-ae49cbf1>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=1600&q=80",
        alt: "Wildlife safari",
        class: "page-hero__bg",
        loading: "eager",
        format: "webp"
      }, null, _parent));
      _push(`<div class="page-hero__overlay" data-v-ae49cbf1></div><div class="container page-hero__content" data-v-ae49cbf1><h1 class="page-hero__title" data-v-ae49cbf1>Our Services</h1><div class="page-hero__meta" data-v-ae49cbf1><strong class="page-hero__label" data-v-ae49cbf1>Experiences</strong><p data-v-ae49cbf1>From safari rides to educational tours, discover unique experiences that bring you closer to the heart of nature.</p></div></div></section>`);
      _push(ssrRenderComponent(_component_UiSectionLabel, { items: ["UNFORGETTABLE MOMENTS", "WILD EXPERIENCES", "NATURE AWAITS"] }, null, _parent));
      _push(`<section class="section section--bone" data-v-ae49cbf1><div class="container" data-v-ae49cbf1>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-ae49cbf1><p data-v-ae49cbf1>Loading sanctuary services...</p></div>`);
      } else if (unref(services) && unref(services).length) {
        _push(`<div class="services-list" data-v-ae49cbf1><!--[-->`);
        ssrRenderList(unref(services), (service, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: service.slug,
            to: `/services/${service.slug}`,
            class: ["service-row", { "service-row--reverse": i % 2 !== 0 }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="service-row__image" data-v-ae49cbf1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: service.image,
                  alt: service.title,
                  loading: "lazy",
                  format: "webp",
                  width: "800"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="service-row__content" data-v-ae49cbf1${_scopeId}><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-ae49cbf1${_scopeId}>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><h2 class="service-row__title" data-v-ae49cbf1${_scopeId}>${ssrInterpolate(service.title)}</h2><p data-v-ae49cbf1${_scopeId}>${ssrInterpolate(service.description)}</p><div class="service-row__link" data-v-ae49cbf1${_scopeId}> Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" data-v-ae49cbf1${_scopeId}><path d="M7 17L17 7M17 7H7M17 7v10" data-v-ae49cbf1${_scopeId}></path></svg></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "service-row__image" }, [
                    createVNode(_component_NuxtImg, {
                      src: service.image,
                      alt: service.title,
                      loading: "lazy",
                      format: "webp",
                      width: "800"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "service-row__content" }, [
                    createVNode("span", {
                      class: "label",
                      style: { "color": "var(--canopy-green)" }
                    }, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                    createVNode("h2", { class: "service-row__title" }, toDisplayString(service.title), 1),
                    createVNode("p", null, toDisplayString(service.description), 1),
                    createVNode("div", { class: "service-row__link" }, [
                      createTextVNode(" Learn More "),
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
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="empty-state" data-v-ae49cbf1><p data-v-ae49cbf1>We are currently updating our service offerings. Please check back soon!</p></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae49cbf1"]]);

export { index as default };
//# sourceMappingURL=index-DZjdm33n.mjs.map
