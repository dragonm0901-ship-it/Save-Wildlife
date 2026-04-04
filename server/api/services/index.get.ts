const fallbackServices = [
  {
    id: 1, slug: 'jungle-safari', title: 'Jungle Safari',
    description: 'Traverse dense sal forests and open grasslands on a classic 4x4 safari. Spot Bengal tigers, one-horned rhinos, sloth bears, and over 500 bird species with expert naturalist guides.',
    image_url: '/images/about/Jungle Safari.png',
    price: 85, sort_order: 1,
    highlights: ['4x4 open-top vehicle', 'Expert naturalist guide', '4-hour immersive experience', 'Binoculars provided', 'Morning & evening departures'],
  },
  {
    id: 2, slug: 'canoe-expedition', title: 'Canoe Expedition',
    description: 'Glide silently along the Rapti and Narayani rivers in a traditional dugout canoe. Observe gharial crocodiles, marsh muggers, kingfishers, and river dolphins from just meters away.',
    image_url: '/images/about/Canoe.png',
    price: 45, sort_order: 2,
    highlights: ['Traditional dugout canoe', 'River wildlife spotting', '2-hour peaceful journey', 'Expert river guide', 'Suitable for all ages'],
  },
  {
    id: 3, slug: 'nature-walk', title: 'Guided Nature Walk',
    description: 'Walk through the buffer zone forests with certified guides who reveal the hidden stories of the jungle — from medicinal plants used by Tharu healers to tracking signs left by nocturnal predators.',
    image_url: '/images/about/Guided Nature Walk.png',
    price: 35, sort_order: 3,
    highlights: ['Certified forest guide', 'Medicinal plant identification', 'Animal tracking session', '3-hour forest immersion', 'Small groups (max 10)'],
  },
  {
    id: 4, slug: 'elephant-encounter', title: 'Ethical Elephant Encounter',
    description: 'Meet our rescued elephants in a respectful, no-riding setting. Learn about their individual rescue stories, help prepare their meals, and watch them bathe in the river — an unforgettable connection.',
    image_url: '/images/about/Ethical Elephant Visit.png',
    price: 60, sort_order: 4,
    highlights: ['No-riding ethical approach', 'Feed & bathe the elephants', 'Learn rescue stories', 'Professional keepers present', 'Photography opportunities'],
  },
  {
    id: 5, slug: 'bird-watching-tour', title: 'Bird Watching Tour',
    description: 'Nepal boasts over 880 bird species across its diverse ecosystems. Our expert ornithologists will guide you through wetlands, forests, and grasslands to observe resident and migratory species.',
    image_url: '/images/about/Bird Watching.png',
    price: 50, sort_order: 5,
    highlights: ['Professional ornithologist', 'Premium binoculars & scopes', 'Species checklist included', '5-hour guided session', 'Dawn & dusk departures'],
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!error && data && Array.isArray(data) && data.length > 0) {
      return (data as any[]).map(row => ({
        ...row,
        image: row.image_url
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  // Return fallback data if database is unavailable or empty
  return fallbackServices.map(s => ({
    ...s,
    image: s.image_url,
  }));
});
