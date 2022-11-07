import { EntityRepository } from '@mikro-orm/postgresql';
import { ProjectEntity } from './project.model';

export class ProjectRepository extends EntityRepository<ProjectEntity> {}