import { HttpException, HttpStatus } from "@nestjs/common";
import bcrypt from 'bcrypt';

import { UserService } from "src/users/user.service";


export class AuthenticationService {
    constructor(
        private readonly userService: UserService
    ){}

    public async register(registrationData: any ) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);

        try {
            const createdUser = await this.userService.createUser({
                ...registrationData,
                password: hashedPassword
            });
            // createdUser.password = undefined;
            return createdUser;
        } catch (err) {
            if(err?.code === PostgresErrorCode.UniqueViolation){
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
            }
        }
        throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public async getAuthenticatedUser(email: string, hashedPassword: string) {
        try {
            const user = await this.userService.getByEmail(email);
             await this.verifyPassword(
                hashedPassword,
                user.password
            );
        //   user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextpassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextpassword, 
            hashedPassword
        );

        if(!isPasswordMatching) {
            throw new HttpException('Wrong Credentials provided', HttpStatus.BAD_REQUEST);
        }
    }
}