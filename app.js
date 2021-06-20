'use strict';

const app = require('express')();
// const cors = require('cors');
const api = require('./api');

app.use('/api/v1', api);
// app.use(cors({ credentials: true, origin: '*' }))

module.exports = app;