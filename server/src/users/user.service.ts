import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs";

import { UserEntity } from "./user.model";
import { UserRepository } from "./user.repository";
import { RegisterUserDto } from "./user.dto";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: UserRepository,
    ) {}

    async getByEmail(email: string) {
        const user = await this.userRepository.findOne({ email });
        console.log(user)

        if(user) {
            return user;
        }

        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

    async getById(id: number) {
        const user = await this.userRepository.find(id);

        if(user) {
            return user;
        }

        throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }

    async createUser(userData: RegisterUserDto) {
        const hashed =  await hash(userData.password, 10);
        userData.password = hashed;
        const newUser = await this.userRepository.create(userData);
        await this.userRepository.persistAndFlush(newUser);

        return newUser;
    }
}