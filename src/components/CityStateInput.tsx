// import {Input} from "./ui/input";

// interface CityStateInputProps {
//     value: string;
//     onChange: (value: string) => void;
// }


// const CityStateInput = ({value, onChange}: CityStateInputProps) => {
//     return (
//         <Input
//             placeholder="Location"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             style={{width: '100%'}}
//         />
//     );
// };

// export default CityStateInput;
import {Field, Label} from "./ui/fieldset"
import {Input, InputGroup} from "./ui/input"
import {MapPin} from "lucide-react"

interface CityStateInputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    disabled?: boolean
}

const CityStateInput = ({
    value,
    onChange,
    placeholder = "Enter city, state",
    disabled = false
}: CityStateInputProps) => {
    return (
        <Field>
            <Label className="text-4xl">Location</Label>
            <InputGroup>

                <MapPin data-slot="icon" />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                />
            </InputGroup>
        </Field>

    )
}

export default CityStateInput