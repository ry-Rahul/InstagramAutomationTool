export default function TestimonialSection() {
    const testimonials = [
      {
        content: "Slide has revolutionized how we handle our Instagram DMs. It's like having a 24/7 customer service team.",
        author: "Jane Doe",
        role: "Social Media Manager",
        company: "Tech Startup",
      },
      {
        content: "The AI-driven responses are incredibly natural. Our engagement rates have skyrocketed since we started using Slide.",
        author: "John Smith",
        role: "Influencer", 
        company: "Fashion & Lifestyle",
      },
      {
        content: "Slide has saved us countless hours and helped us convert more leads from Instagram. It's a game-changer.",
        author: "Emily Johnson",
        role: "Marketing Director",
        company: "E-commerce Brand",
      },
    ]
  
    return (
      <div className="bg-gray-900 py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                Hear from our satisfied clients
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                Discover how Slide has transformed Instagram engagement for businesses and influencers alike.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-gray-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-purple-400">
                        Testimonial
                      </p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-white">{testimonial.content}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{testimonial.author}</span>
                        <img className="h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="asd" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          {testimonial.author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-400">
                          <p>{testimonial.role}</p>
                          <span aria-hidden="true">&middot;</span>
                          <p>{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  