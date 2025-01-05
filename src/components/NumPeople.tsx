import React from 'react'
import {Field, Label} from './ui/fieldset'
import {InputGroup} from './ui/input'
import NumericInput from './NumberInput'
import {User} from 'lucide-react'

interface NumberOfPeopleInputProps {
    value: number
    onChange: (value: number) => void
}

const NumberOfPeopleInput = ({value, onChange}: NumberOfPeopleInputProps) => {
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
            <Label>Number of People</Label>
            <InputGroup>
                <User data-slot="icon" />

                <NumericInput
                    value={value === 0 ? '' : value.toString()}
                    onChange={handleChange}
                    placeholder="Enter number of people"
                />
            </InputGroup>
        </Field>
    )
}

export default NumberOfPeopleInput