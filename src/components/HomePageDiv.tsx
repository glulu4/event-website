// import React from 'react'
// import ReactRotatingText from './ReactRotatingText'
// import {options} from '@/types/types'

// import Link from 'next/link';
// import Image from 'next/image';



// interface HomePageDivProps {
//     city?: string;
//     bored?:boolean;
// }

// export default function HomePageDiv({city, bored}: HomePageDivProps) {

//     let additionalText = ""
//     if (bored){
//         additionalText = " when you're bored"
//     }
//     if (!city){
//         city = "your area"
//     }
//   return (
//       <div className="flex flex-col md:flex-row h-screen flex-1">

//           <div className="flex-[0.4] bg-white p-10 md:p-20">

//               <main>
//                   <h1 className="text-6xl font-serif font-bold mb-6">
//                       Discover things to do in {city} {additionalText}
//                   </h1>

//                   <div className="mt-12 text-gray-600">
//                       <div>
//                           <h2 className="text-4xl"> Use AI plan for your&nbsp;
//                               <ReactRotatingText color="royalblue" items={options} />

//                           </h2>

//                       </div>
//                       <p className="mt-12 text-lg leading-relaxed">
//                           Looking for exciting activities, cozy spots, or hidden gems in your area?
//                           Our AI-powered suggestions make it easy to plan your perfect day. Whether you&apos;re searching
//                           for family-friendly attractions, top-rated restaurants, or fun outdoor adventures, we&apos;ve got
//                           you covered. Let AI help you explore the best things to do in your city or neighborhood, tailored
//                           to your interests and budget.
//                       </p>

//                   </div>
//                   <div className="py-20">
//                       <button
//                           className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"

//                       >
//                           <Link href='/form'>
//                               Generate Ideas
//                           </Link>


//                       </button>
//                   </div>

//               </main>
//           </div>


//           <div className="flex-[0.6] relative">
//               <img
//                   src="/images/golf.jpg"
//                   alt="Golfing"
//                   className="absolute inset-0 w-full h-full object-cover"
                  
//               />

//           </div>
//       </div>

//   )
// }
import React from "react";
import ReactRotatingText from "./ReactRotatingText";
import {options} from "@/types/types";

import Link from "next/link";
import Image from "next/image";

interface HomePageDivProps {
    city?: string;
    bored?: boolean;
}

export default function HomePageDiv({city, bored}: HomePageDivProps) {
    let additionalText = "";
    if (bored) {
        additionalText = " when you're bored";
    }
    if (!city) {
        city = "your area";
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen flex-1">
            {/* Left Content */}
            <div className="flex-[0.4] bg-white p-6 sm:p-10 md:p-20">
                <main>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6">
                        Discover things to do in {city} {additionalText}
                    </h1>

                    <div className="mt-6 md:mt-12 text-gray-600">
                        <h2 className="text-xl md:text-2xl lg:text-4xl">
                            Use AI to plan for your&nbsp;
                            <ReactRotatingText color="royalblue" items={options} />
                        </h2>

                        <p className="mt-4 md:mt-8 text-sm md:text-lg leading-relaxed">
                            Looking for exciting activities, cozy spots, or hidden gems in your area?
                            Our AI-powered suggestions make it easy to plan your perfect day. Whether you’re
                            searching for family-friendly attractions, top-rated restaurants, or fun outdoor
                            adventures, we’ve got you covered. Let AI help you explore the best things to do
                            in your city or neighborhood, tailored to your interests and budget.
                        </p>

                        <p className="mt-4 text-sm md:text-lg leading-relaxed">
                            Discover events, festivals, or day trips you might not have considered. Whether
                            you’re planning a romantic escape, a foodie tour, or an action-packed weekend,
                            our tools provide personalized recommendations to make the most of your time.
                        </p>

                        <ul className="mt-6 md:mt-8 list-disc list-inside">
                            <li>Family-friendly attractions</li>
                            <li>Top-rated restaurants</li>
                            <li>Outdoor adventures and parks</li>
                            <li>Art exhibits and cultural experiences</li>
                            <li>Shopping, relaxation, and nightlife</li>
                        </ul>
                    </div>

                    <div className="py-10 md:py-20">
                        <Link href="/form">
                            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 text-sm md:text-base">
                                Generate Ideas
                            </button>
                        </Link>
                    </div>
                </main>
            </div>

            {/* Right Image */}
            <div className="flex-[0.6] relative">
                <Image
                width={500}
                    height={500}
                    src="/images/golf.jpg"
                    alt="Golfing in the city"
                    className="absolute inset-0 w-full h-full object-cover"
                />

            </div>
        </div>
    );
}
