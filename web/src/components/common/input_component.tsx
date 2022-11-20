import React, { ChangeEventHandler } from "react";

interface InputProps {
    type: string,
    prop: string,
    onChange: ChangeEventHandler<HTMLInputElement> | undefined,
    value: string | undefined,
}

const InputComponent: React.FC<InputProps> = ({
    type, prop, onChange, value
}) => {
    return(
        <input
            type={type}
            name={prop}
            id={prop}
            placeholder= {prop}//{splitAndCapitalize(prop)}
            onChange={onChange}
            value={value}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    )
}

export default InputComponent;