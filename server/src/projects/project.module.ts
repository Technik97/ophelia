import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

import { ProjectController } from "./project.controller";
import { ProjectEntity } from "./project.model";
import { ProjectService } from "./project.service";

@Module({
    imports: [
        MikroOrmModule.forFeature({
            entities: [ProjectEntity]
        })
    ],
    exports: [ProjectService],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}