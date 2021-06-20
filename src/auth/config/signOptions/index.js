'use strict'

const {
  iss,
  sub,
  aud,
  exp,
  alg
} = require('../options');

const signOptions = {
  issuer: iss,
  subject: sub,
  audience: aud,
  maxAge: exp,
  algorithms: alg
};

module.exports = signOptions;