import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BoardsModule } from './boards/boards.module.js';
import { ColumnsModule } from './columns/columns.module.js';

@Module({
  imports: [BoardsModule, ColumnsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
