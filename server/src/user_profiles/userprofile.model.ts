import { Entity, PrimaryKey, Property, EntityRepositoryType } from "@mikro-orm/core";
import { Expose } from 'class-transformer';

import { UserProfileRepository } from "./userprofile.repository";

@Entity({ tableName: 'userprofiles' })
export class UserProfileEntity {
    [EntityRepositoryType]?: UserProfileRepository

    @PrimaryKey()
    id: number;

    @Property({ nullable: false })
    @Expose()
    name: string;

    @Property()
    @Expose()
    bio: string;

    @Property()
    @Expose()
    image: string;

    constructor(partial: Partial<UserProfileEntity>) {
        Object.assign(this, partial);
    }
}