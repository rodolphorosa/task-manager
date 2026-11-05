import { Injectable } from '@nestjs/common';
import { BoardEntity } from './entity/board.entity/board.entity.js';
import { CreateBoardDto } from './dto/create-board.dto/create-board.dto.js';
import { randomUUID } from 'crypto';

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

    findAll(): BoardEntity[] {
        return this.boards;
    }

    create(createBoardDto: CreateBoardDto): BoardEntity {
        const board = new BoardEntity({
            id: randomUUID().toString(),
            title: createBoardDto.title,
            description: createBoardDto.description
        });
        this.boards.push(board);
        return board;
    }
}
