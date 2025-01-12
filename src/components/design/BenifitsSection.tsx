import { Clock, Lightbulb, TrendingUp } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Save Time',
      description: 'Automate responses and free up your time for strategic tasks.',
      icon: Clock,
    },
    {
      title: 'Increase Engagement',
      description: 'Keep your audience engaged with quick, relevant responses.',
      icon: TrendingUp,
    },
    {
      title: 'Turn Interactions into Opportunities',
      description: 'Convert casual interactions into meaningful business opportunities.',
      icon: Lightbulb,
    },
  ]

  return (
    <div className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose Slide?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Discover how Slide can transform your Instagram engagement and boost your business.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{benefit.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

