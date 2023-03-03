import { Request, Response } from 'express';

import { hashPassword } from 'middlewares/auth';
import { prisma } from '../../db';

//export const createNewUser = async (req: Request, res: Response) => {};
