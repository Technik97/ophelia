import React, { useState } from "react";

import ProjectTable from "../../components/project/table";
import { IProject } from "../../interfaces/projects";
import { getProjects } from "../../services/project/project_service";

const Projects = () => {
    let defaultProjects: IProject[] = [];
    const [projects, setProjects]: [IProject[], (projects: IProject[]) => void] = useState(defaultProjects);

    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

    const [error, setError]: [string, (error: string) => void] = React.useState("");

    React.useEffect(() => {
        getProjects()
            .then(response => {
                setProjects(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch(ex => {
                const error = ex.response.status === 404 ? "Resource Not found" : "An unexpected error has occured";
                setError(error);
                setLoading(false);
            });
    }, []);

    return(
        loading ? 
        <p>Loading...</p> : 
        <div>
            {projects.map((project) => (
                <ProjectTable project={project} />
            ))}
        </div>
    )
}

export default Projects;