import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardEntity } from './entity/board.entity/board.entity.js';
import { BoardsService } from './boards.service.js';
import { CreateBoardDto } from './dto/create-board.dto/create-board.dto.js';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}
    
    @Get()
    findAll(): BoardEntity[] {
        return this.boardsService.findAll();
    }

    @Post()
    create(@Body() createBoardDto: CreateBoardDto): BoardEntity {
        return this.boardsService.create(createBoardDto);
    }
}
