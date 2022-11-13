import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { UserEntity } from '../users/user.model';
import { User } from '../users/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authenticationService: AuthenticationService) {
        super({
            usernameField: 'email'
        });
    }

    async validate(email: string, password: string): Promise<User> {
        return this.authenticationService.validateUser({ email, password});
    }
}