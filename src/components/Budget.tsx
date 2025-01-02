import React from 'react';
import {InputNumber} from 'antd';
import {isNumberObject} from 'util/types';

interface FancyLevelSelectorProps {
    value: number;
    onChange: (value: number) => void;
}

const Budget = ({value, onChange}: FancyLevelSelectorProps) => {
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <InputNumber
                    prefix="$"
                    id="fancy-level"
                    min={1}
                    max={1000} // Adjust the max value based on your use case
                    value={value}
                    onChange={(val) => {

                        if (typeof(val) === 'number'){
                            onChange(val)
                        }

                    }} 
                    style={{width: '100%'}}
                />
            </div>
        </div>
    );
};

export default Budget;
