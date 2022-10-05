import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todo.controller';
import { Todo } from './entities/todo.entity';
import { TodosService } from './services/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodoModule {}
