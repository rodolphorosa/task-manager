import { Injectable, NotFoundException } from '@nestjs/common';
import { ColumnsService } from '../columns/columns.service.js';
import { TaskEntity } from './entity/task.entity/task.entity.js';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto.js';
import { randomUUID } from 'node:crypto';

@Injectable()
export class TasksService {
    constructor(private readonly columnsService: ColumnsService) {}

    private readonly tasks: TaskEntity[] = [
        new TaskEntity({
            id: '1',
            title: 'Task 1',
            description: 'Description of Task 1',
            columnId: '1',
            position: 1,
            status: 'TODO',
            dueDate: new Date(),
        }),
        new TaskEntity({
            id: '2',
            title: 'Task 2',
            description: 'Description of Task 2',
            columnId: '2',
            position: 1,
            status: 'IN_PROGRESS',
            dueDate: new Date(),
        }),
        new TaskEntity({
            id: '3',
            title: 'Task 3',
            description: 'Description of Task 3',
            columnId: '3',
            position: 1,
            status: 'DONE',
            dueDate: new Date(),
        }),
    ]

    findAll(boardId: string, columnId: string): TaskEntity[] {
        const column = this.columnsService.findById(columnId);

        if(column.boardId !== boardId) {
            throw new NotFoundException("Column not found in this board.")
        }

        return this.tasks.filter(task => task.columnId === columnId);
    }

    create(boardId: string, columnId: string, createTaskDto: CreateTaskDto) {
        const column = this.columnsService.findById(columnId)
        
        if(column.boardId !== boardId) {
            throw new NotFoundException("Column not found in this board.")
        }
        
        const task = new TaskEntity({
            id: randomUUID(),
            title: createTaskDto.title,
            description: createTaskDto.description,
            columnId: column.id,
            position: createTaskDto.position,
            status: createTaskDto.status,
            dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) :  undefined
        })

        this.tasks.push(task);
        return task;
    }
}
