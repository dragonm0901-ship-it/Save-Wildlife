import { _ as __nuxt_component_0 } from './NuxtImg-DAUOxifl.mjs';
import { _ as __nuxt_component_1 } from './SectionLabel-CvX_xHGr.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    useHead({ title: "Upcoming Events" });
    const { data: events, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/events",
      {
        default: () => []
      },
      "$1-oCRfudVz"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_UiSectionLabel = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "events-page" }, _attrs))} data-v-a97d089e><section class="page-hero" data-v-a97d089e>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=80",
        alt: "Wildlife event",
        class: "page-hero__bg",
        loading: "eager",
        format: "webp"
      }, null, _parent));
      _push(`<div class="page-hero__overlay" data-v-a97d089e></div><div class="container page-hero__content" data-v-a97d089e><h1 class="page-hero__title" data-v-a97d089e>Join Us for Fun<br data-v-a97d089e>and Educational Events</h1><div class="page-hero__meta" data-v-a97d089e><strong class="page-hero__label" data-v-a97d089e>Events</strong><p data-v-a97d089e>Explore our sanctuary&#39;s seasonal gatherings, from educational workshops to festive wildlife celebrations.</p></div></div></section>`);
      _push(ssrRenderComponent(_component_UiSectionLabel, { items: ["UPCOMING EVENTS", "JOIN THE FUN", "WILDLIFE GATHERINGS"] }, null, _parent));
      _push(`<section class="section section--bone" data-v-a97d089e><div class="container" data-v-a97d089e><div class="section-header" data-v-a97d089e><span class="section-header__label" data-v-a97d089e>Schedule</span><h2 class="section-header__title" data-v-a97d089e>Our Sanctuary Events</h2></div>`);
      if (unref(pending)) {
        _push(`<div class="loading-state" data-v-a97d089e><p data-v-a97d089e>Gathering event schedules...</p></div>`);
      } else if (unref(events) && unref(events).length) {
        _push(`<div class="events-grid" data-v-a97d089e><!--[-->`);
        ssrRenderList(unref(events), (event) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: event.slug,
            to: `/events/${event.slug}`,
            class: "event-card-lg"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="event-card-lg__image" data-v-a97d089e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: event.image,
                  alt: event.title,
                  loading: "lazy",
                  format: "webp",
                  width: "800"
                }, null, _parent2, _scopeId));
                _push2(`<span class="event-card-lg__badge label" data-v-a97d089e${_scopeId}>${ssrInterpolate(event.category || "EVENT")}</span></div><div class="event-card-lg__content" data-v-a97d089e${_scopeId}><h3 data-v-a97d089e${_scopeId}>${ssrInterpolate(event.title)}</h3><p class="line-clamp" data-v-a97d089e${_scopeId}>${ssrInterpolate(event.description)}</p><div class="event-card-lg__meta" data-v-a97d089e${_scopeId}><span data-v-a97d089e${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-a97d089e${_scopeId}><circle cx="12" cy="12" r="10" data-v-a97d089e${_scopeId}></circle><polyline points="12 6 12 12 16 14" data-v-a97d089e${_scopeId}></polyline></svg> ${ssrInterpolate(event.time)}</span><span data-v-a97d089e${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" data-v-a97d089e${_scopeId}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" data-v-a97d089e${_scopeId}></path><circle cx="12" cy="10" r="3" data-v-a97d089e${_scopeId}></circle></svg> ${ssrInterpolate(event.location)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "event-card-lg__image" }, [
                    createVNode(_component_NuxtImg, {
                      src: event.image,
                      alt: event.title,
                      loading: "lazy",
                      format: "webp",
                      width: "800"
                    }, null, 8, ["src", "alt"]),
                    createVNode("span", { class: "event-card-lg__badge label" }, toDisplayString(event.category || "EVENT"), 1)
                  ]),
                  createVNode("div", { class: "event-card-lg__content" }, [
                    createVNode("h3", null, toDisplayString(event.title), 1),
                    createVNode("p", { class: "line-clamp" }, toDisplayString(event.description), 1),
                    createVNode("div", { class: "event-card-lg__meta" }, [
                      createVNode("span", null, [
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
                        createTextVNode(" " + toDisplayString(event.time), 1)
                      ]),
                      createVNode("span", null, [
                        (openBlock(), createBlock("svg", {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "1.5",
                          width: "14",
                          height: "14"
                        }, [
                          createVNode("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
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
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="empty-state" data-v-a97d089e><p data-v-a97d089e>No upcoming events scheduled at the moment. Please check back later!</p></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a97d089e"]]);

export { index as default };
//# sourceMappingURL=index-CAOoliBM.mjs.map
