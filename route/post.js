const express = require('express');
const controller = require('../controller');
const middleware = require('../middleware');
const router = express.Router();

router.post('/',middleware.validateNewPost ,controller.createPostController);

module.exports = router;