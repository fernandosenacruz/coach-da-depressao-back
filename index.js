const express = require('express');
const cors = require('cors');
const randomId = require('./utils/randomId');

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3001;

const constrollers = require('./controller');
const middlewares = require('./middleware');

app.get('/', constrollers.getPhrases);

app.get('/phrases/:id', middlewares.validationId, constrollers.getPhrasesById);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});