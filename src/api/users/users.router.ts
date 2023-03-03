import { Router, Request, Response } from 'express';

import { protect } from '../../middlewares/auth';

export const usersRouter = Router();

usersRouter.get('/users', protect, (req: Request, res: Response) => {
    res.send('Hi from Users Router');
});
