import { d as defineEventHandler, g as getRouterParam, u as useDb, c as createError } from '../../../nitro/nitro.mjs';
import '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';

const fallbackAnimals = {
  "bengal-tiger": {
    id: 1,
    slug: "bengal-tiger",
    name: "Bengal Tiger",
    scientific_name: "Panthera tigris tigris",
    category: "animal",
    habitat: "Terai Grasslands",
    description: "The Bengal tiger is the most iconic predator of the Indian subcontinent. Nepal's Chitwan and Bardia National Parks are home to a growing population thanks to dedicated anti-poaching patrols and habitat restoration.",
    habitat_info: "Bengal tigers in Nepal inhabit the subtropical lowland forests and tall grasslands of the Terai region. These habitats offer dense cover for hunting and cool riverbanks for resting during hot months. The Terai Arc Landscape connects fragmented forests across Nepal and India, creating vital migration corridors.",
    diet_info: "As apex predators, Bengal tigers primarily hunt spotted deer (chital), sambar deer, wild boar, and occasionally larger prey like gaur. A single tiger requires approximately 8\u20139 kg of meat per day and may consume up to 30 kg in one sitting after a successful hunt.",
    conservation_status: "Nepal has achieved remarkable success in tiger conservation, nearly tripling its population from 121 in 2009 to over 355 in 2024. This success is attributed to community-based anti-poaching units, habitat corridor restoration, and strict enforcement of wildlife protection laws.",
    image_url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80",
    side_images: ["https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=600&q=80"],
    facts: [
      { label: "Population", value: "355+ in Nepal" },
      { label: "Lifespan", value: "15\u201320 years" },
      { label: "Weight", value: "180\u2013260 kg" },
      { label: "Status", value: "Endangered" }
    ]
  },
  "one-horned-rhino": {
    id: 2,
    slug: "one-horned-rhino",
    name: "Greater One-Horned Rhinoceros",
    scientific_name: "Rhinoceros unicornis",
    category: "animal",
    habitat: "Subtropical Lowlands",
    description: "Once on the brink of extinction, Nepal's rhino population has rebounded to over 750 individuals. These armored giants roam the floodplains of Chitwan National Park, grazing on grasses and aquatic plants.",
    habitat_info: "The greater one-horned rhinoceros thrives in the alluvial floodplains, riverine forests, and swampy grasslands of the Terai. Chitwan and Bardia National Parks provide the ideal mix of tall elephant grass, wetlands, and forest edges that these large herbivores require.",
    diet_info: "Rhinos are primarily grazers, feeding on a variety of grasses, leaves, aquatic plants, and fruit. They spend much of their time in water or wallowing in mud, which helps regulate body temperature and protect against parasites.",
    conservation_status: "Nepal celebrated its first zero-poaching year for rhinos in 2021 and has maintained near-zero poaching since. The population has grown from fewer than 100 in the 1960s to over 750 today through strict protection, community engagement, and translocation programs.",
    image_url: "https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "750+ in Nepal" },
      { label: "Lifespan", value: "40\u201350 years" },
      { label: "Weight", value: "1,800\u20132,700 kg" },
      { label: "Status", value: "Vulnerable" }
    ]
  },
  "snow-leopard": {
    id: 3,
    slug: "snow-leopard",
    name: "Snow Leopard",
    scientific_name: "Panthera uncia",
    category: "animal",
    habitat: "High Himalayas",
    description: `Known as the "Ghost of the Mountains," the snow leopard inhabits altitudes above 3,000 meters. Nepal's Sagarmatha and Langtang regions provide critical habitat for this elusive predator.`,
    habitat_info: "Snow leopards occupy the rugged alpine and subalpine zones of the Himalayas, typically between 3,000 and 5,500 meters elevation. They prefer steep, rocky terrain with sparse vegetation where they can ambush prey. In Nepal, they are found in the Annapurna, Manaslu, and Kanchenjunga conservation areas.",
    diet_info: "Snow leopards primarily hunt blue sheep (bharal), Himalayan tahr, marmots, and pikas. They are ambush predators capable of leaping up to 15 meters to catch prey on steep mountain slopes. A single kill can sustain a snow leopard for several days.",
    conservation_status: "An estimated 300\u2013400 snow leopards inhabit Nepal's mountains. Conservation challenges include human-wildlife conflict with herders, habitat fragmentation, and climate change pushing prey species to higher altitudes. Camera trap surveys and community-based livestock insurance programs are key conservation tools.",
    image_url: "https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "300\u2013400 in Nepal" },
      { label: "Altitude", value: "3,000\u20135,500 m" },
      { label: "Weight", value: "22\u201355 kg" },
      { label: "Status", value: "Vulnerable" }
    ]
  },
  "red-panda": {
    id: 4,
    slug: "red-panda",
    name: "Red Panda",
    scientific_name: "Ailurus fulgens",
    category: "animal",
    habitat: "Eastern Himalayan Forests",
    description: "The red panda thrives in the temperate bamboo forests of eastern Nepal. With fewer than 10,000 remaining in the wild, conservation programs are critical to their survival.",
    habitat_info: "Red pandas prefer temperate forests with dense bamboo understory at elevations between 2,200 and 4,800 meters. In Nepal, they are found in the forests of Ilam, Panchthar, and the Langtang and Makalu-Barun regions. They are solitary and arboreal, spending most of their time in trees.",
    diet_info: "Despite being classified as carnivores, red pandas are almost exclusively herbivorous. Bamboo leaves and shoots make up about 95% of their diet, supplemented by berries, mushrooms, acorns, and occasionally bird eggs.",
    conservation_status: "Nepal's red panda population is estimated at 1,000 individuals. Habitat loss from deforestation, bamboo die-off, and illegal poaching for the pet trade are the main threats. Community forest programs and anti-poaching patrols have helped stabilize local populations.",
    image_url: "https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "~1,000 in Nepal" },
      { label: "Lifespan", value: "8\u201312 years" },
      { label: "Weight", value: "3\u20136 kg" },
      { label: "Status", value: "Endangered" }
    ]
  },
  "asian-elephant": {
    id: 5,
    slug: "asian-elephant",
    name: "Asian Elephant",
    scientific_name: "Elephas maximus",
    category: "animal",
    habitat: "Terai Arc Forests",
    description: "Asian elephants migrate through the Terai Arc Landscape, connecting protected areas across Nepal and India. These gentle giants are essential for seed dispersal and forest ecology.",
    habitat_info: "Asian elephants in Nepal occupy the tropical and subtropical moist forests of the Terai lowlands. They require large home ranges with access to water, grasslands, and forest cover. The Terai Arc Landscape provides crucial transboundary corridors connecting fragmented habitats.",
    diet_info: "Elephants are herbivores that consume up to 150 kg of vegetation daily, including grasses, bark, roots, leaves, and fruit. They spend 16\u201318 hours per day feeding and are important ecological engineers, opening up forest canopies and dispersing seeds across vast distances.",
    conservation_status: "Nepal is home to approximately 200 wild Asian elephants. Human-elephant conflict in the Terai region remains a significant challenge as agricultural expansion encroaches on elephant corridors. Community-based early warning systems and crop insurance programs are helping reduce conflict.",
    image_url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "~200 in Nepal" },
      { label: "Lifespan", value: "60\u201370 years" },
      { label: "Weight", value: "2,700\u20135,000 kg" },
      { label: "Status", value: "Endangered" }
    ]
  },
  "himalayan-monal": {
    id: 6,
    slug: "himalayan-monal",
    name: "Himalayan Monal",
    scientific_name: "Lophophorus impejanus",
    category: "bird",
    habitat: "Alpine Meadows",
    description: "Nepal's national bird, the Himalayan monal is famous for its iridescent plumage that shifts between emerald, sapphire, and copper. Found at elevations between 2,100 and 4,500 meters.",
    habitat_info: "The Himalayan monal inhabits upper temperate oak-conifer forests and alpine meadows. During summer, they forage in high-altitude meadows above the treeline. In winter, they descend to lower elevations. They use their strong curved bills to dig for tubers and insect larvae in the soil.",
    diet_info: "Monals feed on a varied diet of roots, tubers, berries, seeds, and insects. They are particularly fond of digging for tubers and bulbs of wild plants, spending significant time scratching at the forest floor and alpine meadows.",
    conservation_status: "While currently classified as Least Concern globally, local populations face pressure from habitat loss and hunting. In Nepal, the monal is legally protected and has become a symbol of national pride and conservation awareness.",
    image_url: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Wingspan", value: "75\u201380 cm" },
      { label: "Altitude", value: "2,100\u20134,500 m" },
      { label: "Weight", value: "1.8\u20132.5 kg" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "sarus-crane": {
    id: 7,
    slug: "sarus-crane",
    name: "Sarus Crane",
    scientific_name: "Antigone antigone",
    category: "bird",
    habitat: "Wetlands & Marshes",
    description: "The world's tallest flying bird, the Sarus Crane stands up to 1.8 meters tall. Lumbini and the Terai wetlands are vital wintering grounds for Nepal's crane populations.",
    habitat_info: "Sarus cranes inhabit open wetlands, flooded fields, and marshes in the Terai lowlands. The Lumbini area in Rupandehi district is considered one of the most important crane habitats in Nepal. They prefer shallow water areas near agricultural land.",
    diet_info: "Sarus cranes are omnivorous, feeding on aquatic plants, seeds, grain, insects, crustaceans, and small vertebrates. They forage by probing in shallow water and mud with their long bills, and also glean waste grain from harvested rice paddies.",
    conservation_status: "Nepal hosts a small but significant population of Sarus cranes. Wetland drainage, agricultural intensification, and pesticide use are major threats. Conservation efforts include wetland restoration and farmer awareness programs in key crane habitats.",
    image_url: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Height", value: "Up to 1.8 m" },
      { label: "Wingspan", value: "2.2\u20132.5 m" },
      { label: "Weight", value: "6.8\u20137.8 kg" },
      { label: "Status", value: "Vulnerable" }
    ]
  },
  "gharial-crocodile": {
    id: 8,
    slug: "gharial-crocodile",
    name: "Gharial",
    scientific_name: "Gavialis gangeticus",
    category: "animal",
    habitat: "River Systems",
    description: "The gharial is one of the most critically endangered crocodilians on earth. Nepal's Narayani and Rapti rivers host captive breeding and release programs to rebuild wild populations.",
    habitat_info: "Gharials require deep, fast-flowing rivers with sandbanks for basking and nesting. In Nepal, they are found in the Narayani, Rapti, and Babai river systems within Chitwan and Bardia National Parks. Clean water and undisturbed sandbanks are essential for successful nesting.",
    diet_info: "Gharials are uniquely adapted fish-eaters. Their long, narrow snouts are lined with over 100 interlocking teeth designed to snap shut on fish underwater. They catch fish with rapid sideways strikes of the head, aided by sensory pits along their jaw.",
    conservation_status: "With fewer than 250 breeding adults left in the wild globally, the gharial is Critically Endangered. Nepal's Gharial Conservation Breeding Center in Chitwan has released over 1,500 captive-bred gharials since 1978, making it one of the most important gharial conservation programs worldwide.",
    image_url: "https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Length", value: "Up to 6 m" },
      { label: "Lifespan", value: "40\u201360 years" },
      { label: "Weight", value: "150\u2013250 kg" },
      { label: "Status", value: "Critically Endangered" }
    ]
  },
  "himalayan-blue-sheep": {
    id: 9,
    slug: "himalayan-blue-sheep",
    name: "Himalayan Blue Sheep (Bharal)",
    scientific_name: "Pseudois nayaur",
    category: "animal",
    habitat: "High Altitude Cliffs",
    description: "Neither a sheep nor a goat, the Bharal is the primary prey for snow leopards. They navigate the steepest cliffs of the Himalayas with ease.",
    habitat_info: "Bharal inhabit the high-altitude treeless slopes between 3,000 and 5,500 meters. They are perfectly camouflaged against the gray rocks and slate of the high Himalayas, often found in large herds in the Annapurna and Dolpo regions.",
    diet_info: "They are grazers and browsers, feeding on high-altitude grasses, herbs, and mosses. Their ability to survive on sparse vegetation is critical for their role as the primary food source for high-altitude predators.",
    conservation_status: "While stable, they are sensitive to habitat changes and grazing competition from domestic livestock. Protecting Bharal populations is essential for the survival of the Endangered snow leopard.",
    image_url: "https://images.unsplash.com/photo-1510253401509-026605e557b6?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "Stable" },
      { label: "Altitude", value: "3,000\u20135,500 m" },
      { label: "Weight", value: "35\u201375 kg" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "swamp-deer": {
    id: 10,
    slug: "swamp-deer",
    name: "Swamp Deer (Barasingha)",
    scientific_name: "Rucervus duvaucelii",
    category: "animal",
    habitat: "Wetlands of West Nepal",
    description: "The majestic swamp deer is known for its impressive multi-tined antlers. Nepal's Shuklaphanta National Park is one of its last global strongholds.",
    habitat_info: "They are specialized for wetland habitats, primarily found in the tall, water-logged grasslands and marshes of Shuklaphanta National Park in far-western Nepal. Their unique splayed hooves allow them to walk easily through swampy ground.",
    diet_info: "Swamp deer are almost exclusively grazers, feeding primarily on grasses and aquatic plants found in the marshes. They often feed for 16-18 hours a day to meet their nutritional needs.",
    conservation_status: "Once found across the entire Terai, they are now restricted to isolated populations. Nepal's conservation efforts in Shuklaphanta have seen the population grow to over 2,000 individuals, a major success for the species.",
    image_url: "https://images.unsplash.com/photo-1508472504214-e0bed6488dcc?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "2,300+ in Nepal" },
      { label: "Antlers", value: "10\u201314 tines" },
      { label: "Weight", value: "170\u2013280 kg" },
      { label: "Status", value: "Vulnerable" }
    ]
  },
  "blackbuck": {
    id: 11,
    slug: "blackbuck",
    name: "Blackbuck (Krishnasar)",
    scientific_name: "Antilope cervicapra",
    category: "animal",
    habitat: "Open Grasslands",
    description: "Nepal's only population of blackbuck thrives in the Khairapur grasslands of Bardia. They are famous for the male's long, spiraling horns and dramatic dark coat.",
    habitat_info: "They prefer open coastal plains, grasslands, and semi-deserts. In Nepal, the Blackbuck Conservation Area in Khairapur, Bardia, provides the vital open-canopy grassland habitat they require to spot predators from a distance.",
    diet_info: "Blackbucks are grazers that feed on a variety of grasses and some short shrubs. They are extremely fast runners, using their speed (up to 80 km/h) as their primary defense against predators.",
    conservation_status: "From the brink of extinction in Nepal (down to just 9 individuals in 1975), the population has rebounded to over 300 thanks to strict protection and habitat management in Bardia.",
    image_url: "https://images.unsplash.com/photo-1549413204-6292d52364cd?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Population", value: "300+ in Nepal" },
      { label: "Speed", value: "80 km/h" },
      { label: "Weight", value: "32\u201343 kg" },
      { label: "Status", value: "Near Threatened" }
    ]
  },
  "spiny-babbler": {
    id: 12,
    slug: "spiny-babbler",
    name: "Spiny Babbler",
    scientific_name: "Turdoides nipalensis",
    category: "bird",
    habitat: "Hilly Scrubland",
    description: "The only bird endemic entirely to Nepal. Once thought extinct, it was rediscovered in 1948 and remains a prized sight for birdwatchers across the mid-hills.",
    habitat_info: "They are found exclusively in the mid-hills of Nepal, between 900 and 2,100 meters elevation. They prefer dense scrub, secondary forests, and slopes with wild yellow raspberries and shrubby vegetation.",
    diet_info: "Omnivorous, feeding on insects, berries, and seeds. They are shy birds, often heard before they are seen, characterized by their diverse repertoire of songs and mimicry.",
    conservation_status: "As a national endemic, it is a priority for Nepalese bird conservation. While currently stable, its limited range makes it vulnerable to habitat loss from agricultural expansion in the mid-hills.",
    image_url: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Endemic", value: "Nepal Only" },
      { label: "Altitude", value: "900\u20132,100 m" },
      { label: "Length", value: "24\u201325 cm" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "great-hornbill": {
    id: 13,
    slug: "great-hornbill",
    name: "Great Hornbill",
    scientific_name: "Buceros bicornis",
    category: "bird",
    habitat: "Subtropical Rain Forests",
    description: "With its massive yellow-and-black casque and loud resonance, the Great Hornbill is an architectural marvel of the Terai skies.",
    habitat_info: "In Nepal, they inhabit the mature, undisturbed forests of the Terai lowlands, particularly in Chitwan and Bardia. They require large, old-growth trees for nesting in hollow cavities.",
    diet_info: "Primarily frugivorous, they feed on a variety of wild figs and drupes. They are vital seed dispersers, helping maintain the health and diversity of the primary forests they inhabit.",
    conservation_status: "Vulnerable due to the loss of large nesting trees and occasional hunting for their casques. They are slow breeders, often returning to the same nesting site for generations.",
    image_url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Wingspan", value: "1.5 m" },
      { label: "Lifespan", value: "35\u201350 years" },
      { label: "Weight", value: "2.5\u20134 kg" },
      { label: "Status", value: "Vulnerable" }
    ]
  },
  "blood-pheasant": {
    id: 14,
    slug: "blood-pheasant",
    name: "Blood Pheasant",
    scientific_name: "Ithaginis cruentus",
    category: "bird",
    habitat: "Alpine Conifer Forests",
    description: "Named for the scarlet splashes on the male's breast and tail, these hardy birds are found amongst the snow-dusted junipers of the high North.",
    habitat_info: "They inhabit high-altitude pine, oak, and rhododendron forests between 3,000 and 4,500 meters. They are often seen foraging in the snow during winter months in the Langtang and Everest regions.",
    diet_info: "Feeds on mosses, ferns, lichens, and pine needles. They are one of the few birds that can survive on such a high-altitude, low-nutrient diet throughout the winter.",
    conservation_status: "Stable across its range in Nepal. It is the state bird of Sikkim and widely protected across the Trans-Himalayan region.",
    image_url: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Altitude", value: "3,000\u20134,500 m" },
      { label: "Length", value: "40\u201345 cm" },
      { label: "Weight", value: "400\u2013600 g" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "rhododendron": {
    id: 15,
    slug: "rhododendron",
    name: "Rhododendron (Lali Gurans)",
    scientific_name: "Rhododendron arboreum",
    category: "flora",
    habitat: "Temperate Forests",
    description: "Nepal's national flower paints the hillsides red every spring. Some trees in the Milke Danda region can grow up to 15 meters tall.",
    habitat_info: "Found in the temperate forests of the hills and mountains between 1,200 and 3,600 meters. The Milke Danda region in eastern Nepal is world-famous for its dense, diverse rhododendron forests.",
    diet_info: "As a deciduous to evergreen tree, it thrives in well-drained, acidic mountain soils. Its blooms provide vital nectar for Himalayan honeybees and various high-altitude birds.",
    conservation_status: "Widely protected as the national flower. However, global warming is causing flowering seasons to shift earlier, potentially decoupling them from their pollinators.",
    image_url: "/images/hero/flora.jpg",
    side_images: [],
    facts: [
      { label: "National Flower", value: "Nepal" },
      { label: "Tree Height", value: "Up to 15 m" },
      { label: "Blooms", value: "March\u2013May" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "sal-tree": {
    id: 16,
    slug: "sal-tree",
    name: "Sal Tree",
    scientific_name: "Shorea robusta",
    category: "flora",
    habitat: "Subtropical Lowlands",
    description: "The dominant tree of the Terai, providing habitat for tigers and timber for tradition. Its large leaves are often used as plates (Dunatapari) in religious ceremonies.",
    habitat_info: "Dominates the subtropical forests of the Terai and inner Terai regions, up to 1,500 meters elevation. Sal forests are the backbone of the Terai ecosystem, providing the canopy and cover for Nepal's most iconic wildlife.",
    diet_info: "Sal is a slow-growing hardwood that is remarkably resistant to fire and termites. It produces massive amounts of seeds roughly every three years, providing a vital food source for forest deer and boar.",
    conservation_status: "Highly regulated timber species. Community-based forest management in the Terai has been instrumental in protecting Sal forests from over-exploitation.",
    image_url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Type", value: "Hardwood" },
      { label: "Tree Height", value: "Up to 35 m" },
      { label: "Longevity", value: "100+ years" },
      { label: "Status", value: "Least Concern" }
    ]
  },
  "blue-poppy": {
    id: 17,
    slug: "blue-poppy",
    name: "Himalayan Blue Poppy",
    scientific_name: "Meconopsis",
    category: "flora",
    habitat: "Alpine Scree Slopes",
    description: "A blue jewel of the high Himalayas, blooming only for a short window during the monsoon at altitudes above 4,000 meters.",
    habitat_info: "Found in the alpine meadows and scree slopes of the central and eastern Himalayas, typically between 3,500 and 5,000 meters. They thrive in specialized niches with plenty of moisture and gravelly soil.",
    diet_info: "Like many alpine plants, they are specialized for short, intense growing seasons during the summer monsoon. Their deep blue petals are adapted to absorb maximum UV radiation in the thin high-altitude air.",
    conservation_status: "Increasingly rare due to climate change and over-harvesting of the high mountain slopes. They are protected within several of Nepal's high-altitude national parks.",
    image_url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Altitude", value: "3,500\u20135,000 m" },
      { label: "Bloom Period", value: "July\u2013August" },
      { label: "Color", value: "Electric Blue" },
      { label: "Status", value: "Endangered" }
    ]
  },
  "himalayan-musk-deer": {
    id: 18,
    slug: "himalayan-musk-deer",
    name: "Musk Deer",
    scientific_name: "Moschus leucogaster",
    category: "animal",
    habitat: "Sub-alpine Forests",
    description: "Equipped with tusks instead of antlers, this primitive deer is prized for its scent pod. They are extremely shy and agile in rocky, high-altitude terrain.",
    habitat_info: "Musk deer inhabit the high-altitude forests and sub-alpine scrub between 2,500 and 4,500 meters. They are crepuscular, active mostly at dawn and dusk, and prefer steep terrain where they can escape predators easily.",
    diet_info: "Browsers that feed on lichens, mosses, herbs, and woody shrubs. Their specialized digestive system allows them to process low-nutrient alpine vegetation that many other deer cannot.",
    conservation_status: "Endangered due to heavy poaching for the musk gland, which is highly valued in the perfume and traditional medicine trades. Nepal has implemented strict anti-poaching measures in Sagarmatha and Shey-Phoksundo regions.",
    image_url: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Specialized", value: "Scent Glands" },
      { label: "Weight", value: "11\u201318 kg" },
      { label: "Defense", value: "Canine Tusks" },
      { label: "Status", value: "Endangered" }
    ]
  },
  "wild-orchids": {
    id: 19,
    slug: "wild-orchids",
    name: "Wild Orchid",
    scientific_name: "Orchidaceae",
    category: "flora",
    habitat: "Humid Hilly Forests",
    description: "Nepal is home to over 450 species of wild orchids, ranging from ephemeral blooms in the East to hardy terrestrial varieties in the West.",
    habitat_info: "Orchids in Nepal are found across all ecological zones, but the highest concentration is in the humid, temperate forests of the central and eastern mid-hills. Many are epiphytic, growing on trees to reach the canopy light.",
    diet_info: "Epiphytic orchids absorb moisture and nutrients from the air and rain, while terrestrial species live in the symbiotic relationship with soil fungi. Their diverse blomming periods ensure year-round beauty in Nepal's forests.",
    conservation_status: "Protected under CITES. Habitat loss and illegal collection for the international ornamental trade are the primary threats. Nepal has established specialized orchid conservation zones in several community forests.",
    image_url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    side_images: [],
    facts: [
      { label: "Diversity", value: "450+ Species" },
      { label: "Type", value: "Epiphytic/Terrestrial" },
      { label: "Region", value: "Pan-Nepal" },
      { label: "Status", value: "Threatened" }
    ]
  }
};
const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  try {
    const client = await useDb(event);
    const { data, error } = await client.from("animals").select("*").eq("slug", slug).single();
    if (!error && data) {
      const row = data;
      return {
        ...row,
        image: row.image_url,
        scientific: row.scientific_name,
        side_images: typeof row.side_images === "string" ? JSON.parse(row.side_images) : row.side_images,
        facts: typeof row.facts === "string" ? JSON.parse(row.facts) : row.facts
      };
    }
  } catch (_err) {
  }
  const animal = fallbackAnimals[slug];
  if (!animal) {
    throw createError({ statusCode: 404, statusMessage: "Animal not found" });
  }
  return {
    ...animal,
    image: animal.image_url,
    scientific: animal.scientific_name
  };
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
