/*
  # Bank Accounts Schema

  1. New Tables
    - `bank_accounts`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references customers)
      - `name` (text) - Account display name
      - `bank_name` (text) - Name of the banking institution
      - `account_number` (text) - Encrypted account number
      - `routing_number` (text) - Encrypted routing number
      - `account_type` (text) - Type of account (checking, savings, etc)
      - `currency` (text) - Account currency (USD, EUR, etc)
      - `balance` (numeric) - Current balance
      - `is_plaid` (boolean) - Whether this account was added via Plaid
      - `plaid_account_id` (text, nullable) - Plaid account ID if connected via Plaid
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on bank_accounts table
    - Add policies for authenticated users to:
      - Read their customer's bank accounts
      - Create new bank accounts for their customer
      - Update their customer's bank accounts
*/

-- Create bank_accounts table
CREATE TABLE IF NOT EXISTS bank_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers NOT NULL,
  name text NOT NULL,
  bank_name text NOT NULL,
  account_number text NOT NULL,
  routing_number text NOT NULL,
  account_type text NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  balance numeric(19,4) NOT NULL DEFAULT 0,
  is_plaid boolean NOT NULL DEFAULT false,
  plaid_account_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_account_type CHECK (account_type IN ('checking', 'savings', 'money_market', 'cd', 'other'))
);

-- Enable RLS
ALTER TABLE bank_accounts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their customer's bank accounts"
  ON bank_accounts
  FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create bank accounts for their customer"
  ON bank_accounts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their customer's bank accounts"
  ON bank_accounts
  FOR UPDATE
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bank_accounts_updated_at
    BEFORE UPDATE ON bank_accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();