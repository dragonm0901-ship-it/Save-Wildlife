const fallbackAnimals: Record<string, any> = {
  'bengal-tiger': {
    id: 1, slug: 'bengal-tiger', name: 'Bengal Tiger', scientific_name: 'Panthera tigris tigris',
    category: 'animal', habitat: 'Terai Grasslands',
    description: 'The Bengal tiger is the most iconic predator of the Indian subcontinent. Nepal\'s Chitwan and Bardia National Parks are home to a growing population thanks to dedicated anti-poaching patrols and habitat restoration.',
    habitat_info: 'Bengal tigers in Nepal inhabit the subtropical lowland forests and tall grasslands of the Terai region. These habitats offer dense cover for hunting and cool riverbanks for resting during hot months. The Terai Arc Landscape connects fragmented forests across Nepal and India, creating vital migration corridors.',
    diet_info: 'As apex predators, Bengal tigers primarily hunt spotted deer (chital), sambar deer, wild boar, and occasionally larger prey like gaur. A single tiger requires approximately 8–9 kg of meat per day and may consume up to 30 kg in one sitting after a successful hunt.',
    conservation_status: 'Nepal has achieved remarkable success in tiger conservation, nearly tripling its population from 121 in 2009 to over 355 in 2024. This success is attributed to community-based anti-poaching units, habitat corridor restoration, and strict enforcement of wildlife protection laws.',
    image_url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
    side_images: ['https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=600&q=80'],
    facts: [
      { label: 'Population', value: '355+ in Nepal' },
      { label: 'Lifespan', value: '15–20 years' },
      { label: 'Weight', value: '180–260 kg' },
      { label: 'Status', value: 'Endangered' },
    ],
  },
  'one-horned-rhino': {
    id: 2, slug: 'one-horned-rhino', name: 'Greater One-Horned Rhinoceros', scientific_name: 'Rhinoceros unicornis',
    category: 'animal', habitat: 'Subtropical Lowlands',
    description: 'Once on the brink of extinction, Nepal\'s rhino population has rebounded to over 750 individuals. These armored giants roam the floodplains of Chitwan National Park, grazing on grasses and aquatic plants.',
    habitat_info: 'The greater one-horned rhinoceros thrives in the alluvial floodplains, riverine forests, and swampy grasslands of the Terai. Chitwan and Bardia National Parks provide the ideal mix of tall elephant grass, wetlands, and forest edges that these large herbivores require.',
    diet_info: 'Rhinos are primarily grazers, feeding on a variety of grasses, leaves, aquatic plants, and fruit. They spend much of their time in water or wallowing in mud, which helps regulate body temperature and protect against parasites.',
    conservation_status: 'Nepal celebrated its first zero-poaching year for rhinos in 2021 and has maintained near-zero poaching since. The population has grown from fewer than 100 in the 1960s to over 750 today through strict protection, community engagement, and translocation programs.',
    image_url: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Population', value: '750+ in Nepal' },
      { label: 'Lifespan', value: '40–50 years' },
      { label: 'Weight', value: '1,800–2,700 kg' },
      { label: 'Status', value: 'Vulnerable' },
    ],
  },
  'snow-leopard': {
    id: 3, slug: 'snow-leopard', name: 'Snow Leopard', scientific_name: 'Panthera uncia',
    category: 'animal', habitat: 'High Himalayas',
    description: 'Known as the "Ghost of the Mountains," the snow leopard inhabits altitudes above 3,000 meters. Nepal\'s Sagarmatha and Langtang regions provide critical habitat for this elusive predator.',
    habitat_info: 'Snow leopards occupy the rugged alpine and subalpine zones of the Himalayas, typically between 3,000 and 5,500 meters elevation. They prefer steep, rocky terrain with sparse vegetation where they can ambush prey. In Nepal, they are found in the Annapurna, Manaslu, and Kanchenjunga conservation areas.',
    diet_info: 'Snow leopards primarily hunt blue sheep (bharal), Himalayan tahr, marmots, and pikas. They are ambush predators capable of leaping up to 15 meters to catch prey on steep mountain slopes. A single kill can sustain a snow leopard for several days.',
    conservation_status: 'An estimated 300–400 snow leopards inhabit Nepal\'s mountains. Conservation challenges include human-wildlife conflict with herders, habitat fragmentation, and climate change pushing prey species to higher altitudes. Camera trap surveys and community-based livestock insurance programs are key conservation tools.',
    image_url: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Population', value: '300–400 in Nepal' },
      { label: 'Altitude', value: '3,000–5,500 m' },
      { label: 'Weight', value: '22–55 kg' },
      { label: 'Status', value: 'Vulnerable' },
    ],
  },
  'red-panda': {
    id: 4, slug: 'red-panda', name: 'Red Panda', scientific_name: 'Ailurus fulgens',
    category: 'animal', habitat: 'Eastern Himalayan Forests',
    description: 'The red panda thrives in the temperate bamboo forests of eastern Nepal. With fewer than 10,000 remaining in the wild, conservation programs are critical to their survival.',
    habitat_info: 'Red pandas prefer temperate forests with dense bamboo understory at elevations between 2,200 and 4,800 meters. In Nepal, they are found in the forests of Ilam, Panchthar, and the Langtang and Makalu-Barun regions. They are solitary and arboreal, spending most of their time in trees.',
    diet_info: 'Despite being classified as carnivores, red pandas are almost exclusively herbivorous. Bamboo leaves and shoots make up about 95% of their diet, supplemented by berries, mushrooms, acorns, and occasionally bird eggs.',
    conservation_status: 'Nepal\'s red panda population is estimated at 1,000 individuals. Habitat loss from deforestation, bamboo die-off, and illegal poaching for the pet trade are the main threats. Community forest programs and anti-poaching patrols have helped stabilize local populations.',
    image_url: 'https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Population', value: '~1,000 in Nepal' },
      { label: 'Lifespan', value: '8–12 years' },
      { label: 'Weight', value: '3–6 kg' },
      { label: 'Status', value: 'Endangered' },
    ],
  },
  'asian-elephant': {
    id: 5, slug: 'asian-elephant', name: 'Asian Elephant', scientific_name: 'Elephas maximus',
    category: 'animal', habitat: 'Terai Arc Forests',
    description: 'Asian elephants migrate through the Terai Arc Landscape, connecting protected areas across Nepal and India. These gentle giants are essential for seed dispersal and forest ecology.',
    habitat_info: 'Asian elephants in Nepal occupy the tropical and subtropical moist forests of the Terai lowlands. They require large home ranges with access to water, grasslands, and forest cover. The Terai Arc Landscape provides crucial transboundary corridors connecting fragmented habitats.',
    diet_info: 'Elephants are herbivores that consume up to 150 kg of vegetation daily, including grasses, bark, roots, leaves, and fruit. They spend 16–18 hours per day feeding and are important ecological engineers, opening up forest canopies and dispersing seeds across vast distances.',
    conservation_status: 'Nepal is home to approximately 200 wild Asian elephants. Human-elephant conflict in the Terai region remains a significant challenge as agricultural expansion encroaches on elephant corridors. Community-based early warning systems and crop insurance programs are helping reduce conflict.',
    image_url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Population', value: '~200 in Nepal' },
      { label: 'Lifespan', value: '60–70 years' },
      { label: 'Weight', value: '2,700–5,000 kg' },
      { label: 'Status', value: 'Endangered' },
    ],
  },
  'himalayan-monal': {
    id: 6, slug: 'himalayan-monal', name: 'Himalayan Monal', scientific_name: 'Lophophorus impejanus',
    category: 'bird', habitat: 'Alpine Meadows',
    description: 'Nepal\'s national bird, the Himalayan monal is famous for its iridescent plumage that shifts between emerald, sapphire, and copper. Found at elevations between 2,100 and 4,500 meters.',
    habitat_info: 'The Himalayan monal inhabits upper temperate oak-conifer forests and alpine meadows. During summer, they forage in high-altitude meadows above the treeline. In winter, they descend to lower elevations. They use their strong curved bills to dig for tubers and insect larvae in the soil.',
    diet_info: 'Monals feed on a varied diet of roots, tubers, berries, seeds, and insects. They are particularly fond of digging for tubers and bulbs of wild plants, spending significant time scratching at the forest floor and alpine meadows.',
    conservation_status: 'While currently classified as Least Concern globally, local populations face pressure from habitat loss and hunting. In Nepal, the monal is legally protected and has become a symbol of national pride and conservation awareness.',
    image_url: 'https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Wingspan', value: '75–80 cm' },
      { label: 'Altitude', value: '2,100–4,500 m' },
      { label: 'Weight', value: '1.8–2.5 kg' },
      { label: 'Status', value: 'Least Concern' },
    ],
  },
  'sarus-crane': {
    id: 7, slug: 'sarus-crane', name: 'Sarus Crane', scientific_name: 'Antigone antigone',
    category: 'bird', habitat: 'Wetlands & Marshes',
    description: 'The world\'s tallest flying bird, the Sarus Crane stands up to 1.8 meters tall. Lumbini and the Terai wetlands are vital wintering grounds for Nepal\'s crane populations.',
    habitat_info: 'Sarus cranes inhabit open wetlands, flooded fields, and marshes in the Terai lowlands. The Lumbini area in Rupandehi district is considered one of the most important crane habitats in Nepal. They prefer shallow water areas near agricultural land.',
    diet_info: 'Sarus cranes are omnivorous, feeding on aquatic plants, seeds, grain, insects, crustaceans, and small vertebrates. They forage by probing in shallow water and mud with their long bills, and also glean waste grain from harvested rice paddies.',
    conservation_status: 'Nepal hosts a small but significant population of Sarus cranes. Wetland drainage, agricultural intensification, and pesticide use are major threats. Conservation efforts include wetland restoration and farmer awareness programs in key crane habitats.',
    image_url: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Height', value: 'Up to 1.8 m' },
      { label: 'Wingspan', value: '2.2–2.5 m' },
      { label: 'Weight', value: '6.8–7.8 kg' },
      { label: 'Status', value: 'Vulnerable' },
    ],
  },
  'gharial-crocodile': {
    id: 8, slug: 'gharial-crocodile', name: 'Gharial', scientific_name: 'Gavialis gangeticus',
    category: 'animal', habitat: 'River Systems',
    description: 'The gharial is one of the most critically endangered crocodilians on earth. Nepal\'s Narayani and Rapti rivers host captive breeding and release programs to rebuild wild populations.',
    habitat_info: 'Gharials require deep, fast-flowing rivers with sandbanks for basking and nesting. In Nepal, they are found in the Narayani, Rapti, and Babai river systems within Chitwan and Bardia National Parks. Clean water and undisturbed sandbanks are essential for successful nesting.',
    diet_info: 'Gharials are uniquely adapted fish-eaters. Their long, narrow snouts are lined with over 100 interlocking teeth designed to snap shut on fish underwater. They catch fish with rapid sideways strikes of the head, aided by sensory pits along their jaw.',
    conservation_status: 'With fewer than 250 breeding adults left in the wild globally, the gharial is Critically Endangered. Nepal\'s Gharial Conservation Breeding Center in Chitwan has released over 1,500 captive-bred gharials since 1978, making it one of the most important gharial conservation programs worldwide.',
    image_url: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=800&q=80',
    side_images: [],
    facts: [
      { label: 'Length', value: 'Up to 6 m' },
      { label: 'Lifespan', value: '40–60 years' },
      { label: 'Weight', value: '150–250 kg' },
      { label: 'Status', value: 'Critically Endangered' },
    ],
  },
};

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') || '';

  try {
    const client = await useDb(event);
    const { data, error } = await (client as any)
      .from('animals')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      const row = data as any;
      return {
        ...row,
        image: row.image_url,
        scientific: row.scientific_name,
        side_images: typeof row.side_images === 'string' ? JSON.parse(row.side_images) : row.side_images,
        facts: typeof row.facts === 'string' ? JSON.parse(row.facts) : row.facts,
      };
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  const animal = fallbackAnimals[slug];
  if (!animal) {
    throw createError({ statusCode: 404, statusMessage: 'Animal not found' });
  }

  return {
    ...animal,
    image: animal.image_url,
    scientific: animal.scientific_name,
  };
});

