const fallbackServices: Record<string, any> = {
  'jungle-safari': {
    id: 1, slug: 'jungle-safari', title: 'Jungle Safari',
    description: 'Traverse dense sal forests and open grasslands on a classic 4x4 safari. Spot Bengal tigers, one-horned rhinos, sloth bears, and over 500 bird species with expert naturalist guides.',
    image_url: 'https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=800&q=80',
    price: 85,
    highlights: ['4x4 open-top vehicle', 'Expert naturalist guide', '4-hour immersive experience', 'Binoculars provided', 'Morning & evening departures'],
  },
  'canoe-expedition': {
    id: 2, slug: 'canoe-expedition', title: 'Canoe Expedition',
    description: 'Glide silently along the Rapti and Narayani rivers in a traditional dugout canoe. Observe gharial crocodiles, marsh muggers, kingfishers, and river dolphins from just meters away.',
    image_url: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=800&q=80',
    price: 45,
    highlights: ['Traditional dugout canoe', 'River wildlife spotting', '2-hour peaceful journey', 'Expert river guide', 'Suitable for all ages'],
  },
  'nature-walk': {
    id: 3, slug: 'nature-walk', title: 'Guided Nature Walk',
    description: 'Walk through the buffer zone forests with certified guides who reveal the hidden stories of the jungle — from medicinal plants used by Tharu healers to tracking signs left by nocturnal predators.',
    image_url: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&q=80',
    price: 35,
    highlights: ['Certified forest guide', 'Medicinal plant identification', 'Animal tracking session', '3-hour forest immersion', 'Small groups (max 10)'],
  },
  'elephant-encounter': {
    id: 4, slug: 'elephant-encounter', title: 'Ethical Elephant Encounter',
    description: 'Meet our rescued elephants in a respectful, no-riding setting. Learn about their individual rescue stories, help prepare their meals, and watch them bathe in the river — an unforgettable connection.',
    image_url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
    price: 60,
    highlights: ['No-riding ethical approach', 'Feed & bathe the elephants', 'Learn rescue stories', 'Professional keepers present', 'Photography opportunities'],
  },
  'bird-watching-tour': {
    id: 5, slug: 'bird-watching-tour', title: 'Bird Watching Tour',
    description: 'Nepal boasts over 880 bird species across its diverse ecosystems. Our expert ornithologists will guide you through wetlands, forests, and grasslands to observe resident and migratory species.',
    image_url: 'https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80',
    price: 50,
    highlights: ['Professional ornithologist', 'Premium binoculars & scopes', 'Species checklist included', '5-hour guided session', 'Dawn & dusk departures'],
  },
};

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || '';

  try {
    const client = await useDb(event);
    const { data, error } = await (client as any)
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      const service = data as any;
      return {
        ...service,
        image: service.image_url,
        highlights: typeof service.highlights === 'string' ? JSON.parse(service.highlights) : service.highlights
      };
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  const service = fallbackServices[slug];
  if (!service) {
    throw createError({ statusCode: 404, statusMessage: 'Service not found' });
  }

  return {
    ...service,
    image: service.image_url,
  };
});

