/*
  # Add user-customer constraint

  1. Changes
    - Add unique constraint on user_id in customer_users table
    - This ensures each user can only be associated with one customer

  2. Security
    - Maintains existing RLS policies
*/

-- Add unique constraint to user_id in customer_users
ALTER TABLE customer_users
ADD CONSTRAINT customer_users_user_id_key UNIQUE (user_id);