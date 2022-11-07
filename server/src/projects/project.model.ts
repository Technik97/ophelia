import { Entity, PrimaryKey, Property, EntityRepositoryType } from "@mikro-orm/core";

import { ProjectRepository } from "./project.repository";

@Entity({ tableName: 'projects' })
export class ProjectEntity {
    [EntityRepositoryType]?: ProjectRepository

    @PrimaryKey()
    id: number;

    @Property()
    name: string;

    @Property({ nullable: true })
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}