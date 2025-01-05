// // import React from 'react';
// // import {Select} from 'antd';

// // interface OccasionDropdownProps {
// //     value: string | undefined;
// //     onChange: (value: string) => void;
// // }

// // const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
// //     const options = [
// //         {label: 'Casual Hangout', value: 'casual'},
// //         {label: 'Date Night', value: 'date'},
// //         {label: 'First Date', value: 'first date'},
// //         {label: 'Family Outing', value: 'family'},
// //         {label: 'Business Meeting', value: 'business'},
// //         {label: 'Interview', value: 'Interview'},
// //         {label: 'Celebration', value: 'celebration'},
// //     ];

// //     return (
// //         <Select
// //             placeholder="Select Occasion"
// //             value={value}
// //             onChange={onChange}
// //             options={options}
// //             style={{width: '100%'}}
// //         />
// //     );
// // };

// // export default OccasionDropdown;
// import React from 'react';
// import {DropdownMenu} from './ui/dropdown-menu';
// import {DropdownButton, DropdownItem} from './ui/dropdown';
// // import {Dropdown, DropdownButton, DropdownMenu, DropdownItem} from './Dropdown'; // Adjust the import path as needed

// interface OccasionDropdownProps {
//     value: string | undefined;
//     onChange: (value: string) => void;
// }

// const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
//     const options = [
//         {label: 'Casual Hangout', value: 'casual'},
//         {label: 'Date Night', value: 'date'},
//         {label: 'First Date', value: 'first date'},
//         {label: 'Family Outing', value: 'family'},
//         {label: 'Business Meeting', value: 'business'},
//         {label: 'Interview', value: 'interview'},
//         {label: 'Celebration', value: 'celebration'},
//     ];

//     return (
//         <DropdownMenu>
//             <DropdownButton className="btn btn-primary">
//                 {value ? options.find((option) => option.value === value)?.label : 'Select Occasion'}
//             </DropdownButton>
//             <DropdownMenu >
//                 {options.map((option) => (
//                     <DropdownItem
//                         key={option.value}
//                         onClick={() => onChange(option.value)}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                         {option.label}
//                     </DropdownItem>
//                 ))}
//             </DropdownMenu>
//         </DropdownMenu>
//     );
// };

// export default OccasionDropdown;
// import {
//     Dropdown,
//     DropdownButton,
//     DropdownMenu,
//     DropdownItem
// } from './ui/dropdown'

// interface OccasionDropdownProps {
//     value: string;
//     onChange: (value: string) => void;
// }

// const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
//     const options = [
//         {label: 'Casual Hangout', value: 'casual'},
//         {label: 'Date Night', value: 'date'},
//         {label: 'First Date', value: 'first date'},
//         {label: 'Family Outing', value: 'family'},
//         {label: 'Business Meeting', value: 'business'},
//         {label: 'Interview', value: 'interview'},
//         {label: 'Celebration', value: 'celebration'},
//     ]

//     const selectedOption = options.find(option => option.value === value)

//     return (
//         <Dropdown>
//             <DropdownButton>
//                 {selectedOption?.label || 'Select Occasion'}
//             </DropdownButton>

//             <DropdownMenu>
//                 {options.map(option => (
//                     <DropdownItem
//                         key={option.value}
//                         onClick={() => onChange(option.value)}
//                     >
//                         {option.label}
//                     </DropdownItem>
//                 ))}
//             </DropdownMenu>
//         </Dropdown>
//     )
// }

// export default OccasionDropdown



import {
    Dropdown,
    DropdownButton,
    DropdownMenu,
    DropdownItem
} from './ui/dropdown'
import {Field, Label} from './ui/fieldset';
import {Listbox, ListboxLabel, ListboxOption} from './ui/listbox';

interface OccasionDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const OccasionDropdown = ({value, onChange}: OccasionDropdownProps) => {
    const options = [
        {label: 'Casual Hangout', value: 'casual'},
        {label: 'Date Night', value: 'date'},
        {label: 'First Date', value: 'first date'},
        {label: 'Family Outing', value: 'family'},
        {label: 'Business Meeting', value: 'business'},
        {label: 'Interview', value: 'interview'},
        {label: 'Celebration', value: 'celebration'},
    ]

    const selectedOption = options.find(option => option.value === value)

    return (
        <Field>
            <Label>Select Occasion</Label>
            <Listbox name="status" defaultValue="active">
                {options.map((option,index) => (
                    <ListboxOption key={index} value={option.value}>
                        <ListboxLabel
                            onClick={() => onChange(option.value)}
                        >{option.label}</ListboxLabel>
                    </ListboxOption>
                ))}
            </Listbox>
        </Field>
    )
}

export default OccasionDropdown