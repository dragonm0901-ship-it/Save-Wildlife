const fallbackPosts = [
  {
    id: 1, slug: 'nepal-tiger-population-record-high', title: 'Nepal\'s Tiger Population Reaches Record High',
    category: 'Conservation', author_name: 'Dr. Asha Gurung',
    excerpt: 'The latest national census confirms Nepal\'s wild tiger population has surpassed 355 individuals — a nearly threefold increase from 2009.',
    description: 'The latest national census confirms Nepal\'s wild tiger population has surpassed 355 individuals, marking a historic milestone in the country\'s conservation journey.',
    published_at: '2026-03-15',
    image_url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
    content_html: '<p>Nepal has achieved what many conservationists once considered impossible. The 2025-2026 National Tiger Census reveals that the country\'s wild tiger population has reached 355 individuals — nearly triple the 121 recorded in 2009.</p><h3>A Global Conservation Model</h3><p>This remarkable recovery is the result of a multi-pronged approach that combines strict anti-poaching enforcement, habitat corridor restoration, and deep community engagement. Nepal\'s community forestry model, which gives local villagers ownership of buffer zone forests, has been instrumental in reducing human-wildlife conflict.</p><h3>The Road Ahead</h3><p>While the numbers are encouraging, conservationists warn against complacency. Climate change is altering prey distribution patterns, and continued expansion of the road network through tiger habitats poses new challenges. "We must remain vigilant," says Dr. Asha Gurung. "Every tiger corridor we protect today secures the future for generations."</p>',
  },
  {
    id: 2, slug: 'planning-your-first-safari', title: 'Planning Your First Safari in Nepal',
    category: 'Travel Guide', author_name: 'Sita Rai',
    excerpt: 'Everything you need to know before your first wildlife safari in the Terai — from what to pack to the best time to visit.',
    description: 'A comprehensive guide to planning your first wildlife safari in Nepal\'s Terai lowlands, covering seasons, gear, etiquette, and insider tips.',
    published_at: '2026-02-28',
    image_url: 'https://images.unsplash.com/photo-1544985361-cb2391fc0da0?w=800&q=80',
    content_html: '<p>Nepal\'s Terai lowlands offer some of the finest wildlife viewing in all of Asia. Whether you\'re hoping to spot a Bengal tiger, photograph a one-horned rhino, or simply lose yourself in the chorus of 500+ bird species, here\'s everything you need to know.</p><h3>Best Time to Visit</h3><p>The ideal safari season runs from October to March, when the tall grass has been cut or dried, making wildlife easier to spot. Morning safaris (departing at 7:30 AM) offer the best chance of seeing large mammals, while evening rides are perfect for golden-hour photography.</p><h3>What to Pack</h3><p>Neutral-colored clothing (olive, khaki, brown) helps you blend in. Sturdy walking shoes, a wide-brimmed hat, sunscreen, and insect repellent are essential. A pair of binoculars will transform your experience. Leave the bright colors and strong perfumes at the lodge.</p><h3>Safari Etiquette</h3><p>Stay seated in the vehicle at all times. Speak softly — animals are sensitive to sound. Never feed wildlife. Follow your guide\'s instructions, especially during close encounters with large mammals. Respect the forest, and it will reveal its wonders to you.</p>',
  },
  {
    id: 3, slug: 'celebrating-diversity-of-animals', title: 'Celebrating the Diversity of Nepal\'s Wildlife',
    category: 'Conservation', author_name: 'Bikram Thapa',
    excerpt: 'From the snow leopards of the Himalayas to the gharials of the Terai rivers, Nepal\'s biodiversity is staggering. Here\'s why it matters.',
    description: 'An exploration of Nepal\'s remarkable biodiversity — spanning eight climatic zones, 208 mammal species, and over 880 bird species.',
    published_at: '2026-01-10',
    image_url: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80',
    content_html: '<p>Despite covering just 0.1% of the Earth\'s surface, Nepal harbors a staggering 3.2% of the world\'s known species. This biodiversity hotspot spans eight distinct climatic zones, from the tropical Terai (60 meters above sea level) to the alpine zones of the Himalayas (above 5,000 meters).</p><h3>Flagship Species</h3><p>Nepal is home to 208 mammal species, 880+ bird species, 123 reptile species, and 117 amphibian species. Among its most iconic residents are the Bengal tiger, greater one-horned rhinoceros, snow leopard, red panda, and Asian elephant — each playing a critical role in the health of their ecosystems.</p><h3>Why Biodiversity Matters</h3><p>Every species in Nepal\'s ecosystems is interconnected. Tigers regulate deer populations, preventing overgrazing. Elephants disperse seeds across vast distances, regenerating forests. Vultures clean carcasses, preventing disease outbreaks. When one species disappears, the entire web is weakened.</p>',
  },
  {
    id: 4, slug: 'ethical-safari-adventure-packing', title: 'The Ethical Safari Adventure Packing Guide',
    category: 'Travel Guide', author_name: 'Sita Rai',
    excerpt: 'How to prepare for a wildlife safari while minimizing your environmental footprint. Packing light and packing right.',
    description: 'An eco-conscious packing guide for safari-goers who want to enjoy nature responsibly.',
    published_at: '2025-12-05',
    image_url: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80',
    content_html: '<p>A great safari starts before you even set foot in the jungle. What you bring — and what you leave behind — shapes your experience and your impact on the environment.</p><h3>Choose Sustainable Gear</h3><p>Opt for reusable water bottles, biodegradable sunscreen, and natural insect repellent. Bamboo toothbrushes, cloth tote bags, and solar-powered chargers are small choices that add up. Avoid single-use plastics entirely.</p><h3>Camera Gear Essentials</h3><p>A 70-300mm zoom lens handles most wildlife situations. A lightweight tripod or monopod is invaluable for dawn and dusk shots. Bring extra batteries and memory cards — charging options may be limited in remote lodges. A waterproof camera bag protects against humidity and sudden rain.</p><h3>Leave No Trace</h3><p>Carry all waste out with you. Stay on designated trails. Never remove plants, stones, or artifacts. If you spot litter left by others, consider picking it up — the forest will thank you.</p>',
  },
  {
    id: 5, slug: 'community-conservation-success-stories', title: 'Community Conservation Success Stories from the Terai',
    category: 'Community', author_name: 'Dr. Asha Gurung',
    excerpt: 'How local villages in the Terai buffer zone have become the backbone of Nepal\'s conservation movement.',
    description: 'Real stories of transformation from Terai communities who have embraced conservation as a path to prosperity.',
    published_at: '2025-11-20',
    image_url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    content_html: '<p>In the buffer zones surrounding Nepal\'s national parks, a quiet revolution has been unfolding. Local communities, once at odds with wildlife, have become its most passionate protectors.</p><h3>The Tharu Guardians of Chitwan</h3><p>The Tharu community of Bachhauli village now generates 60% of its income from eco-tourism and community forest products. Former poachers have retrained as naturalist guides, earning stable incomes while protecting the animals they once hunted.</p><h3>Women-Led Patrol Units</h3><p>In the western Terai, all-female patrol units have proven remarkably effective at anti-poaching enforcement. These teams combine intimate local knowledge with rigorous training, achieving a zero-poaching record across three consecutive years in their patrol zones.</p><h3>Scaling the Model</h3><p>Nepal\'s community forestry model — which gives villagers legal ownership of buffer zone forests — is now being studied and replicated in India, Bhutan, and Myanmar. It proves that conservation works best when local people are empowered as stewards, not excluded as threats.</p>',
  },
  {
    id: 6, slug: 'the-secret-life-of-red-pandas', title: 'The Secret Life of Himalayan Red Pandas',
    category: 'Wild Life', author_name: 'Binod Shrestha',
    excerpt: 'The temperate forests of Langtang and Ilam are the only homes these "firefoxes" know. Learn about their unique biology and precarious future.',
    description: 'A deep dive into the elusive world of Nepal\'s Red Pandas — from their bamboo diet to their seasonal migrations.',
    published_at: '2025-10-15',
    image_url: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80',
    content_html: '<p>Red pandas, often called the "firefox" of the forest, are masters of camouflage among the fir and rhododendron trees of the Himalayas. These arboreal mammals are uniquely adapted to high-altitude living, with thick fur covering even the pads of their paws.</p><h3>The Bamboo Specialists</h3><p>While red pandas are technically carnivores, their diet is 95% bamboo. This low-energy diet means they spend most of their waking hours eating, consuming up to 30% of their body weight in bamboo leaves and shoots every day.</p><h3>A Precarious Future</h3><p>With fewer than 10,000 individuals remaining in the wild, the Red Panda is listed as Endangered. Habitat fragmentation caused by road construction and livestock grazing is their greatest threat. Conservation platforms like Save Wildlife are working with local communities to create protected bamboo corridors, ensuring these ghosts of the forest can roam freely once more.</p>',
  },
  {
    id: 7, slug: 'birdwatching-guide-koshi-tappu', title: 'Birdwatcher\'s Guide to Koshi Tappu',
    category: 'Travel Guide', author_name: 'Lila Devi',
    excerpt: 'Koshi Tappu is Nepal\'s premier birdwatching destination. Discover when to visit and what rare species to look out for.',
    description: 'An expert-guided tour of Nepal\'s most famous wetland sanctuary, home to over 485 species of birds.',
    published_at: '2025-09-30',
    image_url: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80',
    content_html: '<p>The Koshi Tappu Wildlife Reserve is a mosaic of tall grasslands, marshes, and the mighty Koshi River. It is the only place in Nepal where the wild water buffalo (Arna) can be found, but for most visitors, the real draw is the avian life.</p><h3>Winter Migrants</h3><p>From November to February, thousands of ducks, geese, and cranes arrive from Siberia and Tibet. The reserve becomes a cacophony of sound and color as rare species like the Baer\'s Pochard and the Bengal Florican make their seasonal appearance.</p><h3>Rare Sightings</h3><p>Keep your binoculars ready for the Sarus Crane, the world\'s tallest flying bird, and the Swamp Francolin. A sunrise canoe trip down the Koshi River offers the best chance of spotting the elusive Indus River Dolphin alongside dozens of kingfisher species.</p>',
  },
  {
    id: 8, slug: 'snow-leopard-conservation-shey-phoksundo', title: 'Protecting the Ghost of the Mountains in Shey Phoksundo',
    category: 'Conservation', author_name: 'Pemba Sherpa',
    excerpt: 'How high-altitude cameras and community livestock insurance programs are saving the elusive snow leopard in Nepal\'s largest national park.',
    description: 'A deep dive into the technology and community-led efforts securing the future of snow leopards in the Himalayas.',
    published_at: '2025-08-15',
    image_url: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80',
    content_html: '<p>In the rugged peaks of Shey Phoksundo, a silent guardian roams the slopes. The snow leopard, once a victim of retaliatory killings, is finding a new lease on life through an innovative community insurance scheme.</p><h3>Livestock Insurance Models</h3><p>When a snow leopard preys on goats or yaks, local farmers now receive swift compensation through a communal fund. This "Snow Leopard Insurance" has turned former adversaries into protectors, reducing kills by over 80% since its inception.</p><h3>Camera Trap Breakthroughs</h3><p>Using AI-powered camera traps, researchers have identified 12 distinct individuals in the Phoksundo valley alone. This data helps us map their vital corridors and understand their seasonal migrations, ensuring that human infrastructure doesn\'t block their paths.</p>',
  },
  {
    id: 9, slug: 'one-horned-rhino-recovery-chitwan', title: 'The Prehistoric Giants: One-Horned Rhino Recovery',
    category: 'Wild Life', author_name: 'Bikram Thapa',
    excerpt: 'From fewer than 100 individuals to over 750, the recovery of the greater one-horned rhinoceros in Chitwan is a global conservation success story.',
    description: 'The story of how Nepal brought the one-horned rhino back from the brink of extinction.',
    published_at: '2025-07-20',
    image_url: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80',
    content_html: '<p>The greater one-horned rhinoceros is a symbol of resilience. In the 1960s, hunting and habitat loss left fewer than 100 of these armored giants in Nepal. Today, thank to zero-poaching years and intensive habitat management, that number has climbed past 750.</p><h3>Zero Poaching Milestone</h3><p>Nepal has achieved several years of "Zero Poaching" for rhinos, a feat made possible by the dedicated work of the Nepal Army and local community anti-poaching units. This combined effort has made Chitwan one of the safest havens for megafauna in Asia.</p><h3>Translocation for Safety</h3><p>To prevent localized catastrophes like floods or disease, Nepal has been translocating rhinos to Bardia and Shuklaphanta national parks. These "founder populations" ensure the survival of the species, creating multiple strongholds across the Terai lowlands.</p>',
  },
  {
    id: 10, slug: 'secret-waterfalls-of-langtang', title: 'Discovering the Secret Waterfalls of Langtang',
    category: 'Adventures', author_name: 'Anita Rai',
    excerpt: 'Hidden amidst the dense fir forests of Langtang are pristine waterfalls rarely visited by the average trekker. Here is how to find them.',
    description: 'An off-the-beaten-path guide to the hidden water wonders of the Langtang National Park.',
    published_at: '2025-06-10',
    image_url: 'https://images.unsplash.com/photo-1433086566608-bc7941235122?w=800&q=80',
    content_html: '<p>Langtang is famous for its mountains, but its water is equally majestic. Beyond the main trails lie cascading falls that form life-giving oases for the local red panda population.</p><h3>The Hidden Gorge</h3><p>A four-hour detour from Rimche leads to a nameless 40-meter fall that drops into a turquoise pool. Surrounded by moss-covered rocks and rare orchids, it feels like a place out of time. May and early June offer the best floral displays around these falls.</p><h3>Photography Tips</h3><p>The mist from these falls creates beautiful lighting but can be tough on gear. Use a tripod and a slow shutter speed (0.5s to 2s) to capture the "silk" effect of the water. Early morning light provides the softest shadows in these deep forest glades.</p>',
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await (client as any)
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (!error && data && Array.isArray(data) && data.length > 0) {
      return (data as any[]).map(post => ({
        ...post,
        image: post.image_url,
        date: post.published_at
      }));
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  // Return fallback data if database is unavailable or empty
  return fallbackPosts.map(p => ({
    ...p,
    image: p.image_url,
    date: p.published_at,
  }));
});
