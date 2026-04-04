const fallbackAnimals = [
  {
    id: 1, slug: 'bengal-tiger', name: 'Bengal Tiger', scientific_name: 'Panthera tigris tigris',
    category: 'animal', habitat: 'Terai Grasslands',
    description: 'The Bengal tiger is the most iconic predator of the Indian subcontinent. Nepal\'s Chitwan and Bardia National Parks are home to a growing population thanks to dedicated conservation efforts.',
    image_url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
    conservation_status: 'Endangered',
  },
  {
    id: 2, slug: 'one-horned-rhino', name: 'Greater One-Horned Rhinoceros', scientific_name: 'Rhinoceros unicornis',
    category: 'animal', habitat: 'Subtropical Lowlands',
    description: 'Once on the brink of extinction, Nepal\'s rhino population has rebounded to over 750 individuals. These armored giants roam the floodplains of Chitwan National Park.',
    image_url: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80',
    conservation_status: 'Vulnerable',
  },
  {
    id: 3, slug: 'snow-leopard', name: 'Snow Leopard', scientific_name: 'Panthera uncia',
    category: 'animal', habitat: 'High Himalayas',
    description: 'Known as the "Ghost of the Mountains," the snow leopard inhabits altitudes above 3,000 meters. Nepal\'s Sagarmatha and Langtang regions provide critical habitat corridors for this elusive cat.',
    image_url: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80',
    conservation_status: 'Vulnerable',
  },
  {
    id: 4, slug: 'red-panda', name: 'Red Panda', scientific_name: 'Ailurus fulgens',
    category: 'animal', habitat: 'Eastern Himalayan Forests',
    description: 'The red panda thrives in the temperate bamboo forests of eastern Nepal. With fewer than 10,000 remaining in the wild, conservation programs are critical to their survival.',
    image_url: 'https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80',
    conservation_status: 'Endangered',
  },
  {
    id: 5, slug: 'asian-elephant', name: 'Asian Elephant', scientific_name: 'Elephas maximus',
    category: 'animal', habitat: 'Terai Arc Forests',
    description: 'Asian elephants migrate through the Terai Arc Landscape, connecting protected areas across Nepal and India. These gentle giants are essential for seed dispersal and forest ecology.',
    image_url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
    conservation_status: 'Endangered',
  },
  {
    id: 6, slug: 'himalayan-monal', name: 'Himalayan Monal', scientific_name: 'Lophophorus impejanus',
    category: 'bird', habitat: 'Alpine Meadows',
    description: 'Nepal\'s national bird, the Himalayan monal is famous for its iridescent plumage that shifts between emerald, sapphire, and copper. Found at elevations between 2,100 and 4,500 meters.',
    image_url: 'https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80',
    conservation_status: 'Least Concern',
  },
  {
    id: 7, slug: 'sarus-crane', name: 'Sarus Crane', scientific_name: 'Antigone antigone',
    category: 'bird', habitat: 'Wetlands & Marshes',
    description: 'The world\'s tallest flying bird, the Sarus Crane stands up to 1.8 meters tall. Lumbini and the Terai wetlands are vital wintering grounds for Nepal\'s crane populations.',
    image_url: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80',
    conservation_status: 'Vulnerable',
  },
  {
    id: 8, slug: 'gharial-crocodile', name: 'Gharial', scientific_name: 'Gavialis gangeticus',
    category: 'animal', habitat: 'River Systems',
    description: 'The gharial is one of the most critically endangered crocodilians on earth. Nepal\'s Narayani and Rapti rivers host captive breeding and release programs to rebuild wild populations.',
    image_url: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=800&q=80',
    conservation_status: 'Critically Endangered',
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await (client as any)
      .from('animals')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      return (data as any[]).map(row => ({
        ...row,
        image: row.image_url,
        scientific: row.scientific_name
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackAnimals.map(a => ({
    ...a,
    image: a.image_url,
    scientific: a.scientific_name,
  }));
});
