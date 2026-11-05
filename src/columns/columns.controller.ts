import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ColumnsService } from './columns.service.js';
import { ColumnEntity } from './entity/column.entity/column.entity.js';
import { CreateColumnDto } from './dto/create-column.dto/create-column.dto.js';

@Controller('boards/:boardId/columns')
export class ColumnsController {
    constructor(private readonly columnsService: ColumnsService) {}

    @Get()
    findAll(@Param('boardId') boardId: string): ColumnEntity[] {
        return this.columnsService.findAll(boardId);
    }

    @Post()
    create(
        @Param('boardId') boardId: string,
        @Body() createColumnDto: CreateColumnDto
    ): ColumnEntity {
        return this.columnsService.create(boardId, createColumnDto);
    }
}
