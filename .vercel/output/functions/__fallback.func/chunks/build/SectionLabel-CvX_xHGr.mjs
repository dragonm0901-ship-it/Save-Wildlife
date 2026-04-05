import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "UiSectionLabel",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => ["INSPIRING WILDLIFE"] },
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["marquee-label", { "marquee-label--dark": __props.dark }]
      }, _attrs))} data-v-d065641b><div class="marquee-label__track" data-v-d065641b><!--[-->`);
      ssrRenderList(3, (n) => {
        _push(`<div class="marquee-label__content" data-v-d065641b><!--[-->`);
        ssrRenderList(__props.items, (item, i) => {
          _push(`<!--[--><span class="marquee-label__text" data-v-d065641b>${ssrInterpolate(item)}</span><span class="marquee-label__separator" data-v-d065641b><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" data-v-d065641b><circle cx="12" cy="12" r="5" data-v-d065641b></circle></svg></span><!--]-->`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionLabel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d065641b"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SectionLabel-CvX_xHGr.mjs.map
