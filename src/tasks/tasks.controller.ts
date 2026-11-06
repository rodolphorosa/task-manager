import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto.js';

@Controller('boards/:boardId/columns/:columnId/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll(
        @Param('boardId') boardId: string,
        @Param('columnId') columnId: string
    ) {
        return this.tasksService.findAll(boardId, columnId);
    }

    @Post()
    create(
        @Param('boardId') boardId: string,
        @Param('columnId') columnId: string,
        @Body() createTaskDto: CreateTaskDto
    ) {
        return this.tasksService.create(boardId, columnId, createTaskDto);
    }
}
