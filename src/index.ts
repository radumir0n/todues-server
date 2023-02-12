import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { connectToDB } from './db';
connectToDB();

const app = express();
const { PORT } = process.env;

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello Todues!' });
});

app.listen(PORT || 8080, async () => {
    console.log(`Server is running on port ${PORT || 8080}`);
});
