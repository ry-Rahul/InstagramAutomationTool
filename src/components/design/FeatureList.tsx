import { MessageCircle, MessageSquare, Zap } from 'lucide-react'

export default function FeaturesList() {
  const features = [
    {
      name: 'Automated DM Responses',
      description: 'AI-powered responses to keep your audience engaged 24/7.',
      icon: MessageSquare,
    },
    {
      name: 'Comment Automation',
      description: 'Automatically respond to comments on your posts with relevant replies.',
      icon: MessageCircle,
    },
    {
      name: 'Seamless Interactions',
      description: 'Integrate automated responses seamlessly with your personal touch.',
      icon: Zap,
    },
  ]

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Top 3 Features of Slide
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

