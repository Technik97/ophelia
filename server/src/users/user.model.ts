import { Entity, PrimaryKey, Property, EntityRepositoryType } from "@mikro-orm/core";
import { Expose, Exclude } from 'class-transformer';

@Entity({ tableName: 'users' })
export class UserEntity {
    @PrimaryKey()
    id: number;

    @Property({ unique: true, nullable: false})
    @Expose()
    email: string;

    @Property({ nullable: false })
    @Expose()
    name: string;

    @Property({ nullable: false })
    @Exclude()
    password: string;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}