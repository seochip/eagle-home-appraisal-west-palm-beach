/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null) - The blog post title
      - `slug` (text, unique, not null) - URL-friendly version of title
      - `content` (text, not null) - Full article content
      - `excerpt` (text) - Short description/preview
      - `image_url` (text) - Featured image URL
      - `author` (text) - Author name
      - `published_date` (date) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp
      - `is_published` (boolean, default true) - Publication status
      
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  image_url text,
  author text DEFAULT 'Eagle Home Appraisal',
  published_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_published boolean DEFAULT true
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);