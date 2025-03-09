/*
  # Add balance audit tracking

  1. New Tables
    - `balance_audit_logs`
      - `id` (uuid, primary key)
      - `bank_account_id` (uuid, references bank_accounts)
      - `previous_balance` (numeric)
      - `new_balance` (numeric)
      - `source` (text) - 'plaid' or 'manual'
      - `created_at` (timestamp)
      - `created_by` (uuid, references auth.users)

  2. Changes
    - Add trigger to update bank_accounts.balance when audit log is created
    - Add trigger to update bank_accounts.updated_at
    - Add policies for balance audit logs

  3. Security
    - Enable RLS on balance_audit_logs
    - Add policies for authenticated users
*/

-- Create balance audit logs table
CREATE TABLE IF NOT EXISTS balance_audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bank_account_id uuid NOT NULL REFERENCES bank_accounts(id),
  previous_balance numeric(19,4) NOT NULL,
  new_balance numeric(19,4) NOT NULL,
  source text NOT NULL CHECK (source IN ('plaid', 'manual')),
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE balance_audit_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view balance audit logs for their accounts"
  ON balance_audit_logs
  FOR SELECT
  TO authenticated
  USING (
    bank_account_id IN (
      SELECT bank_accounts.id
      FROM bank_accounts
      WHERE bank_accounts.customer_id IN (
        SELECT customer_users.customer_id
        FROM customer_users
        WHERE customer_users.user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can create balance audit logs for their accounts"
  ON balance_audit_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bank_account_id IN (
      SELECT bank_accounts.id
      FROM bank_accounts
      WHERE bank_accounts.customer_id IN (
        SELECT customer_users.customer_id
        FROM customer_users
        WHERE customer_users.user_id = auth.uid()
      )
    )
  );

-- Create function to update bank account balance
CREATE OR REPLACE FUNCTION update_bank_account_balance()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE bank_accounts
  SET balance = NEW.new_balance,
      updated_at = now()
  WHERE id = NEW.bank_account_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update bank account balance
CREATE TRIGGER update_bank_account_balance_trigger
AFTER INSERT ON balance_audit_logs
FOR EACH ROW
EXECUTE FUNCTION update_bank_account_balance();