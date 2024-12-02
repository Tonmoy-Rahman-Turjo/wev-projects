// const express = require('express')
import express, { Application, Request, Response} from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/User/user.route';
import { any } from 'joi';
import { error } from 'console';
import gobalErrorHandelar from './app/middlwares/gobalerro.handelar';
// import gobalErrorHandelar from './app/middlwares/gobalerro.handelar';

const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());
/// all aplication route
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/user', UserRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(gobalErrorHandelar)
console.log(process.cwd());
export default app;
