import { Injectable } from "@nestjs/common";
import { Project } from "./project.model";

@Injectable()
export class ProjectService {
    private readonly projects: Project[] = [];

    createProject(project: Project){
        this.projects.push(project)
    }

    listProjects(): Project[] {
        return this.projects;
    }
} 