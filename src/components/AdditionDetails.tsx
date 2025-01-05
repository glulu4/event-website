import React from 'react';
import {Input} from 'antd';
import {Field, Label} from './ui/fieldset';
import {Textarea} from './ui/textarea';

interface AdditionalDetailsTextboxProps {
    value: string;
    onChange: (value: string) => void;
}

const AdditionalDetailsTextbox = ({value, onChange}: AdditionalDetailsTextboxProps) => {
    return (
        // <Input.TextArea
        //     placeholder="Any additional details..."
        //     value={value}
        //     onChange={(e) => onChange(e.target.value)}
        //     rows={4}
        //     style={{width: '100%'}}
        // />
        <Field>
            <Label>Add Any Additional Details</Label>
            <Textarea
                placeholder="Any additional details..."
                value={value}
            onChange={(e) => onChange(e.target.value)}
             name="description" />
        </Field>


    );
};

export default AdditionalDetailsTextbox;
