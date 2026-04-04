-- Save Wildlife: Nepal Edition Seed Data

-- Clear existing data
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE order_items;
TRUNCATE TABLE orders;
TRUNCATE TABLE tickets;
TRUNCATE TABLE blog_posts;
TRUNCATE TABLE testimonials;
TRUNCATE TABLE events;
TRUNCATE TABLE services;
TRUNCATE TABLE animals;
TRUNCATE TABLE team;
SET FOREIGN_KEY_CHECKS = 1;

-- Seed Animals (Himalayan & Terai Species)
INSERT INTO animals (name, slug, scientific_name, category, habitat, image_url, description) VALUES
('Snow Leopard', 'snow-leopard', 'Panthera uncia', 'animal', 'High Himalayas', 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?w=800&q=80', 'Known as the "Ghost of the Mountains," the snow leopard is a flagship species of the high-altitude Himalayas. We support tracking and conservation programs in the Shey Phoksundo National Park.'),
('Greater One-Horned Rhino', 'one-horned-rhino', 'Rhinoceros unicornis', 'animal', 'Terai Grasslands', 'https://images.unsplash.com/photo-1540152504246-8be0526040cb?w=800&q=80', 'Nepal is a world leader in rhino conservation. Found primarily in Chitwan National Park, these magnificent creatures have seen a significant population rebound thanks to strict anti-poaching measures.'),
('Bengal Tiger', 'bengal-tiger', 'Panthera tigris tigris', 'animal', 'Subtropical Jungles', 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80', 'Nepal has successfully tripled its wild tiger population. Our sanctuary works with the Terai Arc Landscape to ensure safe corridors for these apex predators.'),
('Red Panda', 'red-panda', 'Ailurus fulgens', 'animal', 'Temperate Forests', 'https://images.unsplash.com/photo-1543326168-f99a9a3b608a?w=800&q=80', 'These elusive arboreal mammals inhabit the bamboo thickets of eastern Nepal. We focus on habitat restoration and community-based monitoring programs.'),
('Gharial Crocodile', 'gharial', 'Gavialis gangeticus', 'animal', 'Freshwater Rivers', 'https://images.unsplash.com/photo-1542665985-780838183def?w=800&q=80', 'With their distinct long snouts, Gharials are critically endangered. Our breeding centers in Chitwan help release these ancient reptiles back into the Narayani and Rapti rivers.');

-- Seed Flora (Nepalese National Identity)
INSERT INTO animals (name, slug, scientific_name, category, habitat, image_url, description) VALUES
('Rhododendron', 'rhododendron', 'Rhododendron arboreum', 'bird', 'Middle Hills / Himalayas', 'https://images.unsplash.com/photo-1520301255226-bc5f44a28ad8?w=800&q=80', 'Known locally as Lali Gurans, the red rhododendron is the national flower of Nepal. It paints the hills in vibrant shades of red and pink during spring.'),
('Himalayan Blue Pine', 'blue-pine', 'Pinus wallichiana', 'bird', 'Temperate Zones', 'https://images.unsplash.com/photo-1544136502-4fc51b73fe4b?w=800&q=80', 'A majestic evergreen tree found across the Himalayas, providing vital habitat for various bird species and the Himalayan Musk Deer.');

-- Seed Services (Eco-Tourism Exploration)
INSERT INTO services (title, slug, description, image_url, price, sort_order, highlights) VALUES
('The Snow Leopard Tracking', 'snow-leopard-tracking', 'A high-altitude expedition into the heart of the Himalayas to track the elusive cat.', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', 1200.00, 1, '["Guided by local trackers","High-altitude camping","Contribution to conservation","Rare wildlife sightings"]'),
('Chitwan Jungle Safari', 'chitwan-safari', 'Experience the lush Terai jungles on a responsible safari to see Rhinos and Tigers.', 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=800&q=80', 250.00, 2, '["River canoeing","Jeep and foot safaris","Visit rhino breeding center","Indigenous culture tours"]'),
('Bird Watching in Koshi Tappu', 'bird-watching', 'Explore the wetlands of eastern Nepal, home to over 400 species of migratory birds.', 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=800&q=80', 180.00, 3, '["Specialist birding guides","Rare water buffalo sightings","Wetland ecology workshops","Boat expeditions"]');

-- Seed Events (Expeditions)
INSERT INTO events (title, slug, description, event_date, start_time, location, capacity, image_url, price) VALUES
('Spring Rhododendron Walk', 'spring-rhododendron-walk', 'A guided nature walk through the blooming forests of Shivapuri.', '2024-04-15', '07:00:00', 'Shivapuri Nagarjun National Park', 20, 'https://images.unsplash.com/photo-1520301255226-bc5f44a28ad8?w=800&q=80', 45.00),
('Tiger Conservation Talk', 'tiger-talk', 'Evening session with lead biologists on the success of tiger population doubling.', '2024-05-10', '18:00:00', 'Kathmandu Conservation Hub', 50, 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80', 15.00);

-- Seed Tickets (Access Passes)
INSERT INTO tickets (name, slug, description, price, featured, includes) VALUES
('Terai Jungle Pass', 'terai-pass', 'Entry to low-altitude jungle experiences and conservation areas.', 150.00, 0, '["Guided jungle walk","Rhino center visit","Local community contribution"]'),
('Himalayan Explorer Pass', 'himalayan-pass', 'Premium access to high-altitude conservation zones and guided tracking.', 450.00, 1, '["Priority tracking guides","National Park fees","Insurance","Anti-poaching fund contribution"]'),
('Annual Conservation Membership', 'annual-pass', 'Year-round access and exclusive updates on our "Save Wildlife" projects.', 1200.00, 0, '["Unlimited entry","Quarterly magazine","Member only expeditions","Voting rights on projects"]');

-- Seed Testimonials
INSERT INTO testimonials (name, role, quote, avatar_url) VALUES
('Anish Shrestha', 'Wildlife Photographer', 'Tracking the snow leopard with the Save Wildlife team was a spiritual experience. Their dedication to the mountains is unmatched.', 'https://i.pravatar.cc/150?u=anish'),
('Sarah J.', 'Travel Blogger', 'The Chitwan safari was ethical, immersive, and educational. Seeing a one-horned rhino in the wild is something I will never forget.', 'https://i.pravatar.cc/150?u=sarah'),
('Rajesh Hamal', 'Nature Conservationist', 'Nepal leads the world in protected area management. Save Wildlife is a vital partner in our journey toward sustainable tourism.', 'https://i.pravatar.cc/150?u=rajesh');

-- Seed Team
INSERT INTO team (name, role, bio, image_url) VALUES
('Dr. Ramesh Pathak', 'Chief Conservationist', 'Expert in large carnivore ecology with over 20 years experience in the Terai.', 'https://i.pravatar.cc/150?u=ramesh'),
('Pasang Sherpa', 'Lead Mountain Guide', 'Specialist in high-altitude wildlife tracking and Himalayan flora.', 'https://i.pravatar.cc/150?u=pasang'),
('Maya Tamang', 'Community Outreach', 'Focuses on bridging the gap between local communities and wildlife protection.', 'https://i.pravatar.cc/150?u=maya');
