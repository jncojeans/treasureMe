/*
  # Create transactions tables

  1. New Tables
    - `transactions`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references customers)
      - `bank_account_id` (uuid, references bank_accounts)
      - `type` (text, either 'credit' or 'debit')
      - `description` (text)
      - `amount` (numeric)
      - `date` (timestamptz)
      - `status` (text)
      - `reference` (text)
      - Created/updated timestamps
    
  2. Security
    - Enable RLS on transactions table
    - Add policies for authenticated users to:
      - View their customer's transactions
      - Create new transactions
*/

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers NOT NULL,
  bank_account_id uuid REFERENCES bank_accounts NOT NULL,
  type text NOT NULL CHECK (type IN ('credit', 'debit')),
  description text NOT NULL,
  amount numeric(19,4) NOT NULL CHECK (amount > 0),
  date timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  reference text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their customer's transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create transactions for their customer"
  ON transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    customer_id IN (
      SELECT customer_id 
      FROM customer_users 
      WHERE user_id = auth.uid()
    )
  );

-- Add updated_at trigger
CREATE TRIGGER update_transactions_updated_at
    BEFORE UPDATE ON transactions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();