import React from 'react';
import {InputNumber} from 'antd';
import {isNumberObject} from 'util/types';
import {Field, Label} from './ui/fieldset';
import {InputGroup} from './ui/input';
import {CircleDollarSign} from 'lucide-react';
import NumericInput from './NumberInput';

interface FancyLevelSelectorProps {
    value: number;
    onChange: (value: number) => void;
}

const Budget = ({value, onChange}: FancyLevelSelectorProps) => {
    const handleChange = (inputValue: string) => {
        if (inputValue === '') {
            onChange(0)
            return
        }

        const numValue = Number(inputValue)
        if (!isNaN(numValue) && numValue >= 0) {
            onChange(numValue)
        }
    }

    return (
        <Field>
            <Label>Budget</Label>
            <InputGroup>
                <CircleDollarSign data-slot="icon" />
                
                <NumericInput
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    placeholder="Enter number of people"
                />
            </InputGroup>
        </Field>
    )
};

export default Budget;
