import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-500">Necta Ai</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                About Us
              </Link>
              <Link href="/features" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium  flex items-center justify-center">
                Features
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium  flex items-center justify-center">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" className="text-gray-300 hover:text-white mr-2">Log in</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

