/*
  # Add Plaid Integration Tables

  1. New Tables
    - `plaid_items`
      - Stores Plaid Item information for each connected bank
      - Links to customers table
      - Stores access tokens and item IDs
    
    - `plaid_accounts`
      - Stores detailed Plaid account information
      - Links to bank_accounts table
      - Stores account-specific Plaid metadata
    
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to access their data
*/

-- Create plaid_items table
CREATE TABLE IF NOT EXISTS plaid_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers NOT NULL,
  plaid_item_id text NOT NULL UNIQUE,
  plaid_access_token text NOT NULL,
  plaid_institution_id text NOT NULL,
  institution_name text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  last_sync_at timestamptz DEFAULT now()
);

-- Create plaid_accounts table
CREATE TABLE IF NOT EXISTS plaid_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plaid_item_id uuid REFERENCES plaid_items NOT NULL,
  bank_account_id uuid REFERENCES bank_accounts NOT NULL,
  plaid_account_id text NOT NULL UNIQUE,
  mask text,
  name text NOT NULL,
  official_name text,
  type text NOT NULL,
  subtype text,
  verification_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE plaid_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE plaid_accounts ENABLE ROW LEVEL SECURITY;

-- Create policies for plaid_items
CREATE POLICY "Users can view their customer's Plaid items"
  ON plaid_items
  FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create Plaid items for their customer"
  ON plaid_items
  FOR INSERT
  TO authenticated
  WITH CHECK (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

-- Create policies for plaid_accounts
CREATE POLICY "Users can view their Plaid accounts"
  ON plaid_accounts
  FOR SELECT
  TO authenticated
  USING (
    plaid_item_id IN (
      SELECT id 
      FROM plaid_items 
      WHERE customer_id IN (
        SELECT customer_id 
        FROM customer_users 
        WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can create Plaid accounts"
  ON plaid_accounts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    plaid_item_id IN (
      SELECT id 
      FROM plaid_items 
      WHERE customer_id IN (
        SELECT customer_id 
        FROM customer_users 
        WHERE user_id = auth.uid()
      )
    )
  );

-- Add updated_at triggers
CREATE TRIGGER update_plaid_items_updated_at
    BEFORE UPDATE ON plaid_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plaid_accounts_updated_at
    BEFORE UPDATE ON plaid_accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();