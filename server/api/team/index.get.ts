const fallbackTeam = [
  {
    id: 1, name: 'Dr. Asha Gurung', role: 'Founder & Conservation Director',
    bio: 'A National Geographic Explorer with 20 years of fieldwork across the Himalayas, pioneering community-led anti-poaching strategies.',
    image_url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80',
    social_links: { twitter: '#', linkedin: '#' },
  },
  {
    id: 2, name: 'Bikram Thapa', role: 'Head of Wildlife Research',
    bio: 'Former chief ecologist at Chitwan National Park. Leads Nepal\'s largest tiger and rhino monitoring programs.',
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    social_links: { twitter: '#', linkedin: '#' },
  },
  {
    id: 3, name: 'Sita Rai', role: 'Community Outreach Manager',
    bio: 'Born in the Terai buffer zone, Sita bridges indigenous knowledge and modern conservation through village-level programs.',
    image_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
    social_links: { twitter: '#', linkedin: '#' },
  },
  {
    id: 4, name: 'Dr. Rajan Shrestha', role: 'Veterinary Science Lead',
    bio: 'Specialist in large mammal veterinary care. Has treated over 200 rescued elephants and rhinos over a 15-year career.',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    social_links: { twitter: '#', linkedin: '#' },
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client
      .from('team_members')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return (data as any[]).map(member => ({
        ...member,
        image: member.image_url,
        social: typeof member.social_links === 'string' ? JSON.parse(member.social_links) : member.social_links
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackTeam.map(m => ({
    ...m,
    image: m.image_url,
    social: m.social_links,
  }));
});
