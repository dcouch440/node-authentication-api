const firebase = require('firebase/app');
import 'firebase';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  }
  firebase.initializeApp(firebaseConfig);
}

module.exports = firebase;