'use strict';

const { default: axios } = require('axios');
const jwt = require('jsonwebtoken');
const credentials = require('../../../credentials');
const verifyOptions = require('../config/verifyOptions');
const { forwardServerUrl } = require('../config/options')

class Service {
  // validate
  verify ({ token }) {
    try {
      jwt.verify(token, credentials.publicKey, verifyOptions);
      return jwt.decode(token, { complete: true })
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // re sign before request?
  sign ({ payload }) {
    try {
      return jwt.sign(payload, credentials.privateKey, signOptions);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  // send via request?
  sendRequest ({ token }) {
    return axios
      .post(
        forwardServerUrl,
        { withCredentials: true },
        { headers: { token } }
      );
  }
}

module.exports = new Service();