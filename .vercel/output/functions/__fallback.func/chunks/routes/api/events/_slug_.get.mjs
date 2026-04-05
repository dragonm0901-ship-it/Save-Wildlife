import { d as defineEventHandler, g as getRouterParam, u as useDb, c as createError } from '../../../nitro/nitro.mjs';
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

const fallbackEvents = {
  "nightfall-safari": {
    id: 1,
    slug: "nightfall-safari",
    title: "Nightfall Safari Experience",
    description: "Embark on a guided nocturnal safari through the Terai grasslands. Witness the elusive nightlife of the jungle \u2014 from hunting owls to prowling leopards \u2014 under a canopy of stars. Our expert naturalists use thermal imaging equipment and night-vision optics to help you discover creatures that remain hidden during daylight hours. The experience includes a traditional Tharu dinner served under the open sky.",
    category: "SAFARI",
    location: "Chitwan National Park, Terai",
    event_date: "2026-05-15",
    start_time: "18:00",
    end_time: "22:00",
    capacity: "24 guests",
    price: "NPR 8,500 / person",
    image_url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
  },
  "himalayan-bird-watching-festival": {
    id: 2,
    slug: "himalayan-bird-watching-festival",
    title: "Himalayan Bird Watching Festival",
    description: "Join ornithologists and fellow birders for a three-day festival celebrating Nepal's incredible avian diversity. Guided walks through wetland, forest, and grassland habitats. Photography workshops and expert presentations on migration patterns and conservation strategies. Nepal is home to over 880 bird species, making it one of the richest birding destinations on earth.",
    category: "FESTIVAL",
    location: "Koshi Tappu Wildlife Reserve",
    event_date: "2026-06-10",
    start_time: "06:00",
    end_time: "17:00",
    capacity: "60 guests",
    price: "NPR 5,000 / person",
    image_url: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80"
  },
  "conservation-photography-workshop": {
    id: 3,
    slug: "conservation-photography-workshop",
    title: "Conservation Photography Workshop",
    description: "Learn wildlife photography from award-winning photographers in one of the world's most biodiverse regions. Cover techniques for capturing animals in their natural habitat with minimal disturbance. Includes field sessions in hides and blinds, post-processing masterclasses, and a portfolio review. All skill levels welcome.",
    category: "WORKSHOP",
    location: "Bardia National Park",
    event_date: "2026-07-20",
    start_time: "07:00",
    end_time: "16:00",
    capacity: "16 guests",
    price: "NPR 12,000 / person",
    image_url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
  },
  "elephant-keeper-for-a-day": {
    id: 4,
    slug: "elephant-keeper-for-a-day",
    title: "Elephant Keeper for a Day",
    description: "Spend a full day working alongside our expert mahouts at the Sauraha Elephant Sanctuary. Help prepare meals of rice, sugarcane, and salt licks, assist with health check-ups, and accompany the elephants on their morning bath in the Rapti River. Learn about the intricate bond between keeper and elephant that has defined Terai culture for centuries.",
    category: "EXPERIENCE",
    location: "Sauraha Elephant Sanctuary",
    event_date: "2026-08-08",
    start_time: "08:00",
    end_time: "16:00",
    capacity: "8 guests",
    price: "NPR 15,000 / person",
    image_url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80"
  },
  "world-wildlife-day-celebration": {
    id: 5,
    slug: "world-wildlife-day-celebration",
    title: "World Wildlife Day Celebration",
    description: "A full day of interactive exhibits, live animal ambassadors, conservation talks, and family-friendly activities. Celebrate the planet's incredible biodiversity with us at our Kathmandu campus. Special appearances by leading conservationists and researchers, children's animal art workshop, and a live documentary screening.",
    category: "CELEBRATION",
    location: "Save Wildlife Campus, Kathmandu",
    event_date: "2026-09-03",
    start_time: "10:00",
    end_time: "18:00",
    capacity: "200 guests",
    price: "Free Entry",
    image_url: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80"
  },
  "rhino-count-volunteer-program": {
    id: 6,
    slug: "rhino-count-volunteer-program",
    title: "Rhino Count Volunteer Program",
    description: "Participate in our annual rhino census alongside national park rangers and wildlife biologists. Learn professional wildlife tracking techniques including footprint analysis, dung identification, and camera trap setup. Your contribution directly feeds into the national conservation database that informs protection policies.",
    category: "VOLUNTEER",
    location: "Chitwan National Park",
    event_date: "2026-10-12",
    start_time: "05:30",
    end_time: "15:00",
    capacity: "30 volunteers",
    price: "NPR 3,000 / person",
    image_url: "https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80"
  }
};
const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  try {
    const client = await useDb(event);
    const { data, error } = await client.from("events").select("*").eq("slug", slug).single();
    if (!error && data) {
      return {
        ...data,
        image: data.image_url,
        time: `${data.start_time} - ${data.end_time}`
      };
    }
  } catch (_err) {
  }
  const ev = fallbackEvents[slug];
  if (!ev) {
    throw createError({ statusCode: 404, statusMessage: "Event not found" });
  }
  return {
    ...ev,
    image: ev.image_url,
    date: ev.event_date,
    time: `${ev.start_time} - ${ev.end_time}`
  };
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
