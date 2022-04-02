const express = require('express');
const controller = require('../controller');
const middleware = require('../middleware');
const router = express.Router();

router.post('/',middleware.validateNewUser ,controller.createUserController);

module.exports = router;