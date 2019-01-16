import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
  apiKey: 'AIzaSyBwCml-qnv3YCAdM5mMCxHwGPoFxsfHXiY',
  authDomain: 'reactibook-6fbc4.firebaseapp.com',
  databaseURL: 'https://reactibook-6fbc4.firebaseio.com',
  projectId: 'reactibook-6fbc4',
  storageBucket: 'reactibook-6fbc4.appspot.com',
  messagingSenderId: '9368116882',
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;