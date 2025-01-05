"use client";

import Link from "next/link";

const Page = ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) => {
  return (
    <div className=" min-h-screen ">
      {/* SEO Content Section */}
      <section className="bg-slate-200 rounded-lg my-12 py-32 text-left">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Discover the Best Things to Do Near You
          </h1>
          <p className="text-xl leading-relaxed pt-10">
            Looking for inspiration for your next adventure? Whether you need event ideas, family-friendly activities,
            or exciting things to do near you, we've got you covered. Explore unique experiences,
            plan memorable outings, and discover local gems tailored to your preferences.
          </p>
        </div>
        
      </section>

      {/* SEO Optimized Content Section */}
      <section className=" py-10">
        <div className="container mx-auto px-5">
          <h3 className="text-2xl font-bold mb-4 text-center">Top Activities and Event Ideas Near You</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Are you searching for <strong>things to do near me</strong>? From thrilling outdoor adventures to cozy indoor activities,
            our platform helps you discover the best events and places in your city. Whether you're into hiking, dining, arts, or family outings,
            there's always something for everyone.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Plan a picnic at your local park with family and friends.</li>
            <li>Explore top-rated restaurants and try out trending cuisines.</li>
            <li>Visit art galleries and attend cultural exhibitions.</li>
            <li>Discover hiking trails and outdoor adventures nearby.</li>
            <li>Join community events, workshops, and meetups in your area.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Whether you're planning a solo trip, a romantic date, or a group activity, our tools and resources help you create unforgettable memories.
            Don't miss out on the <strong>best activities near you</strong>—start exploring now!
          </p>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="container mx-auto px-5 py-10">
        {/* <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Generate Custom Event Ideas</h2>
          <p className="text-gray-700 leading-relaxed">
            Use our form to get personalized recommendations for activities and events in your area.
            Whether you're planning a night out, a weekend getaway, or a family adventure, we'll provide tailored ideas just for you.
          </p>
        </div> */}
        <div className="flex justify-center">
          <Link href="/form">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Page;
