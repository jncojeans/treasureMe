/*
  # Create customers and users tables

  1. New Tables
    - `customers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `created_at` (timestamp)
    - `customer_users`
      - `user_id` (uuid, references auth.users)
      - `customer_id` (uuid, references customers)
      - `role` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create customer_users table to associate users with customers
CREATE TABLE IF NOT EXISTS customer_users (
  user_id uuid REFERENCES auth.users NOT NULL,
  customer_id uuid REFERENCES customers NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, customer_id)
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_users ENABLE ROW LEVEL SECURITY;

-- Policies for customers table
CREATE POLICY "Users can view their customer"
  ON customers
  FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

-- Policies for customer_users table
CREATE POLICY "Users can view their own customer associations"
  ON customer_users
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());