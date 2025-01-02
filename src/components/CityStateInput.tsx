import {Input} from 'antd';

interface CityStateInputProps {
    value: string;
    onChange: (value: string) => void;
}


const CityStateInput = ({value, onChange}: CityStateInputProps) => {
    return (
        <Input
            placeholder="Location"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{width: '100%'}}
        />
    );
};

export default CityStateInput;
