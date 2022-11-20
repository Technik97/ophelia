export interface IAuthUser {
    id?: number;
    email: string;
    name: string;
    password: string;
    confirmationPassword?: string;
}

export interface IUser {
    id: number;
    email: string;
    name: string;
}