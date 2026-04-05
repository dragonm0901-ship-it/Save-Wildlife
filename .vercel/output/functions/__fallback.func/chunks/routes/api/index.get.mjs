import { d as defineEventHandler, u as useDb } from '../../nitro/nitro.mjs';
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

const fallbackAnimals = [
  {
    id: 1,
    slug: "bengal-tiger",
    name: "Bengal Tiger",
    scientific_name: "Panthera tigris tigris",
    category: "animal",
    habitat: "Terai Grasslands",
    description: "The Bengal tiger is the most iconic predator of the Indian subcontinent. Nepal's Chitwan and Bardia National Parks are home to a growing population thanks to dedicated conservation efforts.",
    image_url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80",
    conservation_status: "Endangered"
  },
  {
    id: 2,
    slug: "one-horned-rhino",
    name: "Greater One-Horned Rhinoceros",
    scientific_name: "Rhinoceros unicornis",
    category: "animal",
    habitat: "Subtropical Lowlands",
    description: "Once on the brink of extinction, Nepal's rhino population has rebounded to over 750 individuals. These armored giants roam the floodplains of Chitwan National Park.",
    image_url: "https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=800&q=80",
    conservation_status: "Vulnerable"
  },
  {
    id: 3,
    slug: "snow-leopard",
    name: "Snow Leopard",
    scientific_name: "Panthera uncia",
    category: "animal",
    habitat: "High Himalayas",
    description: `Known as the "Ghost of the Mountains," the snow leopard inhabits altitudes above 3,000 meters. Nepal's Sagarmatha and Langtang regions provide critical habitat corridors for this elusive cat.`,
    image_url: "https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80",
    conservation_status: "Vulnerable"
  },
  {
    id: 4,
    slug: "red-panda",
    name: "Red Panda",
    scientific_name: "Ailurus fulgens",
    category: "animal",
    habitat: "Eastern Himalayan Forests",
    description: "The red panda thrives in the temperate bamboo forests of eastern Nepal. With fewer than 10,000 remaining in the wild, conservation programs are critical to their survival.",
    image_url: "https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80",
    conservation_status: "Endangered"
  },
  {
    id: 5,
    slug: "asian-elephant",
    name: "Asian Elephant",
    scientific_name: "Elephas maximus",
    category: "animal",
    habitat: "Terai Arc Forests",
    description: "Asian elephants migrate through the Terai Arc Landscape, connecting protected areas across Nepal and India. These gentle giants are essential for seed dispersal and forest ecology.",
    image_url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80",
    conservation_status: "Endangered"
  },
  {
    id: 6,
    slug: "himalayan-monal",
    name: "Himalayan Monal",
    scientific_name: "Lophophorus impejanus",
    category: "bird",
    habitat: "Alpine Meadows",
    description: "Nepal's national bird, the Himalayan monal is famous for its iridescent plumage that shifts between emerald, sapphire, and copper. Found at elevations between 2,100 and 4,500 meters.",
    image_url: "/images/hero/danfe.png",
    conservation_status: "Least Concern"
  },
  {
    id: 7,
    slug: "sarus-crane",
    name: "Sarus Crane",
    scientific_name: "Antigone antigone",
    category: "bird",
    habitat: "Wetlands & Marshes",
    description: "The world's tallest flying bird, the Sarus Crane stands up to 1.8 meters tall. Lumbini and the Terai wetlands are vital wintering grounds for Nepal's crane populations.",
    image_url: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80",
    conservation_status: "Vulnerable"
  },
  {
    id: 8,
    slug: "gharial-crocodile",
    name: "Gharial",
    scientific_name: "Gavialis gangeticus",
    category: "animal",
    habitat: "River Systems",
    description: "The gharial is one of the most critically endangered crocodilians on earth. Nepal's Narayani and Rapti rivers host captive breeding and release programs to rebuild wild populations.",
    image_url: "https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=800&q=80",
    conservation_status: "Critically Endangered"
  },
  {
    id: 9,
    slug: "himalayan-blue-sheep",
    name: "Himalayan Blue Sheep",
    scientific_name: "Pseudois nayaur",
    category: "animal",
    habitat: "High altitude cliffs",
    description: "Neither a sheep nor a goat, the Bharal is the primary prey for snow leopards. They navigate the steepest cliffs of the Himalayas with ease.",
    image_url: "https://images.unsplash.com/photo-1510253401509-026605e557b6?w=800&q=80",
    conservation_status: "Least Concern"
  },
  {
    id: 10,
    slug: "swamp-deer",
    name: "Swamp Deer (Barasingha)",
    scientific_name: "Rucervus duvaucelii",
    category: "animal",
    habitat: "Wetlands of West Nepal",
    description: "The majestic swamp deer is known for its impressive multi-tined antlers. Nepal's Shuklaphanta National Park is one of its last global strongholds.",
    image_url: "https://images.unsplash.com/photo-1508472504214-e0bed6488dcc?w=800&q=80",
    conservation_status: "Vulnerable"
  },
  {
    id: 11,
    slug: "blackbuck",
    name: "Blackbuck (Krishnasar)",
    scientific_name: "Antilope cervicapra",
    category: "animal",
    habitat: "Open Grasslands",
    description: "Nepal's only population of blackbuck thrives in the Khairapur grasslands of Bardia. They are famous for the male's long, spiraling horns and dramatic dark coat.",
    image_url: "https://images.unsplash.com/photo-1549413204-6292d52364cd?w=800&q=80",
    conservation_status: "Near Threatened"
  },
  {
    id: 12,
    slug: "spiny-babbler",
    name: "Spiny Babbler",
    scientific_name: "Turdoides nipalensis",
    category: "bird",
    habitat: "Hilly Scrubland",
    description: "The only bird endemic entirely to Nepal. Once thought extinct, it was rediscovered in 1948 and remains a prized sight for birdwatchers across the mid-hills.",
    image_url: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=800&q=80",
    conservation_status: "Least Concern"
  },
  {
    id: 13,
    slug: "great-hornbill",
    name: "Great Hornbill",
    scientific_name: "Buceros bicornis",
    category: "bird",
    habitat: "Subtropical Rain Forests",
    description: "With its massive yellow-and-black casque and loud resonance, the Great Hornbill is an architectural marvel of the Terai skies.",
    image_url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&q=80",
    conservation_status: "Vulnerable"
  },
  {
    id: 14,
    slug: "blood-pheasant",
    name: "Blood Pheasant",
    scientific_name: "Ithaginis cruentus",
    category: "bird",
    habitat: "Alpine Conifer Forests",
    description: "Named for the scarlet splashes on the male's breast and tail, these hardy birds are found amongst the snow-dusted junipers of the high North.",
    image_url: "https://images.unsplash.com/photo-1555324890-cf36e68ad08f?w=800&q=80",
    conservation_status: "Least Concern"
  },
  {
    id: 15,
    slug: "rhododendron",
    name: "Rhododendron (Lali Gurans)",
    scientific_name: "Rhododendron arboreum",
    category: "flora",
    habitat: "Temperate Forests",
    description: "Nepal's national flower paints the hillsides red every spring. Some trees in the Milke Danda region can grow up to 15 meters tall.",
    image_url: "/images/hero/flora.jpg",
    conservation_status: "Least Concern"
  },
  {
    id: 16,
    slug: "sal-tree",
    name: "Sal Tree",
    scientific_name: "Shorea robusta",
    category: "flora",
    habitat: "Subtropical Lowlands",
    description: "The dominant tree of the Terai, providing habitat for tigers and timber for tradition. Its large leaves are often used as plates (Dunatapari) in religious ceremonies.",
    image_url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    conservation_status: "Least Concern"
  },
  {
    id: 17,
    slug: "blue-poppy",
    name: "Himalayan Blue Poppy",
    scientific_name: "Meconopsis",
    category: "flora",
    habitat: "Alpine Scree Slopes",
    description: "A blue jewel of the high Himalayas, blooming only for a short window during the monsoon at altitudes above 4,000 meters.",
    image_url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    conservation_status: "Endangered"
  },
  {
    id: 18,
    slug: "himalayan-musk-deer",
    name: "Musk Deer",
    scientific_name: "Moschus leucogaster",
    category: "animal",
    habitat: "Sub-alpine Forests",
    description: "Equipped with tusks instead of antlers, this primitive deer is prized for its scent pod. They are extremely shy and agile in rocky, high-altitude terrain.",
    image_url: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80",
    conservation_status: "Endangered"
  },
  {
    id: 19,
    slug: "wild-orchids",
    name: "Wild Orchid",
    scientific_name: "Orchidaceae",
    category: "flora",
    habitat: "Humid Hilly Forests",
    description: "Nepal is home to over 450 species of wild orchids, ranging from ephemeral blooms in the East to hardy terrestrial varieties in the West.",
    image_url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    conservation_status: "Threatened"
  }
];
const index_get = defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client.from("animals").select("*").order("id", { ascending: false });
    if (error) throw error;
    if (data && data.length > 0) {
      return data.map((row) => ({
        ...row,
        image: row.image_url,
        scientific: row.scientific_name,
        category: (row.category || "animal").toLowerCase()
      }));
    }
  } catch (_err) {
  }
  return fallbackAnimals.map((a) => ({
    ...a,
    image: a.image_url,
    scientific: a.scientific_name,
    category: (a.category || "animal").toLowerCase()
  }));
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
