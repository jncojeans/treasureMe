/*
  # Add test transaction data

  1. Test Data
    - Adds sample transactions for testing
    - Includes both credits and debits
    - Various statuses and descriptions
    - Links to existing bank accounts
*/

-- First, get the customer_id and bank_account_id for the test data
WITH first_customer AS (
  SELECT id FROM customers LIMIT 1
), first_account AS (
  SELECT id FROM bank_accounts WHERE customer_id = (SELECT id FROM first_customer) LIMIT 1
)
INSERT INTO transactions (
  customer_id,
  bank_account_id,
  type,
  description,
  amount,
  date,
  status,
  reference
)
SELECT
  (SELECT id FROM first_customer),
  (SELECT id FROM first_account),
  type,
  description,
  amount,
  date,
  status,
  reference
FROM (
  VALUES
    ('credit', 'Client Payment - Project A', 25000.00, now() - interval '1 day', 'completed', 'INV-2025-001'),
    ('credit', 'Interest Income', 750.25, now() - interval '2 days', 'completed', 'INT-2025-Q1'),
    ('debit', 'Office Supplies Payment', 1250.75, now() - interval '3 days', 'completed', 'PO-2025-123'),
    ('debit', 'Software Subscription', 499.99, now() - interval '4 days', 'completed', 'SUB-2025-Q1'),
    ('credit', 'Client Payment - Project B', 15000.00, now() - interval '5 days', 'completed', 'INV-2025-002'),
    ('debit', 'Insurance Premium', 5000.00, now(), 'pending', 'INS-2025-Q2'),
    ('credit', 'Investment Return', 3500.00, now() - interval '6 days', 'completed', 'INV-RET-2025-001'),
    ('debit', 'Marketing Campaign', 2500.00, now() - interval '7 days', 'completed', 'MKT-2025-Q1'),
    ('credit', 'Consulting Fee', 8500.00, now() - interval '8 days', 'completed', 'CONS-2025-001'),
    ('debit', 'Equipment Purchase', 4500.00, now() - interval '9 days', 'completed', 'EQP-2025-001')
) AS t(type, description, amount, date, status, reference);