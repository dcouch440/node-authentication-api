const auth = require('../src/auth/router');
const api = require('express').Router();

api.use('/auth', auth);

module.exports = api;