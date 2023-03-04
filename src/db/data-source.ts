import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Todo } from './entities/index';

export const appDataSource = new DataSource({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Todo, User],
    migrations: ['src/db/migrations/*.{js,ts}'],
});
