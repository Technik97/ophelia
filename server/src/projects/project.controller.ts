import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";

import { CreateProjectDto } from "./project.dto";
import { ProjectService } from "./project.service";

@Controller('projects')
export class ProjectController {
    constructor(private projectService: ProjectService) {}

    @Post('/new')
    @HttpCode(204)
    async create(@Res() res, @Body() createProjectDto: CreateProjectDto){
        const project = await this.projectService.createProject(createProjectDto);

        return res.status(HttpStatus.OK).json({
            message: 'Project has been created successfully!',
            project: project,
        })
    }

    @Get('/')
    @HttpCode(200)
    async list(@Res() res) {
        const projects = await this.projectService.listProjects();

        return res.status(HttpStatus.OK).json(projects)
    }

    @Get(':id')
    async show(@Res() res, @Param() params) {
        const project = await this.projectService.showProject(params.id);

        return res.status(HttpStatus.OK).json(project);
    }
}