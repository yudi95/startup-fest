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
  console.log(req.url);
  console.log(req.method);
  req.next();
};

app.use(consoles);

const startupApi = 'https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1';
const headers = { 'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee' };
const getOpt = { ...headers, method: 'GET' };

const testes = [{
  startup_name: 'Biolife',
  category: 'Biotech',
  city: 'São Carlos - SP',
  thumbnail: 'https://s3.amazonaws.com/desafio.softable/assets/startup_1.jpg',
  description: 'Biolife - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
},
{
  startup_name: '2',
  category: 'Biotech',
  city: 'São Carlos - SP',
  thumbnail: 'https://s3.amazonaws.com/desafio.softable/assets/startup_1.jpg',
  description: 'Biolife - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
},
{
  startup_name: '3',
  category: 'Biotech',
  city: 'São Carlos - SP',
  thumbnail: 'https://s3.amazonaws.com/desafio.softable/assets/startup_1.jpg',
  description: 'Biolife - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
},
];

app.get('/', async (req, response) => {
  // const raw = await fetch(startupApi, getOpt);
  // const startups = await raw.json();
  // console.log(startups);
  // response.status(200).send(startups);
  response.status(200).send(testes);
});

app.get('/:startupId', async (request, response) => {
  // console.log('especifico');
  // const { startupId } = request.params;
  // const raw = await fetch(`${startupApi}/${startupId}`, getOpt);
  // const startups = await raw.json();
  // console.log(startups);
  // response.status(200).send(startups);
  response.status(200).send(testes[0]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
