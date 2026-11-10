import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BOARD_COLORS } from '../../constants/board-colors.js';

export class CreateBoardDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    description!: string;

    @IsOptional()
    @IsIn(BOARD_COLORS)
    color?: string;
}
