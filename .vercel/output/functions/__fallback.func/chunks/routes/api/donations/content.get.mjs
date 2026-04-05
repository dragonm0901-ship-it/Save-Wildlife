import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
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

const content_get = defineEventHandler(async (event) => {
  return {
    impacts: [
      { title: "Habitat Restoration", desc: "Fund the restoration of natural habitats for displaced wildlife populations.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>' },
      { title: "Anti-Poaching Units", desc: "Support ranger teams that protect wildlife from illegal hunting.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
      { title: "Breeding Programs", desc: "Enable captive breeding programs for critically endangered species.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>' },
      { title: "Education Programs", desc: "Fund educational initiatives that inspire the next generation of conservationists.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>' }
    ],
    stories: [
      { title: "Preserve the Wild", desc: "Through donor support, we successfully relocated 12 elephants to protected reserves in 2024.", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&q=80" },
      { title: "Wings of Freedom", desc: "Our avian recovery program has rehabilitated over 300 injured birds of prey this year.", image: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=500&q=80" },
      { title: "Ocean Guardians", desc: "Marine conservation efforts funded by donations have protected 50 miles of coastal habitat.", image: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=500&q=80" }
    ]
  };
});

export { content_get as default };
//# sourceMappingURL=content.get.mjs.map
