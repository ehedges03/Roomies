import express, { Express, Request, Response, Router } from 'express';
import config from "@/config";
import router from '@/router';
import connect, { db } from '@/db/dbConnection';

const app: Express = express();

async function init() {
  app.use(router);
  await connect();
  app.listen(config.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config.PORT}`);
  });
}

init();