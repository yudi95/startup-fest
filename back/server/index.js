const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3001;

// middlewares
const corsOpt = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOpt));

const jsonParser = bodyParser.json();
app.use(jsonParser);

const consoles = (req, response) => {
  console.log({ url: req.url, method: req.method });
  req.next();
};

app.use(consoles);

// const startupApi = 'https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1';
// const headers = { 'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee' };
// const getOpt = { ...headers, method: 'GET' };

const testes = require('./fakeData');

const fakeData = [...testes];

app.get('/', async (req, response) => response.status(200).send(fakeData));
// const raw = await fetch(startupApi, getOpt);
// const startups = await raw.json();
// console.log(startups);
// response.status(200).send(startups);

app.get('/:startupId', async (request, response) => {
  // console.log('especifico');
  const { startupId } = request.params;
  // const raw = await fetch(`${startupApi}/${startupId}`, getOpt);
  // const startups = await raw.json();
  // console.log(startups);
  // response.status(200).send(startups);
  return response.status(200).send(fakeData[startupId]);
});

app.post('/:startupId/rate', async (request, response) => {
  const { startupId } = request.params;
  const { rate, type } = request.body;
  fakeData[startupId].classification[type] = rate;
  return response.status(200).send(fakeData[startupId]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
