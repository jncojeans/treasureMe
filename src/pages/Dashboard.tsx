import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Wallet,
  LineChart,
  Shield,
  Settings,
  Users,
  Building2,
  LogOut,
  Landmark
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-white border-r transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <div className={`flex items-center ${!isExpanded && 'justify-center'}`}>
            <BarChart3 className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <span className={`ml-2 font-semibold text-xl transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 hidden'
            }`}>
              TreasuryPro
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Wallet className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Overview
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/bank-accounts"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Landmark className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Bank Accounts
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/investments"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <LineChart className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Investments
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/risk"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Shield className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Risk Management
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/users"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Users className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/company"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Building2 className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Company
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <Settings className="h-6 w-6" />
                <span className={`ml-3 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                  Settings
                </span>
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-4 w-full left-0 px-4">
            <button
              onClick={handleLogout}
              className={`flex items-center p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 w-full ${
                !isExpanded && 'justify-center'
              }`}
            >
              <LogOut className="h-6 w-6" />
              <span className={`ml-3 transition-opacity duration-300 ${
                isExpanded ? 'opacity-100' : 'opacity-0 hidden'
              }`}>
                Logout
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}