import { withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "faq",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: faqs, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/faqs",
      "$vrORnKuTAL"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: "FAQ" });
    const openIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-page" }, _attrs))} data-v-bd6a6050><section class="page-hero" style="${ssrRenderStyle({ "min-height": "40vh" })}" data-v-bd6a6050><img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&amp;q=80" alt="FAQ" class="page-hero__bg" data-v-bd6a6050><div class="page-hero__overlay" data-v-bd6a6050></div><div class="container page-hero__content" data-v-bd6a6050><h1 class="page-hero__title" data-v-bd6a6050>Frequently Asked<br data-v-bd6a6050>Questions</h1></div></section>`);
      if (unref(faqs)) {
        _push(`<section class="section section--bone" data-v-bd6a6050><div class="container container--lg" data-v-bd6a6050><div class="faq-list" data-v-bd6a6050><!--[-->`);
        ssrRenderList(unref(faqs), (faq2, i) => {
          _push(`<div class="${ssrRenderClass([{ "faq-item--open": openIndex.value === i }, "faq-item"])}" data-v-bd6a6050><button class="faq-item__question" data-v-bd6a6050><span data-v-bd6a6050>${ssrInterpolate(faq2.question)}</span><span class="faq-item__icon" data-v-bd6a6050><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" data-v-bd6a6050><line x1="12" y1="5" x2="12" y2="19" data-v-bd6a6050></line><line x1="5" y1="12" x2="19" y2="12" data-v-bd6a6050></line></svg></span></button><div class="faq-item__answer" style="${ssrRenderStyle(openIndex.value === i ? null : { display: "none" })}" data-v-bd6a6050><p data-v-bd6a6050>${ssrInterpolate(faq2.answer)}</p></div></div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else if (unref(pending)) {
        _push(`<section class="section section--bone" data-v-bd6a6050><div class="container" data-v-bd6a6050><p data-v-bd6a6050>Loading questions...</p></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd6a6050"]]);

export { faq as default };
//# sourceMappingURL=faq-I9f7gkCp.mjs.map
