import { IProject } from "../../interfaces/projects";
import http from "../../utilities/http";

export const getProjects = () => {
    return http
        .get<IProject[]>('/projects');
}