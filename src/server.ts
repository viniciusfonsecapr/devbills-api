import express, { json } from 'express';

const app = express();

app.use(json());

app.listen(3333, () =>
  console.log('Passei aqui 🐱‍🏍, App is Running at port 3333!'),
);
