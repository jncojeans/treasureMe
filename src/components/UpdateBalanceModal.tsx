import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UpdateBalanceModalProps {
  accountId: string;
  currentBalance: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UpdateBalanceModal({ 
  accountId, 
  currentBalance, 
  onClose, 
  onSuccess 
}: UpdateBalanceModalProps) {
  const [newBalance, setNewBalance] = useState(currentBalance.toString());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const numericBalance = parseFloat(newBalance);
      if (isNaN(numericBalance)) {
        throw new Error('Please enter a valid number');
      }

      // Start by updating the bank account balance
      const { error: updateError } = await supabase
        .from('bank_accounts')
        .update({ balance: numericBalance })
        .eq('id', accountId);

      if (updateError) throw updateError;

      // Then create the audit log with the user ID
      const { error: auditError } = await supabase
        .from('balance_audit_logs')
        .insert({
          bank_account_id: accountId,
          previous_balance: currentBalance,
          new_balance: numericBalance,
          source: 'manual',
          created_by: user.id
        });

      if (auditError) throw auditError;

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update balance');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Update Account Balance</h2>
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Balance
            </label>
            <div className="text-gray-600">
              ${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Balance
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                type="number"
                step="0.01"
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
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
              {loading ? 'Updating...' : 'Update Balance'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}