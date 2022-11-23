import React from 'react';

import FieldComponent from './field_component';
import InputComponent from './input_component';

interface FormProps {
    type: 'login' | 'register';
    onChange: any;
    onSubmit: any;
    name?: string;
    email: string;
    password: string;
    confirmationPassword?: string;
}

const AuthFormComponent: React.FC<FormProps> = ({
    type, onSubmit, onChange, name, email, password, confirmationPassword
}) => {
    return(
        <div className='flex items-center justify-center p-12'>
            <div className='mx-auto w-full ax-w-[550px]'>
                <form onSubmit={onSubmit}>
                    {type === 'register' ?
                        <FieldComponent prop='name'>
                            <InputComponent type='text' prop="name" onChange={onChange} value={name} />
                        </FieldComponent> :
                        ''
                    }
                    <FieldComponent prop='email'>
                        <InputComponent type='email' prop="email" onChange={onChange} value={email} />
                    </FieldComponent>
                    <FieldComponent prop='password'>
                        <InputComponent type='password' prop="password" onChange={onChange} value={password} />
                    </FieldComponent>
                    {type === 'register' ? 
                        <FieldComponent prop='confirmPassword'>
                            <InputComponent type='password' prop="confirmationPassword" onChange={onChange} value={confirmationPassword} />
                        </FieldComponent> :
                        ''
                    }
                    {type === 'register' ? 
                        <div className="mx-3 my-3">
                            <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Register</button>
                        </div> :
                        <div className="mx-3 my-3">
                            <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Login</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default AuthFormComponent;