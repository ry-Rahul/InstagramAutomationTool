import { MessageSquare } from 'lucide-react'

export default function FeatureSection() {
  return (
    <div className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Automated DM Responses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            AI-Driven Messaging for Instagram
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Slide uses advanced AI to automatically respond to Instagram DMs, keeping your audience engaged 24/7.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center">
            <MessageSquare className="h-12 w-12 text-purple-500" />
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg leading-6 font-medium text-white">Smart Conversations</h3>
            <p className="mt-2 text-base text-gray-400">
              Our AI understands context and sentiment, providing human-like responses to keep your followers engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

