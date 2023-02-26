import { Router } from 'express';

import { todosRouter } from './api/todos/todos.router';
import { usersRouter } from './api/users/users.router';

export const routes = Router();

routes.use(todosRouter);
routes.use(usersRouter);
