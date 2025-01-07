import React from 'react';
import {MapPin, Banknote} from 'lucide-react';

interface ActivityData {
    title: string;
    activity: string;
    address: string;
    averageCost: string;
}

const ActivityCard: React.FC<{activity: ActivityData}> = ({activity}) => {
    return (
        <div className="bg-slate-100 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold my-2 text-gray-800 mb-2 dark:text-white">
                    {activity.title}
                </h2>
                <p className="text-gray-600 mb-4 dark:text-white text-lg my-2">
                    {activity.activity}
                </p>
                <div className="space-y-2 text-sm">
                    <p className="flex items-center text-gray-500 dark:text-white gap-5">
                        <MapPin />
                        {activity.address}
                    </p>
                    <p className="flex text-gray-500 dark:text-white gap-5 items-center">
                        <Banknote />
                        {activity.averageCost}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
