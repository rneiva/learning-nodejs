import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './database/data-source';
import routes from './routes';

AppDataSource.initialize().then(() => {
  console.log('Datasource has been initialized');
  const app = express();
  app.use(express.json());
  app.use(routes);
  const port = process.env.PORT || 3000;
  return app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
  });
});
