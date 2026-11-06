import { IsDateString, IsEnum, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../../../generated/prisma/enums.js";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    position!: number;

    @IsEnum(TaskStatus)
    @IsString()
    status!: TaskStatus;

    @IsOptional()
    @IsDateString()
    dueDate?: string;
}
