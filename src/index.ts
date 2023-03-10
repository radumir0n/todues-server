import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

import { appDataSource } from './db/data-source';
import { routes } from './routes';

appDataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/', routes);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello Todues!' });
});

app.listen(PORT || 8080, async () => {
    console.log(`Server is running on port ${PORT || 8080}`);
});
