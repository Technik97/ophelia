import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { compare, hash } from 'bcrypt';

import { UserEntity } from "src/users/user.model";
import { LoginUserDto, RegisterUserDto, User } from "../users/user.dto";
 import { UserService } from "../users/user.service";

@Injectable()
export class AuthenticationService {
    constructor(private userService: UserService) {}

    async validateUser(user: LoginUserDto): Promise<User> {
        const foundUser = await this.userService.getByEmail(user.email);
        // console.log("*",foundUser.password);
        // console.log("@",user.password);

        const res = await compare(user.password, foundUser.password)
        console.log(res)
        if(!user || !res) {
            throw new UnauthorizedException('Incorrect username or password');
        }

        const { password: _password, ...retUser } = foundUser;
        return retUser;
    }

    async registerUser(user: RegisterUserDto): Promise<UserEntity> {
        // const existingUser = await this.userService.getByEmail(user.email);
        // console.log(existingUser)
        // if(existingUser) {
        //     throw new BadRequestException('User email must be unique');
        // }

        if (user.password !== user.confirmationPassword) {
            throw new BadRequestException('Password and Confirmation Password must match');
        }

        const { confirmationPassword: _,...newUser } = user;

        const registeredUser = await this.userService.createUser(user);

        return registeredUser;
    }
}