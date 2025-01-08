// app/page.tsx

import {Metadata} from "next";
import HomePageDiv from "@/components/HomePageDiv";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Discover Fun Things to Do | Things to Go Do",
  description: "Find the best activities, events, and attractions near you. Discover top-rated things to do and hidden gems in your city with Things to Go Do.",
  openGraph: {
    title: "Discover Fun Things to Do | Things to Go Do",
    description: "Plan your next adventure with the best activities, events, and attractions near you. Explore top-rated things to do and hidden gems.",
    url: "https://www.thingstogodo.com",
    siteName: "Things to Go Do",
    images: [
      {
        url: "https://www.thingstogodo.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Discover fun things to do in your city",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Fun Things to Do | Things to Go Do",
    description: "Explore top-rated activities, events, and attractions near you.",
    images: ["https://www.thingstogodo.com/images/og-image.jpg"],
  },
};

const Page = () => {
  return (
    <div>
      <HomePageDiv />
    </div>
  );
};

export default Page;
