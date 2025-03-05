import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Building2, AlertCircle, Link2 } from 'lucide-react';
import PlaidLink from '../components/PlaidLink';

type AccountType = 'checking' | 'savings' | 'money_market' | 'cd' | 'other';

export default function AddBankAccount() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: 'checking' as AccountType,
    currency: 'USD'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Get the customer_id for the logged-in user
      const { data: customerData, error: customerError } = await supabase
        .from('customer_users')
        .select('customer_id')
        .limit(1);

      if (customerError) throw customerError;
      if (!customerData?.[0]?.customer_id) throw new Error('No customer ID found');

      const { error: insertError } = await supabase
        .from('bank_accounts')
        .insert({
          customer_id: customerData[0].customer_id,
          name: formData.name,
          bank_name: formData.bankName,
          account_number: formData.accountNumber,
          routing_number: formData.routingNumber,
          account_type: formData.accountType,
          currency: formData.currency
        });

      if (insertError) throw insertError;
      
      navigate('/dashboard/bank-accounts');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Connect Bank Account</h1>
      </div>

      <div className="space-y-8">
        {/* Plaid Connection Option */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6 p-4 bg-green-50 rounded-lg">
            <Link2 className="h-6 w-6 text-green-600" />
            <p className="text-green-700">Connect your bank account securely via Plaid</p>
          </div>
          
          <PlaidLink 
            onSuccess={() => navigate('/dashboard/bank-accounts')}
            onExit={() => console.log('Plaid connection exited')}
          />
        </div>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-100 text-sm text-gray-500">Or</span>
          </div>
        </div>

        {/* Manual Entry Option */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-6 p-4 bg-blue-50 rounded-lg">
            <Building2 className="h-6 w-6 text-blue-600" />
            <p className="text-blue-700">Enter your bank account details manually</p>
          </div>

          {error && (
            <div className="mb-6 flex items-center space-x-3 p-4 bg-red-50 text-red-700 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Main Operating Account"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                required
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Chase Bank"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <input
                type="text"
                required
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter account number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Routing Number
              </label>
              <input
                type="text"
                required
                value={formData.routingNumber}
                onChange={(e) => setFormData({ ...formData, routingNumber: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter routing number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <select
                value={formData.accountType}
                onChange={(e) => setFormData({ ...formData, accountType: e.target.value as AccountType })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
                <option value="money_market">Money Market</option>
                <option value="cd">Certificate of Deposit</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="JPY">JPY - Japanese Yen</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/dashboard/bank-accounts')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Adding Account...' : 'Add Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}