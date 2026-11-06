import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardEntity } from './entity/board.entity/board.entity.js';
import { CreateBoardDto } from './dto/create-board.dto/create-board.dto.js';
import { randomUUID } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class BoardsService {
    private readonly boards: BoardEntity[] = [
        new BoardEntity({
            id: '1',
            title: 'Board 1',
            description: 'Description 1'
        }),
        new BoardEntity({
            id: '2',
            title: 'Board 2',
            description: 'Description 2'
        }),
    ];

    constructor(private readonly prismaService: PrismaService) {}

    findAll(): BoardEntity[] {
        return this.boards;
    }

    findById(id: string): BoardEntity {
        const board = this.boards.find(board => board.id === id);
        if (!board) {
            throw new NotFoundException('Board not found');
        }
        return board;
    }

    create(createBoardDto: CreateBoardDto): BoardEntity {
        const board = new BoardEntity({
            id: randomUUID(),
            title: createBoardDto.title,
            description: createBoardDto.description
        });
        this.boards.push(board);
        return board;
    }
}
