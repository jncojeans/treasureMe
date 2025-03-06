"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  Globe,
  HelpCircle,
  Home,
  LineChart,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  User,
  Users,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-700 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#e0e5ec] shadow-[5px_0px_10px_#bec3c9] transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="h-16 flex items-center px-4 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-[#6d7b92]" />
              </div>
              <span className="text-xl font-bold">TreasuryPro</span>
            </Link>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
                <div className="mt-2 space-y-1">
                  {[
                    { icon: <Home />, label: "Dashboard", active: true },
                    { icon: <BarChart3 />, label: "Cash Flow" },
                    { icon: <Globe />, label: "Banking" },
                    { icon: <Wallet />, label: "Investments" },
                    { icon: <CreditCard />, label: "Payments" },
                    { icon: <LineChart />, label: "Reports" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={`group flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                        item.active
                          ? "bg-[#e0e5ec] text-[#6d7b92] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                          : "text-gray-700 hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                      }`}
                    >
                      <span className="mr-3 h-5 w-5">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Treasury Management */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Treasury</h3>
                <div className="mt-2 space-y-1">
                  {[
                    { icon: <FileText />, label: "Forecasting" },
                    { icon: <TrendingUp />, label: "FX Management" },
                    { icon: <Users />, label: "Bank Relations" },
                    { icon: <Calendar />, label: "Scheduling" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                    >
                      <span className="mr-3 h-5 w-5">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Settings */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Settings</h3>
                <div className="mt-2 space-y-1">
                  {[
                    { icon: <User />, label: "Profile" },
                    { icon: <Settings />, label: "Preferences" },
                    { icon: <HelpCircle />, label: "Help & Support" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                    >
                      <span className="mr-3 h-5 w-5">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-[#e0e5ec] border-b border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] mr-2"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </button>

              <div className="relative rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] hidden md:block w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-10 pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                <MessageSquare className="h-5 w-5" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center overflow-hidden">
                      <User className="h-6 w-6 text-[#6d7b92]" />
                    </div>
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium">Alex Morgan</div>
                      <div className="text-xs text-gray-500">Treasury Manager</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] border-0"
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">Billing</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold">Treasury Dashboard</h1>
                <p className="text-gray-500">Welcome back, Alex. Here's what's happening today.</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button
                  variant="outline"
                  className="rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button className="rounded-xl bg-[#6d7b92] text-white shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:bg-[#5d6b82]">
                  <Plus className="mr-2 h-4 w-4" />
                  New Transaction
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Cash",
                  value: "$4,385,290",
                  change: "+2.5%",
                  trend: "up",
                  icon: <DollarSign className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "Upcoming Payments",
                  value: "$1,245,890",
                  change: "Due in 7 days",
                  trend: "neutral",
                  icon: <CreditCard className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "Investment Returns",
                  value: "$245,890",
                  change: "+4.2%",
                  trend: "up",
                  icon: <TrendingUp className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "FX Exposure",
                  value: "$845,290",
                  change: "-1.8%",
                  trend: "down",
                  icon: <Globe className="h-6 w-6 text-[#6d7b92]" />,
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                      {metric.icon}
                    </div>
                    {metric.trend === "up" && (
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>{metric.change}</span>
                      </div>
                    )}
                    {metric.trend === "down" && (
                      <div className="flex items-center text-red-600">
                        <TrendingDown className="h-4 w-4 mr-1" />
                        <span>{metric.change}</span>
                      </div>
                    )}
                    {metric.trend === "neutral" && (
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{metric.change}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-sm">{metric.title}</h3>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cash Flow Chart */}
              <div className="lg:col-span-2 rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Cash Flow Forecast</h2>
                  <div className="flex space-x-2">
                    <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-sm">
                      Weekly
                    </button>
                    <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-sm text-[#6d7b92]">
                      Monthly
                    </button>
                    <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-sm">
                      Quarterly
                    </button>
                  </div>
                </div>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    width={800}
                    height={300}
                    alt="Cash flow chart"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Asset Allocation */}
              <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Asset Allocation</h2>
                  <button className="rounded-lg p-1 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="h-[180px] w-[180px] relative">
                    <Image
                      src="/placeholder.svg?height=180&width=180"
                      width={180}
                      height={180}
                      alt="Asset allocation chart"
                      className="rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold">$4.38M</p>
                        <p className="text-xs text-gray-500">Total Assets</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Cash & Equivalents", value: "45%", color: "bg-blue-500" },
                    { label: "Short-term Investments", value: "30%", color: "bg-green-500" },
                    { label: "Fixed Income", value: "15%", color: "bg-yellow-500" },
                    { label: "Other Assets", value: "10%", color: "bg-purple-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`h-3 w-3 rounded-full ${item.color} mr-2`}></div>
                      <div className="flex-1 text-sm">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Recent Transactions</h2>
                <Button
                  variant="outline"
                  className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
                >
                  View All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Transaction</TableHead>
                      <TableHead className="text-gray-600">Date</TableHead>
                      <TableHead className="text-gray-600">Amount</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Supplier Payment - Tech Solutions",
                        date: "May 12, 2023",
                        amount: "-$245,000.00",
                        status: "Completed",
                      },
                      {
                        name: "Investment Withdrawal - Treasury Bills",
                        date: "May 10, 2023",
                        amount: "+$500,000.00",
                        status: "Completed",
                      },
                      {
                        name: "FX Purchase - EUR/USD",
                        date: "May 8, 2023",
                        amount: "-$1,250,000.00",
                        status: "Pending",
                      },
                      {
                        name: "Dividend Payment",
                        date: "May 5, 2023",
                        amount: "+$125,890.00",
                        status: "Completed",
                      },
                      {
                        name: "Payroll Transfer",
                        date: "May 1, 2023",
                        amount: "-$875,450.00",
                        status: "Completed",
                      },
                    ].map((transaction, index) => (
                      <TableRow key={index} className="border-gray-200">
                        <TableCell className="font-medium">{transaction.name}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell className={transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}>
                          {transaction.amount}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                            <FileText className="h-4 w-4" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Upcoming Payments & FX Rates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Payments */}
              <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Upcoming Payments</h2>
                  <Button
                    variant="outline"
                    className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
                  >
                    Schedule
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Vendor Payment - Global Supplies",
                      date: "May 15, 2023",
                      amount: "$345,000.00",
                      days: 3,
                    },
                    {
                      name: "Quarterly Tax Payment",
                      date: "May 20, 2023",
                      amount: "$567,890.00",
                      days: 8,
                    },
                    {
                      name: "Loan Repayment",
                      date: "May 25, 2023",
                      amount: "$125,000.00",
                      days: 13,
                    },
                    {
                      name: "Insurance Premium",
                      date: "June 1, 2023",
                      amount: "$78,500.00",
                      days: 20,
                    },
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-[#e0e5ec] p-4 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{payment.name}</p>
                          <p className="text-sm text-gray-500">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{payment.amount}</p>
                          <p className="text-xs text-gray-500">Due in {payment.days} days</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FX Rates */}
              <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">FX Rates</h2>
                  <div className="text-sm text-gray-500">Last updated: Today, 10:45 AM</div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      pair: "EUR/USD",
                      rate: "1.0865",
                      change: "+0.0023",
                      trend: "up",
                    },
                    {
                      pair: "GBP/USD",
                      rate: "1.2534",
                      change: "+0.0045",
                      trend: "up",
                    },
                    {
                      pair: "USD/JPY",
                      rate: "134.56",
                      change: "-0.78",
                      trend: "down",
                    },
                    {
                      pair: "USD/CAD",
                      rate: "1.3645",
                      change: "-0.0012",
                      trend: "down",
                    },
                    {
                      pair: "AUD/USD",
                      rate: "0.6723",
                      change: "+0.0034",
                      trend: "up",
                    },
                  ].map((rate, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-[#e0e5ec] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mr-3">
                          <Globe className="h-4 w-4 text-[#6d7b92]" />
                        </div>
                        <div>
                          <p className="font-medium">{rate.pair}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{rate.rate}</p>
                        <p
                          className={`text-xs flex items-center justify-end ${
                            rate.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {rate.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {rate.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

