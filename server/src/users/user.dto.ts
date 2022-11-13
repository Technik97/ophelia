export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
}

export interface RegisterUserDto {
    email: string;
    name: string;
    password: string;
    confirmationPassword: string;
}

export interface LoginUserDto {
    email: string;
    password: string;
}