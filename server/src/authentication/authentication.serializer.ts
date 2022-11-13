import { Injectable } from "@nestjs/common";
import { PassportSerializer } from '@nestjs/passport';


import { User } from '../users/user.dto';
import { UserService } from "src/users/user.service";
import { UserEntity } from "src/users/user.model";
import { Loaded } from "@mikro-orm/core/typings";

@Injectable()
export class AuthenticationSerializer extends PassportSerializer {
    constructor(private readonly userService:  UserService) {
        super();
    }

     serializeUser(user: User, done: (err: Error, user: { id: number }) => void) {
         done(null, { id: user.id });
       }
    
       async deserializeUser(payload: { id: number; }, done: (err: Error, user: Loaded<UserEntity, never>[]) => void) {
         const user = await this.userService.getById(payload.id);
         done(null, user);
       }
}