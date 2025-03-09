import React, { useState, useEffect } from 'react';
import { BarChart3, ArrowUpRight, ArrowDownRight, DollarSign, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { startOfWeek, subWeeks, format } from 'date-fns';
import { Link } from 'react-router-dom';

type Transaction = {
  id: string;
  type: 'credit' | 'debit';
  description: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  bank_account: {
    name: string;
  };
};

export default function DashboardHome() {
  const [totalCash, setTotalCash] = useState(0);
  const [weeklyChange, setWeeklyChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTotalCash = async () => {
      try {
        // Get current total
        const { data, error } = await supabase
          .from('bank_accounts')
          .select('balance');

        if (error) throw error;
        const total = data.reduce((sum, account) => sum + account.balance, 0);
        setTotalCash(total);

        // Get balances from a week ago
        const weekAgo = startOfWeek(subWeeks(new Date(), 1));
        const { data: auditLogs, error: auditError } = await supabase
          .from('balance_audit_logs')
          .select('bank_account_id, previous_balance')
          .gt('created_at', weekAgo.toISOString())
          .order('created_at', { ascending: true });

        if (auditError) throw auditError;

        if (auditLogs && auditLogs.length > 0) {
          // Get the earliest balance for each account this week
          const weekStartBalances = new Map();
          auditLogs.forEach(log => {
            if (!weekStartBalances.has(log.bank_account_id)) {
              weekStartBalances.set(log.bank_account_id, log.previous_balance);
            }
          });

          // Calculate total from a week ago
          const previousTotal = data.reduce((sum, account) => {
            const weekAgoBalance = weekStartBalances.get(account.id);
            return sum + (weekAgoBalance ?? account.balance);
          }, 0);

          // Calculate change
          const change = total - previousTotal;
          setWeeklyChange(change);
        }
      } catch (err) {
        console.error('Failed to fetch total cash:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalCash();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select(`
            *,
            bank_account:bank_accounts(name)
          `)
          .order('date', { ascending: false })
          .limit(5);

        if (error) throw error;
        setTransactions(data || []);
      } catch (err) {
        console.error('Failed to fetch transactions:', err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Cash</p>
              <p className="text-2xl font-bold">
                {loading ? (
                  <span className="text-gray-400">Loading...</span>
                ) : (
                  `$${totalCash.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                )}
              </p>
              {!loading && weeklyChange !== null && (
                <div className="flex items-center mt-2 text-sm">
                  {weeklyChange >= 0 ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      <span className="text-green-500 font-medium">
                        +${weeklyChange.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      <span className="text-red-500 font-medium">
                        -${Math.abs(weeklyChange).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </>
                  )}
                  <span className="text-gray-500 ml-2">from last week</span>
                </div>
              )}
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Investments</p>
              <p className="text-2xl font-bold">$8.2M</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">+12.3%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Liabilities</p>
              <p className="text-2xl font-bold">$1.8M</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <ArrowDownRight className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500" />
            <span className="text-red-500 font-medium">-2.1%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Position</p>
              <p className="text-2xl font-bold">$8.8M</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">+5.7%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Link
              to="/dashboard/transactions"
              className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No recent transactions
              </div>
            ) : transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500">
                      {format(new Date(transaction.date), 'MMM d, yyyy')}
                    </p>
                    <span className="text-gray-300">•</span>
                    <p className="text-sm text-gray-500">
                      {transaction.bank_account.name}
                    </p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                  {transaction.type === 'credit' ? '+' : '-'}
                  ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Cash Flow Forecast</h2>
          <div className="h-64 flex items-center justify-center border rounded">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}