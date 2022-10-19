import { Body, Controller, Get, HttpCode, Param, Post, Req } from "@nestjs/common";
import { CreateProjectDto } from "./project.dto";

@Controller('projects')
export class ProjectController {
    @Post()
    @HttpCode(204)
    create(@Body() createProjectDto: CreateProjectDto): string {
        return 'This will create new project';
    }

    @Get()
    list(@Req() request: Request): string {
        return 'This returns all projects';
    }

    @Get(':id')
    show(@Param() params): string {
        return `This action returns #${params.id} project`
    }
}