import {Metadata} from "next";
import cities from "../../../public/cities.json";
import {options} from "@/types/types";

import ReactRotatingText from "@/components/ReactRotatingText";
import {Button} from "@/components/ui/button";
import HomePageDiv from "@/components/HomePageDiv";
interface CityPageProps {
    params: {city: string};
}

// Shared SEO text
const seoText = "Discover the best event ideas tailored for your city.";

// Generate metadata dynamically
export function generateMetadata({params}: CityPageProps): Metadata {
    const city = cities.find((c) => c.slug === params.city);
    const cityName = city ? city.name : "City Not Found";

    return {
        title: city ? `Event Ideas in ${cityName} | Your Website` : "City Not Found | Your Website",
        description: seoText,
    };
}

// Generate static paths
export async function generateStaticParams() {
    return cities.map((city) => ({city: city.slug}));
}

export default function CityPage({params}: CityPageProps) {
    const city = cities.find((c) => c.slug === params.city);


    if (!city) {
        return <div className="text-center mt-10">City not found</div>;
    }

    return (
        <HomePageDiv city={city.name}/>

    );
}
