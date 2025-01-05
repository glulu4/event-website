"use client"
import React, {useState} from 'react';
import {Button, Form, message} from 'antd';
import {useRouter} from 'next/navigation';
import CityStateInput from './CityStateInput';
import OccasionDropdown from './OccasionDrop';
import Budget from './Budget';
import NumberOfPeopleInput from './NumPeople';
import AdditionalDetailsTextbox from './AdditionDetails';
import {ActivityData, EventFormData} from '@/types/types';
import {generateIdeas} from '@/app/api/generateIdea';

const ActivityForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState<EventFormData>({
        location: '',
        occasion: undefined,
        budget: 1,
        numberOfPeople: 1,
        additionalDetails: '',
    });

    const handleFormSubmit = async () => {
        setIsLoading(true);

        const ideas: ActivityData[] = await generateIdeas(formData);
        
        const jsonIdeas = encodeURIComponent(JSON.stringify(ideas));
        const jsonFormData = encodeURIComponent(JSON.stringify(formData));
    
        setIsLoading(false);
        console.log("ideas: ", ideas);
        
        // return;

        router.push(`/ideas?data=${jsonIdeas}&formData=${jsonFormData}`);

    };

    return (
        <Form className="w-webkit-fill" layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item className="text-white text-xl">
                <CityStateInput
                    value={formData.location}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, location: value}))
                    }
                />
            </Form.Item>

            <Form.Item>
                <OccasionDropdown
                    value={formData.occasion || ""}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, occasion: value}))
                    }
                />
            </Form.Item>

            <Form.Item>
                <Budget
                    value={formData.budget}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, budget: value}))
                    }
                />
            </Form.Item>

            <Form.Item>
                <NumberOfPeopleInput
                    value={formData.numberOfPeople}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, numberOfPeople: value}))
                    }
                />
            </Form.Item>

            <Form.Item>
                <AdditionalDetailsTextbox
                    value={formData.additionalDetails}
                    onChange={(value) =>
                        setFormData((prev) => ({...prev, additionalDetails: value}))
                    }
                />
            </Form.Item>

            <Form.Item className="flex justify-center items-center">
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    disabled={isLoading}
                    className="px-8 py-4 text-base"
                >
                    {isLoading ? 'Generating Ideas...' : 'Generate Ideas'}
                </Button>
            </Form.Item>

        </Form>
    );
};

export default ActivityForm;