import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useSupabaseClient } from './useSupabaseClient-DykwVqLQ.mjs';
import { a as useRouter, u as useHead } from './server.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    useRouter();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const errorMsg = ref("");
    useHead({ title: "Login" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-page" }, _attrs))} data-v-c7042d94><section class="section section--bone auth-section" data-v-c7042d94><div class="container container--sm" data-v-c7042d94><div class="auth-card" data-v-c7042d94>`);
      _push(ssrRenderComponent(_component_UiWildButton, {
        to: "/",
        variant: "ghost",
        size: "sm",
        arrow: true,
        back: true,
        class: "auth-back-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="auth-header" data-v-c7042d94><h1 class="auth-title" data-v-c7042d94>Welcome Back</h1><p class="auth-subtitle" data-v-c7042d94>Sign in to manage your bookings and sanctuary experiences.</p></div><form class="auth-form" data-v-c7042d94><div class="form-group" data-v-c7042d94><label for="email" data-v-c7042d94>Email Address</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" required placeholder="nature@savewildlife.org.np" class="form-input" data-v-c7042d94></div><div class="form-group" data-v-c7042d94><label for="password" data-v-c7042d94>Password</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" required placeholder="••••••••" class="form-input" data-v-c7042d94></div>`);
      if (unref(errorMsg)) {
        _push(`<p class="auth-error" data-v-c7042d94>${ssrInterpolate(unref(errorMsg))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiWildButton, {
        type: "submit",
        variant: "primary",
        arrow: true,
        style: { "width": "100%", "justify-content": "center" },
        disabled: unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(loading) ? "Signing in..." : "Sign In")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(loading) ? "Signing in..." : "Sign In"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="auth-footer" data-v-c7042d94><p data-v-c7042d94>Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signup" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Join the Mission`);
          } else {
            return [
              createTextVNode("Join the Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7042d94"]]);

export { login as default };
//# sourceMappingURL=login-CdrqK-5l.mjs.map
