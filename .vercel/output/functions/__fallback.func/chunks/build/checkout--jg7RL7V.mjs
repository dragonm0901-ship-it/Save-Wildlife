import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCartStore } from './cart-CZWJ9JOX.mjs';
import { a as useRouter, u as useHead } from './server.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const router = useRouter();
    function processPayment() {
      alert("Thank you for your purchase! Your tickets have been sent to your email.");
      cartStore.clearCart();
      router.push("/");
    }
    useHead({ title: "Checkout" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-page" }, _attrs))} data-v-5460ef16><section class="section section--bone" data-v-5460ef16><div class="container" data-v-5460ef16><div class="checkout-grid" data-v-5460ef16><div class="checkout-main" data-v-5460ef16><h1 class="checkout-title" data-v-5460ef16>Your Safari Journey</h1><p class="checkout-subtitle" data-v-5460ef16>Review your selection and prepare for an unforgettable adventure.</p>`);
      if (unref(cartStore).items.length === 0) {
        _push(`<div class="empty-cart" data-v-5460ef16><div class="empty-cart__icon" data-v-5460ef16>🛒</div><p data-v-5460ef16>Your cart is empty. Let&#39;s find some adventures!</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/tickets",
          variant: "primary",
          arrow: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Browse Tickets`);
            } else {
              return [
                createTextVNode("Browse Tickets")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="cart-items" data-v-5460ef16><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<div class="cart-item" data-v-5460ef16><div class="cart-item__info" data-v-5460ef16><h3 data-v-5460ef16>${ssrInterpolate(item.name)}</h3><p class="label" style="${ssrRenderStyle({ "color": "var(--canopy-green)" })}" data-v-5460ef16>Premium Entry</p></div><div class="cart-item__actions" data-v-5460ef16><div class="quantity-control" data-v-5460ef16><button data-v-5460ef16>-</button><span data-v-5460ef16>${ssrInterpolate(item.quantity)}</span><button data-v-5460ef16>+</button></div><div class="cart-item__price" data-v-5460ef16>$${ssrInterpolate(item.price * item.quantity)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
      if (unref(cartStore).items.length > 0) {
        _push(`<aside class="checkout-sidebar" data-v-5460ef16><div class="summary-card" data-v-5460ef16><h3 data-v-5460ef16>Order Summary</h3><div class="summary-row" data-v-5460ef16><span data-v-5460ef16>Subtotal</span><span data-v-5460ef16>$${ssrInterpolate(unref(cartStore).totalPrice)}</span></div><div class="summary-row" data-v-5460ef16><span data-v-5460ef16>Sanctuary Fee</span><span data-v-5460ef16>$0</span></div><div class="summary-divider" data-v-5460ef16></div><div class="summary-row summary-row--total" data-v-5460ef16><span data-v-5460ef16>Total</span><span data-v-5460ef16>$${ssrInterpolate(unref(cartStore).totalPrice)}</span></div><div class="checkout-form" data-v-5460ef16><div class="form-group" data-v-5460ef16><label data-v-5460ef16>Full Name</label><input type="text" placeholder="John Doe" class="form-input" data-v-5460ef16></div><div class="form-group" data-v-5460ef16><label data-v-5460ef16>Card Details</label><div class="form-input form-input--card" data-v-5460ef16><span data-v-5460ef16>💳</span><input type="text" placeholder="•••• •••• •••• ••••" data-v-5460ef16></div></div></div>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          variant: "primary",
          size: "lg",
          style: { "width": "100%", "justify-content": "center", "margin-top": "var(--space-xl)" },
          onClick: processPayment
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Complete Payment `);
            } else {
              return [
                createTextVNode(" Complete Payment ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="summary-note" data-v-5460ef16>Secured by Stripe encryption</p></div></aside>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5460ef16"]]);

export { checkout as default };
//# sourceMappingURL=checkout--jg7RL7V.mjs.map
