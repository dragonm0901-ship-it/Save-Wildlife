import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
  __name: "inquiry",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({ name: "", email: "", phone: "", type: "Group Visit", message: "" });
    const status = ref({ loading: false, success: false, error: null });
    useHead({ title: "Inquiry" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inquiry-page" }, _attrs))} data-v-347656a3><section class="page-hero" style="${ssrRenderStyle({ "min-height": "35vh" })}" data-v-347656a3><img src="https://images.unsplash.com/photo-1535338454528-1b18a0e8dfd0?w=1600&amp;q=80" alt="Inquiry" class="page-hero__bg" data-v-347656a3><div class="page-hero__overlay" data-v-347656a3></div><div class="container page-hero__content" data-v-347656a3><h1 class="page-hero__title" data-v-347656a3>Submit an Inquiry</h1></div></section><section class="section section--bone" data-v-347656a3><div class="container container--lg" data-v-347656a3><form class="inquiry-form" data-v-347656a3><div class="form-row" data-v-347656a3><div class="form-group" data-v-347656a3><label for="inq-name" data-v-347656a3>Full Name</label><input id="inq-name" type="text"${ssrRenderAttr("value", form.value.name)} required placeholder="Your name"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-347656a3></div><div class="form-group" data-v-347656a3><label for="inq-email" data-v-347656a3>Email</label><input id="inq-email" type="email"${ssrRenderAttr("value", form.value.email)} required placeholder="your@email.com"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-347656a3></div></div><div class="form-row" data-v-347656a3><div class="form-group" data-v-347656a3><label for="inq-phone" data-v-347656a3>Phone</label><input id="inq-phone" type="tel"${ssrRenderAttr("value", form.value.phone)} placeholder="+1 234 567 890"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-347656a3></div><div class="form-group" data-v-347656a3><label for="inq-type" data-v-347656a3>Inquiry Type</label><select id="inq-type"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-347656a3><option data-v-347656a3${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, null) : ssrLooseEqual(form.value.type, null)) ? " selected" : ""}>Group Visit</option><option data-v-347656a3${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, null) : ssrLooseEqual(form.value.type, null)) ? " selected" : ""}>School Trip</option><option data-v-347656a3${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, null) : ssrLooseEqual(form.value.type, null)) ? " selected" : ""}>Corporate Event</option><option data-v-347656a3${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, null) : ssrLooseEqual(form.value.type, null)) ? " selected" : ""}>Media Inquiry</option><option data-v-347656a3${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, null) : ssrLooseEqual(form.value.type, null)) ? " selected" : ""}>Other</option></select></div></div><div class="form-group" data-v-347656a3><label for="inq-message" data-v-347656a3>Message</label><textarea id="inq-message" rows="6" required placeholder="Please describe your inquiry in detail..."${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-347656a3>${ssrInterpolate(form.value.message)}</textarea></div>`);
      if (status.value.success) {
        _push(`<p class="form-success" data-v-347656a3>Inquiry submitted! We&#39;ll get back to you shortly.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value.error) {
        _push(`<p class="form-error" data-v-347656a3>${ssrInterpolate(status.value.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiWildButton, {
        type: "submit",
        variant: "primary",
        size: "lg",
        arrow: true,
        id: "inquiry-submit-btn",
        disabled: status.value.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(status.value.loading ? "Submitting..." : "Submit Inquiry")}`);
          } else {
            return [
              createTextVNode(toDisplayString(status.value.loading ? "Submitting..." : "Submit Inquiry"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inquiry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inquiry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-347656a3"]]);

export { inquiry as default };
//# sourceMappingURL=inquiry-u9Sp-_Gt.mjs.map
