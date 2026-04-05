import { _ as __nuxt_component_0 } from './nuxt-link-131K-cP5.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { g as useFetch, u as useHead } from './server.mjs';
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
  __name: "news",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/blog",
      "$lAZZQegdk3"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: "News" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-page" }, _attrs))} data-v-2a9ec82d><section class="page-hero" data-v-2a9ec82d><img src="https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1600&amp;q=80" alt="Wildlife news" class="page-hero__bg" data-v-2a9ec82d><div class="page-hero__overlay" data-v-2a9ec82d></div><div class="container page-hero__content" data-v-2a9ec82d><h1 class="page-hero__title" data-v-2a9ec82d>Latest News</h1><div class="page-hero__meta" data-v-2a9ec82d><strong class="page-hero__label" data-v-2a9ec82d>Blog</strong><p data-v-2a9ec82d>Stay updated with the latest stories from wildlife conservation and our sanctuary community.</p></div></div></section>`);
      if (unref(posts)) {
        _push(`<section class="section section--bone" data-v-2a9ec82d><div class="container" data-v-2a9ec82d><div class="blog-listing" data-v-2a9ec82d><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: post.slug,
            to: `/blogs/${post.slug}`,
            class: "blog-row"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="blog-row__image" data-v-2a9ec82d${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" data-v-2a9ec82d${_scopeId}></div><div class="blog-row__content" data-v-2a9ec82d${_scopeId}><div class="blog-row__meta" data-v-2a9ec82d${_scopeId}><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-2a9ec82d${_scopeId}>${ssrInterpolate(post.category)}</span><span data-v-2a9ec82d${_scopeId}>${ssrInterpolate(post.date)}</span></div><h2 class="blog-row__title" data-v-2a9ec82d${_scopeId}>${ssrInterpolate(post.title)}</h2><p data-v-2a9ec82d${_scopeId}>${ssrInterpolate(post.excerpt || post.description)}</p><span class="blog-row__link" data-v-2a9ec82d${_scopeId}>Read Article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" data-v-2a9ec82d${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-2a9ec82d${_scopeId}></path></svg></span></div>`);
              } else {
                return [
                  createVNode("div", { class: "blog-row__image" }, [
                    createVNode("img", {
                      src: post.image,
                      alt: post.title,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "blog-row__content" }, [
                    createVNode("div", { class: "blog-row__meta" }, [
                      createVNode("span", {
                        class: "label",
                        style: { "color": "var(--canopy-green)" }
                      }, toDisplayString(post.category), 1),
                      createVNode("span", null, toDisplayString(post.date), 1)
                    ]),
                    createVNode("h2", { class: "blog-row__title" }, toDisplayString(post.title), 1),
                    createVNode("p", null, toDisplayString(post.excerpt || post.description), 1),
                    createVNode("span", { class: "blog-row__link" }, [
                      createTextVNode("Read Article "),
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        width: "16",
                        height: "16"
                      }, [
                        createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                      ]))
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else if (unref(pending)) {
        _push(`<section class="section section--bone" data-v-2a9ec82d><div class="container" data-v-2a9ec82d><p data-v-2a9ec82d>Loading latest news...</p></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a9ec82d"]]);

export { news as default };
//# sourceMappingURL=news-Bw56JrwU.mjs.map
