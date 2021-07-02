'use strict';

const authService = require('../Service');
const firebaseDAO = require('../../firebase/DAO');

class Controller {
  async checkAndForward(req, res) {
    try {
      const { token } = await req.headers;
      const data = authService.verify({ token });
      firebaseDAO
        .sendCollection({ collection: 'collection1', data })
    } catch (err) {
      res.status(403).json({ message: 'unauthorized' });
      console.error(err);
    }
  }
}

module.exports = new Controller();