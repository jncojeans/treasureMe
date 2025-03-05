import React, { useEffect, useState } from 'react';
import { Plus, Building2, DollarSign, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AddBankAccountModal from '../components/AddBankAccountModal';

type BankAccount = {
  id: string;
  name: string;
  bank_name: string;
  account_number: string;
  balance: number;
  currency: string;
  account_type: string;
};

export default function BankAccounts() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bank_accounts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAccounts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch accounts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleAddSuccess = () => {
    fetchAccounts();
  };

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Bank Accounts</h1>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Bank Account
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Accounts</p>
              <p className="text-2xl font-bold">{accounts.length}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Banks</p>
              <p className="text-2xl font-bold">
                {new Set(accounts.map(a => a.bank_name)).size}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Building2 className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Accounts Table */}
      <div className="bg-white rounded-lg shadow-sm border relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="text-gray-500">Loading accounts...</div>
          </div>
        )}
        
        {error && (
          <div className="p-4 text-red-600 bg-red-50 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Bank</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account Number</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Type</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">Balance</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{account.name}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{account.bank_name}</td>
                  <td className="py-4 px-6 text-gray-600">****{account.account_number.slice(-4)}</td>
                  <td className="py-4 px-6 text-gray-600">{account.account_type}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="font-medium text-gray-900">
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-600">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Bank Account Modal */}
      <AddBankAccountModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={handleAddSuccess}
      />
    </div>
  );
}