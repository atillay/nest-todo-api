import { Todo } from 'src/todos/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  password: string;

  @OneToMany(() => Todo, (todo) => todo.owner)
  todos: Todo[];
}
