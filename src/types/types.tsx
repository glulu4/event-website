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