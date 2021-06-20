'use strict';
// issuer
const iss = 'node-sandbox';
// subject
const sub = 'sub goes here';
// audience
const aud = 'cors location here'
// expiration
const exp = '24h';

// algorithm DO NOT CHANGE
const alg = 'RS256';

// after verify - where is this data going?
const forwardServerUrl = 'http://localhost:';

module.exports = {
  iss,
  sub,
  exp,
  aud,
  alg,
  forwardServerUrl
};