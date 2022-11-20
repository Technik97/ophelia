import qs from 'qs';

import { IUser, IAuthUser } from '../../interfaces/users';
import http from '../../utilities/http';

export const registerUser = (formData: IAuthUser) => {
    let data = qs.stringify(formData)
    http
        .post<IAuthUser>("/authentication/register", data)
}