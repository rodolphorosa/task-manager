import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto.js';
import { TaskEntity } from './entity/task.entity/task.entity.js';

@Controller('boards/:boardId/columns/:columnId/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll(
        @Param('boardId') boardId: string,
        @Param('columnId') columnId: string
    ): TaskEntity[] {
        return this.tasksService.findAll(boardId, columnId);
    }

    @Post()
    create(
        @Param('boardId') boardId: string,
        @Param('columnId') columnId: string,
        @Body() createTaskDto: CreateTaskDto
    ): TaskEntity {
        return this.tasksService.create(boardId, columnId, createTaskDto);
    }
}
