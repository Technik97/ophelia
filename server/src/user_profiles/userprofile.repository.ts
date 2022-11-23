import { EntityRepository } from "@mikro-orm/postgresql";
import { UserProfileEntity } from "./userprofile.model";

export class UserProfileRepository extends EntityRepository<UserProfileEntity> {};