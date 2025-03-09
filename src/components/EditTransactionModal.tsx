import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EditTransactionModalProps {
  transaction: {
    id: string;
    bank_account_id: string;
    type: 'credit' | 'debit';
    status: 'pending' | 'completed' | 'failed';
    description: string;
    amount: number;
    date: string;
    reference: string | null;
  };
  onClose: () => void;
  onSuccess: () => void;
}

type BankAccount = {
  id: string;
  name: string;
  bank_name: string;
  is_plaid: boolean;
};

export default function EditTransactionModal({ transaction, onClose, onSuccess }: EditTransactionModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<BankAccount[]>([]);

  const [formData, setFormData] = useState({
    bankAccountId: transaction.bank_account_id,
    type: transaction.type,
    status: transaction.status,
    description: transaction.description,
    amount: transaction.amount.toString(),
    date: new Date(transaction.date).toISOString().split('T')[0],
    reference: transaction.reference || ''
  });

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const { data, error } = await supabase
          .from('bank_accounts')
          .select('id, name, bank_name, is_plaid')
          .eq('is_plaid', false);

        if (error) throw error;
        setAccounts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch accounts');
      }
    };

    fetchAccounts();
  }, []);

  const createAuditLog = async (fieldName: string, oldValue: string, newValue: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('transaction_audit_logs')
      .insert({
        transaction_id: transaction.id,
        field_name: fieldName,
        old_value: oldValue,
        new_value: newValue,
        created_by: user.id
      });

    if (error) throw error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Please enter a valid positive amount');
      }

      // Create audit logs for changed fields
      const changes = [
        { field: 'bank_account_id', old: transaction.bank_account_id, new: formData.bankAccountId },
        { field: 'type', old: transaction.type, new: formData.type },
        { field: 'status', old: transaction.status, new: formData.status },
        { field: 'description', old: transaction.description, new: formData.description },
        { field: 'amount', old: transaction.amount.toString(), new: amount.toString() },
        { field: 'date', old: transaction.date, new: new Date(formData.date).toISOString() },
        { field: 'reference', old: transaction.reference || '', new: formData.reference }
      ];

      // Update the transaction
      const { error: updateError } = await supabase
        .from('transactions')
        .update({
          bank_account_id: formData.bankAccountId,
          type: formData.type,
          status: formData.status,
          description: formData.description,
          amount: amount,
          date: new Date(formData.date).toISOString(),
          reference: formData.reference || null
        })
        .eq('id', transaction.id);

      if (updateError) throw updateError;

      // Create audit logs for changed fields
      for (const change of changes) {
        if (change.old !== change.new) {
          await createAuditLog(change.field, change.old, change.new);
        }
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update transaction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Edit Transaction</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Account
              </label>
              <select
                value={formData.bankAccountId}
                onChange={(e) => setFormData({ ...formData, bankAccountId: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.name} ({account.bank_name})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'credit' | 'debit' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="credit">Credit (Incoming)</option>
                <option value="debit">Debit (Outgoing)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'pending' | 'completed' | 'failed' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter transaction description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reference (Optional)
              </label>
              <input
                type="text"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter reference number"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}