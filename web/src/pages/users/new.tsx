import React from 'react';
import { useFormik } from 'formik';
import qs from 'qs';

import AuthFormComponent from '../../components/common/auth_form_component';
import { IAuthUser } from '../../interfaces/users';
import { registerUser } from '../../services/users/user_service';

const RegisterUser = () => {
    const initValue: IAuthUser = {
        name: '',
        email: '',
        password: '',
        confirmationPassword: ''
    }

    const formik = useFormik({
        initialValues: initValue,
        onSubmit: values => {
            const body = values
            console.log(body)
            registerUser(body)
            console.log('after');
        }
    })

    return(
        <AuthFormComponent 
            type='register'
            name={formik.values.name}
            email={formik.values.email}
            password={formik.values.password}
            confirmationPassword={formik.values.confirmationPassword}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit} 
        />
    )
}

export default RegisterUser;