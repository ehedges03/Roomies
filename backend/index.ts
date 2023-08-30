import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
const router: Router = require('./src/router');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});