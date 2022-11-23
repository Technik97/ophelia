import React, { useState } from 'react';
import { useFormik } from 'formik';

import AuthFormComponent from '../../components/common/auth_form_component';
import { ILoginUser } from '../../interfaces/users';
import { loginUser } from '../../services/users/user_service';
import Toast from '../../components/common/toast';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const navigate = useNavigate();
    const initValue: ILoginUser = {
        email: '',
        password: '',
    }

    const [showToast, setShowToast] = useState(false);

    const formik = useFormik({
        initialValues: initValue,
        onSubmit: async values => {
            const body = values
            try {
                const res = await loginUser(body)
                setShowToast(true);
                return res;
            } catch(ex) {
                console.log(ex);
            }
        }
    });

    const closeToast = () => {
        setShowToast(false);
        navigate('/');
    }

    return (
        <>
            <div>
            {showToast && <Toast onClose={closeToast} message='User logged in successfully' />}
            </div>
            <AuthFormComponent 
            type='login'
            email={formik.values.email}
            password={formik.values.password}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit} 
            />
        </>
    )   
}

export default LoginUser;