import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany } from 'typeorm';
import { Todo } from './Todo';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[];
}
