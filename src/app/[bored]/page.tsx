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

    if (!city || cityName == "City Not Found") {
        notFound()
    }

    return {
        title: `Things to do in ${cityName} When You're Bored | Fun things to do in ${cityName} When You're Bored`,
        description: `Looking for things to do in ${cityName} when you're bored? Discover the best event ideas, fun activities, and local attractions. Explore top spots, hidden gems, and free things to do in ${cityName} today!`,
        openGraph: {
            title: `Fun Things to Do in ${cityName} | Things to do in ${cityName}`,
            description: `Find new things to do near you. Plan the best activities, events, and attractions in ${cityName}. Explore top-rated things to do and hidden gems in ${cityName}`,
            url: `https://www.thingstogodo.com/${city.slug}`,
            siteName: "Things to Go Do",
            images: [
                {
                    url: "https://www.thingstogodo.com/images/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Things to do in ${cityName}`,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `Fun Things to Do in ${cityName} | Things to do in ${cityName}`,
            description: "Explore top-rated activities, events, and attractions near you.",
            images: ["https://www.thingstogodo.com/images/og-image.jpg"],
        },
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
