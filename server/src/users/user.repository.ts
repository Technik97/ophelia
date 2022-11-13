import { EntityRepository } from "@mikro-orm/postgresql";
import { UserEntity } from "./user.model";

export class UserRepository extends EntityRepository<UserEntity> {};