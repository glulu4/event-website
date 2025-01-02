import React from 'react';
import {Select} from 'antd';

interface OccasionDropdownProps {
    value: string | undefined;
    onChange: (value: string) => void;
}

const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
    const options = [
        {label: 'Casual Hangout', value: 'casual'},
        {label: 'Date Night', value: 'date'},
        {label: 'First Date', value: 'first date'},
        {label: 'Family Outing', value: 'family'},
        {label: 'Business Meeting', value: 'business'},
        {label: 'Interview', value: 'Interview'},
        {label: 'Celebration', value: 'celebration'},
    ];

    return (
        <Select
            placeholder="Select Occasion"
            value={value}
            onChange={onChange}
            options={options}
            style={{width: '100%'}}
        />
    );
};

export default OccasionDropdown;
