"use client"
import React, {useState} from 'react';
import {Button, Form} from 'antd';
import CityStateInput from './CityStateInput';
import OccasionDropdown from './OccasionDrop';
import FancyLevelSelector from './Budget';
import NumberOfPeopleInput from './NumPeople';
import AdditionalDetailsTextbox from './AdditionDetails';
import {EventFormData} from '@/types/types';
import Budget from './Budget';

interface ActivityFormProps {
    onSubmit: (formData: EventFormData) => Promise<void>
}
const ActivityForm = ({onSubmit}: ActivityFormProps) => {
    const [formData, setFormData] = useState<EventFormData>({
        location: '',
        occasion: undefined,
        budget: 1,
        numberOfPeople: 1,
        additionalDetails: '',
    });

    return (
        <Form layout="vertical" onFinish={() => onSubmit(formData)}>
            <Form.Item label="City and State">
                <CityStateInput
                    value={formData.location}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, location: value}))
                    }
                />
            </Form.Item>
            <Form.Item label="Occasion">
                <OccasionDropdown
                    value={formData.occasion}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, occasion: value}))
                    }
                />
            </Form.Item>
            <Form.Item label="What's your budget?">
                <Budget
                    value={formData.budget}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, budget: value}))
                    }
                />
            </Form.Item>
            <Form.Item label="Number of People">
                <NumberOfPeopleInput
                    value={formData.numberOfPeople}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, numberOfPeople: value ?? 1}))
                    }
                />
            </Form.Item>
            <Form.Item label="Additional Details">
                <AdditionalDetailsTextbox
                    value={formData.additionalDetails}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, additionalDetails: value}))
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Generate Ideas
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ActivityForm;
