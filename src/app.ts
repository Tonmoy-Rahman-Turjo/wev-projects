// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import gobalErrorHandelar from './app/middlwares/gobalerro.handelar';
import notFound from './app/middlwares/notfound';
import router from './app/routes';
// import gobalErrorHandelar from './app/middlwares/gobalerro.handelar';

const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());
/// all aplication route
app.use('/api/v1', router);
// app.use('/api/v1', UserRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(gobalErrorHandelar);
app.use(notFound);
console.log(process.cwd());
export default app;
