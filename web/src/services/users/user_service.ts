import qs from 'qs';

import { IUser, IAuthUser, ILoginUser } from '../../interfaces/users';
import http from '../../utilities/http';

export const registerUser = (formData: IAuthUser) => {
    let data = qs.stringify(formData)
    http
        .post<IAuthUser>("/authentication/register", data);
}

export const loginUser = async (formData: ILoginUser) => {
    let data = qs.stringify(formData)
    const res = await http
        .post<ILoginUser>("/authentication/login", data);
        
    return res;
}