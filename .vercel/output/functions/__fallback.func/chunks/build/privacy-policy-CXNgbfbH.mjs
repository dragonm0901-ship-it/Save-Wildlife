import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Privacy Policy" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-a6a9f9bf><section class="legal-hero section--dark" data-v-a6a9f9bf><div class="container" data-v-a6a9f9bf><h1 class="legal-title" data-v-a6a9f9bf>Privacy Policy</h1><p class="legal-subtitle" data-v-a6a9f9bf>Effective Date: April 1, 2026</p></div></section><section class="section section--ivory" data-v-a6a9f9bf><div class="container container--sm" data-v-a6a9f9bf><div class="legal-content" data-v-a6a9f9bf><p data-v-a6a9f9bf>At Save Wildlife, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p><h2 data-v-a6a9f9bf>1. Information We Collect</h2><p data-v-a6a9f9bf>We may collect personal information such as your name, email address, phone number, and payment details when you browse our site, subscribe to our newsletter, make a donation, or book an expedition.</p><h2 data-v-a6a9f9bf>2. How We Use Your Information</h2><p data-v-a6a9f9bf>We use the information we collect to:</p><ul data-v-a6a9f9bf><li data-v-a6a9f9bf>Process your donations and bookings.</li><li data-v-a6a9f9bf>Send you updates about our conservation efforts and news.</li><li data-v-a6a9f9bf>Improve our website and user experience.</li><li data-v-a6a9f9bf>Comply with legal obligations.</li></ul><h2 data-v-a6a9f9bf>3. Data Security</h2><p data-v-a6a9f9bf>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive information (such as credit card data) is encrypted and transmitted via secure methods.</p><h2 data-v-a6a9f9bf>4. Third-Party Disclosure</h2><p data-v-a6a9f9bf>We do not sell, trade, or otherwise transfer your personal information to outside parties, except for trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.</p><h2 data-v-a6a9f9bf>5. Cookies</h2><p data-v-a6a9f9bf>Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some functionality of the site.</p><h2 data-v-a6a9f9bf>6. Changes to This Policy</h2><p data-v-a6a9f9bf>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p><h2 data-v-a6a9f9bf>7. Contact Us</h2><p data-v-a6a9f9bf>If you have any questions about this Privacy Policy, please contact us at info@savewildlife.org.np.</p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6a9f9bf"]]);

export { privacyPolicy as default };
//# sourceMappingURL=privacy-policy-CXNgbfbH.mjs.map
