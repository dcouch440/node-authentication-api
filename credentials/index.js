'use strict';

const fs = require('fs');

const privateKey = fs.readFileSync('./keys/private.key', 'utf8');
const publicKey = fs.readFileSync('./keys/public.key', 'utf8');

module.exports = {
  privateKey,
  publicKey
};