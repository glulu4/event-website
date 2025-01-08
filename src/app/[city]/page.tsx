import {Metadata} from "next";
import cities from "../../../public/cities.json";
import HomePageDiv from "@/components/HomePageDiv";
import {notFound, redirect} from "next/navigation";

type Params = Promise<{city: string}>;

interface CityPageProps {
    params: Params; // Async params following the new syntax
}

// Generate metadata dynamically
export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const resolvedParams = await params; // Await the params
    const city = cities.find((c) => c.slug === resolvedParams.city);
    const cityName = city ? city.name : "City Not Found";

    if (cityName == "City Not Found"){
        notFound()
    }

    return {
        title: `Things to do in ${cityName} | Fun things to do in ${cityName}`,
        description: `Looking for things to do in ${cityName}? Discover the best event ideas, fun activities, and local attractions. Explore top spots, hidden gems, and free things to do in ${cityName} today!`,
    };
}

// Generate static paths
export async function generateStaticParams() {
    return cities.map((city) => ({city: city.slug}));
}

// Main page component
export default async function CityPage({params}: CityPageProps) {
    const resolvedParams = await params; // Await the async params
    const city = cities.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        redirect("/")
    }

    return <HomePageDiv city={city.name} />;
}
