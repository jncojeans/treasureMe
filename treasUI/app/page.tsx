import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Clock,
  CreditCard,
  DollarSign,
  Globe,
  LineChart,
  Lock,
  PieChart,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"

export default function TreasuryWorkstation() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-700">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-[#6d7b92]" />
              </div>
              <span className="text-xl font-bold">TreasuryPro</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Modern Treasury Management for the Digital Age
                </h1>
                <p className="text-xl text-gray-600">
                  Streamline your cash flow, optimize liquidity, and make data-driven financial decisions with our
                  comprehensive treasury workstation.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="px-8 py-6 rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200">
                    Request Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-6 rounded-xl bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] border-0 transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Treasury dashboard preview"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e6ebf2]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Treasury Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides all the tools you need to manage your organization's financial operations
                efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Cash Flow Forecasting",
                  description: "Predict future cash positions with AI-powered forecasting models.",
                },
                {
                  icon: <Globe className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Global Banking",
                  description: "Connect with banks worldwide through secure API integrations.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Investment Management",
                  description: "Optimize your short-term investments and manage risk effectively.",
                },
                {
                  icon: <CreditCard className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Payment Processing",
                  description: "Streamline domestic and international payment workflows.",
                },
                {
                  icon: <LineChart className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Financial Analytics",
                  description: "Gain insights with comprehensive reporting and analytics.",
                },
                {
                  icon: <Shield className="h-8 w-8 text-[#6d7b92]" />,
                  title: "Risk Management",
                  description: "Identify and mitigate financial risks with advanced tools.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Intuitive Dashboard Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a complete view of your financial position with our customizable dashboard.
              </p>
            </div>

            <div className="rounded-2xl bg-[#e0e5ec] p-8 shadow-[15px_15px_30px_#bec3c9,-15px_-15px_30px_#ffffff]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] p-4">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      width={800}
                      height={400}
                      alt="Cash flow chart"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: <PieChart />, title: "Asset Allocation", value: "$24.5M" },
                    { icon: <Clock />, title: "Payment Schedule", value: "12 Pending" },
                    { icon: <Users />, title: "Bank Connections", value: "8 Active" },
                  ].map((widget, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-[#e0e5ec] p-4 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                          {widget.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{widget.title}</p>
                          <p className="text-xl font-bold">{widget.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e6ebf2]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Financial Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what treasury professionals are saying about our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "TreasuryPro has transformed how we manage our global cash positions. The forecasting tools alone have saved us countless hours.",
                  author: "Sarah Johnson",
                  title: "CFO, Global Enterprises Inc.",
                },
                {
                  quote:
                    "The integration capabilities with our ERP system made implementation seamless. We've seen a 40% reduction in manual processing time.",
                  author: "Michael Chen",
                  title: "Treasury Director, Tech Innovations",
                },
                {
                  quote:
                    "The risk management tools have given us unprecedented visibility into our FX exposures. A game-changer for our multinational operations.",
                  author: "Emma Rodriguez",
                  title: "VP of Finance, Worldwide Retail",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
                >
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#6d7b92]" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#e0e5ec] p-8 sm:p-12 shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff]">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Treasury Operations?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of organizations that have streamlined their treasury management with our platform.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] border-0 h-12"
                />
                <Button className="rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200 h-12">
                  Request Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                No credit card required. Start your 14-day free trial today.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: <Lock />, text: "Bank-grade security" },
                { icon: <Clock />, text: "Set up in minutes" },
                { icon: <Users />, text: "Dedicated support" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#d6dbe2] py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Solutions", "Pricing", "Updates"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "Documentation", "Community", "Support"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-10 w-10 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-[#6d7b92]" />
              </div>
              <span className="text-xl font-bold">TreasuryPro</span>
            </div>
            <p className="text-gray-600">© {new Date().getFullYear()} TreasuryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

