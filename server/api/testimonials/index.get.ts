const fallbackTestimonials = [
  {
    id: 1, name: 'Emily Chen', role: 'Travel Journalist',
    content: 'The nightfall safari was nothing short of magical. Hearing a tiger\'s call echo through the darkness while a million stars shone overhead — it was the most profound wildlife experience of my career.',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
  },
  {
    id: 2, name: 'James Maharjan', role: 'Conservation Photographer',
    content: 'I\'ve photographed wildlife across four continents, but nothing compares to the raw, up-close encounters at Save Wildlife. The ethical elephant encounter left me speechless — these animals are truly loved here.',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
  },
  {
    id: 3, name: 'Sophie Wright', role: 'Family Tourist',
    content: 'We brought our three kids and every single one of them said it was the best day of their lives. The Junior Ranger program is brilliantly designed — educational without being preachy. We\'ll be back!',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
  },
  {
    id: 4, name: 'Dr. Arjun Basnet', role: 'Wildlife Researcher',
    content: 'As a researcher who has studied Nepal\'s megafauna for 15 years, I can say that Save Wildlife\'s conservation model is world-class. Their community engagement approach should be replicated globally.',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
  },
  {
    id: 5, name: 'Maria Santos', role: 'Eco-Tourism Blogger',
    content: 'From the moment we arrived, everything felt intentional and respectful. No rushed tours, no caged animals — just pure, authentic nature. The canoe ride at sunrise was breathtakingly serene.',
    avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    rating: 5,
  },
  {
    id: 6, name: 'David Miller', role: 'Nature Enthusiast',
    content: 'The attention to detail in the habitats is incredible. You can tell the welfare of the animals is the top priority. The bird watching festival was a highlight of my trip to Nepal.',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
  },
  {
    id: 7, name: 'Sarah Jenkins', role: 'Volunteer',
    content: 'Participating in the rhino census was an eye-opening experience. Working alongside the rangers gave me a deep appreciation for the hard work that goes into protecting these prehistoric giants.',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
  },
  {
    id: 8, name: 'Robert Chen', role: 'Sustainable Architect',
    content: 'The park infrastructure is a masterclass in low-impact design. From solar power to waste management, Save Wildlife proves that premium tourism can be truly sustainable.',
    avatar_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    rating: 5,
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client
      .from('testimonials')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return (data as any[]).map(row => ({
        ...row,
        avatar: row.avatar_url,
        rating: row.rating || 5
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackTestimonials.map(t => ({
    ...t,
    avatar: t.avatar_url,
  }));
});
