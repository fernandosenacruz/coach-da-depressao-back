const express = require('express');
const randomId = require('./utils/randomId');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const constrollers = require('./controller');

app.get('/', constrollers.getPhrases);

app.get('/phrases/:id', async (_req, res) => {
  
  return res.status(200).json();
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});