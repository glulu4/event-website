import React from 'react'
import ReactRotatingText from './ReactRotatingText'
import {options} from '@/types/types'
import {Button} from './ui/button'



interface HomePageDivProps {
    city?: string;
}

export default function HomePageDiv({city}: HomePageDivProps) {

    if (!city){
        city = "your area"
    }
  return (
      <div className="flex flex-col md:flex-row h-screen flex-1">

          <div className="flex-[0.4] bg-white p-10 md:p-20">

              <main>
                  <h1 className="text-6xl font-serif font-bold mb-6">
                      Discover things to do in {city}
                  </h1>

                  <div className="mt-12 text-gray-600">
                      <div>
                          <h2 className="text-4xl"> Use AI for your&nbsp;
                              <ReactRotatingText color="royalblue" items={options} />

                          </h2>

                      </div>
                      <p className="mt-12 text-lg leading-relaxed">
                          Looking for exciting activities, cozy spots, or hidden gems in your area?
                          Our AI-powered suggestions make it easy to plan your perfect day. Whether you&apos;re searching
                          for family-friendly attractions, top-rated restaurants, or fun outdoor adventures, we&apos;ve got
                          you covered. Let AI help you explore the best things to do in your city or neighborhood, tailored
                          to your interests and budget.
                      </p>

                      <p className="mt-12 text-lg leading-relaxed">
                          From scenic parks and local eateries to nightlife hotspots and cultural experiences, discover
                          personalized recommendations for every occasion. Perfect for date nights, casual hangouts,
                          or special celebrations, our smart suggestions ensure you&apos;ll never run out of ideas.
                      </p>
                  </div>
                  <div className="pt-20">
                      <Button type="button" color="blue" href="/form">
                          Generate Ideas
                      </Button>
                  </div>

              </main>
          </div>


          <div className="flex-[0.6] relative">
              <img
                  src="/images/golf.jpg"
                  alt="Golfing"
                  className="absolute inset-0 w-full h-full object-cover"
              />

          </div>
      </div>

  )
}