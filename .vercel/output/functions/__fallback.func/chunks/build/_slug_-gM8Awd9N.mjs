import { _ as __nuxt_component_0 } from './nuxt-link-131K-cP5.mjs';
import { withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    const { data: post, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/blog/${route.params.slug}`,
      "$bu7p3daZNR"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: computed(() => post.value?.title || "Article") });
    const related = [
      { title: "Planning Your First Safari", slug: "planning-your-first-safari" },
      { title: "Celebrating Animal Diversity", slug: "celebrating-diversity-of-animals" },
      { title: "Ethical Safari Packing Guide", slug: "ethical-safari-adventure-packing" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(post)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-detail" }, _attrs))} data-v-69ced97b><section class="page-hero" data-v-69ced97b><img${ssrRenderAttr("src", unref(post).image)}${ssrRenderAttr("alt", unref(post).title)} class="page-hero__bg" data-v-69ced97b><div class="page-hero__overlay" data-v-69ced97b></div><div class="container page-hero__content" data-v-69ced97b>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/news",
          class: "breadcrumb"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`News`);
            } else {
              return [
                createTextVNode("News")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="label" style="${ssrRenderStyle({ "color": "var(--electric-lime)", "display": "block", "margin": "var(--space-md) 0" })}" data-v-69ced97b>${ssrInterpolate(unref(post).category)}</span><h1 style="${ssrRenderStyle({ "font-size": "var(--text-4xl)", "color": "var(--white)" })}" data-v-69ced97b>${ssrInterpolate(unref(post).title)}</h1><p style="${ssrRenderStyle({ "color": "var(--white-50)", "margin-top": "var(--space-md)" })}" data-v-69ced97b>${ssrInterpolate(unref(post).date)} — ${ssrInterpolate(unref(post).author || unref(post).author_name || "Conservation Team")}</p></div></section><section class="section section--bone" data-v-69ced97b><div class="container article-container" data-v-69ced97b><article class="article-body" data-v-69ced97b><p class="article-lead" data-v-69ced97b>${ssrInterpolate(unref(post).excerpt)}</p>`);
        if (unref(post).content_html) {
          _push(`<div data-v-69ced97b>${unref(post).content_html ?? ""}</div>`);
        } else {
          _push(`<div data-v-69ced97b><p data-v-69ced97b>Wildlife conservation has seen remarkable progress over the past decade, with dedicated organizations and passionate individuals working tirelessly to protect endangered species and restore critical habitats. From community-driven initiatives in rural areas to large-scale governmental programs, the movement to safeguard our planet&#39;s biodiversity has gained unprecedented momentum.</p><h3 data-v-69ced97b>The Importance of Habitat Protection</h3><p data-v-69ced97b>Habitat loss remains the single greatest threat to wildlife worldwide. By protecting existing natural areas and restoring degraded ecosystems, we can provide essential corridors for animal migration and ensure the long-term survival of countless species. Our sanctuary plays a vital role in this effort through active land management and partnerships with conservation organizations.</p></div>`);
        }
        _push(`</article><aside class="article-sidebar" data-v-69ced97b><div class="sidebar-card" data-v-69ced97b><h4 data-v-69ced97b>Related Articles</h4><!--[-->`);
        ssrRenderList(related, (rel) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: rel.slug,
            to: `/blogs/${rel.slug}`,
            class: "related-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(rel.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(rel.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></aside></div></section></div>`);
      } else if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-state section section--bone" }, _attrs))} data-v-69ced97b><div class="container" data-v-69ced97b><p data-v-69ced97b>Loading article...</p></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-state section section--bone" }, _attrs))} data-v-69ced97b><div class="container" data-v-69ced97b><p data-v-69ced97b>Could not load article. Please try again later.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/news",
          class: "label",
          style: { "color": "var(--canopy-green)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to News`);
            } else {
              return [
                createTextVNode("Back to News")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69ced97b"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-gM8Awd9N.mjs.map
