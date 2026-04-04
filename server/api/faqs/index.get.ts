const fallbackFaqs = [
  {
    id: 1,
    question: 'What are the sanctuary visiting hours?',
    answer: 'The sanctuary is open daily from 7:00 AM to 5:00 PM. Safari rides depart at 7:30 AM (morning) and 3:00 PM (afternoon). The discovery center remains open until 4:30 PM. We recommend arriving early for the best wildlife sighting opportunities.',
  },
  {
    id: 2,
    question: 'How do I book a safari or experience?',
    answer: 'You can book tickets directly through our website\'s Tickets page, or contact our reservations team at +977 01 400 0000. Group bookings of 10 or more receive a 15% discount. We recommend booking at least 48 hours in advance, especially during peak season (October–March).',
  },
  {
    id: 3,
    question: 'Is the sanctuary safe for children?',
    answer: 'Absolutely! We welcome families with children of all ages. Our guides are trained in child-friendly interpretation, and all safari vehicles are equipped with safety rails. Children under 5 enter free with a paying adult. We also offer a dedicated Junior Ranger program on weekends.',
  },
  {
    id: 4,
    question: 'What should I wear and bring?',
    answer: 'Wear comfortable, neutral-colored clothing (green, khaki, brown) that blends with the forest. Sturdy walking shoes are essential. Bring sunscreen, insect repellent, a hat, and a water bottle. Binoculars are available for rent, but feel free to bring your own. Avoid bright colors and strong perfumes.',
  },
  {
    id: 5,
    question: 'Are your elephant encounters ethical?',
    answer: 'Yes. We follow a strict no-riding, no-chaining policy. Our elephants are rescued from captivity and live in semi-wild conditions with access to large forested areas. Interactions are limited to feeding, bathing observation, and guided walks alongside the elephants at their own pace.',
  },
  {
    id: 6,
    question: 'Can I volunteer or intern at the sanctuary?',
    answer: 'We offer volunteer placements ranging from 2 weeks to 3 months. Volunteers assist with habitat monitoring, community education, and wildlife data collection. Internships are available for wildlife biology, veterinary, and conservation management students. Apply through our Contact page.',
  },
  {
    id: 7,
    question: 'What conservation programs do you support?',
    answer: 'Our conservation portfolio includes anti-poaching patrols, habitat corridor restoration, captive breeding programs for gharials and vultures, community education initiatives, and human-wildlife conflict mitigation. 80% of all ticket and donation revenue goes directly to these programs.',
  },
  {
    id: 8,
    question: 'Is photography allowed during safaris?',
    answer: 'Photography is encouraged! You may use any camera equipment during safaris. For professional or commercial photography, please obtain a permit from our front desk (NPR 2,000). Flash photography is prohibited near animals. We also offer dedicated wildlife photography workshops with professional instructors.',
  },
  {
    id: 9,
    question: 'How can I donate to wildlife conservation?',
    answer: 'Visit our Donation page to contribute online via debit/credit card. We accept one-time and recurring donations. All donations are tax-deductible, and you\'ll receive an official receipt. Corporate sponsorship and legacy giving programs are also available — contact us for details.',
  },
  {
    id: 10,
    question: 'Do you offer accommodation?',
    answer: 'Yes, our Premium Expedition pass includes an overnight stay at our eco-friendly jungle lodge. The lodge features 12 rooms with solar power, rain-harvested water, and locally sourced organic meals. Independent lodge bookings are also available through our Tickets page.',
  },
];

export default defineEventHandler(async (event) => {
  try {
    const client = await useDb(event);
    const { data, error } = await client
      .from('faqs')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (_err) {
    // Database unavailable — serve fallback content
  }

  return fallbackFaqs;
});
