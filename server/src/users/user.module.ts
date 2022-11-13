import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

import { UserEntity } from "./user.model";
import { UserService } from "./user.service";

@Module({
    imports: [
        MikroOrmModule.forFeature({
            entities: [UserEntity]
        })
    ],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}