import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to boost your Instagram engagement?</span>
          <span className="block">Start using Slide today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Sign up for a demo or create an account to experience the power of AI-driven Instagram automation.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

