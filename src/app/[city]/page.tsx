// import {Metadata} from "next";
// import cities from "../../../public/cities.json";
// import HomePageDiv from "@/components/HomePageDiv";


// interface CityPageProps {
//     params: Promise<{city: string}>; // Async params
// }


// export async function generateMetadata({params}: {params: Promise<{city: string}>}): Promise<Metadata> {
//     const resolvedParams = await params; // Await params
//     const city = cities.find((c) => c.slug === resolvedParams.city);
//     const cityName = city ? city.name : "City Not Found";

//     return {
//         title: city ? `Event Ideas in ${cityName} | Your Website` : "City Not Found | Your Website",
//         description: "Discover the best event ideas tailored for your city.",
//     };
// }
// // Generate static paths
// export async function generateStaticParams() {
//     return cities.map((city) => ({city: city.slug}));
// }

// export default function CityPage({params}: CityPageProps) {
//     const city = cities.find((c) => c.slug === params.city);


//     if (!city) {
//         return <div className="text-center mt-10">City not found</div>;
//     }

//     return (
//         <HomePageDiv city={city.name}/>

//     );
// }
import {Metadata} from "next";
import cities from "../../../public/cities.json";
import HomePageDiv from "@/components/HomePageDiv";

type Params = Promise<{city: string}>;

interface CityPageProps {
    params: Params; // Async params following the new syntax
}

// Shared SEO text
const seoText = "Discover the best event ideas tailored for your city.";

// Generate metadata dynamically
export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const resolvedParams = await params; // Await the params
    const city = cities.find((c) => c.slug === resolvedParams.city);
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

// Main page component
export default async function CityPage({params}: CityPageProps) {
    const resolvedParams = await params; // Await the async params
    const city = cities.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        return <div className="text-center mt-10">City not found</div>;
    }

    return <HomePageDiv city={city.name} />;
}
