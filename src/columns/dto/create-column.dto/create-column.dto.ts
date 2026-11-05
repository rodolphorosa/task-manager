import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateColumnDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsNumber()
    position!: number;
}
