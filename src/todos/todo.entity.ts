import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.todos)
  owner: User;

  @Column({ length: 500 })
  content: string;
}
