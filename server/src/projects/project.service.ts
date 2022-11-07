import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs"

import { ProjectEntity } from "./project.model";
import { CreateProjectDto } from "./project.dto";
import { ProjectRepository } from "./project.repository";

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity)
        private readonly projectRepository: ProjectRepository,
    ) {}

    async createProject(dto: CreateProjectDto): Promise<ProjectEntity> {
        const { name, description } = dto;
        const project = new ProjectEntity(name, description);

        await this.projectRepository.persistAndFlush(project);
        return project;
    }

    async listProjects(): Promise<ProjectEntity[]> {
        return this.projectRepository.findAll();
    }

    async showProject(id: number): Promise<ProjectEntity> {
        return this.projectRepository.findOne(id);
    }
}