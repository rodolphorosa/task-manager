import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto/create-board.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class BoardsService {
    constructor(private readonly prismaService: PrismaService) {}

    async findAll() {
        return this.prismaService.board.findMany();
    }

    async findById(id: string) {
        const board = await this.prismaService.board.findUnique({
            where: { id },
            include: {
                columns: {
                    include: {
                        tasks: true
                    }
                }
            }
        });
        
        if (!board) {
            throw new NotFoundException('Board not found');
        };
        
        return board;
    }

    async create(createBoardDto: CreateBoardDto) {
        return this.prismaService.board.create({
            data: {
                title: createBoardDto.title,
                description: createBoardDto.description
            }
        });
    }
}
