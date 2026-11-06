import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import { ColumnsModule } from '../columns/columns.module.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [ColumnsModule, PrismaModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
