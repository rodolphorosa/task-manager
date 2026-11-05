import { Module } from '@nestjs/common';
import { ColumnsController } from './columns.controller.js';
import { ColumnsService } from './columns.service.js';
import { BoardsModule } from '../boards/boards.module.js';

@Module({
  imports: [BoardsModule],
  controllers: [ColumnsController],
  providers: [ColumnsService],
  exports: [ColumnsService]
})
export class ColumnsModule {}
