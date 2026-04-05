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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({ name: "", email: "", subject: "", message: "" });
    const status = ref({ loading: false, success: false, error: null });
    useHead({ title: "Contact Us" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-62ddc45f><section class="page-hero" style="${ssrRenderStyle({ "min-height": "40vh" })}" data-v-62ddc45f><img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&amp;q=80" alt="Contact" class="page-hero__bg" data-v-62ddc45f><div class="page-hero__overlay" data-v-62ddc45f></div><div class="container page-hero__content" data-v-62ddc45f><h1 class="page-hero__title" data-v-62ddc45f>Contact Our Hub</h1><div class="page-hero__meta" data-v-62ddc45f><strong class="page-hero__label" data-v-62ddc45f>Kathmandu</strong><p data-v-62ddc45f>Connect with our conservation specialists or inquire about upcoming Himalayan expeditions.</p></div></div></section><section class="section section--bone" data-v-62ddc45f><div class="container" data-v-62ddc45f><div class="contact-grid" data-v-62ddc45f><form class="contact-form" data-v-62ddc45f><h2 style="${ssrRenderStyle({ "margin-bottom": "var(--space-xl)" })}" data-v-62ddc45f>Send Us a Message</h2><div class="form-row" data-v-62ddc45f><div class="form-group" data-v-62ddc45f><label for="contact-name" data-v-62ddc45f>Full Name</label><input type="text" id="contact-name"${ssrRenderAttr("value", form.value.name)} required placeholder="Your name"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-62ddc45f></div><div class="form-group" data-v-62ddc45f><label for="contact-email" data-v-62ddc45f>Email</label><input type="email" id="contact-email"${ssrRenderAttr("value", form.value.email)} required placeholder="your@email.com"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-62ddc45f></div></div><div class="form-group" data-v-62ddc45f><label for="contact-subject" data-v-62ddc45f>Subject</label><select id="contact-subject"${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-62ddc45f><option value="" data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, "") : ssrLooseEqual(form.value.subject, "")) ? " selected" : ""}>Select a topic</option><option data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, null) : ssrLooseEqual(form.value.subject, null)) ? " selected" : ""}>Expedition Inquiry</option><option data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, null) : ssrLooseEqual(form.value.subject, null)) ? " selected" : ""}>Conservation Partnership</option><option data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, null) : ssrLooseEqual(form.value.subject, null)) ? " selected" : ""}>Access Pass Support</option><option data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, null) : ssrLooseEqual(form.value.subject, null)) ? " selected" : ""}>Media &amp; Press</option><option data-v-62ddc45f${ssrIncludeBooleanAttr(Array.isArray(form.value.subject) ? ssrLooseContain(form.value.subject, null) : ssrLooseEqual(form.value.subject, null)) ? " selected" : ""}>Feedback</option></select></div><div class="form-group" data-v-62ddc45f><label for="contact-message" data-v-62ddc45f>Message</label><textarea id="contact-message" required rows="5" placeholder="Tell us how we can help..."${ssrIncludeBooleanAttr(status.value.loading) ? " disabled" : ""} data-v-62ddc45f>${ssrInterpolate(form.value.message)}</textarea></div>`);
      if (status.value.success) {
        _push(`<p class="form-success" data-v-62ddc45f>Message sent! We&#39;ll be in touch soon.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value.error) {
        _push(`<p class="form-error" data-v-62ddc45f>${ssrInterpolate(status.value.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiWildButton, {
        type: "submit",
        variant: "primary",
        size: "lg",
        arrow: true,
        id: "contact-submit-btn",
        disabled: status.value.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(status.value.loading ? "Sending..." : "Send Message")}`);
          } else {
            return [
              createTextVNode(toDisplayString(status.value.loading ? "Sending..." : "Send Message"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="contact-info" data-v-62ddc45f><div class="contact-info-card" data-v-62ddc45f><h3 data-v-62ddc45f>Visit Us</h3><div class="contact-detail" data-v-62ddc45f><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-62ddc45f>Headquarters</span><p data-v-62ddc45f>Durbar Marg, Kathmandu, Nepal</p></div><div class="contact-detail" data-v-62ddc45f><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-62ddc45f>Phone</span><p data-v-62ddc45f><a href="tel:+977014000000" data-v-62ddc45f>+977 01 400 0000</a></p></div><div class="contact-detail" data-v-62ddc45f><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-62ddc45f>Email</span><p data-v-62ddc45f><a href="mailto:info@savewildlife.org.np" data-v-62ddc45f>info@savewildlife.org.np</a></p></div><div class="contact-detail" data-v-62ddc45f><span class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-62ddc45f>Hours</span><p data-v-62ddc45f>Mon-Sun: 7:00 AM - 5:00 PM</p></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62ddc45f"]]);

export { contact as default };
//# sourceMappingURL=contact-DR5P9gTd.mjs.map
