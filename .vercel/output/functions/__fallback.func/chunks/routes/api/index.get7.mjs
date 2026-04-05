import { d as defineEventHandler, u as useDb } from '../../nitro/nitro.mjs';
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

const fallbackTestimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Travel Journalist",
    content: "The nightfall safari was nothing short of magical. Hearing a tiger's call echo through the darkness while a million stars shone overhead \u2014 it was the most profound wildlife experience of my career.",
    rating: 5
  },
  {
    id: 2,
    name: "James Maharjan",
    role: "Conservation Photographer",
    content: "I've photographed wildlife across four continents, but nothing compares to the raw, up-close encounters at Save Wildlife. The ethical elephant encounter left me speechless \u2014 these animals are truly loved here.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Wright",
    role: "Family Tourist",
    content: "We brought our three kids and every single one of them said it was the best day of their lives. The Junior Ranger program is brilliantly designed \u2014 educational without being preachy. We'll be back!",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Arjun Basnet",
    role: "Wildlife Researcher",
    content: "As a researcher who has studied Nepal's megafauna for 15 years, I can say that Save Wildlife's conservation model is world-class. Their community engagement approach should be replicated globally.",
    rating: 5
  },
  {
    id: 5,
    name: "Maria Santos",
    role: "Eco-Tourism Blogger",
    content: "From the moment we arrived, everything felt intentional and respectful. No rushed tours, no caged animals \u2014 just pure, authentic nature. The canoe ride at sunrise was breathtakingly serene.",
    rating: 5
  },
  {
    id: 6,
    name: "David Miller",
    role: "Nature Enthusiast",
    content: "The attention to detail in the habitats is incredible. You can tell the welfare of the animals is the top priority. The bird watching festival was a highlight of my trip to Nepal.",
    rating: 5
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    role: "Volunteer",
    content: "Participating in the rhino census was an eye-opening experience. Working alongside the rangers gave me a deep appreciation for the hard work that goes into protecting these prehistoric giants.",
    rating: 5
  },
  {
    id: 8,
    name: "Robert Chen",
    role: "Sustainable Architect",
    content: "The park infrastructure is a masterclass in low-impact design. From solar power to waste management, Save Wildlife proves that premium tourism can be truly sustainable.",
    rating: 5
  },
  {
    id: 9,
    name: "Anjali Sharma",
    role: "Local Guide",
    content: "Working here has changed my perspective on wildlife. We don't just show animals; we tell their stories and protect their homes. It is an honor to be part of this mission.",
    rating: 5
  },
  {
    id: 10,
    name: "Marcus Thoenen",
    role: "Backpacker",
    content: "Affordable, authentic, and absolutely stunning. The trek to see the red pandas was the highlight of my six months in Asia. Highly recommend to anyone seeking real adventure.",
    rating: 5
  },
  {
    id: 11,
    name: "Elena Petrova",
    role: "Wildlife Artist",
    content: "The colors of the Himalayan flora and the grace of the snow leopard inspired my entire next collection. Save Wildlife is a sanctuary not just for animals, but for the soul.",
    rating: 5
  },
  {
    id: 12,
    name: "Kenji Sato",
    role: "Retired Teacher",
    content: "A perfectly organized experience. Even at 70, I felt safe and well-cared for. Seeing a rhino in the wild for the first time was a dream come true for me.",
    rating: 5
  },
  {
    id: 13,
    name: "Clara Oswald",
    role: "Discovery Channel Producer",
    content: "We've filmed in dozens of sanctuaries, but the transparency and data-driven approach at Save Wildlife is unparalleled. This is how conservation should be done in the 21st century.",
    rating: 5
  },
  {
    id: 14,
    name: "Liam Neeson (Fan)",
    role: "Adventure Seeker",
    content: "I don't have a particular set of skills, but the guides here do. They found a tiger within two hours of our first safari. Absolutely legendary experience!",
    rating: 5
  }
];
const index_get = defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client.from("testimonials").select("*").order("id", { ascending: true });
    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        ...row,
        avatar: null,
        rating: row.rating || 5
      }));
    }
  } catch (_err) {
  }
  return fallbackTestimonials.map((t) => ({
    ...t,
    avatar: null
  }));
});

export { index_get as default };
//# sourceMappingURL=index.get7.mjs.map
