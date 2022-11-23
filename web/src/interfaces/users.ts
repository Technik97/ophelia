export interface IAuthUser {
    id?: number;
    email: string;
    name: string;
    password: string;
    confirmationPassword?: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IUser {
    id: number;
    email: string;
    name: string;
}