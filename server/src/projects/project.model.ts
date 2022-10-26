import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: 'projects' })
export class ProjectEntity {
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