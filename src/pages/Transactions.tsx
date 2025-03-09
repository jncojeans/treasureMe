import React, { useEffect, useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, Filter, Download, Plus, PencilLine } from 'lucide-react';
import { supabase } from '../lib/supabase';
import CreateTransactionModal from '../components/CreateTransactionModal';
import EditTransactionModal from '../components/EditTransactionModal';

type Transaction = {
  id: string;
  bank_account_id: string;
  type: 'credit' | 'debit';
  description: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  bank_account: {
    name: string;
  };
  reference: string;
};

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select(`
            *,
            bank_account:bank_accounts(name)
          `)
          .order('date', { ascending: false });

        if (error) throw error;
        setTransactions(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const totalInflow = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalOutflow = transactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0);

  const netFlow = totalInflow - totalOutflow;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Inflow</p>
              <p className="text-2xl font-bold text-green-600">
                ${totalInflow.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ArrowUpRight className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Outflow</p>
              <p className="text-2xl font-bold text-red-600">
                ${totalOutflow.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <ArrowDownLeft className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Flow</p>
              <p className="text-2xl font-bold text-blue-600">
                ${netFlow.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <ArrowUpRight className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        {loading && (
          <div className="flex items-center justify-center p-8">
            <div className="text-gray-500">Loading transactions...</div>
          </div>
        )}
        
        {error && (
          <div className="p-4 text-red-600 bg-red-50">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Description</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Reference</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{transaction.description}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{transaction.bank_account.name}</td>
                  <td className="py-4 px-6 text-gray-600">{transaction.reference}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className={`py-4 px-6 text-right font-medium ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}
                    ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelectedTransaction(transaction)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-600"
                        title="Edit transaction"
                      >
                        <PencilLine className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {showCreateModal && (
        <CreateTransactionModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => {
            setShowCreateModal(false);
            fetchTransactions();
          }}
        />
      )}
      
      {selectedTransaction && (
        <EditTransactionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          onSuccess={() => {
            setSelectedTransaction(null);
            fetchTransactions();
          }}
        />
      )}
    </div>
  );
}