import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto/create-column.dto.js';
import { BoardsService } from '../boards/boards.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ColumnsService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly boardsService: BoardsService
    ) {}

    async findAll(boardId: string) {
        // checks whether the board exists or not
        await this.boardsService.findById(boardId);
        
        return this.prismaService.column.findMany({
            where: { boardId },
            orderBy: { position: 'asc' }
        });
    }

    async findById(id: string) {
        const column = await this.prismaService.column.findUnique({
            where: { id }
        });

        if(!column) {
            throw new NotFoundException('Column not found');
        }

        return column;
    }

    async create(boardId: string, createColumnDto: CreateColumnDto) {
        const board = await this.boardsService.findById(boardId);
        return this.prismaService.column.create({
            data: {
                title: createColumnDto.title,
                boardId: board.id,
                position: createColumnDto.position
            }
        });
    }
}
