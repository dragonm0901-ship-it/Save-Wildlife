const fallbackTickets = [
  {
    id: 1, name: 'Day Explorer', slug: 'day-explorer',
    description: 'Perfect for a quick visit. Access all public viewing areas, the discovery center, and self-guided trails.',
    price: 25, featured: false,
    includes: ['General sanctuary access', 'Discovery center entry', 'Self-guided trail map', 'Parking included'],
  },
  {
    id: 2, name: 'Safari Pass', slug: 'safari-pass',
    description: 'Our most popular option. Includes a guided 4x4 safari, canoe ride, and access to all sanctuary zones.',
    price: 85, featured: true,
    includes: ['Full sanctuary access', 'Guided 4x4 safari ride', 'Canoe expedition', 'Binoculars rental', 'Complimentary lunch', 'Expert naturalist guide'],
  },
  {
    id: 3, name: 'Premium Expedition', slug: 'premium-expedition',
    description: 'The ultimate wildlife immersion. Two-day expedition with overnight jungle lodge, all guided activities, and exclusive behind-the-scenes access.',
    price: 220, featured: false,
    includes: ['All Safari Pass benefits', 'Overnight jungle lodge stay', 'Night safari experience', 'Behind-the-scenes tour', 'Wildlife photography session', 'Gourmet meals included', 'Private naturalist guide'],
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client
      .from('tickets')
      .select('*')
      .order('price', { ascending: true });

    if (!error && data && data.length > 0) {
      return (data as any[]).map(row => ({
        id: row.id,
        name: row.name,
        slug: row.slug,
        desc: row.description,
        price: row.price,
        featured: !!row.featured,
        includes: typeof row.includes === 'string' ? JSON.parse(row.includes) : row.includes
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackTickets.map(t => ({
    id: t.id,
    name: t.name,
    slug: t.slug,
    desc: t.description,
    price: t.price,
    featured: t.featured,
    includes: t.includes,
  }));
});
