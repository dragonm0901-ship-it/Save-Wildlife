import { _ as __nuxt_component_0$1 } from './nuxt-link-131K-cP5.mjs';
import { useSSRContext, mergeProps, ref, computed, watch, nextTick, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useCartStore } from './cart-CZWJ9JOX.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-DykwVqLQ.mjs';
import { i as useSupabaseUser } from './server.mjs';
import { u as useLenis } from './useLenis-DP8-S7x6.mjs';
import { g as gsapWithCSS } from '../_/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'pinia';
import '@supabase/ssr';
import 'perfect-debounce';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'lenis';

function useAuth() {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const loading = ref(false);
  const error = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  async function initialize() {
  }
  async function signUp(email, password, metadata = {}) {
    loading.value = true;
    error.value = null;
    try {
      const { data, error: authError } = await client.auth.signUp({
        email,
        password,
        options: { data: metadata }
      });
      if (authError) throw authError;
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err.message };
    } finally {
      loading.value = false;
    }
  }
  async function signIn(email, password) {
    loading.value = true;
    error.value = null;
    try {
      const { data, error: authError } = await client.auth.signInWithPassword({
        email,
        password
      });
      if (authError) throw authError;
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err.message };
    } finally {
      loading.value = false;
    }
  }
  async function signInWithProvider(provider) {
    try {
      const { data, error: authError } = await client.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${(void 0).location.origin}/auth/callback`
        }
      });
      if (authError) throw authError;
      return { data };
    } catch (err) {
      error.value = err.message;
      return { error: err.message };
    }
  }
  async function signOut() {
    loading.value = true;
    try {
      await client.auth.signOut();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }
  async function resetPassword(email) {
    try {
      const { error: authError } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${(void 0).location.origin}/auth/reset`
      });
      if (authError) throw authError;
      return { success: true };
    } catch (err) {
      error.value = err.message;
      return { error: err.message };
    }
  }
  return {
    user: computed(() => user.value),
    loading,
    error,
    isAuthenticated,
    initialize,
    signUp,
    signIn,
    signInWithProvider,
    signOut,
    resetPassword,
    getClient: () => client
  };
}
const _sfc_main$3 = {
  __name: "NavigationTheNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const cartStore = useCartStore();
    const { isAuthenticated } = useAuth();
    useLenis();
    const headerRef = ref(null);
    const isScrolled = ref(false);
    const isHidden = ref(false);
    const isHovered = ref(false);
    const activeDropdown = ref(null);
    const isAuthPage = computed(() => route.path.startsWith("/auth"));
    const navLinks = [
      { label: "Home", path: "/" },
      { label: "Our Mission", path: "/about" },
      { label: "Himalayan Species", path: "/animals-birds" },
      { label: "Exploration", path: "/services" },
      { label: "Expeditions", path: "/events" },
      { label: "Access Passes", path: "/tickets" },
      { label: "Support Us", path: "/donation" },
      { label: "News", path: "/news" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" }
    ];
    function closeDropdown() {
      activeDropdown.value = null;
    }
    const isMenuOpen = computed(() => activeDropdown.value === "menu");
    function closeMenu() {
      closeDropdown();
    }
    watch(isMenuOpen, async (open) => {
      if (open) {
        await nextTick();
        gsapWithCSS.fromTo(
          ".nav-overlay__link",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "expo.out",
            delay: 0.2
          }
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "headerRef",
        ref: headerRef,
        class: ["navbar", {
          "navbar--scrolled": isScrolled.value || isAuthPage.value,
          "navbar--hidden": isHidden.value && !isHovered.value,
          "navbar--menu-open": isMenuOpen.value
        }]
      }, _attrs))} data-v-dd416996><div class="navbar__inner" data-v-dd416996><button id="nav-menu-toggle" class="navbar__menu-btn" aria-label="Toggle navigation menu" data-v-dd416996><span class="navbar__menu-icon" data-v-dd416996><span class="navbar__menu-line" data-v-dd416996></span><span class="navbar__menu-line" data-v-dd416996></span><span class="navbar__menu-line" data-v-dd416996></span></span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar__logo",
        "aria-label": "Save Wildlife Home",
        onClick: closeMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="navbar__logo-text" data-v-dd416996${_scopeId}>SAVE WILDLIFE</span>`);
          } else {
            return [
              createVNode("span", { class: "navbar__logo-text" }, "SAVE WILDLIFE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navbar__actions" data-v-dd416996>`);
      if (unref(isAuthenticated)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/account",
          class: "navbar__action-btn navbar__action-btn--user",
          "aria-label": "My account"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-dd416996${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-dd416996${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-dd416996${_scopeId}></circle></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                  createVNode("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login",
          class: "navbar__action-btn navbar__action-btn--user",
          "aria-label": "Sign in"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-dd416996${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-dd416996${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-dd416996${_scopeId}></circle></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                  createVNode("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<button id="nav-cart-toggle" class="navbar__action-btn navbar__cart-btn" aria-label="Shopping cart" data-v-dd416996><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-dd416996><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" data-v-dd416996></path><line x1="3" y1="6" x2="21" y2="6" data-v-dd416996></line><path d="M16 10a4 4 0 0 1-8 0" data-v-dd416996></path></svg>`);
      if (unref(cartStore).totalItems > 0) {
        _push(`<span class="navbar__cart-badge" data-v-dd416996>${ssrInterpolate(unref(cartStore).totalItems)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div>`);
      if (activeDropdown.value) {
        _push(`<div class="${ssrRenderClass([{ "navbar__dropdown--cart": activeDropdown.value === "cart" }, "navbar__dropdown"])}" data-lenis-prevent data-v-dd416996>`);
        if (activeDropdown.value === "menu") {
          _push(`<div class="navbar__panel navbar__panel--menu" data-v-dd416996><div class="nav-grid" data-v-dd416996><!--[-->`);
          ssrRenderList(navLinks, (link) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: link.path,
              to: link.path,
              class: "nav-grid__item",
              onClick: closeDropdown
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="nav-grid__text" data-v-dd416996${_scopeId}>${ssrInterpolate(link.label)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "nav-grid__text" }, toDisplayString(link.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeDropdown.value === "cart") {
          _push(`<div class="navbar__panel navbar__panel--cart" data-v-dd416996><div class="cart-quick" data-v-dd416996>`);
          if (unref(cartStore).items.length === 0) {
            _push(`<div class="cart-quick__empty" data-v-dd416996><p data-v-dd416996>Your cart is empty</p>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/tickets",
              class: "label-link",
              onClick: closeDropdown
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
            _push(`<div class="cart-quick__content" data-v-dd416996><div class="cart-quick__items" data-v-dd416996><!--[-->`);
            ssrRenderList(unref(cartStore).items, (item) => {
              _push(`<div class="cart-quick__item" data-v-dd416996><div class="cart-quick__item-card" data-v-dd416996><div class="cart-quick__item-info" data-v-dd416996><span class="cart-quick__item-name" data-v-dd416996>${ssrInterpolate(item.name)}</span><span class="cart-quick__item-details" data-v-dd416996>Qty: ${ssrInterpolate(item.quantity)} • $${ssrInterpolate((item.price * item.quantity).toFixed(2))}</span></div><button class="cart-quick__remove" data-v-dd416996><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-dd416996><line x1="18" y1="6" x2="6" y2="18" data-v-dd416996></line><line x1="6" y1="6" x2="18" y2="18" data-v-dd416996></line></svg></button></div></div>`);
            });
            _push(`<!--]--></div><div class="cart-quick__footer" data-v-dd416996><div class="cart-quick__total" data-v-dd416996><span data-v-dd416996>Total</span><span data-v-dd416996>${ssrInterpolate(unref(cartStore).formattedSubtotal)}</span></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/checkout",
              class: "cart-quick__checkout",
              onClick: closeDropdown
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Checkout `);
                } else {
                  return [
                    createTextVNode(" Checkout ")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div></div>`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/TheNavbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dd416996"]]);
const _imports_0 = publicAssetsURL("/images/logo.png");
const _sfc_main$2 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer section--deep" }, _attrs))} data-v-8994358a><div class="container" data-v-8994358a><div class="footer-newsletter" data-v-8994358a><div class="footer-newsletter__text" data-v-8994358a><h3 class="footer-newsletter__title" data-v-8994358a>Stay Connected with the Wild</h3><p class="footer-newsletter__desc" data-v-8994358a>Get the latest updates on events, new arrivals, and conservation efforts delivered to your inbox.</p></div><form class="footer-newsletter__form" data-v-8994358a><input type="email"${ssrRenderAttr("value", email.value)} placeholder="Enter your email address" class="footer-newsletter__input" required id="footer-email-input" data-v-8994358a><button type="submit" class="footer-newsletter__btn" id="footer-subscribe-btn" data-v-8994358a> Subscribe </button></form></div><div class="footer-divider" data-v-8994358a></div><div class="footer-grid" data-v-8994358a><div class="footer-col footer-col--about" data-v-8994358a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Save Wildlife Logo" class="footer-logo__img" data-v-8994358a${_scopeId}><span class="footer-logo__text" data-v-8994358a${_scopeId}>SAVE WILDLIFE</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Save Wildlife Logo",
                class: "footer-logo__img"
              }),
              createVNode("span", { class: "footer-logo__text" }, "SAVE WILDLIFE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="footer-about-text" data-v-8994358a> Save Wildlife is dedicated to protecting Nepal&#39;s unique biodiversity, from the peaks of the Himalayas to the plains of the Terai. Our mission is to fund conservation through responsible, premium eco-tourism. </p><div class="footer-social" data-v-8994358a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social__link" data-v-8994358a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-8994358a><rect x="2" y="2" width="20" height="20" rx="5" data-v-8994358a></rect><circle cx="12" cy="12" r="5" data-v-8994358a></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" data-v-8994358a></circle></svg></a><a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X Twitter" class="footer-social__link" data-v-8994358a><svg viewBox="0 0 24 24" fill="currentColor" data-v-8994358a><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-v-8994358a></path></svg></a><a href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest" class="footer-social__link" data-v-8994358a><svg viewBox="0 0 24 24" fill="currentColor" data-v-8994358a><path d="M12 0a12 12 0 0 0-4.373 23.17c-.1-.937-.187-2.377.039-3.401.205-.926 1.323-5.609 1.323-5.609s-.337-.675-.337-1.674c0-1.567.909-2.738 2.04-2.738.962 0 1.427.722 1.427 1.588 0 .967-.616 2.414-.933 3.755-.265 1.122.563 2.036 1.671 2.036 2.005 0 3.546-2.114 3.546-5.165 0-2.701-1.942-4.589-4.716-4.589-3.212 0-5.096 2.411-5.096 4.903 0 .971.374 2.013.841 2.579a.34.34 0 0 1 .079.324c-.086.357-.277 1.122-.314 1.279-.05.206-.163.25-.376.151-1.401-.652-2.276-2.699-2.276-4.345 0-3.535 2.566-6.782 7.402-6.782 3.885 0 6.906 2.769 6.906 6.468 0 3.861-2.434 6.97-5.814 6.97-1.135 0-2.203-.59-2.568-1.287l-.698 2.662c-.253.973-.935 2.193-1.392 2.938A12 12 0 1 0 12 0z" data-v-8994358a></path></svg></a><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="footer-social__link" data-v-8994358a><svg viewBox="0 0 24 24" fill="currentColor" data-v-8994358a><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-v-8994358a></path></svg></a></div></div><div class="footer-col" data-v-8994358a><h4 class="footer-col__title" data-v-8994358a>Quick Links</h4><nav class="footer-nav" data-v-8994358a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Mission`);
          } else {
            return [
              createTextVNode("Our Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/news",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Latest News`);
          } else {
            return [
              createTextVNode("Latest News")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Expeditions`);
          } else {
            return [
              createTextVNode("Expeditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donation",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Support Us`);
          } else {
            return [
              createTextVNode("Support Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Exploration`);
          } else {
            return [
              createTextVNode("Exploration")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/animals-birds",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Himalayan Species`);
          } else {
            return [
              createTextVNode("Himalayan Species")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="footer-col" data-v-8994358a><h4 class="footer-col__title" data-v-8994358a>Resources</h4><nav class="footer-nav" data-v-8994358a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ`);
          } else {
            return [
              createTextVNode("FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/inquiry",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Inquiry`);
          } else {
            return [
              createTextVNode("Inquiry")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Access Passes`);
          } else {
            return [
              createTextVNode("Access Passes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms-conditions",
        class: "footer-nav__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms &amp; Conditions`);
          } else {
            return [
              createTextVNode("Terms & Conditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="footer-col" data-v-8994358a><h4 class="footer-col__title" data-v-8994358a>Visit Us</h4><div class="footer-contact" data-v-8994358a><div class="footer-contact__item" data-v-8994358a><span class="footer-contact__label" data-v-8994358a>Headquarters</span><p data-v-8994358a>Durbar Marg, Kathmandu,<br data-v-8994358a>Bagmati 44600, Nepal</p></div><div class="footer-contact__item" data-v-8994358a><span class="footer-contact__label" data-v-8994358a>Phone</span><a href="tel:+977014000000" data-v-8994358a>+977 01 400 0000</a></div><div class="footer-contact__item" data-v-8994358a><span class="footer-contact__label" data-v-8994358a>Email</span><a href="mailto:info@savewildlife.org.np" data-v-8994358a>info@savewildlife.org.np</a></div><div class="footer-contact__item" data-v-8994358a><span class="footer-contact__label" data-v-8994358a>Visitor Hours</span><p data-v-8994358a>Mon - Sun: 7:00 AM - 5:00 PM<br data-v-8994358a>(Guided Trekking hours vary)</p></div></div></div></div><div class="footer-divider" data-v-8994358a></div><div class="footer-bottom" data-v-8994358a><p class="footer-copyright" data-v-8994358a> © ${ssrInterpolate(currentYear.value)} Save Wildlife Conservation. All rights reserved. </p><div class="footer-bottom__links" data-v-8994358a>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy-policy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy`);
          } else {
            return [
              createTextVNode("Privacy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/terms-conditions" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms`);
          } else {
            return [
              createTextVNode("Terms")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8994358a"]]);
const _sfc_main$1 = {
  __name: "NavigationFloatingBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const isExpanded = ref(true);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["floating-bar", {
          "floating-bar--visible": isVisible.value,
          "floating-bar--expanded": isExpanded.value
        }]
      }, _attrs))} data-v-0308f627><div class="floating-bar__inner" data-v-0308f627><div class="floating-bar__menu" style="${ssrRenderStyle(isExpanded.value ? null : { display: "none" })}" data-v-0308f627>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donation",
        class: "floating-bar__btn",
        id: "floating-donations"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` DONATIONS `);
          } else {
            return [
              createTextVNode(" DONATIONS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "floating-bar__btn",
        id: "floating-events"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` EVENTS `);
          } else {
            return [
              createTextVNode(" EVENTS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tickets",
        class: "floating-bar__btn",
        id: "floating-tickets"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` TICKETS `);
          } else {
            return [
              createTextVNode(" TICKETS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="floating-bar__trigger" style="${ssrRenderStyle(!isExpanded.value ? null : { display: "none" })}" data-v-0308f627><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-0308f627><path d="M7 17L17 7M17 7H7M17 7v10" data-v-0308f627></path></svg></div></div><button class="floating-bar__toggle" aria-label="Close menu" style="${ssrRenderStyle(isExpanded.value ? null : { display: "none" })}" data-v-0308f627><div class="floating-bar__toggle-circle" data-v-0308f627><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-0308f627><line x1="18" y1="6" x2="6" y2="18" data-v-0308f627></line><line x1="6" y1="6" x2="18" y2="18" data-v-0308f627></line></svg></div></button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/FloatingBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0308f627"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useLenis();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavigationTheNavbar = __nuxt_component_0;
      const _component_TheFooter = __nuxt_component_1;
      const _component_NavigationFloatingBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-wrapper" }, _attrs))} data-v-b1d35b9d>`);
      _push(ssrRenderComponent(_component_NavigationTheNavbar, null, null, _parent));
      _push(`<main class="main-content" data-v-b1d35b9d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_NavigationFloatingBar, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1d35b9d"]]);

export { _default as default };
//# sourceMappingURL=default-BwAyU69d.mjs.map
