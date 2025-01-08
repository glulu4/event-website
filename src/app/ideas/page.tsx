
"use client"
import React, {Suspense, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Banknote, MapPin, Loader2} from 'lucide-react';
import {ActivityData, EventFormData} from '@/types/types';
import ActivityCard from '@/components/ActivityCard';
import Link from 'next/link';
import {generateIdeasViaProxy} from '../api/generateIdeasProxy';


const Page = () => {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [activities, setActivities] = useState<ActivityData[]>([]);
    

    const router = useRouter();
    const [originalForm, setOriginalForm] = useState<EventFormData>({} as EventFormData)

    useEffect(() => {
        try {
            const ideasParam = searchParams.get('data');
            const formDataParam = searchParams.get('formData');

            if (ideasParam) {
                const parsedIdeas = JSON.parse(decodeURIComponent(ideasParam));
                setActivities(parsedIdeas);
            }

            if (formDataParam) {
                const parsedFormData = JSON.parse(decodeURIComponent(formDataParam));
                // console.log('Form Data:', parsedFormData);
                setOriginalForm(parsedFormData)
            }
        } catch (error) {
            console.error('Error parsing query parameters:', error);
        }
    }, [searchParams]);




    const handleRegenerateIdeas = async () => {
        try {
            setIsLoading(true);
            const ideas: ActivityData[] = await generateIdeasViaProxy(originalForm);
            
            const newActivityList = [...activities, ...ideas]
            setActivities(newActivityList);

            // Update URL with new data while preserving form data
            const jsonIdeas = encodeURIComponent(JSON.stringify(ideas));
            const jsonFormData = encodeURIComponent(JSON.stringify(originalForm));
            router.push(`/ideas?data=${jsonIdeas}&formData=${jsonFormData}`);

        } catch (error) {
            console.error('Error regenerating ideas:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Suspense fallback={<Loader2 className="h-6 w-6 animate-spin" />}>
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Your Activities
                </h1>
                <div className='flex flex-row gap-10'>
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                        
                    >
                        <Link href='/form'>
                        Edit Form
                        </Link>


                    </button>
                    <button
                        onClick={handleRegenerateIdeas}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                    >
                        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                        {isLoading ? 'Generating...' : 'Generate More Ideas'}
                    </button>

                    
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((item, index) => (
                    <ActivityCard activity={item} key={index}/>

                ))}
            </div>
        </div>
        </Suspense>
    );
};

export default Page;