import { Injectable, NotFoundException } from '@nestjs/common';
import { ColumnEntity } from './entity/column.entity/column.entity.js';
import { CreateColumnDto } from './dto/create-column.dto/create-column.dto.js';
import { randomUUID } from 'node:crypto';
import { BoardsService } from '../boards/boards.service.js';

@Injectable()
export class ColumnsService {
    constructor(private readonly boardsService: BoardsService) {}
    
    private readonly columns: ColumnEntity[] = [
        new ColumnEntity({
            id: '1',
            title: 'Column 1',
            boardId: '1',
            position: 1
        }),
        new ColumnEntity({
            id: '2',
            title: 'Column 2',
            boardId: '1',
            position: 2
        }),
        new ColumnEntity({
            id: '3',
            title: 'Column 3',
            boardId: '1',
            position: 3
        }),
        new ColumnEntity({
            id: '4',
            title: 'Column 4',
            boardId: '1',
            position: 4
        }),
        new ColumnEntity({
            id: '5',
            title: 'Column 5',
            boardId: '2',
            position: 1
        }),
        new ColumnEntity({
            id: '6',
            title: 'Column 6',
            boardId: '2',
            position: 2
        }),
        new ColumnEntity({
            id: '7',
            title: 'Column 7',
            boardId: '2',
            position: 3
        }),
    ];

    findAll(boardId: string): ColumnEntity[] {
        const board = this.boardsService.findById(boardId);
        return this.columns.filter(column => column.boardId === boardId);
    }

    create(boardId: string, createColumnDto: CreateColumnDto): ColumnEntity {
        const board = this.boardsService.findById(boardId);
        const column = new ColumnEntity({
            id: randomUUID(),
            title: createColumnDto.title,
            boardId: board.id,
            position: createColumnDto.position
        });
        
        this.columns.push(column);
        return column;
    }
}
