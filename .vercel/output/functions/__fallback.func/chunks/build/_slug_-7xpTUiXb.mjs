import { _ as __nuxt_component_0 } from './WildButton-9r5Jthnm.mjs';
import { withAsyncContext, computed, ref, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { f as useRoute, g as useFetch, u as useHead } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: animal, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/animals/${route.params.slug}`,
      "$C41BHwhtyI"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: computed(() => animal.value?.name || "Animal Detail") });
    const activeTab = ref("Overview");
    const tabs = ["Overview", "Habitat", "Diet", "Conservation"];
    const displayFacts = computed(() => {
      if (animal.value?.facts) {
        return typeof animal.value.facts === "string" ? JSON.parse(animal.value.facts) : animal.value.facts;
      }
      return [
        { label: "Status", value: "Protected" },
        { label: "Region", value: "Nepal" },
        { label: "Year", value: "2026" }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiWildButton = __nuxt_component_0;
      if (unref(animal)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "animal-detail" }, _attrs))} data-v-35d005a5><section class="animal-hero" data-v-35d005a5><img${ssrRenderAttr("src", unref(animal).image)}${ssrRenderAttr("alt", unref(animal).name)} class="animal-hero__bg" data-v-35d005a5><div class="animal-hero__overlay" data-v-35d005a5></div><div class="container animal-hero__content" data-v-35d005a5><span class="label" style="${ssrRenderStyle({ "color": "var(--electric-lime)" })}" data-v-35d005a5>${ssrInterpolate(unref(animal).habitat)}</span><h1 class="animal-hero__name" data-v-35d005a5>${ssrInterpolate(unref(animal).name)}</h1><p class="animal-hero__scientific" data-v-35d005a5>${ssrInterpolate(unref(animal).scientific || unref(animal).scientific_name)}</p></div></section><section class="section section--bone" data-v-35d005a5><div class="container" data-v-35d005a5><div class="animal-detail__grid" data-v-35d005a5><div class="animal-detail__info" data-v-35d005a5><div class="animal-tabs" data-v-35d005a5><!--[-->`);
        ssrRenderList(tabs, (tab) => {
          _push(`<button class="${ssrRenderClass([{ "animal-tab--active": activeTab.value === tab }, "animal-tab"])}" data-v-35d005a5>${ssrInterpolate(tab)}</button>`);
        });
        _push(`<!--]--></div><div class="animal-tab-content" data-v-35d005a5>`);
        if (activeTab.value === "Overview") {
          _push(`<div data-v-35d005a5><p data-v-35d005a5>${ssrInterpolate(unref(animal).description || unref(animal).overview)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "Habitat") {
          _push(`<div data-v-35d005a5><p data-v-35d005a5>${ssrInterpolate(unref(animal).habitatInfo || unref(animal).habitat_info)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "Diet") {
          _push(`<div data-v-35d005a5><p data-v-35d005a5>${ssrInterpolate(unref(animal).dietInfo || unref(animal).diet_info)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "Conservation") {
          _push(`<div data-v-35d005a5><p data-v-35d005a5>${ssrInterpolate(unref(animal).conservationInfo || unref(animal).conservation_status)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="animal-facts" data-v-35d005a5><!--[-->`);
        ssrRenderList(displayFacts.value, (fact) => {
          _push(`<div class="animal-fact" data-v-35d005a5><span class="animal-fact__label label" data-v-35d005a5>${ssrInterpolate(fact.label)}</span><span class="animal-fact__value" data-v-35d005a5>${ssrInterpolate(fact.value)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="animal-detail__sidebar" data-v-35d005a5><div class="animal-detail__image" data-v-35d005a5><img${ssrRenderAttr("src", unref(animal).sideImage || unref(animal).side_image || unref(animal).image)}${ssrRenderAttr("alt", unref(animal).name)} loading="lazy" data-v-35d005a5></div>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/donation",
          variant: "primary",
          arrow: true,
          size: "lg",
          style: { "width": "100%", "justify-content": "center" },
          id: "support-species-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Support This Species `);
            } else {
              return [
                createTextVNode(" Support This Species ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></section></div>`);
      } else if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-state section section--bone" }, _attrs))} data-v-35d005a5><div class="container" data-v-35d005a5><p data-v-35d005a5>Loading wildlife details...</p></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-state section section--bone" }, _attrs))} data-v-35d005a5><div class="container" data-v-35d005a5><p data-v-35d005a5>Could not load animal details. Please try again later.</p>`);
        _push(ssrRenderComponent(_component_UiWildButton, {
          to: "/animals-birds",
          variant: "secondary",
          arrow: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Animals`);
            } else {
              return [
                createTextVNode("Back to Animals")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/animals/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35d005a5"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-7xpTUiXb.mjs.map
