export type EventFormData = {
    location: string;
    occasion: string | undefined;
    budget: number;
    numberOfPeople: number;
    additionalDetails: string;
}

export type ActivityData = {
    title: string;
    activity: string;
    address: string;
    averageCost: string;
}
export const options = [
    'Casual Hangout',
    'Date Night',
    'Lunch',
    'Dinner',
    'First Date',
    'Family Outing',
    'Business Meeting',
    'Interview',
    'Celebration',
    'Weekend Getaway',
    'Outdoor Adventure',
    'Relaxation',
    'Shopping Spree',
    'Foodie Tour',
    'Cultural Experience',
    'Fitness Activity',
    'Romantic Escape',
    'Nightlife',
    'Solo Adventure',
    'Volunteer Opportunity',
];
