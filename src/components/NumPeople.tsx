import React from 'react';
import {InputNumber} from 'antd';

interface NumberOfPeopleInputProps {
    value: number;
    onChange: (value: number | null) => void;
}

const NumberOfPeopleInput = ({value, onChange}: NumberOfPeopleInputProps) => {
    return (
        <InputNumber
            min={1}
            placeholder="Number of People"
            value={value}
            onChange={onChange}
            style={{width: '100%'}}
        />
    );
};

export default NumberOfPeopleInput;
