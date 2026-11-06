import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import { ColumnsModule } from '../columns/columns.module.js';

@Module({
  imports: [ColumnsModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
