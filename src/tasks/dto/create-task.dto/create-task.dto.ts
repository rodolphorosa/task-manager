import { IsDateString, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    position!: number;

    @IsIn(["TODO", "IN_PROGRESS", "DONE"])
    @IsString()
    status!: string;

    @IsOptional()
    @IsDateString()
    dueDate?: string;
}
