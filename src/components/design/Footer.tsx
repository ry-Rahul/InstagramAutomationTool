import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-400 hover:text-gray-300">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/features" className="text-base text-gray-400 hover:text-gray-300">
              Features
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/blog" className="text-base text-gray-400 hover:text-gray-300">
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Terms
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Privacy
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 Slide, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

