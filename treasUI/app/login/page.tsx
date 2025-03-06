import Link from "next/link"
import Image from "next/image"
import { DollarSign, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-700 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-[#e0e5ec] p-8 shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff]">
            <div className="flex justify-center mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-[#6d7b92]" />
                </div>
                <span className="text-2xl font-bold">TreasuryPro</span>
              </Link>
            </div>

            <h1 className="text-2xl font-bold text-center mb-6">Sign in to your account</h1>

            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-[#6d7b92] hover:text-[#5d6b82]">
                    Forgot password?
                  </Link>
                </div>
                <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-12 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  className="rounded-md border-0 bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] data-[state=checked]:bg-[#6d7b92] data-[state=checked]:text-white"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <Link href="/dashboard">
                <Button className="w-full h-12 rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200">
                  Sign in
                </Button>
              </Link>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="font-medium text-[#6d7b92] hover:text-[#5d6b82]">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#e0e5ec] text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center h-12 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Google"
                    className="mr-2"
                  />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center h-12 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Microsoft"
                    className="mr-2"
                  />
                  <span className="text-sm font-medium">Microsoft</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TreasuryPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

