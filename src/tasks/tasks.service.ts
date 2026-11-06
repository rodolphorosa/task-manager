import { Injectable, NotFoundException } from '@nestjs/common';
import { ColumnsService } from '../columns/columns.service.js';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { TaskStatus } from '../generated/prisma/enums.js';

@Injectable()
export class TasksService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly columnsService: ColumnsService
    ) {}

    async findAll(boardId: string, columnId: string) {
        const column = await this.columnsService.findById(columnId);

        if(column.boardId !== boardId) {
            throw new NotFoundException("Column not found in this board.")
        }

        return this.prismaService.task.findMany({
            where: { columnId },
            orderBy: { position: 'asc' }
        })
    }

    async create(boardId: string, columnId: string, createTaskDto: CreateTaskDto) {
        const column = await this.columnsService.findById(columnId);

        if(column.boardId !== boardId) {
            throw new NotFoundException('Column not found in this board.');
        }

        return this.prismaService.task.create({
            data: {
                title: createTaskDto.title,
                description: createTaskDto.description,
                columnId,
                position: createTaskDto.position,
                status: createTaskDto.status as TaskStatus,
                dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate): undefined
            }
        })
    }
}
