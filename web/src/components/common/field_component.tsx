import React from 'react';

interface FieldProps {
    prop: string;
    children: React.ReactNode | React.ReactNode[];
    small?: boolean
}

const FieldComponent: React.FC<FieldProps> = ({
    children, prop, small
}) => {
    return ( 
        <div className={`${small ? 'sm:w-1/2' : "flex flex-wrap"}`}>
            <div className={`w-full px-3`}>
                <div className="mb-5">
                    <label htmlFor={prop} className="mb-3 block text-base font-medium">{prop}</label>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FieldComponent;