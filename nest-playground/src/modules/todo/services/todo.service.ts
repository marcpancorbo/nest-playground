import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
export interface TodoInterface {
  name: string,
  complete: boolean,
}
@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<TodoInterface>,
  ) {}
create(todo: TodoInterface): Promise<TodoInterface> {
    return this.todoRepository.save(
      this.todoRepository.create(todo)
    );
  }
findAll(): Promise<TodoInterface[]> {
    return this.todoRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.todoRepository
    .createQueryBuilder()
    .update()
    .set({
      name: data.name
    })
    .where('id = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.todoRepository
    .createQueryBuilder()
    .delete()
    .from(Todo)
    .where('id = :id', { id })
    .execute()
  }
}