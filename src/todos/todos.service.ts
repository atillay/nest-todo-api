import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAllByUserId(userId: number): Promise<Todo[]> {
    return this.todosRepository.findBy({ owner: { id: userId } });
  }

  async add(
    userId: number,
    content: string,
  ): Promise<Pick<Todo, 'id' | 'content'>> {
    const todo = await this.todosRepository.save({
      content,
      owner: { id: userId },
    });

    return { id: todo.id, content: todo.content };
  }
}
