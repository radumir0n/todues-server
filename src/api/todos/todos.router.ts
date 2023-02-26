import { Router, Request, Response } from 'express';

export const todosRouter = Router();

todosRouter.get('/todos', (req: Request, res: Response) => {
    res.send('Hi from Todos Router');
});
