import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  BarChart3, 
  Wallet, 
  LineChart, 
  Shield, 
  ArrowRightCircle,
  Building2,
  Globe,
  Users,
  LogIn
} from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import BankAccounts from './pages/BankAccounts';

function App() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="bank-accounts" element={<BankAccounts />} />
          {/* Other dashboard routes will be added here */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <nav className="bg-white border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-semibold">TreasuryPro</span>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                    <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
                    <a href="#clients" className="text-gray-600 hover:text-gray-900">Clients</a>
                    <Link
                      to="/login"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      <LogIn className="h-5 w-5 mr-2" />
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <main>
              {/* Hero Section */}
              <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                          <span className="block">Modern Treasury</span>
                          <span className="block text-blue-600">Management Solution</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          Streamline your treasury operations with our comprehensive workstation. 
                          Manage cash, investments, and risk all in one place.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                              Request Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt="Office workspace"
                  />
                </div>
              </div>

              {/* Features Section */}
              <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Everything you need to manage treasury
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Wallet className="h-12 w-12 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Cash Management</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Centralized view of all cash positions and forecasting capabilities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <LineChart className="h-12 w-12 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Investment Portfolio</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Track and manage investments with real-time market data integration.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Shield className="h-12 w-12 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Risk Management</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Comprehensive tools for monitoring and managing financial risks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-blue-600">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-white">500+</div>
                      <div className="mt-2 text-lg font-medium text-blue-100">Enterprise Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-white">$2T+</div>
                      <div className="mt-2 text-lg font-medium text-blue-100">Managed Assets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-white">99.9%</div>
                      <div className="mt-2 text-lg font-medium text-blue-100">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-white">50+</div>
                      <div className="mt-2 text-lg font-medium text-blue-100">Countries</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Building2 className="h-8 w-8 text-blue-600 mb-4" />
                      <p className="text-gray-600">"TreasuryPro has transformed how we manage our global treasury operations."</p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">CFO, Global Corp</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Globe className="h-8 w-8 text-blue-600 mb-4" />
                      <p className="text-gray-600">"The risk management capabilities have been invaluable for our international operations."</p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                        <p className="text-sm text-gray-500">Treasury Director, Tech Solutions</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Users className="h-8 w-8 text-blue-600 mb-4" />
                      <p className="text-gray-600">"Outstanding customer support and continuous platform improvements."</p>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">Emma Martinez</p>
                        <p className="text-sm text-gray-500">Head of Treasury, Finance Plus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to streamline your treasury?</span>
                    <span className="block text-blue-600">Start your free trial today.</span>
                  </h2>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                      <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Get started
                        <ArrowRightCircle className="ml-3 -mr-1 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-white font-semibold">Product</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Company</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Resources</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Legal</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Compliance</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                    <span className="ml-2 text-white text-xl font-semibold">TreasuryPro</span>
                  </div>
                  <p className="text-gray-400">&copy; 2025 TreasuryPro. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
  );
}

export default App;