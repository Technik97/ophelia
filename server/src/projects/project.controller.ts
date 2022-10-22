import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";

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
    list(@Req() res) {
        const projects = this.projectService.listProjects();

        return res.status(HttpStatus.OK).json(projects)
    }

    @Get(':id')
    show(@Param() params): string {
        return `This action returns #${params.id} project`
    }
}