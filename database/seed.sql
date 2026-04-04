-- Initial Seed Data for Wildpark Sanctuary

-- Animals & Birds
INSERT INTO animals (name, slug, scientific_name, habitat, diet, description, overview_text, habitat_info, diet_info, conservation_info, image_url, side_image_url, category, featured, weight_range, lifespan, top_speed, conservation_status) VALUES
('Leopard', 'leopard', 'Panthera pardus', 'Tropical Forest', 'Carnivore', 
'The leopard is one of the five extant species in the genus Panthera. It has a pale yellowish to dark golden fur with dark spots grouped in rosettes.', 
'Leopards are incredibly solitary animals that are most active at night. Their elusive nature makes them one of the most mysterious big cats.',
'Leopards inhabit a wide range of habitats including tropical forests, savanna, deserts, and rocky mountains.',
'Opportunistic carnivores, feeding on antelope, rodents, and even insects. They often hoist their kills into trees.',
'Listed as Vulnerable. Major threats include habitat loss and human-wildlife conflict.',
'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1600&q=80',
'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80',
'animal', TRUE, '30-90 kg', '12-17 years', '58 km/h', 'Vulnerable'),

('African Elephant', 'african-elephant', 'Loxodonta africana', 'Savanna', 'Herbivore',
'The largest land animal on Earth, known for its intelligence, complex social structures, and majestic tusks.',
'Elephants are highly social and form strong family bonds led by a matriarch. They communicate over long distances using infrasound.',
'They roam through 37 countries in Africa, across savanna, forests, and deserts.',
'Strictly herbivorous, consuming up to 300 pounds of vegetation per day.',
'Listed as Endangered. High risk from ivory poaching and habitat fragmentation.',
'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1600&q=80',
'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&q=80',
'animal', TRUE, '2000-6000 kg', '60-70 years', '40 km/h', 'Endangered'),

('Scarlet Macaw', 'scarlet-macaw', 'Ara macao', 'Rainforest', 'Omnivore',
'One of the most colorful birds on the planet, with vibrant red, blue, and yellow feathers.',
'Macaws are highly intelligent and can live for decades. They are known for their loud squawks and incredible flying agility.',
'Found in humid tropical forests from southern Mexico to Bolivia and Brazil.',
'Mostly seeds, nuts, fruits, and occasionally insects and larvae.',
'Least Concern, but local populations are threatened by habitat loss and the illegal pet trade.',
'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1600&q=80',
'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&q=80',
'bird', TRUE, '1-2 kg', '40-50 years', '56 km/h', 'Least Concern');

-- Services
INSERT INTO services (title, slug, description, price, image_url, highlights, sort_order) VALUES
('Photos with Animals', 'photos-with-animals', 'Capture unforgettable moments with some of the zoo\'s most beloved animals in professionally supervised photo sessions.', 25.00, 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1600&q=80', '["Professional photographer", "30-min session", "Digital package"]', 1),
('Safari Rides', 'safari-rides', 'Embark on an exciting safari ride through our expansive grounds, spotting wildlife in their natural-like habitats.', 45.00, 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80', '["Open-top vehicle", "Expert guide", "90-minute journey"]', 2);

-- Events
INSERT INTO events (title, slug, event_date, start_time, end_time, location, description, image_url, category, capacity, price) VALUES
('Giraffe Day', 'giraffe-day', '2026-05-15', '10:00:00', '12:00:00', 'Savanna Pavilion', 'Celebrate the tallest land mammals with educational talks and feeding sessions.', 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1600&q=80', 'Education', 50, '$15 / person');

-- FAQ
INSERT INTO faqs (question, answer, category, sort_order) VALUES
('What are your opening hours?', 'We are open 9 AM to 6 PM daily.', 'General', 1),
('Is the zoo accessible?', 'Yes, all pathways are paved.', 'Access', 2);
