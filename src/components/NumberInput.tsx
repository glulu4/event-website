import {Input, InputGroup} from "./ui/input"
import {X} from "lucide-react"

interface NumericInputProps {
    value: string | number
    onChange: (value: string) => void
    placeholder?: string
    allowClear?: boolean
}

const NumericInput = ({
    value,
    onChange,
    placeholder = "Enter number",
    allowClear = true
}: NumericInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        if (newValue === '') {
            onChange('')
            return
        }
        onChange(newValue)
    }

    const handleClear = () => {
        onChange('')
    }

    return (
        <InputGroup>
            <Input
                type="number"
                value={value === '' ? '' : value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {allowClear && value && (
                <button
                    onClick={handleClear}
                    data-slot="icon"
                    className="cursor-pointer"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </InputGroup>
    )
}

export default NumericInput