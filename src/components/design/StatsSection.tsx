export default function StatsSection() {
    const stats = [
      { id: 1, name: 'Automated responses sent', value: '10M+' },
      { id: 2, name: 'Average response time', value: '< 1 min' },
      { id: 3, name: 'Increase in engagement', value: '300%' },
      { id: 4, name: 'Time saved for businesses', value: '1000+ hours' },
    ]
  
    return (
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-3 text-xl text-gray-400 sm:mt-4">
              Our numbers speak for themselves
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
                  {stat.name}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-purple-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
  