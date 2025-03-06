"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  HelpCircle,
  Home,
  LineChart,
  LogOut,
  Menu,
  PieChart,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sliders,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CashFlowPage() {
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
                    { icon: <Home />, label: "Dashboard", href: "/dashboard" },
                    { icon: <BarChart3 />, label: "Cash Flow", href: "/cash-flow", active: true },
                    { icon: <Wallet />, label: "Banking", href: "/banking" },
                    { icon: <CreditCard />, label: "Investments", href: "#" },
                    { icon: <LineChart />, label: "Payments", href: "#" },
                    { icon: <FileText />, label: "Reports", href: "#" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
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
                    { icon: <TrendingUp />, label: "Forecasting", href: "#" },
                    { icon: <RefreshCw />, label: "FX Management", href: "#" },
                    { icon: <Users />, label: "Bank Relations", href: "#" },
                    { icon: <Calendar />, label: "Scheduling", href: "#" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
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
                    { icon: <User />, label: "Profile", href: "#" },
                    { icon: <Settings />, label: "Preferences", href: "#" },
                    { icon: <HelpCircle />, label: "Help & Support", href: "#" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
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

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold">Cash Flow Management</h1>
                <p className="text-gray-500">Monitor, analyze, and forecast your cash flow position.</p>
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
                  New Forecast
                </Button>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Current Cash Position",
                  value: "$4,385,290",
                  change: "+$245,000",
                  changePercent: "+5.9%",
                  trend: "up",
                  icon: <DollarSign className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "30-Day Forecast",
                  value: "$4,850,120",
                  change: "+$464,830",
                  changePercent: "+10.6%",
                  trend: "up",
                  icon: <LineChart className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "Net Cash Flow (MTD)",
                  value: "$245,000",
                  change: "-$32,500",
                  changePercent: "-11.7%",
                  trend: "down",
                  icon: <TrendingUp className="h-6 w-6 text-[#6d7b92]" />,
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                      {card.icon}
                    </div>
                    {card.trend === "up" && (
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>{card.changePercent}</span>
                      </div>
                    )}
                    {card.trend === "down" && (
                      <div className="flex items-center text-red-600">
                        <TrendingDown className="h-4 w-4 mr-1" />
                        <span>{card.changePercent}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-sm">{card.title}</h3>
                    <p className="text-2xl font-bold mt-1">{card.value}</p>
                    <p className={`text-sm mt-1 ${card.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {card.change} vs. previous period
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cash Flow Forecast */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-lg font-bold">Cash Flow Forecast</h2>
                  <p className="text-sm text-gray-500">Projected cash position over the selected time period</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex rounded-lg overflow-hidden bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
                    <button className="px-4 py-2 text-sm bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-[#6d7b92]">
                      Daily
                    </button>
                    <button className="px-4 py-2 text-sm">Weekly</button>
                    <button className="px-4 py-2 text-sm">Monthly</button>
                    <button className="px-4 py-2 text-sm">Quarterly</button>
                  </div>

                  <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                    <Sliders className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="h-[400px] rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4 mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  width={1200}
                  height={400}
                  alt="Cash flow forecast chart"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Beginning Balance",
                    value: "$4,140,290",
                    icon: <DollarSign className="h-4 w-4 text-[#6d7b92]" />,
                  },
                  {
                    label: "Inflows",
                    value: "$1,250,000",
                    icon: <ArrowDown className="h-4 w-4 text-green-600" />,
                  },
                  {
                    label: "Outflows",
                    value: "$1,005,000",
                    icon: <ArrowUp className="h-4 w-4 text-red-600" />,
                  },
                  {
                    label: "Ending Balance",
                    value: "$4,385,290",
                    icon: <DollarSign className="h-4 w-4 text-[#6d7b92]" />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-lg font-bold">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cash Flow By Category */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold">Cash Flow By Category</h2>
                    <p className="text-sm text-gray-500">Inflows and outflows by business category</p>
                  </div>

                  <Select defaultValue="month">
                    <SelectTrigger className="w-36 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] border-0">
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="h-[300px] rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    width={800}
                    height={300}
                    alt="Cash flow by category chart"
                    className="rounded-lg h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-2 rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Cash Flow Distribution</h2>
                  <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="h-[180px] w-[180px] relative">
                    <Image
                      src="/placeholder.svg?height=180&width=180"
                      width={180}
                      height={180}
                      alt="Cash flow distribution chart"
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Operational", value: "65%", amount: "$812,500", color: "bg-blue-500" },
                    { label: "Financial", value: "20%", amount: "$250,000", color: "bg-green-500" },
                    { label: "Investment", value: "10%", amount: "$125,000", color: "bg-yellow-500" },
                    { label: "Other", value: "5%", amount: "$62,500", color: "bg-purple-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${item.color} mr-2`}></div>
                        <div className="text-sm">{item.label}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cash Flow Analysis */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Cash Flow Analysis</h2>
                <Button
                  variant="outline"
                  className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0 text-sm"
                >
                  Download Report
                </Button>
              </div>

              <Tabs defaultValue="variance">
                <TabsList className="w-full flex rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] p-1 mb-6">
                  <TabsTrigger
                    value="variance"
                    className="flex-1 rounded-md data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                  >
                    Variance Analysis
                  </TabsTrigger>
                  <TabsTrigger
                    value="trends"
                    className="flex-1 rounded-md data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                  >
                    Trend Analysis
                  </TabsTrigger>
                  <TabsTrigger
                    value="ratios"
                    className="flex-1 rounded-md data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                  >
                    Cash Flow Ratios
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="variance">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        width={600}
                        height={300}
                        alt="Variance analysis chart"
                        className="rounded-lg h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Forecast Accuracy</p>
                            <p className="text-xl font-bold">92.4%</p>
                          </div>
                          <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                            <PieChart className="h-5 w-5 text-[#6d7b92]" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Largest Variance</p>
                            <p className="text-xl font-bold">-$123,450</p>
                            <p className="text-xs text-red-600">Accounts Receivable</p>
                          </div>
                          <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                            <TrendingDown className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Forecast vs. Actual</p>
                            <p className="text-xl font-bold">+$45,290</p>
                            <p className="text-xs text-green-600">Better than forecast</p>
                          </div>
                          <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trends">
                  <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4 mb-6">
                    <Image
                      src="/placeholder.svg?height=300&width=1200"
                      width={1200}
                      height={300}
                      alt="Trend analysis chart"
                      className="rounded-lg h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Cash Flow Growth",
                        value: "+8.2%",
                        description: "Year-over-year growth",
                        trend: "up",
                      },
                      {
                        title: "Seasonality Impact",
                        value: "-5.4%",
                        description: "Current quarter vs. average",
                        trend: "down",
                      },
                      {
                        title: "Cash Conversion",
                        value: "24 days",
                        description: "Improved by 3 days",
                        trend: "up",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]"
                      >
                        <h3 className="text-sm text-gray-500">{item.title}</h3>
                        <div className="flex items-center mt-2">
                          <p className="text-xl font-bold">{item.value}</p>
                          {item.trend === "up" && <TrendingUp className="h-4 w-4 ml-2 text-green-600" />}
                          {item.trend === "down" && <TrendingDown className="h-4 w-4 ml-2 text-red-600" />}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ratios">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        width={600}
                        height={300}
                        alt="Cash flow ratios chart"
                        className="rounded-lg h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          ratio: "Operating Cash Flow Ratio",
                          value: "1.24",
                          benchmark: "Industry avg: 1.12",
                          status: "good",
                        },
                        {
                          ratio: "Cash Flow Coverage Ratio",
                          value: "3.6",
                          benchmark: "Target: >3.0",
                          status: "good",
                        },
                        {
                          ratio: "Cash Flow to Debt Ratio",
                          value: "0.38",
                          benchmark: "Target: >0.4",
                          status: "warning",
                        },
                        {
                          ratio: "Free Cash Flow Yield",
                          value: "5.2%",
                          benchmark: "Previous: 4.8%",
                          status: "good",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{item.ratio}</p>
                              <p className="text-lg font-bold mt-1">{item.value}</p>
                              <p className="text-xs text-gray-500">{item.benchmark}</p>
                            </div>
                            <div
                              className={`h-3 w-3 rounded-full ${item.status === "good" ? "bg-green-500" : "bg-yellow-500"}`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

