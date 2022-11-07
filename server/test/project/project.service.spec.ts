import { Test, TestingModule } from '@nestjs/testing';

import { ProjectService } from '../../src/projects/project.service';
import { ProjectRepository } from '../../src/projects/project.repository';
import { CreateProjectDto } from '../../src/projects/project.dto';

describe('ProjectService', () => {
    let service: ProjectService;

    const mockProjectRepository = {
        listProject: jest.fn().mockImplementation(() => {
            return Promise.resolve([]);
        }),

        showProject: jest.fn().mockImplementation((options) => {
            return Promise.resolve({
                id: 1 || options.id,
                name: 'Project' || options.name,
                description: 'This is a project' || options.description
            });
        }),

        persistAndFlush: jest.fn().mockImplementation((dto: CreateProjectDto) => {
            return Promise.resolve({
                ...dto,
            });
        }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProjectService,
                {
                    provide: ProjectRepository,
                    useValue: mockProjectRepository,
                },
            ],
        }).compile();

        service = module.get<ProjectService>(ProjectService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return all projects', async () => {
        expect(await service.listProjects()).toStrictEqual([]);
    });

    it('should return one project', async () => {
        expect(
            await service.showProject(1),
        ).toEqual({
            id: expect.any(Number),
            name: 'Project',
            description: 'This is a project'
        });
    });
});