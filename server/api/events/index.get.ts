const fallbackEvents = [
  {
    id: 1, slug: 'nightfall-safari', title: 'Nightfall Safari Experience',
    description: 'Embark on a guided nocturnal safari through the Terai grasslands. Witness the elusive nightlife of the jungle — from hunting owls to prowling leopards — under a canopy of stars.',
    category: 'SAFARI', location: 'Chitwan National Park, Terai',
    event_date: '2026-05-15', start_time: '18:00', end_time: '22:00',
    capacity: '24 guests', price: 'NPR 8,500 / person',
    image_url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  },
  {
    id: 2, slug: 'himalayan-bird-watching-festival', title: 'Himalayan Bird Watching Festival',
    description: 'Join ornithologists and fellow birders for a three-day festival celebrating Nepal\'s incredible avian diversity. Guided walks, photography workshops, and expert presentations.',
    category: 'FESTIVAL', location: 'Koshi Tappu Wildlife Reserve',
    event_date: '2026-06-10', start_time: '06:00', end_time: '17:00',
    capacity: '60 guests', price: 'NPR 5,000 / person',
    image_url: 'https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80',
  },
  {
    id: 3, slug: 'conservation-photography-workshop', title: 'Conservation Photography Workshop',
    description: 'Learn wildlife photography from award-winning photographers in one of the world\'s most biodiverse regions. Cover techniques for capturing animals in their natural habitat with minimal disturbance.',
    category: 'WORKSHOP', location: 'Bardia National Park',
    event_date: '2026-07-20', start_time: '07:00', end_time: '16:00',
    capacity: '16 guests', price: 'NPR 12,000 / person',
    image_url: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80',
  },
  {
    id: 4, slug: 'elephant-keeper-for-a-day', title: 'Elephant Keeper for a Day',
    description: 'Spend a full day working alongside our expert mahouts. Help prepare meals, assist with health checks, and learn about the intricate bond between keeper and elephant.',
    category: 'EXPERIENCE', location: 'Sauraha Elephant Sanctuary',
    event_date: '2026-08-08', start_time: '08:00', end_time: '16:00',
    capacity: '8 guests', price: 'NPR 15,000 / person',
    image_url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
  },
  {
    id: 5, slug: 'world-wildlife-day-celebration', title: 'World Wildlife Day Celebration',
    description: 'A full day of interactive exhibits, live animal ambassadors, conservation talks, and family-friendly activities. Celebrate the planet\'s incredible biodiversity with us.',
    category: 'CELEBRATION', location: 'Save Wildlife Campus, Kathmandu',
    event_date: '2026-09-03', start_time: '10:00', end_time: '18:00',
    capacity: '200 guests', price: 'Free Entry',
    image_url: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80',
  },
  {
    id: 6, slug: 'rhino-count-volunteer-program', title: 'Rhino Count Volunteer Program',
    description: 'Participate in our annual rhino census alongside national park rangers. Learn wildlife tracking techniques and contribute directly to conservation data collection.',
    category: 'VOLUNTEER', location: 'Chitwan National Park',
    event_date: '2026-10-12', start_time: '05:30', end_time: '15:00',
    capacity: '30 volunteers', price: 'NPR 3,000 / person',
    image_url: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80',
  },
  {
    id: 7, slug: 'midnight-snow-leopard-trek', title: 'Midnight Snow Leopard Trek',
    description: 'An elite, high-altitude expedition for experienced trekkers. Track the "Ghost of the Mountains" under the full moon in the rugged terrain of Shey Phoksundo.',
    category: 'EXPEDITION', location: 'Shey Phoksundo National Park',
    event_date: '2026-11-05', start_time: '20:00', end_time: '04:00',
    capacity: '6 guests', price: 'NPR 25,000 / person',
    image_url: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80',
  },
  {
    id: 8, slug: 'red-panda-bamboo-trail', title: 'Red Panda Bamboo Trail',
    description: 'Discover the temperate forests of Ilam on a specialized red panda tracking tour. Learn about bamboo forest ecology and the conservation efforts protecting this endangered species.',
    category: 'NATURE WALK', location: 'Ilam Bamboo Forests',
    event_date: '2026-12-12', start_time: '08:00', end_time: '14:00',
    capacity: '12 guests', price: 'NPR 6,500 / person',
    image_url: 'https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80',
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await (client as any)
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    if (!error && data && data.length > 0) {
      return (data as any[]).map(row => ({
        ...row,
        image: row.image_url,
        time: `${row.start_time} - ${row.end_time}`
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackEvents.map(e => ({
    ...e,
    image: e.image_url,
    date: e.event_date,
    time: `${e.start_time} - ${e.end_time}`,
  }));
});
