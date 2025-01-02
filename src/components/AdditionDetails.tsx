import React from 'react';
import {Input} from 'antd';

interface AdditionalDetailsTextboxProps {
    value: string;
    onChange: (value: string) => void;
}

const AdditionalDetailsTextbox = ({value, onChange}: AdditionalDetailsTextboxProps) => {
    return (
        <Input.TextArea
            placeholder="Any additional details..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            style={{width: '100%'}}
        />
    );
};

export default AdditionalDetailsTextbox;
