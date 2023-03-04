import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @Column()
    category: string;

    @Column()
    status: string;

    @Column({ default: 0 })
    workTime: number;

    @Column({ default: 0 })
    breakTime: number;

    @Column({ default: 0 })
    sessionCount: number;

    @ManyToOne(() => User, (user) => user.todos)
    user: User;
}
