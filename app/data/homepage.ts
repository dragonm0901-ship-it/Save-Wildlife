export const staticServices = [
  {
    id: 1, slug: 'jungle-safari', title: 'Jungle Safari',
    description: 'Traverse dense sal forests and open grasslands on a classic 4x4 safari. Spot Bengal tigers, one-horned rhinos, sloth bears, and over 500 bird species with expert naturalist guides.',
    image: '/images/offers/1.Jungle.png',
    price: 85, sort_order: 1,
    highlights: ['4x4 open-top vehicle', 'Expert naturalist guide', '4-hour immersive experience', 'Binoculars provided', 'Morning & evening departures'],
  },
  {
    id: 2, slug: 'canoe-expedition', title: 'Canoe Expedition',
    description: 'Glide silently along the Rapti and Narayani rivers in a traditional dugout canoe. Observe gharial crocodiles, marsh muggers, kingfishers, and river dolphins from just meters away.',
    image: '/images/offers/2 Boating.png',
    price: 45, sort_order: 2,
    highlights: ['Traditional dugout canoe', 'River wildlife spotting', '2-hour peaceful journey', 'Expert river guide', 'Suitable for all ages'],
  },
  {
    id: 3, slug: 'nature-walk', title: 'Guided Nature Walk',
    description: 'Walk through the buffer zone forests with certified guides who reveal the hidden stories of the jungle — from medicinal plants used by Tharu healers to tracking signs left by nocturnal predators.',
    image: '/images/offers/3 Tour.png',
    price: 35, sort_order: 3,
    highlights: ['Certified forest guide', 'Medicinal plant identification', 'Animal tracking session', '3-hour forest immersion', 'Small groups (max 10)'],
  },
  {
    id: 4, slug: 'elephant-encounter', title: 'Ethical Elephant Encounter',
    description: 'Meet our rescued elephants in a respectful, no-riding setting. Learn about their individual rescue stories, help prepare their meals, and watch them bathe in the river — an unforgettable connection.',
    image: '/images/offers/4 Elephant.png',
    price: 60, sort_order: 4,
    highlights: ['No-riding ethical approach', 'Feed & bathe the elephants', 'Learn rescue stories', 'Professional keepers present', 'Photography opportunities'],
  },
  {
    id: 5, slug: 'bird-watching-tour', title: 'Bird Watching Tour',
    description: 'Nepal boasts over 880 bird species across its diverse ecosystems. Our expert ornithologists will guide you through wetlands, forests, and grasslands to observe resident and migratory species.',
    image: '/images/offers/5 Bird.png',
    price: 50, sort_order: 5,
    highlights: ['Professional ornithologist', 'Premium binoculars & scopes', 'Species checklist included', '5-hour guided session', 'Dawn & dusk departures'],
  },
];

export const staticEvents = [
  {
    id: 1, slug: 'nightfall-safari', title: 'Nightfall Safari Experience',
    description: 'Embark on a guided nocturnal safari through the Terai grasslands. Witness the elusive nightlife of the jungle — from hunting owls to prowling leopards — under a canopy of stars.',
    category: 'SAFARI', location: 'Chitwan National Park, Terai',
    date: '2026-05-15', start_time: '18:00', end_time: '22:00',
    time: '18:00 - 22:00',
    capacity: '24 guests', price: 'NPR 8,500 / person',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  },
  {
    id: 2, slug: 'himalayan-bird-watching-festival', title: 'Himalayan Bird Watching Festival',
    description: 'Join ornithologists and fellow birders for a three-day festival celebrating Nepal\'s incredible avian diversity. Guided walks, photography workshops, and expert presentations.',
    category: 'FESTIVAL', location: 'Koshi Tappu Wildlife Reserve',
    date: '2026-06-10', start_time: '06:00', end_time: '17:00',
    time: '06:00 - 17:00',
    capacity: '60 guests', price: 'NPR 5,000 / person',
    image: 'https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80',
  },
  {
    id: 3, slug: 'conservation-photography-workshop', title: 'Conservation Photography Workshop',
    description: 'Learn wildlife photography from award-winning photographers in one of the world\'s most biodiverse regions. Cover techniques for capturing animals in their natural habitat with minimal disturbance.',
    category: 'WORKSHOP', location: 'Bardia National Park',
    date: '2026-07-20', start_time: '07:00', end_time: '16:00',
    time: '07:00 - 16:00',
    capacity: '16 guests', price: 'NPR 12,000 / person',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80',
  },
  {
    id: 4, slug: 'wildlife-rescue-awareness', title: 'Wildlife Rescue Awareness Day',
    description: 'Meet our rehabilitation team and learn about the rescue process for injured Himalayan species. A rare look behind the scenes of our specialized medical facility.',
    category: 'COMMUNITY', location: 'Rescue Center, Buffer Zone',
    date: '2026-08-05', start_time: '10:00', end_time: '15:00',
    time: '10:00 - 15:00',
    capacity: '100 guests', price: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=800&q=80',
  },
];

export const staticTestimonials = [
  {
    id: 1, name: 'Emily Chen', role: 'Travel Journalist',
    content: 'The nightfall safari was nothing short of magical. Hearing a tiger\'s call echo through the darkness while a million stars shone overhead — it was the most profound wildlife experience of my career.',
    rating: 5,
  },
  {
    id: 2, name: 'James Maharjan', role: 'Conservation Photographer',
    content: 'I\'ve photographed wildlife across four continents, but nothing compares to the raw, up-close encounters at Save Wildlife. The ethical elephant encounter left me speechless — these animals are truly loved here.',
    rating: 5,
  },
  {
    id: 3, name: 'Sophie Wright', role: 'Family Tourist',
    content: 'We brought our three kids and every single one of them said it was the best day of their lives. The Junior Ranger program is brilliantly designed — educational without being preachy. We\'ll be back!',
    rating: 5,
  },
];

export const staticBlogPosts = [
  {
    id: 1, slug: 'nepal-tiger-population-record-high', title: 'Nepal\'s Tiger Population Reaches Record High',
    category: 'Conservation', author_name: 'Dr. Asha Gurung',
    excerpt: 'The latest national census confirms Nepal\'s wild tiger population has surpassed 355 individuals — a nearly threefold increase from 2009.',
    date: '2026-03-15',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
  },
  {
    id: 2, slug: 'planning-your-first-safari', title: 'Planning Your First Safari in Nepal',
    category: 'Travel Guide', author_name: 'Sita Rai',
    excerpt: 'Everything you need to know before your first wildlife safari in the Terai — from what to pack to the best time to visit.',
    date: '2026-02-28',
    image: 'https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=800&q=80',
  },
  {
    id: 3, slug: 'celebrating-diversity-of-animals', title: 'Celebrating the Diversity of Nepal\'s Wildlife',
    category: 'Conservation', author_name: 'Bikram Thapa',
    excerpt: 'From the snow leopards of the Himalayas to the gharials of the Terai rivers, Nepal\'s biodiversity is staggering. Here\'s why it matters.',
    date: '2026-01-10',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80',
  },
];
