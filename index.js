const express = require('express');
const cors = require('cors');
const randomId = require('./utils/randomId');
const constrollers = require('./controller');
const middlewares = require('./middleware');
const user = require('./route/user');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', constrollers.getPhrases);

app.get('/phrases/:id', middlewares.validationId, constrollers.getPhrasesById);

app.use('/user', user);

app.use(middlewares.error);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});