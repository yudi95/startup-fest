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

const startupApi = 'https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1';
const headers = {
  'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee',
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};
const getOpt = { ...headers, method: 'GET' };

const testes = require('./fakeData');

// recebia forbbiden então fiz um fakeData para poder trabalar em cima.
const fakeData = [...testes];

// TODO PASSAR PARA FIREBASE (dai muda essa logica estranha daqui...)
app.get('/ranking', async (request, response) => {
  const ranks = { pitch: [], proposta: [], dev: [] };

  fakeData.forEach((f) => {
    if (f.classification.pitch !== 0) {
      if (!ranks.pitch) ranks.pitch = [f];
      else ranks.pitch.push(f);
    }
    if (f.classification.proposta) {
      if (!ranks.proposta) ranks.proposta = [f];
      else ranks.proposta.push(f);
    }

    if (f.classification.dev) {
      if (!ranks.dev) ranks.dev = [f];
      else ranks.dev.push(f);
    }
  });
  console.log(ranks);

  ranks.pitch.sort((a, b) => {
    if (a.classification.pitch < b.classification.pitch) return 1;
    if (a.classification.pitch > b.classification.pitch) return -1;
    return 0;
  });

  ranks.proposta.sort((a, b) => {
    if (a.classification.pitch < b.classification.proposta) return 1;
    if (a.classification.pitch > b.classification.proposta) return -1;
    return 0;
  });

  ranks.dev.sort((a, b) => {
    if (a.classification.dev < b.classification.dev) return 1;
    if (a.classification.dev > b.classification.dev) return -1;
    return 0;
  });

  return response.status(200).send(ranks);
});

app.get('/', async (req, response) => response.status(200).send(fakeData));
// const raw = await fetch(startupApi, getOpt);
// const startups = await raw.json();
// console.log(startups);
// response.status(200).send(startups);
// );

app.get('/:startupId', async (request, response) => {
  // console.log('especifico');
  const { startupId } = request.params;
  console.log(fakeData[startupId]);
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
  console.log(fakeData[startupId].classification);
  return response.status(200).send(fakeData[startupId]);
});

// TODO: Tratar erros...

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
