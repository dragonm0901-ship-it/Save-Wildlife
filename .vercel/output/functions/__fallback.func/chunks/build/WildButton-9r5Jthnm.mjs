import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "UiWildButton",
  __ssrInlineRender: true,
  props: {
    variant: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    to: { type: String, default: null },
    href: { type: String, default: null },
    type: { type: String, default: "button" },
    arrow: { type: Boolean, default: false },
    iconOnly: { type: Boolean, default: false },
    back: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => {
      if (props.to) return __nuxt_component_0$1;
      if (props.href) return "a";
      return "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({ ..._ctx.$attrs, ...tag.value === "button" ? { type: __props.type } : tag.value === "a" ? { href: __props.href } : { to: __props.to } }, {
        class: ["wild-btn", [
          `wild-btn--${__props.variant}`,
          `wild-btn--${__props.size}`,
          { "wild-btn--icon-only": __props.iconOnly }
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="wild-btn__content" data-v-226b5186${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
            if (__props.arrow) {
              _push2(`<span class="${ssrRenderClass([{ "wild-btn__arrow--back": __props.back }, "wild-btn__arrow"])}" data-v-226b5186${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-226b5186${_scopeId}>`);
              if (__props.back) {
                _push2(`<path d="M17 17L7 7M7 7V17M7 7H17" data-v-226b5186${_scopeId}></path>`);
              } else {
                _push2(`<path d="M7 17L17 7M17 7H7M17 7v10" data-v-226b5186${_scopeId}></path>`);
              }
              _push2(`</svg></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", { class: "wild-btn__content" }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              __props.arrow ? (openBlock(), createBlock("span", {
                key: 0,
                class: ["wild-btn__arrow", { "wild-btn__arrow--back": __props.back }]
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  __props.back ? (openBlock(), createBlock("path", {
                    key: 0,
                    d: "M17 17L7 7M7 7V17M7 7H17"
                  })) : (openBlock(), createBlock("path", {
                    key: 1,
                    d: "M7 17L17 7M17 7H7M17 7v10"
                  }))
                ]))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/WildButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-226b5186"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=WildButton-9r5Jthnm.mjs.map
