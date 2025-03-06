"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRightLeft,
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  FileText,
  Filter,
  HelpCircle,
  Home,
  LineChart,
  Link2,
  LogOut,
  Menu,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Shield,
  User,
  Users,
  Wallet,
  TrendingUp,
  Key,
  CheckSquare,
  Lock,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function BankingPage() {
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
                    { icon: <BarChart3 />, label: "Cash Flow", href: "/cash-flow" },
                    { icon: <Wallet />, label: "Banking", href: "/banking", active: true },
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
                <h1 className="text-2xl font-bold">Banking Management</h1>
                <p className="text-gray-500">View and manage all your banking relationships in one place</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button
                  variant="outline"
                  className="rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button className="rounded-xl bg-[#6d7b92] text-white shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:bg-[#5d6b82]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Bank
                </Button>
              </div>
            </div>

            {/* Banking Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Balance",
                  value: "$4,385,290",
                  change: "+$125,000",
                  changePercent: "+2.9%",
                  icon: <DollarSign className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "Active Bank Accounts",
                  value: "8",
                  change: "Across 3 banks",
                  icon: <Wallet className="h-6 w-6 text-[#6d7b92]" />,
                },
                {
                  title: "Pending Transactions",
                  value: "12",
                  change: "$1,245,890 value",
                  icon: <ArrowRightLeft className="h-6 w-6 text-[#6d7b92]" />,
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
                    {card.changePercent && (
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>{card.changePercent}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-sm">{card.title}</h3>
                    <p className="text-2xl font-bold mt-1">{card.value}</p>
                    <p className="text-sm mt-1 text-gray-500">{card.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connected Banks */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold">Connected Banks</h2>
                  <p className="text-sm text-gray-500">Your banking relationships</p>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-36 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0">
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] border-0">
                      <SelectItem value="all">All Banks</SelectItem>
                      <SelectItem value="chase">JP Morgan Chase</SelectItem>
                      <SelectItem value="citi">Citibank</SelectItem>
                      <SelectItem value="hsbc">HSBC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    bank: "JP Morgan Chase",
                    accounts: 4,
                    balance: "$2,145,320",
                    logo: "/placeholder.svg?height=40&width=40",
                    status: "Connected",
                  },
                  {
                    bank: "Citibank",
                    accounts: 2,
                    balance: "$1,285,470",
                    logo: "/placeholder.svg?height=40&width=40",
                    status: "Connected",
                  },
                  {
                    bank: "HSBC",
                    accounts: 2,
                    balance: "$954,500",
                    logo: "/placeholder.svg?height=40&width=40",
                    status: "Connected",
                  },
                ].map((bank, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-[#e0e5ec] p-5 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3 overflow-hidden">
                          <Image src={bank.logo || "/placeholder.svg"} width={40} height={40} alt={bank.bank} />
                        </div>
                        <div>
                          <h3 className="font-medium">{bank.bank}</h3>
                          <p className="text-xs text-gray-500">{bank.accounts} accounts</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-full text-xs">
                        {bank.status}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">Total Balance</p>
                        <p className="text-lg font-bold">{bank.balance}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <button className="text-xs text-[#6d7b92] flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> View Details
                      </button>
                      <button className="text-xs text-[#6d7b92] flex items-center">
                        <RefreshCw className="h-3 w-3 mr-1" /> Refresh
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Details */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <Tabs defaultValue="accounts">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                  <div>
                    <h2 className="text-lg font-bold">Account Details</h2>
                    <p className="text-sm text-gray-500">View and manage your bank accounts</p>
                  </div>
                  <TabsList className="bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] p-1 rounded-lg">
                    <TabsTrigger
                      value="accounts"
                      className="data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] rounded-md"
                    >
                      Accounts
                    </TabsTrigger>
                    <TabsTrigger
                      value="transactions"
                      className="data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] rounded-md"
                    >
                      Transactions
                    </TabsTrigger>
                    <TabsTrigger
                      value="statements"
                      className="data-[state=active]:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] rounded-md"
                    >
                      Statements
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="accounts">
                  <div className="overflow-x-auto rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200">
                          <TableHead className="text-gray-600">Account Name</TableHead>
                          <TableHead className="text-gray-600">Account Number</TableHead>
                          <TableHead className="text-gray-600">Bank</TableHead>
                          <TableHead className="text-gray-600">Balance</TableHead>
                          <TableHead className="text-gray-600">Status</TableHead>
                          <TableHead className="text-gray-600 text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "Operating Account",
                            number: "******2458",
                            bank: "JP Morgan Chase",
                            balance: "$1,245,320",
                            status: "Active",
                          },
                          {
                            name: "Payroll Account",
                            number: "******5672",
                            bank: "JP Morgan Chase",
                            balance: "$425,450",
                            status: "Active",
                          },
                          {
                            name: "Tax Reserve",
                            number: "******9012",
                            bank: "JP Morgan Chase",
                            balance: "$375,550",
                            status: "Active",
                          },
                          {
                            name: "Foreign Currency - EUR",
                            number: "******3456",
                            bank: "Citibank",
                            balance: "€845,320",
                            status: "Active",
                          },
                          {
                            name: "Foreign Currency - GBP",
                            number: "******7890",
                            bank: "Citibank",
                            balance: "£440,150",
                            status: "Active",
                          },
                          {
                            name: "Capital Expenditure",
                            number: "******1245",
                            bank: "HSBC",
                            balance: "$454,500",
                            status: "Active",
                          },
                          {
                            name: "Debt Service",
                            number: "******6789",
                            bank: "HSBC",
                            balance: "$500,000",
                            status: "Active",
                          },
                          {
                            name: "Emergency Fund",
                            number: "******4321",
                            bank: "JP Morgan Chase",
                            balance: "$99,000",
                            status: "Active",
                          },
                        ].map((account, index) => (
                          <TableRow key={index} className="border-gray-200">
                            <TableCell className="font-medium">{account.name}</TableCell>
                            <TableCell>{account.number}</TableCell>
                            <TableCell>{account.bank}</TableCell>
                            <TableCell>{account.balance}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{account.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="rounded-lg bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] border-0"
                                >
                                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">
                                    Transactions
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer">
                                    Download Statement
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator className="bg-gray-200" />
                                  <DropdownMenuItem className="hover:bg-[#d6dbe2] cursor-pointer text-red-600">
                                    Unlink Account
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="transactions">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search transactions..."
                        className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-10 pl-10"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                      >
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200">
                          <TableHead className="text-gray-600">Date</TableHead>
                          <TableHead className="text-gray-600">Description</TableHead>
                          <TableHead className="text-gray-600">Account</TableHead>
                          <TableHead className="text-gray-600">Reference</TableHead>
                          <TableHead className="text-gray-600">Amount</TableHead>
                          <TableHead className="text-gray-600 text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            date: "May 12, 2023",
                            description: "Vendor Payment - Tech Solutions",
                            account: "Operating Account",
                            reference: "REF-89045",
                            amount: "-$245,000.00",
                          },
                          {
                            date: "May 10, 2023",
                            description: "Customer Payment - Global Corp",
                            account: "Operating Account",
                            reference: "CUST-56789",
                            amount: "+$354,780.00",
                          },
                          {
                            date: "May 8, 2023",
                            description: "Payroll Transfer",
                            account: "Payroll Account",
                            reference: "PAY-MAY-1",
                            amount: "-$185,450.00",
                          },
                          {
                            date: "May 5, 2023",
                            description: "FX Purchase - EUR",
                            account: "Foreign Currency - EUR",
                            reference: "FX-89045",
                            amount: "+€250,000.00",
                          },
                          {
                            date: "May 3, 2023",
                            description: "Dividend Payment",
                            account: "Operating Account",
                            reference: "DIV-Q2-2023",
                            amount: "+$125,890.00",
                          },
                          {
                            date: "May 1, 2023",
                            description: "Loan Repayment",
                            account: "Debt Service",
                            reference: "LOAN-2023-05",
                            amount: "-$75,000.00",
                          },
                        ].map((transaction, index) => (
                          <TableRow key={index} className="border-gray-200">
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.account}</TableCell>
                            <TableCell>{transaction.reference}</TableCell>
                            <TableCell
                              className={transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}
                            >
                              {transaction.amount}
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
                </TabsContent>

                <TabsContent value="statements">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        bank: "JP Morgan Chase",
                        accountName: "Operating Account",
                        accountNumber: "******2458",
                        statements: [
                          { period: "April 2023", date: "May 1, 2023", size: "2.4 MB" },
                          { period: "March 2023", date: "April 1, 2023", size: "2.1 MB" },
                          { period: "February 2023", date: "March 1, 2023", size: "1.9 MB" },
                        ],
                      },
                      {
                        bank: "Citibank",
                        accountName: "Foreign Currency - EUR",
                        accountNumber: "******3456",
                        statements: [
                          { period: "April 2023", date: "May 1, 2023", size: "1.8 MB" },
                          { period: "March 2023", date: "April 1, 2023", size: "1.5 MB" },
                          { period: "February 2023", date: "March 1, 2023", size: "1.7 MB" },
                        ],
                      },
                    ].map((account, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-[#e0e5ec] p-5 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{account.accountName}</h3>
                            <p className="text-xs text-gray-500">
                              {account.bank} - {account.accountNumber}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                          >
                            Request Statement
                          </Button>
                        </div>

                        <div className="space-y-3">
                          {account.statements.map((statement, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] p-3 flex items-center justify-between"
                            >
                              <div>
                                <p className="font-medium text-sm">{statement.period}</p>
                                <p className="text-xs text-gray-500">Generated on {statement.date}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-xs text-gray-500">{statement.size}</span>
                                <button className="rounded-lg p-1.5 bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] hover:shadow-[inset_1px_1px_2px_#bec3c9,inset_-1px_-1px_2px_#ffffff]">
                                  <Download className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Bank Connectivity & Security */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold">Bank Connectivity</h2>
                    <p className="text-sm text-gray-500">Status of your bank connections</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0"
                  >
                    Connection Settings
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      bank: "JP Morgan Chase",
                      status: "Connected",
                      lastSync: "Today, 10:45 AM",
                      method: "API",
                      accounts: 4,
                    },
                    {
                      bank: "Citibank",
                      status: "Connected",
                      lastSync: "Today, 09:30 AM",
                      method: "API",
                      accounts: 2,
                    },
                    {
                      bank: "HSBC",
                      status: "Connected",
                      lastSync: "Today, 08:15 AM",
                      method: "SFTP",
                      accounts: 2,
                    },
                  ].map((connection, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex flex-col md:flex-row md:items-center justify-between"
                    >
                      <div className="flex items-center mb-3 md:mb-0">
                        <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] flex items-center justify-center mr-3">
                          <Link2 className="h-5 w-5 text-[#6d7b92]" />
                        </div>
                        <div>
                          <h3 className="font-medium">{connection.bank}</h3>
                          <p className="text-xs text-gray-500">
                            {connection.accounts} accounts · {connection.method}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 text-right">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{connection.status}</Badge>
                          <p className="text-xs text-gray-500 mt-1">Last sync: {connection.lastSync}</p>
                        </div>
                        <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                          <RefreshCw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-[#6d7b92]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Security</h2>
                    <p className="text-sm text-gray-500">Bank connection security</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Encryption",
                      status: "Enabled",
                      description: "256-bit AES encryption",
                      icon: <Lock className="h-4 w-4 text-green-600" />,
                    },
                    {
                      title: "Multi-factor Authentication",
                      status: "Enabled",
                      description: "All bank connections",
                      icon: <Shield className="h-4 w-4 text-green-600" />,
                    },
                    {
                      title: "API Tokens",
                      status: "Secure",
                      description: "Last rotated 5 days ago",
                      icon: <Key className="h-4 w-4 text-green-600" />,
                    },
                    {
                      title: "Access Control",
                      status: "Limited Access",
                      description: "3 authorized users",
                      icon: <Users className="h-4 w-4 text-green-600" />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {item.icon}
                          <span className="font-medium text-sm ml-2">{item.title}</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">{item.status}</Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-6">{item.description}</p>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 rounded-xl bg-[#6d7b92] text-white shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:bg-[#5d6b82]">
                  Security Settings
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
              <h2 className="text-lg font-bold mb-6">Quick Actions</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Make Payment",
                    description: "Transfer funds",
                    icon: <ArrowRightLeft className="h-5 w-5 text-[#6d7b92]" />,
                  },
                  {
                    title: "Add Bank Account",
                    description: "Connect new bank",
                    icon: <Plus className="h-5 w-5 text-[#6d7b92]" />,
                  },
                  {
                    title: "Reconciliation",
                    description: "Balance accounts",
                    icon: <CheckSquare className="h-5 w-5 text-[#6d7b92]" />,
                  },
                  {
                    title: "Bank Reports",
                    description: "Generate reports",
                    icon: <FileText className="h-5 w-5 text-[#6d7b92]" />,
                  },
                ].map((action, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-[#e0e5ec] p-4 shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] cursor-pointer transition-all duration-200"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mb-3">
                      {action.icon}
                    </div>
                    <h3 className="font-medium text-sm">{action.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

