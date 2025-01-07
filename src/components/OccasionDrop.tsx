import {Field, Label} from './ui/fieldset';
import {Listbox, ListboxLabel, ListboxOption} from './ui/listbox';

interface OccasionDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
    const options = [
        {label: 'Casual Hangout', value: 'casual'},
        {label: 'Date Night', value: 'date'},
        {label: 'Lunch', value: 'lunch'},
        {label: 'Dinner', value: 'dinner'},
        {label: 'First Date', value: 'first date'},
        {label: 'Family Outing', value: 'family'},
        {label: 'Business Meeting', value: 'business'},
        {label: 'Interview', value: 'interview'},
        {label: 'Celebration', value: 'celebration'},
        {label: 'Weekend Getaway', value: 'weekend'},
        {label: 'Outdoor Adventure', value: 'adventure'},
        {label: 'Relaxation', value: 'relaxation'},
        {label: 'Shopping Spree', value: 'shopping'},
        {label: 'Foodie Tour', value: 'foodie'},
        {label: 'Cultural Experience', value: 'cultural'},
        {label: 'Fitness Activity', value: 'fitness'},
        {label: 'Romantic Escape', value: 'romantic'},
        {label: 'Nightlife', value: 'nightlife'},
        {label: 'Solo Adventure', value: 'solo'},
        {label: 'Volunteer Opportunity', value: 'volunteer'},
    ];



    return (
        <Field>
            <Label>Select Occasion</Label>
            <Listbox name="status" defaultValue="active">
                {options.map((option,index) => (
                    <ListboxOption key={index} value={option.value}>
                        <ListboxLabel
                            onClick={() => onChange(option.value)}
                        >{option.label}</ListboxLabel>
                    </ListboxOption>
                ))}
            </Listbox>
        </Field>
    )
}

export default OccasionDropdown