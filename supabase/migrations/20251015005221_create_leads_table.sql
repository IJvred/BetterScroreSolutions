/*
  # Create leads table for Better Score Solutions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `full_name` (text) - Client's full name
      - `email` (text) - Client's email address
      - `phone` (text) - Client's phone number
      - `score_range` (text) - Current credit score range
      - `message` (text, optional) - Additional information about goals
      - `created_at` (timestamptz) - Timestamp when lead was created
      - `status` (text) - Lead status (new, contacted, qualified, converted)
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy to allow anonymous users to insert leads (form submissions)
    - Add policy to allow authenticated admin users to view all leads
  
  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  score_range text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (for public form submissions)
CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all leads (for admin dashboard)
CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update lead status
CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
