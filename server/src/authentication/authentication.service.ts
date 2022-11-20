import { BadRequestException, Injectable, UnauthorizedException, HttpException, HttpStatus} from "@nestjs/common";
import { compare} from 'bcrypt';

import { UserEntity } from "src/users/user.model";
import { LoginUserDto, RegisterUserDto, User } from "../users/user.dto";
import { UserService } from "../users/user.service";
import { PostgresErrorCode } from '../storage/postgresErrorCodes.enum';

@Injectable()
export class AuthenticationService {
    constructor(private userService: UserService) {}

    async validateUser(user: LoginUserDto): Promise<User> {
        const foundUser = await this.userService.getByEmail(user.email);
        const res = await compare(user.password, foundUser.password);
        
        if(!user || !res) {
            throw new UnauthorizedException('Incorrect username or password');
        }

        const { password: _password, ...retUser } = foundUser;
        return retUser;
    }

    async registerUser(user: RegisterUserDto): Promise<UserEntity> {
        if (user.password !== user.confirmationPassword) {
            throw new BadRequestException('Password and Confirmation Password must match');
        }

        const { confirmationPassword: _,...newUser } = user;

        try {
            const registeredUser = await this.userService.createUser(user);
            return registeredUser;
        } catch(error) {
            if(error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST)
            }
        }
    }
}