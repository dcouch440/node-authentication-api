const firebase = require('../config');

class FirebaseDAO {
  sendCollection({collection, data}) {
    firebase
      .firestore()
      .collection(collection)
      .add(data);
  }
}


module.exports = new FirebaseDAO();