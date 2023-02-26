import { Router, Request, Response } from 'express';

export const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response) => {
    res.send('Hi from Users Router');
});
