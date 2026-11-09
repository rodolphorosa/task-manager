import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service.js';
import { CreateBoardDto } from './dto/create-board.dto/create-board.dto.js';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}
    
    @Get()
    findAll() {
        return this.boardsService.findAll();
    }

    @Get(':boardId')
    findById(@Param('boardId') boardId: string) {
        return this.boardsService.findById(boardId)
    }

    @Post()
    create(@Body() createBoardDto: CreateBoardDto) {
        return this.boardsService.create(createBoardDto);
    }
}
