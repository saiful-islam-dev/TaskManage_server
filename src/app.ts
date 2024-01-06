/* eslint-disable no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import golobalErrorhandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

app.use('', router);

const test = async (req: Request, res: Response) => {
  res.send('Task Master Server!');
};
app.get('/', test);

app.use(golobalErrorhandler);

app.use(notFound);

export default app;
