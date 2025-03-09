/*
  # Create transaction audit logs table

  1. New Tables
    - `transaction_audit_logs`
      - `id` (uuid, primary key)
      - `transaction_id` (uuid, references transactions)
      - `field_name` (text) - Name of the field that was changed
      - `old_value` (text) - Previous value
      - `new_value` (text) - Updated value
      - `created_at` (timestamptz)
      - `created_by` (uuid, references auth.users)

  2. Security
    - Enable RLS on `transaction_audit_logs` table
    - Add policies for authenticated users to:
      - Insert audit logs for their transactions
      - View audit logs for their transactions
*/

CREATE TABLE IF NOT EXISTS transaction_audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id uuid NOT NULL REFERENCES transactions(id),
  field_name text NOT NULL,
  old_value text NOT NULL,
  new_value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

ALTER TABLE transaction_audit_logs ENABLE ROW LEVEL SECURITY;

-- Allow users to create audit logs for their transactions
CREATE POLICY "Users can create audit logs for their transactions"
  ON transaction_audit_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (
    transaction_id IN (
      SELECT transactions.id
      FROM transactions
      WHERE transactions.customer_id IN (
        SELECT customer_users.customer_id
        FROM customer_users
        WHERE customer_users.user_id = auth.uid()
      )
    )
  );

-- Allow users to view audit logs for their transactions
CREATE POLICY "Users can view audit logs for their transactions"
  ON transaction_audit_logs
  FOR SELECT
  TO authenticated
  USING (
    transaction_id IN (
      SELECT transactions.id
      FROM transactions
      WHERE transactions.customer_id IN (
        SELECT customer_users.customer_id
        FROM customer_users
        WHERE customer_users.user_id = auth.uid()
      )
    )
  );