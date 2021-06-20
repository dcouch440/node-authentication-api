'use strict';

const controller = require('../controller');
const router = require('express').Router();

router.post('/', controller.checkAndForward);

module.exports = router;