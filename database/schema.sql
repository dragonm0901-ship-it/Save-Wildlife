-- Wildpark Wildlife Sanctuary - Database Schema

-- Core Content: Animals & Birds
CREATE TABLE IF NOT EXISTS animals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  scientific_name VARCHAR(255),
  habitat VARCHAR(100),
  diet VARCHAR(100),
  description TEXT,
  overview_text TEXT,
  habitat_info TEXT,
  diet_info TEXT,
  conservation_info TEXT,
  image_url VARCHAR(512),
  side_image_url VARCHAR(512),
  category ENUM('animal', 'bird') DEFAULT 'animal',
  featured BOOLEAN DEFAULT FALSE,
  weight_range VARCHAR(50),
  lifespan VARCHAR(50),
  top_speed VARCHAR(50),
  conservation_status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services & Experiences
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url VARCHAR(512),
  highlights JSON, -- Array of strings
  sort_order INT DEFAULT 0
);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  event_date DATE,
  start_time TIME,
  end_time TIME,
  location VARCHAR(255),
  description TEXT,
  image_url VARCHAR(512),
  category VARCHAR(100),
  capacity INT,
  price VARCHAR(50)
);

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  author_name VARCHAR(100),
  excerpt TEXT,
  content_html MEDIUMTEXT,
  image_url VARCHAR(512),
  category VARCHAR(100),
  published_at DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Members
CREATE TABLE IF NOT EXISTS team_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100),
  bio TEXT,
  image_url VARCHAR(512),
  social_links JSON -- {instagram: '', twitter: '', etc}
);

-- Tickets (E-commerce)
CREATE TABLE IF NOT EXISTS tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  tier ENUM('standard', 'family', 'vip') DEFAULT 'standard',
  includes JSON, -- Array of strings
  featured BOOLEAN DEFAULT FALSE
);

-- FAQ
CREATE TABLE IF NOT EXISTS faqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  sort_order INT DEFAULT 0
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100),
  quote TEXT NOT NULL,
  avatar_url VARCHAR(512),
  rating INT DEFAULT 5
);

-- Orders & Donations (Supabase User Linked)
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36), -- UUID from Supabase
  total_amount DECIMAL(10, 2),
  status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
  stripe_payment_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  ticket_id INT,
  quantity INT,
  price_at_purchase DECIMAL(10, 2),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36),
  amount DECIMAL(10, 2),
  frequency ENUM('monthly', 'yearly', 'one-time'),
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
