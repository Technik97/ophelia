import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';

import { AuthenticationController } from "./authentication.controller";
import { LocalStrategy } from "./local.strategy";
import { UserModule } from "../users/user.module";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationSerializer } from "./authentication.serializer";

@Module({
    imports: [
        UserModule, 
        PassportModule.register({
            session: true,
        })
    ],
    providers: [AuthenticationService, LocalStrategy, AuthenticationSerializer],
    controllers: [AuthenticationController]
})
export class AuthenticationModule {}