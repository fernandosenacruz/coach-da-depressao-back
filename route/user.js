const express = require('express');
const controller = require('../controller');
const middleware = require('../middleware');
const router = express.Router();

router.post('/',middleware.validationNewUser ,controller.createUserController);

module.exports = router;