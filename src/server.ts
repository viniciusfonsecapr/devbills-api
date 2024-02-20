import 'dotenv/config';
import express, { json } from 'express';
import { routes } from './routes';

import { setupMongo } from './database/index';

setupMongo().then(() => {
  const app = express();
  const port = process.env.PORT || 3333;

  app.use(json());
  app.use(routes);

  app.listen(port, () => {
    console.log(`CAI AQUI NA  ${port}
  `);
  });
});
